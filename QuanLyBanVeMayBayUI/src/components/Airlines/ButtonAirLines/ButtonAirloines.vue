<template>
    <div>
      <input type="submit" @click="handleClick" value="LOGIN">

    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent, ref } from 'vue';
  
  const submitMessage = ref(""); // Khai báo một biến ref để lưu trữ message
  
  const handleClick = () => {
    submitMessage.value = "Nút submit được nhấn"; // Gán giá trị cho biến submitMessage
  }
  </script>