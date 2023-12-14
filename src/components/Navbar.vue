<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/icon.png" />
    </router-link>

    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto" @submit.prevent="performSearch">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="searchQuery"
            
          />
          <!--@input="performSearch"-->
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar" @click="performSearch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>

      <!--      DropDowns-->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Навигация
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'Home' }"
              >Главная</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'Product' }"
              >Продукты</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'Category' }"
              >Категории</router-link
            >
          </div>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Аккаунты
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >Список желаемого</router-link
            >
            <router-link class="dropdown-item" v-else :to="{ name: 'Wishlist' }"
              >Список желаемого</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="userRole === 'admin'"
              :to="{ name: 'Admin' }"
              >Админ</router-link
            >
            <router-link class="dropdown-item" v-else :to="{ name: 'Home' }"
              >Админ</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >Войти</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signup' }"
              >Регистрация</router-link
            >
            <a class="dropdown-item" v-if="token" href="#" @click="signout"
              >Выйти</a
            >
          </div>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-light" :to="{ name: 'Order' }"
            >Заказы</router-link
          >
        </li>
        <li class="nav-item">
          <div id="cart">
            <span id="nav-cart-count">{{ cartCount }}</span>
            <router-link class="text-light" :to="{ name: 'Cart' }"
              ><i class="fa fa-shopping-cart" style="font-size:36px"></i
            ></router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "Navbar",
  props: ["cartCount"],
  data() {
    return {
      token: null,
      userRole: null,
      searchQuery: "",
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });
      swal({
        text: "Вы вышли из системы. Посетите еще раз",
        icon: "success",
        closeOnClickOutside: false,
      });
    },
    fetchUserRole() {
      // Make an API call to your Java (Spring) backend to fetch the user's role
      axios.get("http://localhost:9090/api/user/role", { headers: { Authorization: this.token } })
        .then(response => {
          // Update the userRole property based on the response
          this.userRole = response.data; // Assuming the role is returned in the response
          console.log(this.userRole);
        })
        .catch(error => {
          console.error("Error fetching user role:", error);
          // Handle errors if needed
        });
    },
    performSearch() {
    if (this.searchQuery.trim() !== "") {
      // Отправить запрос на сервер для поиска
      axios
        .get(`http://localhost:9090/api/product/search?query=${this.searchQuery}`)
        .then((response) => {
          // Обработать результаты поиска
          console.log("Search results:", response.data);
          this.$store.commit('updateSearchResults', response.data);
          // Возможно, здесь вы хотите обновить компонент Product.vue с новыми результатами
          // Вы можете использовать Vuex для управления состоянием приложения
        })
        .catch((error) => {
          console.error("Error performing search:", error);
          // Обработать ошибку поиска
        });
    } if (this.searchQuery.trim() === "") {
          // Отправить запрос на сервер для поиска
          axios
        .get(`http://localhost:9090/api/product/`)
        .then((response) => {
          // Обработать результаты поиска
          console.log("Search results:", response.data);
          this.$store.commit('updateSearchResults', response.data);
          // Возможно, здесь вы хотите обновить компонент Product.vue с новыми результатами
          // Вы можете использовать Vuex для управления состоянием приложения
        })
        .catch((error) => {
          console.error("Error performing search:", error);
          // Обработать ошибку поиска
        });
    }
    else{
      console.log("Empty search query");
    }
  },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      this.fetchUserRole();
    }
  },
};
</script>

<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 10px;
}
#cart {
  position: relative;
}
</style>