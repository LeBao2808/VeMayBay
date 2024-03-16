<template>
  <MnHeader />
  <main>
    <section class="thong-tin-hanh-khach">
      <h2>THÔNG TIN HÀNH KHÁCH</h2>
      <form action="#">
        <div class="form-group row">
          <label for="gioi-tinh" class="col-sm-2 col-form-label">Giới tính:</label>
          <div class="col-sm-10">
            <input type="radio" id="gioi-tinh-nam" name="gioi-tinh" value="nam" checked>
            <label for="gioi-tinh-nam">Nam</label>
            <input type="radio" id="gioi-tinh-nu" name="gioi-tinh" value="nu">
            <label for="gioi-tinh-nu">Nữ</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="ho-ten" class="col-sm-2 col-form-label">Họ tên:</label>
          <div class="col-sm-10">
            <input type="text" id="ho-ten" name="ho-ten" class="form-control" placeholder="Nhập họ tên">
          </div>
        </div>
        <div class="form-group row">
          <label for="ngay-sinh" class="col-sm-2 col-form-label">Ngày sinh:</label>
          <div class="col-sm-10">
            <input type="date" id="ngay-sinh" name="ngay-sinh" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="so-cmnd" class="col-sm-2 col-form-label">Số CMND/CCCD:</label>
          <div class="col-sm-10">
            <input type="text" id="so-cmnd" name="so-cmnd" class="form-control" placeholder="Nhập số CMND/CCCD">
          </div>
        </div>
        <div class="form-group row">
          <label for="dien-thoai" class="col-sm-2 col-form-label">Điện thoại:</label>
          <div class="col-sm-10">
            <input type="text" id="dien-thoai" name="dien-thoai" class="form-control" placeholder="Nhập số điện thoại">
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-10">
            <input type="email" id="email" name="email" class="form-control" placeholder="Nhập email">
          </div>
        </div>
        <div class="col-sm-10 offset-sm-2">
            <!-- <button  class=" btn-primary" @click="showForm = !showForm">Tiếp</button> -->
            <input class=" btn-primary" type="button" value="Tiếp" @click="showForm = !showForm">
          </div>
      </form>
    </section>
    <section class="thong-tin-chuyen-bay" v-if="showForm">
      <h2>CHỌN THÊM HÀNH LÝ</h2>
      <form action="#">
        <div class="form-group row">
          <label for="diem-khoi-hanh" class="col-sm-2 col-form-label">Điểm khởi hành:</label>
          <div class="col-sm-10">
            <select id="diem-khoi-hanh" name="diem-khoi-hanh" class="form-control">
              <option value="">Chọn điểm khởi hành</option>
              <option value="hanoi">Hà Nội</option>
              <option value="tp-ho-chi-minh">TP. Hồ Chí Minh</option>
              <option value="da-nang">Đà Nẵng</option>
              <option value="nha-trang">Nha Trang</option>
              <option value="phu-quoc">Phú Quốc</option>
            </select>
          </div>
        </div>
        <!-- <div class="form-group row">
          <label for="diem-khoi-hanh" class="col-sm-2 col-form-label">Điểm khởi hành:</label>
          <div class="col-sm-10">
            <select id="diem-khoi-hanh" name="diem-khoi-hanh" class="form-control">
              <option value="">Chọn điểm khởi hành</option>
              <option value="hanoi">Hà Nội</option>
              <option value="tp-ho-chi-minh">TP. Hồ Chí Minh</option>
              <option value="da-nang">Đà Nẵng</option>
              <option value="nha-trang">Nha Trang</option>
              <option value="phu-quoc">Phú Quốc</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="ngay-bay" class="col-sm-2 col-form-label">Ngày bay:</label>
          <div class="col-sm-10">
            <input type="date" id="ngay-bay" name="ngay-bay" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="hang-hang-khong" class="col-sm-2 col-form-label">Hãng hàng không:</label>
          <div class="col-sm-10">
            <select id="hang-hang-khong" name="hang-hang-khong" class="form-control">
              <option value="">Chọn hãng hàng không</option>
              <option value="vietnam-airlines">Vietnam Airlines</option>
              <option value="vietjet-air">Vietjet Air</option>
              <option value="bamboo-airways">Bamboo Airways</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="loai-ve" class="col-sm-2 col-form-label">Loại vé:</label>
          <div class="col-sm-10">
            <select id="loai-ve" name="loai-ve" class="form-control">
              <option value="">Chọn loại vé</option>
              <option value="ve-thuong-gia">Vé thường gia</option>
              <option value="ve-pho-thong">Vé phổ thông</option>
              <option value="ve-khuyen-mai">Vé khuyến mãi</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="so-luong-ve" class="col-sm-2 col-form-label">Số lượng vé:</label>
          <div class="col-sm-10">
            <input type="number" id="so-luong-ve" name="so-luong-ve" class="form-control" min="1" value="1">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10 offset-sm-2">
            <button type="submit" class="btn btn-primary">Đặt vé</button>
          </div>
        </div> -->
      </form>
    </section>
  </main>
  <MnFooter />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import MnFooter from '../Action/MnFooter.vue';
import MnHeader from '../Action/MnHeader.vue';
import { useRoute } from 'vue-router';

console.log(useRoute().params.ticketPrice);


const showForm = ref(false);
</script>

<style scoped>

/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

main {
  padding: 20px;
}

section {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
}

h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-control {
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: .375rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>