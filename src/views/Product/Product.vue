<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Наши продукты</h4>
        <router-link id="add-product" :to="{name : 'AddProduct'}" v-show="$route.name=='AdminProduct'">
          <button class="btn">Добавить новый продукт</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-if="searchResultsData && searchResultsData.length === 0" class="col-12">
        <p>Нет результатов поиска</p>
      </div>
      <div v-else v-for="product in searchResultsData" :key="product.id" class="col-md-4 mb-4">
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
  </div>
</template>


<script>
import ProductBox from '../../components/Product/ProductBox';

export default {
  name: 'Product',
  components: { ProductBox },
  props: ['baseURL', 'products'],
  computed: {
    searchResultsData() {
      return this.$store.state.searchResults || []; // Используйте пустой массив, если searchResults не определено
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-product {
  float: right;
  font-weight: 500;
}
</style>
