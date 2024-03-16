<template>


  <div class="bg-img">
      <div class="content">
        <header>Login Form</header>
        <form action="#"  :model="state" @submit.prevent="submitForm">
          <div class="field">
            <span class="fa fa-user spanlogin"></span>
            <input type="text" required placeholder="Email or Phone" v-model="state.UserName">
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Password" v-model="state.Password">
            <span class="showsss" @click="showPass()">SHOW</span>
          </div>
          <div class="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="field">
            <!-- <input type="submit"  value="LOGIN"> -->
            <ButtonAirloine/>
          </div>
        </form>
        <div class="login">Or login with</div>
        <div class="links">
          <div class="facebook">
            <i class="fab fa-facebook-f"><span>Facebook</span></i>
          </div>
          <div class="instagram">
            <i class="fab fa-instagram"><span>Instagram</span></i>
          </div>
        </div>
        <div class="signup">Don't have account?
          <a href="#" @click="onMenuItemClick('Auth')">Signup Now</a>
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { Calendar, Search, User, Key } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
// @ts-ignore
import { LoginViewModel } from '../../Models/LoginViewModel'
import { axiosInstance } from '@/Services/axiosConfig';
import {fetchData} from '@/Services/GetAllUserServices'
// @ts-ignore
 import { handleLogin } from '../../Services/LoginService.ts'
 import router from '@/router';
 import ButtonAirloine from '../../components/Airlines/ButtonAirLines/ButtonAirloines.vue'
// import { useToast } from "vue-toastification";



// const _toast = useToast();
const state = reactive<LoginViewModel>({
    UserName: '',
    Password: '',
    Email: '',
    Role: '',
});
const userref = ref(state); 
const  types  = ref("");
const  titles  = ref("Thông Báo mới nhât");
let data: any= ref([]);
let datas = ref<LoginViewModel[]>([]);
function showPass() {
  const pass_field: HTMLInputElement | null = document.querySelector('.pass-key');
const showBtn: HTMLElement | null = document.querySelector('.show');

if (pass_field && showBtn) {
    showBtn.addEventListener('click', function() {
        if (pass_field.type === "password") {
            pass_field.type = "text";
            showBtn.textContent = "HIDE";
            showBtn.style.color = "#3498db";
        } else {
            pass_field.type = "password";
            showBtn.textContent = "SHOW";
            showBtn.style.color = "#222";
        }
    });
}
}
 
async function main() {
  const data2 = await fetchData();
  datas.value = data2;
  
  datas.value.forEach((element:LoginViewModel) =>  {
  if(element.UserName == userref.value.UserName){
    userref.value.Role= element.Role;
  }
});
}
main();
 

const submitForm = async () => {
    console.log(state);
    // state.Email = state.UserName
    const loginResult = await handleLogin(state);
    console.log("logresult:" + loginResult);
   
    if(loginResult.isSuccess  ){
      if(userref.value.UserName == 'ble07983@gmail.com'){
        state.Role= 'superadmin';
      }

      console.log(userref.value);
      console.log(userref.value.Role);

      if(userref.value.Role == 'superadmin'){
        types.value = "success";
        titles.value = "Đăng Nhâp Thành Công" ;
        window.location.href = `/User`;
      }
      else  {
        types.value = "success";
        titles.value = "Đăng Nhâp Thành Công" ;
        // window.location.href = `/Admin`;
    }      
    }
  
    else{
         types.value = "error";
    titles.value = "Đã xảy ra lỗi khi đăng nhập" ;
    }
   
    // else
    //   _toast.success(loginResult.message);
  } 
  const ForgotPassword = () => {
    // Thay thế `/forgot-password` bằng URL của trang bạn muốn chuyển đến
    window.location.href = `/ResetPassword`;
  }
  const onMenuItemClick = (item: string) => {
    
    router.push(`${item}`);

}
  
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Poppins:400,500&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.bg-img{
  background: url('../HinhAnh/bg.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.bg-img:after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  text-align: center;
  padding: 60px 32px;
  width: 370px;
  transform: translate(-50%,-50%);
  background: rgba(255,255,255,0.04);
  box-shadow: -1px 4px 28px 0px rgba(0,0,0,0.75);
}
.content header{
  color: white;
  font-size: 33px;
  font-weight: 600;
  margin: 0 0 35px 0;
  font-family: 'Montserrat',sans-serif;
}
.field{
  position: relative;
  height: 45px;
  width: 100%;
  display: flex;
  background: rgba(255,255,255,0.94);
}
.field span{
  color: #222;
  width: 40px;
  line-height: 45px;
}
.field input{
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #222;
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.space{
  margin-top: 16px;
}
.showsss{
  position: absolute;
  right: 13px;
  font-size: 13px;
  font-weight: 700;
  color: #222;
  display: none;
  cursor: pointer;
  font-family: 'Montserrat',sans-serif;
}
.pass-key:valid ~ .showsss{
  display: block;
}
.pass{
  text-align: left;
  margin: 10px 0;
}
.pass a{
  color: white;
  text-decoration: none;
  font-family: 'Poppins',sans-serif;
}
.pass:hover a{
  text-decoration: underline;
}
.field input[type="submit"]{
  background: #3498db;
  border: 1px solid #2691d9;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat',sans-serif;
}
.field input[type="submit"]:hover{
  background: #2691d9;
}
.login{
  color: white;
  margin: 20px 0;
  font-family: 'Poppins',sans-serif;
}
.links{
  display: flex;
  cursor: pointer;
  color: white;
  margin: 0 0 20px 0;
}
.facebook,.instagram{
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.facebook{
  margin-left: 0;
  background: #4267B2;
  border: 1px solid #3e61a8;
}
.instagram{
  background: #E1306C;
  border: 1px solid #df2060;
}
.facebook:hover{
  background: #3e61a8;
}
.instagram:hover{
  background: #df2060;
}
.links i{
  font-size: 17px;
}
i span{
  margin-left: 8px;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.signup{
  font-size: 15px;
  color: white;
  font-family: 'Poppins',sans-serif;
}
.signup a{
  color: #3498db;
  text-decoration: none;
}
.signup a:hover{
  text-decoration: underline;
}



</style>
  