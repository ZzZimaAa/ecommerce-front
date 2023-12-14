<template>
    <div class="not-found container">
      <h2>404</h2>
      <h3>Страница не найдена</h3>
      <h5>Не волнуйтесь, вернитесь на  
        <router-link :to="{name : 'Home'}">Главную</router-link>
      </h5>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .not-found{
      text-align: center;
  }
  .not-found h2{
      font-size: 150px;
      margin-top: 30px;
  }
  .not-found h3{
      font-size: 50px;
  }
  </style>