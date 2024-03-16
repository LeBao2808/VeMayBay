<template>
  <div class="oke">
    <el-container>
      <el-header>
        <button @click="Loginmenu" class="btn1">Đăng Nhập</button>
        <button @click="logout" class="btn2"><el-icon></el-icon>Đăng Xuất</button>
      </el-header>
      <el-container >
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose" style="    background: var(--el-color-primary-light-8) ; font-family: 'Courier New', Courier, monospace;">
            <el-menu-item index="1" @click="toggleMenu">
              <el-icon><Menu /></el-icon>
              <template></template>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon @click="onMenuItemClick('User')"><UserFilled /></el-icon>
              <template #title>USER</template>
            </el-menu-item>
            <el-menu-item index="3" >
              <el-icon @click="onMenuItemClick('Payments')">    <Money /></el-icon>
              <template #title >Thanh toán</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon @click="onMenuItemClick('Airlines')"><Avatar /></el-icon>
              <template #title> Đối tác</template>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon @click="onMenuItemClick('Promotions')">
                <Coin/>
              </el-icon>
              <template #title>Khuyến mãi</template>
            </el-menu-item>
            <el-menu-item index="6">
              <el-icon @click="onMenuItemClick('Bookings')"><Ticket/></el-icon>
              <template #title> Đặt vé</template>
            </el-menu-item>
            <el-menu-item index="7">
              <el-icon @click="onMenuItemClick('Tickets')"><Flag/></el-icon>
              <template #title>Vé Máy Bay</template>
            </el-menu-item>

            <el-menu-item index="8">
              <el-icon @click="onMenuItemClick('FeedbackAndReviews')"><Briefcase/></el-icon>
              <template #title> Feedback và Đánh giá</template>
            </el-menu-item>

            <el-menu-item index="9">
              <el-icon @click="onMenuItemClick('Flights')"><PhoneFilled/></el-icon>
              <template #title> Chuyến bay </template>
            </el-menu-item>

            <el-menu-item index="10">
              <el-icon @click="onMenuItemClick('Customers')"><User/></el-icon>
              <template #title> Khách Hàng </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="mainel2">
          <router-view />
        </el-main>
      </el-container>
      <el-footer style="background-color: #324d69; color: white; text-align: center; height: 183px;">
      <div style="">
        <p style="font-size: 18px;">Thông tin liên hệ</p>
        <p>Địa chỉ: Số 123, Đường ABC, Thành phố XYZ</p>
        <p>Email: example@email.com</p>
        <p>Số điện thoại: 123-456-789</p>
        <!-- Các liên kết mạng xã hội -->
        <div style="margin-top: 10px;">
          <a href="#" style="color: white; margin-right: 10px;"><i class="fab fa-facebook-f"></i></a>
          <a href="#" style="color: white; margin-right: 10px;"><i class="fab fa-twitter"></i></a>
          <a href="#" style="color: white; margin-right: 10px;"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </el-footer>
    </el-container>
  </div>
</template>

<style >
.el-header > button:hover{
background-color: aliceblue;

}
.mainel2{
  background-image: url(https://img2.thuthuatphanmem.vn/uploads/2019/03/02/background-xanh-duong_012323239.jpeg);
background-repeat: no-repeat;
background-size:cover;
}
.oke{
  width: 200vh;
  height: 100vh;
}
.btn2{
  color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}
.btn1 {
  color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  margin-left: 85%;
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.el-header, .el-main, .el-footer, .el-aside {
  height: 100%;
  width: 100%;
}
.el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  display: flex;
}
.el-header > button {
  height: 100%;
  width: 150px;
  background-color: var(--el-color-primary-light-7);
  cursor: pointer;

  border: var(--el-color-primary-light-7);
}

.el-header>p {
  margin-left: 90%;
}

.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.el-menu {
  border-right: none;
}

.el-main {
  padding: 10px;
}

.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.common-layout, .el-container {
  height: 100% !important;
  width: 100% !important;
}
.el-header, .el-main, .el-footer, .el-aside {
  height: 100%;
  width: 100%;
}
</style>
<script lang="ts" setup>
import { ref } from 'vue'
import Vue from "vue";
import { useRouter } from 'vue-router';
import router from '@/router';
import {
  Menu as IconMenu,
  Setting,
  House,
  Avatar,
  Search,
  PieChart,
  UserFilled ,
  SwitchButton,
 WarnTriangleFilled ,
Briefcase ,
 Money ,
Watch ,
  User ,
  Histogram,
  Menu,
  Suitcase ,
  Coin,
  Ticket,
  Flag,
 PhoneFilled ,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const toggleMenu = () => {
  // Thay đổi giá trị của biến `isCollapse`
  isCollapse.value = !isCollapse.value;
};
const Loginmenu= () => {
  router.push("/");
}
function logout() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  }
  router.push("/");
}

const onMenuItemClick = (item: string) => {
    
    router.push(`${item}`);

}
</script>
