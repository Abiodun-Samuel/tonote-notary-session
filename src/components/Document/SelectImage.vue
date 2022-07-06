<template lang="html">
  <div class="my-3 uploaded__image">
    <button
      class="m-1 btn"
      v-for="image in uploadedPassport"
      :key="image.id"
      @click="selectFile(image.file)"
    >
      <img height="80" width="80" :src="image.file" :alt="image.category" />
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
let uploadedPassport = ref([]);

const selectFile = (file) => {
  console.log(file);
};
onMounted(async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdG9ub3RlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS91c2VyL2xvZ2luIiwiaWF0IjoxNjU2OTQ3NzUwLCJleHAiOjE2NTcxMjA1NTAsIm5iZiI6MTY1Njk0Nzc1MCwianRpIjoiem95cXVPS21hcW1UeXM5ayIsInN1YiI6IjJiOTQ4YzUzLTBiMTUtNDVlYS05ZGY0LTU0YWI1OGU5MDU0NCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.p2oB22hzODhmr2s4jl8OqT7evqUhZE324HOxiHVGzFY`,
      },
    };

    const response = await axios.get(
      `http://tonote-api.herokuapp.com/api/v1/prints`,
      config
    );
    uploadedPassport.value = response.data.data.Photograph;
    //  console.log(uploadedPassport.value);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped lang="css">
.uploaded__image {
  display: flex;
  flex-wrap: wrap;
}
</style>
