<template>
    <div>
        <h1 class="my-3">Update Custommer</h1> <hr>

        <div class="col-auto d-flex flex-row-reverse"><nuxt-link to="/customers" class="btn btn-sm btn-primary px-4 ms-2 " type="button" data-list-pagination="next"><span>Back</span></nuxt-link></div>   

        <form @submit.prevent="formSubmit()">
            
             <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Customer Name</label>
            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="title" v-model="customer.name" />
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Email Address</label>
            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="title" v-model="customer.email" />
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlTextarea1">Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="customer.address"></textarea>
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Mobile Number</label>
            <input class="form-control" id="exampleFormControlInput1" type="number" placeholder="price" v-model="customer.mobile_no" />
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Land Number</label>
            <input class="form-control" id="exampleFormControlInput1" type="number" placeholder="price" v-model="customer.land_no" />
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">NIC</label>
            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="title" v-model="customer.nic" />
            </div>

            <div class="col-auto d-flex flex-row-reverse">
                <button  class="btn btn-sm btn-primary px-4 ms-2 " type="submit" data-list-pagination="next" @click="updatecustomer()"><span>Submit</span></button></div>
        </form>
    </div>
</template>

<script>
export default {
    name: "customer-home",
    layout: 'dashboard',
    data() {
        return {
            customer: []
            
        }
    },
    methods: {
            async getcustomerData() {
                const data = await this.$axios.$get(`api/customers/${this.$route.params.edit}`)
                this.customer = data.data
            },
            async updatecustomer(){
                await this.$axios.$put(`api/customers/${this.$route.params.edit}`,this.customer)
                this.$router.push({name: `customers`})
            }
        },
        async fetch() {
            this.getcustomerData();
        },
        mounted() {
            
        },
}
</script>

<style>
</style>