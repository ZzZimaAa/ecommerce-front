<template>
    <footer>
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold pb-2">Познакомьтесь с нами</li>
              <li><a class="footer-link font-weight-light" href="#">О нас</a></li>
              <li><a class="footer-link font-weight-light" href="#">Контакты</a><br></li>
              <li><a class="footer-link font-weight-light" href="#">Адрес</a><br></li>
            </ul>
          </div>
  
          <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold">Связь</li>
              <li><a class="footer-link font-weight-light" href="#">Facebook</a></li>
              <li><a class="footer-link font-weight-light" href="#">Twitter</a><br></li>
              <li><a class="footer-link font-weight-light" href="#">Instagram</a><br></li>
            </ul>
          </div>
  
          <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold">Зарабатывайте с нами</li>
              <li><a class="footer-link font-weight-light" href="#">Работайте с нами</a></li>
              <li><a class="footer-link font-weight-light" href="#">Станьте партнером</a><br></li>
              <li><a class="footer-link font-weight-light" href="#">Рекламируйте свою продукцию</a><br></li>
            </ul>
          </div>
  
          <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold">Помощь</li>
              <li><a class="footer-link font-weight-light" href="#">Центр поддержки</a></li>
              <li><a class="footer-link font-weight-light" href="#">Гарантия</a><br></li>
              <li><a class="footer-link font-weight-light" href="#">Консультация</a><br></li>
              <li><a class="footer-link font-weight-light" href="#">Условия оказания услуг</a><br></li>
            </ul>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <div class="text-center py-5">
              <img id="logo" src="../assets/icon.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name : "Footer"
  }
  </script>
  
  <style>
  footer {
    margin-top : 100px;
    background-color:#232F3E;
    font-size:16px;
  }
  
  li {
    padding-left: 0;
    padding-bottom: 10px;
  }
  
  a {
    text-decoration: none;
  }
  
  .footer-link {
    color: #DDD;
  }
  
  #logo {
    width: 150px;
  }
  
  footer {
    font-family: 'Roboto', sans-serif;
  }
  
  
  </style>