<template>
<div>
    <h1 class="my-3">Add Product </h1> <hr>   

    <form @submit="formSubmit">
    <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Product title</label><input class="form-control" id="exampleFormControlInput1" type="text" placeholder="title" v-model="title" /></div>
    <div class="mb-3"><label class="form-label" for="exampleFormControlTextarea1">Product Description</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea></div>
    <div class="mb-3"><label class="form-label" for="exampleFormControlInput1">Product Price</label><input class="form-control" id="exampleFormControlInput1" type="number" placeholder="price" v-model="price" /></div>

    <div class="col-auto d-flex flex-row-reverse"><button class="btn btn-sm btn-primary px-4 ms-2 " type="button" data-list-pagination="next"><span>Submit</span></button></div>
     </form>
    
</div> 
  
</template>

<script>
export default {
    name: "product-home",
    layout: 'dashboard',
    data() {
        return {
 }
 },
 methods: {
            formSubmit(e) {
                e.preventDefault();
                this.axios.post('/product', {
                    name: this.name,
                    description: this.description
                })
                .then(function (response) {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
}
</script>

<style>

</style>