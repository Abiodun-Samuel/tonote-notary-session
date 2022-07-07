<template lang="html">
  <div class="my-3" v-if="uploadedPassport.length <= 0">
    <SkeletonLoader :loading="true" />
  </div>

  <div class="uploaded__images my-3">
    <label
      class="uploaded__image"
      :for="image.id"
      v-for="image in uploadedPassport"
      :key="image.id"
    >
      <!-- <button
        class="btn text-danger bg-transparent delete__btn"
        @click="deleted(image.id)"
      >
        <span class="iconify" data-icon="clarity:edit-solid"></span>
      </button> -->
      <input checked type="radio" name="plan" :id="image.id" />
      <div class="plan-content" @click="select(image.file)">
        <img loading="lazy" :src="image.file" :alt="image.category" />
      </div>
    </label>
    <!-- <label class="uploaded__image" for="basi">
        <button
          class="btn text-danger bg-transparent delete__btn"
          @click="deleted"
        >
          <span class="iconify" data-icon="clarity:edit-solid"></span>
        </button>
        <input checked type="radio" name="plan" id="basi" />
        <div class="plan-content" @click="select">
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
            alt=""
          />
        </div>
      </label> -->
  </div>

  <!-- <div class="my-3 uploaded__image">
    <button
      class="m-1 btn"
      v-for="image in uploadedPassport"
      :key="image.id"
      @click="selectFile(image.file)"
    >
      <img height="80" width="80" :src="image.file" :alt="image.category" />
    </button>
  </div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import SkeletonLoader from "../Loader/SkeletonLoader.vue";
import axios from "axios";
import { useStore } from "vuex";

let store = useStore();
let uploadedPassport = ref([]);

const select = (file) => {
  store.commit("documentStore/loadPassport", file);
};

// const deleted = async (id) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdG9ub3RlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS91c2VyL2xvZ2luIiwiaWF0IjoxNjU3MTY5MTQyLCJleHAiOjE2NTczNDE5NDIsIm5iZiI6MTY1NzE2OTE0MiwianRpIjoic2Q2QVhJOFFSTkJCUHZiaCIsInN1YiI6IjQ3MmJlNjNlLTRmNWEtNDZjMy1hN2RhLTdmNWViNTI5MDAyZCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.r-v1f12A8z5vsYDGWA5F-54oVR-6b6u7UxTp9r-4Y6Q`,
//       },
//     };

//     await axios.delete(
//       `http://tonote-api.herokuapp.com/api/v1/prints/${id}`,
//       config
//     );
//     const result = uploadedPassport.value.filter((img) => {
//       return img !== img.file;
//     });
//     uploadedPassport.value = result;
//   } catch (error) {
//     console.log(error);
//   }
//   // store.commit("documentStore/loadPassport", file);
// };

onMounted(async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdG9ub3RlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS91c2VyL2xvZ2luIiwiaWF0IjoxNjU3MTY5MTQyLCJleHAiOjE2NTczNDE5NDIsIm5iZiI6MTY1NzE2OTE0MiwianRpIjoic2Q2QVhJOFFSTkJCUHZiaCIsInN1YiI6IjQ3MmJlNjNlLTRmNWEtNDZjMy1hN2RhLTdmNWViNTI5MDAyZCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.r-v1f12A8z5vsYDGWA5F-54oVR-6b6u7UxTp9r-4Y6Q`,
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
.uploaded__images {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  gap: 15px;
}

.uploaded__images .uploaded__image input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.uploaded__images .uploaded__image {
  cursor: pointer;
  position: relative;
}

.uploaded__images .uploaded__image .plan-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1px;
  border: 2px solid #efefef;
  border-radius: 5px;
  -webkit-transition: -webkit-box-shadow 0.4s;
  transition: -webkit-box-shadow 0.4s;
  -o-transition: box-shadow 0.4s;
  transition: box-shadow 0.4s;
  transition: box-shadow 0.4s, -webkit-box-shadow 0.4s;
  position: relative;
  width: 120px;
  height: 120px;
}
.delete__btn {
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 2px;
  z-index: 1;
}
.uploaded__images .uploaded__image .plan-content img {
  max-width: 100%;
  margin: 0 auto;
}

.uploaded__images .uploaded__image .plan-content:hover {
  -webkit-box-shadow: 0px 3px 5px 0px #e8e8e8;
  box-shadow: 0px 3px 5px 0px #e8e8e8;
}

.uploaded__images .uploaded__image input[type="radio"]:checked + .plan-content {
  border: 2px solid #216ee0;
  background: #eaf1fe;
  -webkit-transition: ease-in 0.3s;
  -o-transition: ease-in 0.3s;
  transition: ease-in 0.3s;
}
</style>
