<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Изменить продукт</h4>
        </div>
      </div>
  
      <div class="row">
        <div class="col-3"></div>
        <div class="col-md-6 px-5 px-md-0">
          <form v-if="product">
            <div class="form-group">
              <label>Категория</label>
              <select class="form-control" v-model="product.categoryId" required>
                <option v-for="category of categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Название</label>
              <input type="text" class="form-control" v-model="product.name" required>
            </div>
            <div class="form-group">
              <label>Описание</label>
              <input type="text" class="form-control" v-model="product.description" required>
            </div>
            <div class="form-group">
              <label>Ссылка на картинку</label>
              <input type="url" class="form-control" v-model="product.imageURL" required>
            </div>
            <div class="form-group">
              <label>Цена</label>
              <input type="number" class="form-control" v-model="product.price" required>
            </div>
            <button type="button" class="btn btn-primary" @click="editProduct">Подтвердить</button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import swal from "sweetalert";
  export default {
    data(){
      return {
        product: null
      }
    },
    props : ["baseURL", "products", "categories"],
    methods : {
      async editProduct() {
        axios.post(this.baseURL+"product/update/"+this.id, this.product)
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.push({name : 'AdminProduct'});
          swal({
            text: "Продукт успешно обновлен!",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch(err => console.log("err", err));
      }
    },
    mounted() {
      if (!localStorage.getItem('token')) {
        this.$router.push({name : 'Signin'});
        return;
      }
      this.id = this.$route.params.id;
      this.product = this.products.find(product => product.id == this.id);
    }
  }
  </script>
  
  <style scoped>
  h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  
  </style>