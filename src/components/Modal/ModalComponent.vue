<template>
   <p>
      <button @click="showModal">Show modal</button>
   </p>

   <Modal v-model="isShow" :close="closeModal">
      <div class="modal">
         <p>Hello</p>
         <button @click="closeModal">close</button>
      </div>
   </Modal>
</template>

<script lang="js">
import { ref } from 'vue';

export default {
   setup() {
      const isShow = ref(false);

      function showModal() {
         isShow.value = true;
      }

      function closeModal() {
         isShow.value = false;
      }

      return {
         isShow,
         showModal,
         closeModal,
      };
   },
};
</script>

<style scoped lang="css">
.modal {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: auto;
   max-width: 500px;
   height: auto;
   padding: 30px;
   box-sizing: border-box;
   background-color: #fff;
   font-size: 20px;
   text-align: center;
   border-radius: 5px;
   box-shadow: var(--bs-box-shadow);
}
</style>