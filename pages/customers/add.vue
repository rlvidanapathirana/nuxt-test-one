<template>
    <div>
        <h1 class="my-3">Add Custommer</h1> <hr>   

        <form @submit.prevent="formSubmit()">
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Customer Name</label>
            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="title" v-model="form.title" />
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlTextarea1">Email Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.description"></textarea>
            </div>
            <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Password</label>
            <input class="form-control" id="exampleFormControlInput1" type="number" placeholder="price" v-model="form.price" />
            </div>

            <div class="col-auto d-flex flex-row-reverse">
                <button  class="btn btn-sm btn-primary px-4 ms-2 " type="submit" data-list-pagination="next"><span>Submit</span></button></div>
        </form>
    </div>
</template>

<script>
export default {
    name: "customer-home",
    layout: 'dashboard',
    data() {
        return {
            form: {
                title: "",
                description: "",
                price: 0
            }
        }
    },
    methods: {
      async formSubmit() {
            await this.$axios.$post('api/products', this.form)
            .then((res) => {
            console.log(res)
          })
        
        }
    }
}
</script>

<style>
</style>