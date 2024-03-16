<template>   
    <el-container>
     
        <MnHeader />
        <div class="container-main">
            
        <div class="containerddd">
            <div class="rows">
                <label>Chiều bay:</label>
                <br>
                <label> {{ startingPoint }}</label>
                <i class="fas fa-arrow-right"></i>
                <label> {{ endingPoint }}</label>
                <button class="btn-right-bottom" @click="showfrom = !showfrom">Thu Nhỏ</button>
            </div>
          
        <form action="#" method="post" class="froms" style="padding-bottom: 10px;" v-if="showfrom">
           
             
                
            
            <div class="form-group">
                <label for="ngay-bay">Ngày bay:</label>
                <input type="date" name="ngay-bay" id="ngay-bay" value="2024-02-26">
            </div>
            <div class="form-group">
                <label for="gia-ve">Giá vé:</label>
                <input type="checkbox" name="gia-ve" id="gia-ve-co-ban" value="co-ban" checked>
                <label for="gia-ve-co-ban">Cơ bản</label>
                <input type="checkbox" name="gia-ve" id="gia-ve-day-du" value="day-du">
                <label for="gia-ve-day-du">Đầy đủ</label>
            </div>
            <div class="form-group">
                <label for="gio-bay">Giờ bay:</label>
                <input type="checkbox" name="gio-bay" id="gio-bay-0-6" value="0-6">
                <label for="gio-bay-0-6">0-6h</label>
                <input type="checkbox" name="gio-bay" id="gio-bay-6-12" value="6-12">
                <label for="gio-bay-6-12">6-12h</label>
                <input type="checkbox" name="gio-bay" id="gio-bay-12-18" value="12-18">
                <label for="gio-bay-12-18">12-18h</label>
                <input type="checkbox" name="gio-bay" id="gio-bay-18-24" value="18-24">
                <label for="gio-bay-18-24">18-24h</label>
            </div>
            <div class="form-group">
                <label for="hang-bay">Hãng bay:</label>
                <input type="checkbox" name="hang-bay" id="hang-bay-VJ" value="VJ" checked>
                <label for="hang-bay-VJ">VJ</label>
                <input type="checkbox" name="hang-bay" id="hang-bay-VN" value="VN">
                <label for="hang-bay-VN">VN</label>
                <input type="checkbox" name="hang-bay" id="hang-bay-QH" value="QH">
                <label for="hang-bay-QH">QH</label>
            </div>
    
        </form>
        <div>
          <el-table :data="data" style="width: 100%">
      <el-table-column prop="loGo" label="Logo">
        <template #default="scope">
          <img :src="scope.row.loGo" alt="Logo" style="width: 150px; height: 150px;">
        </template>
      </el-table-column>
      <el-table-column prop="startingPoint" label="Điểm đi">
        <template #default="{ row }">
          <span>{{ row.startingPoint }}</span>
          
    </template>
      </el-table-column>
      <el-table-column prop="endingPoint" label="Điểm đến"></el-table-column>
      <el-table-column prop="flightTime" label="Số giờ bay"></el-table-column>
      <el-table-column prop="ticketPrice" label="Giá vé" ></el-table-column>
      <el-table-column label="Actions" fixed="right" width="100">
        <template #default="{ row }">
         
          <el-button type="primary" @click="Selects(row)">Chọn</el-button>
       
        </template>
      </el-table-column>
    </el-table>
  </div>
    </div>

    <div class="containersss">
      <el-form
  style="max-width: 270px"
  :model="Flightdata"
  status-icon
  label-width="auto"
  class="demo-ruleForm"
>
  <el-form-item label="Điểm đi" prop="text">
    <el-input v-model="Flightdata.startingPoint" type="text" />
  </el-form-item>
  <el-form-item label="Điểm Đến" prop="text">
    <el-input v-model="Flightdata.endingPoint" type="text" />
  </el-form-item>
  <el-form-item label="Ngày Bay" prop="text">
    <el-date-picker
      v-model="Flightdata.startDate"
      type="date"
      label="Pick a date"
      placeholder="Pick a date"
    />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="search">Tìm Kiếm</el-button>
  </el-form-item>
</el-form>
            </div>
  </div>
     <el-footer style="padding: 0;">
        <MnFooter />
     </el-footer>

     
   

    </el-container>

  </template>

<script  lang="ts" setup>
import { onMounted } from 'vue';
import { reactive, ref } from 'vue';
import MnHeader from "../../views/Action/MnHeader.vue"; 
import MnFooter from "../../views/Action/MnFooter.vue";
import type { FormInstance, FormRules } from 'element-plus'
import { defineComponent } from 'vue';

import $ from "jquery"; // Import jQuery
  import { fetchData2 } from "../../Services/FlightService/FlightService";
  import { SearchRequest } from "../../Models/Request/SearchModels/SearchRequest";
  import { Filter } from "../../Models/Request/SearchModels/Filter";
  import { useRoute } from 'vue-router';
