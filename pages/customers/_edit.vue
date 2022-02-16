<template>
    <div>
        <h1 class="my-3">Update Custommer</h1> <hr>

        <div class="col-auto d-flex flex-row-reverse"><nuxt-link to="/customers" class="btn btn-sm btn-primary px-4 ms-2 " type="button" data-list-pagination="next"><span>Back</span></nuxt-link></div>   

        <form @submit.prevent="formSubmit()">
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Customer Name</label>
            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="title" v-model="product.title" />
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlTextarea1">Email Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="product.description"></textarea>
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Password</label>
            <input class="form-control" id="exampleFormControlInput1" type="number" placeholder="price" v-model="product.price" />
            </div>

            <div class="col-auto d-flex flex-row-reverse">
                <button  class="btn btn-sm btn-primary px-4 ms-2 " type="submit" data-list-pagination="next" @click="updateProduct()"><span>Submit</span></button></div>
        </form>
    </div>
</template>

<script>
export default {
    name: "customer-home",
    layout: 'dashboard',
    data() {
        return {
            product: []
            
        }
    },
    methods: {
            async getProductData() {
                const data = await this.$axios.$get(`api/products/${this.$route.params.edit}`)
                this.product = data.data
            },
            async updateProduct(){
                await this.$axios.$put(`api/products/${this.$route.params.edit}`,this.product)
                this.$router.push({name: `customers`})
            }
        },
        async fetch() {
            this.getProductData();
        },
        mounted() {
            
        },
}
</script>

<style>
</style>