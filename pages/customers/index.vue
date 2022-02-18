<template>
  <div>
       <h1 class="my-3">All Customers </h1> <hr>                  
                    
      <div class="col-auto d-flex flex-row-reverse"><nuxt-link to="/customers/add" class="btn btn-sm btn-primary px-4 ms-2 " type="button" data-list-pagination="next"><span>Add New Customer</span></nuxt-link></div>  

       <div class="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-e02fd9ca-cd33-4a08-9dd0-328584109269" id="dom-e02fd9ca-cd33-4a08-9dd0-328584109269">
                      <div class="table-responsive scrollbar">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Address</th>
                              <th scope="col">Mobile_No</th>
                              <th scope="col">Lannd_No</th>
                              <th scope="col">NIC</th>
                              <th class="text-end" scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="customer in customers" :key="customer">
                              <td>{{ customer.name }}</td>
                              <td>{{ customer.email }}</td>
                              <td>{{ customer.address }}</td>
                              <td>{{ customer.mobile_no }}</td>
                              <td>{{ customer.land_no }}</td>
                              <td>{{ customer.nic }}</td>

                              <td class="text-end d-flex flex-row-reverse gap-2">
                                <div>
                                    <nuxt-link class="btn btn-primary btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit" :to="{ name: `customers-edit`,params: { edit: customer.id } }"> Edit </nuxt-link></div>
                                <div
                                ><button class="btn btn-danger btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="delete" aria-label="delete" @click="deletecustomer(customer.id)"> Delete </button></div>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
  </div>

</template>

<script>
import moment from 'moment'
export default {
    name: "customer-home",
    layout: 'dashboard',
    data() {
        return {
          customers:[],  
        }
    },
    created() {
      this.getcustomers();
    },
    methods: {
        /**
         * Get all customers and save
         */
        async getcustomers() {
          const data = await this.$axios.$get('api/customers')
          console.log(data)
          this.customers = data.data.map((n) => {
            n.updated_at = moment(n.updated_at).utc().format('YYYY/MM/DD');
            return n;
          });
        },
        /**
         * Delete customer
         */
        async deletecustomer(customer_id) {
          await this.$axios.$delete(`api/customers/${customer_id}`)
          .then((res) => {
            console.log(res)
            this.getcustomers();
          }).catch((err) => {
            console.log(err)
          })
        }
    },
    async fetch() {
        this.getcustomer();
    }
    
}
</script>

<style>

</style>