<template>
  <div class="my-3" data-aos="zoom-in">
    <div v-show="!uploadImgSrc" class="file-input shadow">
      <input
        type="file"
        name="file-input"
        id="file-input"
        class="file-input__input"
        accept="image/*"
        @change="handleImageUpload"
      />
      <div class="d-flex justify-content-center align-items-center">
        <label class="file-input__label" for="file-input">
          <span class="iconify" data-icon="bi:image"></span>
          <p>Upload Image</p>
        </label>
      </div>
    </div>
    <div
      class="mt-2"
      v-if="uploadImgSrc"
      @click="deleteImage"
      id="display__snapshot"
    >
      <span
        class="iconify delete__btn btn btn-danger"
        data-icon="clarity:edit-solid"
        data-aos="zoom-in"
      ></span>
      <img :src="uploadImgSrc" class="img-fluid shadow" data-aos="zoom-in" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import AOS from "aos";
import axios from "axios";

let store = useStore();
let uploadImgSrc = ref(false);

onMounted(() => {
  AOS.init({ duration: 500 });
});

const deleteImage = () => {
  let file = document.querySelector("input[type=file]");
  file.value = "";
  uploadImgSrc.value = false;
  store.commit("documentStore/unLoadPassport");
};

const handleImageUpload = () => {
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  reader.onloadend = async () => {
    uploadImgSrc.value = reader.result;
    store.commit("documentStore/loadPassport", uploadImgSrc.value);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdG9ub3RlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS91c2VyL2xvZ2luIiwiaWF0IjoxNjU3MTY5MTQyLCJleHAiOjE2NTczNDE5NDIsIm5iZiI6MTY1NzE2OTE0MiwianRpIjoic2Q2QVhJOFFSTkJCUHZiaCIsInN1YiI6IjQ3MmJlNjNlLTRmNWEtNDZjMy1hN2RhLTdmNWViNTI5MDAyZCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.r-v1f12A8z5vsYDGWA5F-54oVR-6b6u7UxTp9r-4Y6Q`,
        },
      };

      await axios.post(
        `http://tonote-api.herokuapp.com/api/v1/prints`,
        {
          file: uploadImgSrc.value,
          category: "Upload",
          type: "Photograph",
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  reader.readAsDataURL(file);
};
</script>

<style lang="css" scoped>
.file-input {
  width: 100%;
  height: 200px;
  border: 1.25px solid #f3f3f3;
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.file-input__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.file-input__label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: var(--bs-gray-100);
}
.file-input__label p {
  margin: 5px;
  padding: 0;
}

.file-input__label .iconify {
  height: 45px;
  width: 45px;
}

#display__snapshot {
  position: relative;
  width: 200px;
  height: auto;
  margin: 0 auto;
}
.delete__btn {
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 2px;
  box-shadow: var(--bs-box-shadow);
  z-index: 10;
}
.iconify {
  height: 25px;
  width: 25px;
}
</style>