import {Flights} from '@/Models/Dtos/FlightsDto';
import { axiosInstance } from '@/Services/axiosConfig';
import router from '@/router';
import type { RefSymbol } from '@vue/reactivity';

const loadScripts = () => {
  const scriptUrls: string[] = [
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
    // "lib/easing/easing.min.js",
    // "lib/waypoints/waypoints.min.js",
    // "lib/owlcarousel/owl.carousel.min.js",
    // "lib/lightbox/js/lightbox.min.js",
    // "https://kit.fontawesome.com/a076d05399.js"
  ];

  scriptUrls.forEach(url => {
    const script = document.createElement("script");
    script.src = url;
    script.async = false;
    document.body.appendChild(script);
  });
};
loadScripts();

const ticketPrice = ref('');
const showfrom = ref(false);
let data = ref([] as Flights[]);
function Selects(row) {
  router.push({ name: 'CustomerInformation', params: { startingPoint : row.startingPoint, endingPoint: row.endingPoint, ticketPrice: row.ticketPrice } });
};
//search 


  let Flightdata = reactive<Flights>({
   
    startingPoint:"",
    endingPoint :"",
    startDate: new Date(),
  
    
  })
  
  let Search: SearchRequest = reactive({
    Filters: [] as Filter[],
    SortByInfo: undefined,
    PageIndex: 1,
    PageSize: 5 ,
  });
  // const Sort : SortByInfo = ({
  //   FieldName: "Email",
  //    Ascending: true,
  // })
  const search = async () => {
  let { startingPoint: name } = Flightdata;
  Search.Filters = [];

  const filter = [
    {
      FieldName: "startingPoint",
      Value: Flightdata.startingPoint, 
      Operation: undefined,
    },
    {
      FieldName: "endingPoint",
      Value: Flightdata.endingPoint, 
      Operation: undefined,
    }
  ];


    Search.Filters?.push(...filter);


  try {
    const response = await axiosInstance.post('Flights/search', Search);
    data.value = response.data.data.data;
    console.log(data.value);
  } catch (error) {
    console.error('Error while fetching data:', error);
  }
};

const route = useRoute();
const startingPoint = route.params?.startingPoint;
const endingPoint = route.params?.endingPoint;
if (startingPoint || endingPoint) {
  const filtersArray = [
    {
      FieldName: "startingPoint",
      Value: startingPoint.toString(), 
      Operation: undefined,
    },
    {
      FieldName: "endingPoint",
      Value: endingPoint.toString(), 
      Operation: undefined,
    }
  ];

  Search.Filters?.push(...filtersArray);


}


  fetchData2(Search).then((result) => {
    data.value = result;
    console.log(data);
  });
console.log(useRoute().params.startingPoint.toString());
console.log(useRoute().params.endingPoint.toString());

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped>
/*** Button Start ***/
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');
.container-main {
    width: 100%;
    height: 100%;
    display: flex;
}
.view-button-container {
  position: absolute;
  bottom: 3px; /* Điều chỉnh khoảng cách từ dưới của bảng */
  left: 20%; /* Đặt ở giữa */
  transform: translateX(-20%); /* Dịch chuyển nút về giữa */
}
.form-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.froms{
    background-color: aliceblue;
}
.form-group input[type="radio"] {
    margin: 0 5px;
}
.containerddd {

    background-color: #7cade6;
    height: 100vh;
    width: 75%;
}
.form-group label {
    margin: 0 5px;
}
.btn-right-bottom {

   position: absolute;
   right: 30%;
    display: inline-block;
    padding: 10px 20px;
    background-color: #fefefd;
    color: rgb(11, 11, 11);
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.btn-right-bottom:hover {
  background-color: #e7f0e7;
}
.containersss{
    width: 25%;
    height: 100%;
    position: relative; 
    background-color: aliceblue;
}
.rows {
    width: 100%;
    height: 100px;
    background-color: #7cade6;
}
.rows > label {
    margin: 8px 20px;
}
.containersss {
  max-width: 400px; /* Định kích thước của form */
  margin: 0 auto; /* Đưa form vào giữa trang */
  padding: 20px; /* Khoảng cách giữa form và viền của div */
  border: 1px solid #ccc; /* Viền form */
  border-radius: 5px; /* Bo tròn viền của form */
}

/* Định dạng cho nhãn của các form item */
.containersss .el-form-item__label {
  font-weight: bold;
}

/* Định dạng cho các input */
.containersss .el-input {
  width: 100%; /* Chiều rộng của input */
}

/* Định dạng cho các nút */
.containersss .el-button {
  margin-right: 10px; /* Khoảng cách giữa các nút */
}

/* Định dạng cho date picker */
.containersss .el-date-picker {
  width: 100%; /* Chiều rộng của date picker */
}
</style>