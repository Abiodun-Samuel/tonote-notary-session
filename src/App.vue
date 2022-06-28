<template>
  <!-- <router-view> -->
  <NavHeader />
  <router-view />
</template>

<script>
import NavHeader from '@/components/Header/NavHeader.vue'
export default {
  components: {
    NavHeader, 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


:root {
  --bs-blue: #00CFE8;
  --bs-indigo: #6610F2;
  --bs-purple: #003bb3;
  --bs-pink: #D63384;
  --bs-red: #EA5455;
  --bs-orange: #FF9F43;
  --bs-yellow: #FFC107;
  --bs-green: #28C76F;
  --bs-teal: #20C997;
  --bs-cyan: #0DCAF0;
  --bs-white: #FFFFFF;
  --bs-gray: #B8C2CC;
  --bs-gray-dark: #1E1E1E;
  --bs-gray-100: #BABFC7;
  --bs-gray-200: #EDEDED;
  --bs-gray-300: #DAE1E7;
  --bs-gray-400: #636363;
  --bs-gray-500: #ADB5BD;
  --bs-gray-600: #B8C2CC;
  --bs-gray-700: #4E5154;
  --bs-gray-800: #1E1E1E;
  --bs-gray-900: #2A2E30;
  --bs-primary: #003bb3;
  --bs-secondary: #82868B;
  --bs-success: #28C76F;
  --bs-info: #00CFE8;
  --bs-warning: #FF9F43;
  --bs-danger: #EA5455;
  --bs-light: #F6F6F6;
  --bs-dark: #4B4B4B;
  --bs-primary-rgb: 41, 20, 199;
  --bs-secondary-rgb: 130, 134, 139;
  --bs-success-rgb: 40, 199, 111;
  --bs-info-rgb: 0, 207, 232;
  --bs-warning-rgb: 255, 159, 67;
  --bs-danger-rgb: 234, 84, 85;
  --bs-light-rgb: 246, 246, 246;
  --bs-dark-rgb: 75, 75, 75;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 34, 41, 47;
  --bs-body-rgb: 110, 107, 123;
  --bs-font-poppins: 'Poppins',sans-serif;
  --bs-font-monospace: "Montserrat", Helvetica, Arial, serif;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.45;
  --bs-body-color: #6E6B7B;
  --bs-body-bg: #F5F5F5;

  --bs-box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
body{
  background-color: var(----bs-body-bg);
  font-family: var(--bs-font-poppins);
}
</style>
