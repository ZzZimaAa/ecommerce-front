<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Добавить новую категорию</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
       <form>
         <div class="form-group">
           <label>Название</label>
           <input type="text" class="form-control" v-model="categoryName" required>
         </div>
         <div class="form-group">
           <label>Описание</label>
           <input type="text" class="form-control" v-model="description" required>
         </div>
         <div class="form-group">
           <label>Ссылка на картинку</label>
           <input type="url" class="form-control" v-model="imageURL" required>
         </div>
         <button type="button" class="btn btn-primary" @click="addCategory">Подтвердить</button>
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
     categoryName : null,
     description : null,
     imageURL : null,
   }
 },
 props : ["baseURL", "categories"],
 methods : {
   async addCategory() {
     const newCategory = {
       categoryName : this.categoryName,
       description : this.description,
       imageUrl : this.imageURL,
     }

     await axios({
       method: 'post',
       url: this.baseURL+"category/create",
       data : JSON.stringify(newCategory),
       headers: {
         'Content-Type': 'application/json'
       }
     })
     // eslint-disable-next-line no-unused-vars
     .then(res => {
       //sending the event to parent to handle
       this.$emit("fetchData");
       this.$router.push({name:'AdminCategory'});
       swal({
         text: "Категория успешно добавлена!",
         icon: "success",
         closeOnClickOutside: false,
       });
     })
     .catch(err => console.log(err));
   }
 },
 mounted(){
   if (!localStorage.getItem('token')) {
     this.$router.push({name : 'Signin'});
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
</style>