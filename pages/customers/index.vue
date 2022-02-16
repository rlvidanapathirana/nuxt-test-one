<template>
  <div>
       <h1 class="my-3">All Customers </h1> <hr>                  
                    

       <div class="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-e02fd9ca-cd33-4a08-9dd0-328584109269" id="dom-e02fd9ca-cd33-4a08-9dd0-328584109269">
                      <div class="table-responsive scrollbar">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Updated at</th>
                              <th class="text-end" scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="product in products" :key="product">
                              <td>{{ product.title }}</td>
                              <td>{{ product.description }}</td>
                              <td>{{ product.updated_at }}</td>
                              <td class="text-end d-flex flex-row-reverse gap-2">
                                <div>
                                    <nuxt-link class="btn btn-primary btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit" :to="{ name: `customers-edit`,params: { edit: product.id } }"> Edit </nuxt-link></div>
                                <div
                                ><button class="btn btn-danger btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="delete" aria-label="delete" @click="deleteProduct(product.id)"> Delete </button></div>
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
    name: "product-home",
    layout: 'dashboard',
    data() {
        return {
          products:[],  
        }
    },
    created() {
      this.getProducts();
    },
    methods: {
        /**
         * Get all products and save
         */
        async getProducts() {
          const data = await this.$axios.$get('api/products')
          console.log(data)
          this.products = data.data.map((n) => {
            n.updated_at = moment(n.updated_at).utc().format('YYYY/MM/DD');
            return n;
          });
        },
        /**
         * Delete product
         */
        async deleteProduct(product_id) {
          await this.$axios.$delete(`api/products/${product_id}`)
          .then((res) => {
            console.log(res)
            this.getProducts();
          }).catch((err) => {
            console.log(err)
          })
        }
    },
    async fetch() {
        this.getProduct();
    }
    
}
</script>

<style>

</style>