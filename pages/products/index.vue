<template>
  <div>
       <h1 class="my-3">All Product Table </h1> <hr>                  
                    

       <div class="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-e02fd9ca-cd33-4a08-9dd0-328584109269" id="dom-e02fd9ca-cd33-4a08-9dd0-328584109269">
                      <div class="table-responsive scrollbar">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Description</th>
                              <th scope="col">Price</th>
                              <th scope="col">Updated at</th>
                              <th class="text-end" scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Book</td>
                              <td>Nuxt Book</td>
                              <td>200</td>
                              <td>2022/02/11</td>
                              <td class="text-end d-flex flex-row-reverse">

                                
                                <div><nuxt-link class="btn btn-primary btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit" to="/products/edit"> Edit </nuxt-link></div>
                                <div><button class="btn btn-danger btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Edit"> Delte </button></div>

                              </td>
                            </tr>


                            <tr>
                              <td>{{ product.title }}</td>
                              <td>{{ product.description }}</td>
                              <td>{{ product.price }}</td>
                              <td>{{ product.updatedat }}</td>
                              <td class="text-end d-flex flex-row-reverse">
                                <div><button class="btn btn-primary btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"> Edit </button></div>
                                <div><button class="btn btn-danger btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="delete" aria-label="delete" @click="deleteProduct (product_id)"> Delte </button></div>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
  </div>

</template>

<script>
export default {
    name: "product-home",
    layout: 'dashboard',
    data() {
        return {
          products:[],  
        }
    },
    methods: {
        async getProducts() {
            const data = await this.$axios.$get('/api/products')
            this.products = data.data.map((n) => {
                n.updated_at = moment(data.data.updated_at).utc().format('YYYY/MM/DD');
                return n;
            });
        },
        async deleteProduct (product_id) {
            await this.$axios.$delete('/api/products/${product_id}')
            .then((res) => {
                console.log(res);
                this.getProducts();
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