<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <button class="btn btn-outline-light btn-lg px-5" type="button" @click="getResourceImage">Xem thông tin ảnh</button>
                <button class="btn btn-outline-light btn-lg px-5" type="button" @click="getResourceUser">Xem thông tin người dùng</button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import oauthService from "@/service/oauthService";

export default {
name: "ResourceAuth",
  methods:{
    getResourceImage(){
      let token = this.$route.query.token;
      if (localStorage.getItem('token') != null){
        token = localStorage.getItem('token');
      }
      // alert("token la " + token)
      oauthService.getResourceImage(token).then(respone => {
        if (respone.status >= 200){
          alert("ban dc quyen")
        } else {
          alert("ban ko dc quyen")
        }
      }).catch((error) =>{
        alert("loi la. \n" + error);
      });
    },
    getResourceUser(){
      let token = this.$route.query.token;
      if (localStorage.getItem('token') != null){
        token = localStorage.getItem('token');
      }
      // alert("token la " + token)
      oauthService.getResourceUser(token).then(respone => {
        if (respone.status >= 200){
          alert("ban dc quyen")
        }
      }).catch((error) =>{
        alert("loi la. \n" + error);
      });
    },
    checkAuth() {
      let token = localStorage.getItem('token');

      if( token == null || token == "" ){
        window.location.href  = "http://localhost:8081/login";
      } else {
        localStorage.setItem('token',token);
      }
    }
  },created() {
    this.checkAuth();
  }
}
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>