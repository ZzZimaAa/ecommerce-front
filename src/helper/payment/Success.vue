<template>
  <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Загрузка...</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:'PaymentSuccess',
    props:["baseURL"],
    data() {
    return {
      token: null,
      sessionId:null
    }
  },
  methods:{
      saveOrder() { 
           axios.post(this.baseURL+"order/add/?token="+this.token+"&sessionId="+this.sessionId)
                  .then(()=>{
                     window.location.href = '/order'
                  }).catch((error)=>{
                    console.log(error);
                  })
      }
  },
  mounted(){
      this.token = localStorage.getItem("token");
      this.sessionId = localStorage.getItem("sessionId");
      this.saveOrder()
  }
}
</script>