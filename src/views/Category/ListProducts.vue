<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">{{category.categoryName}}</h4>
          <h5>{{msg}}</h5>
        </div>
      </div>
  
      <div class="row">
        <img v-show="len == 0" class="img-fluid" src="../../assets/sorry.jpg" alt="Sorry">
        <div v-for="product of category.products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <ProductBox :product="product">
          </ProductBox>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProductBox from '../../components/Product/ProductBox';
  export default {
    name: 'ListProducts',
    data(){
      return {
        id : null,
        categoryIndex : null,
        category : {},
        len : 0,
        msg : null
      }
    },
    components : {ProductBox},
    props : [ "baseURL" , "categories" ],
    mounted() {
      this.id = this.$route.params.id;
      this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
      this.category = this.categories[this.categoryIndex];
  
      this.len = this.category.products.length;
      if(this.len == 0) {
        this.msg = "Извините, услуги не найдены";
      } else if(this.len == 1) {
        this.msg = "Найдена только 1 услуга";
      } else {
        this.msg = this.len + " найденно услуг";
      }
    }
  }
  </script>
  
  <style scoped>
  h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  
  h5 {
    font-family: 'Roboto', sans-serif;
    color: #686868;
    font-weight: 300;
  }
  </style>