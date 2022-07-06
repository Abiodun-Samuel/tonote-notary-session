<template>
  <div class="document__box">
    <h4 class="text-center">Document</h4>
    <div
      class="image__placeholder"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <img class="passport" v-if="show" :src="passport" />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur
      soluta pariatur facere minima aliquam perferendis dolores velit adipisci!
      Veritatis mollitia odio, eaque repellat illo incidunt eveniet voluptatibus
      quas deserunt beatae! Nihil asperiores, officiis exercitationem voluptas
      ex consequatur velit. Doloribus pariatur totam quia debitis suscipit quis!
      Alias harum omnis sed blanditiis. Delectus saepe fugit minus veniam
      facilis ipsa illum quaerat, reprehenderit iusto et doloremque assumenda ea
      quo laboriosam animi veritatis accusamus maxime tempora voluptas pariatur
      odio tempore repellat eligendi! Sequi, amet! Aspernatur, placeat
      dignissimos! Numquam libero molestias rem tempore ea quia repudiandae
      fugiat corrupti neque suscipit voluptate porro, esse ullam!
    </p>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header my-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal__header text-center mb-2">
            <h4 class="fw-bolder">Upload image, take a picture or select</h4>
          </div>

          <div class="my-2">
            <TabNav
              :tabs="['Upload', 'Picture', 'Select']"
              :selected="selected"
              @selected="setSelected"
            >
              <TabComponent :isSelected="selected === 'Upload'">
                <ImageUpload />
              </TabComponent>
              <TabComponent :isSelected="selected === 'Picture'">
                <TakePicture />
              </TabComponent>
              <TabComponent :isSelected="selected === 'Select'">
                <SelectImage />
              </TabComponent>
            </TabNav>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isDisabled"
            @click="proceed"
            data-bs-dismiss="modal"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import TabNav from "../Tab/TabNav.vue";
import TabComponent from "../Tab/TabComponent.vue";
import ImageUpload from "../Document/ImageUpload";
import TakePicture from "../Document/TakePicture.vue";
import SelectImage from "../Document/SelectImage.vue";
import { mapState } from "vuex";
import store from "@/store";

export default {
  data() {
    return {
      selected: "Upload",
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: "#",
      isShow: false,
      imageNotReady: true,
      snapImgSrc: null,
      // imgSrc: null,
      // rawImg: "",
      timer: null,
    };
  },
  components: { TabNav, TabComponent, ImageUpload, TakePicture, SelectImage },
  computed: {
    ...mapState("documentStore", { passport: (state) => state.passport }),
    ...mapState("documentStore", { isDisabled: (state) => state.isDisabled }),
    ...mapState("documentStore", { show: (state) => state.show }),
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        //   this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(
            "May the browser didn't support or there is some errors." + error
          );
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    },

    takePhoto() {
      let count = 3;
      this.timer = 3;
      setInterval(() => {
        if (count >= 1) {
          count--;
          this.timer = count;
        }
      }, 1000);

      setTimeout(() => {
        if (!this.isPhotoTaken) {
          this.isShotPhoto = true;
          this.isDisabled = false;
          const FLASH_TIMEOUT = 50;
          setTimeout(() => {
            this.isShotPhoto = false;
          }, FLASH_TIMEOUT);
        }
        // this.isPhotoTaken = !this.isPhotoTaken;
        // this.imageNotReady = true;
        const context = this.$refs.canvas.getContext("2d");
        context.drawImage(this.$refs.camera, 0, 0, 450, 450);
        this.snapImgSrc = context.canvas.toDataURL();
        this.imgSrc = this.snapImgSrc;
      }, 3000);
    },

    // downloadImage() {
    //   const download = document.getElementById("downloadPhoto");
    //   const canvas = document
    //     .getElementById("photoTaken")
    //     .toDataURL("image/jpeg")
    //     .replace("image/jpeg", "image/octet-stream");
    //   download.setAttribute("src", canvas);
    // },

    // showModal() {
    //   this.isShow = true;
    // },
    // closeModal() {
    //   this.isShow = false;
    //   this.isCameraOpen = false;
    //   // this.imageNotReady = false;
    //   this.snapImgSrc = "";
    //   this.uploadImgSrc = "";
    //   // this.imgSrc = "";
    //   // this.stopCameraStream();
    // },
    // beforeEnter() {
    //   this.isCameraOpen = false;
    //   // this.uploadImgSrc = null;
    //   // this.snapImgSrc = null;
    //   // this.isDisabled = true;
    //   // this.imageNotReady = true;
    //   // this.stopCameraStream();
    // },
    proceed() {
      store.commit("documentStore/showPassport");
    },

    handleImageUpload() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.rawImg = reader.result;
        this.uploadImgSrc = this.rawImg;
        this.imgSrc = this.uploadImgSrc;
        this.isDisabled = false;
      };
      reader.readAsDataURL(file);
    },
    //  },
  },

  mounted() {
    AOS.init({ duration: 500 });
  },
};
</script>

<style>
#display__snapshot {
  width: 50%;
  height: auto;
}
.close-btn {
  position: absolute;
  top: 2px;
  right: 2px;
}
.document__box {
  position: relative;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: var(--bs-box-shadow);
  padding: 2rem;
}
.image__placeholder {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  /* border: 1.4px solid lightblue; */
  border-radius: 4px;
}

.passport {
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
}

.web-camera-container {
  /* margin-top: 0.5rem;
  margin-bottom: 0.5rem; */
  /* padding: 2rem; */
  /* border: 1.2px solid red;
  height: 300px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-radius: 4px; */
  /* width: 500px; */
}
.web-camera-container .camera-button {
  /* margin-bottom: 2rem; */
  /* display: flex;
  justify-content: space-between; */
}

.timer {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: var(--bs-purple);
  color: #fff;
  padding: 4px;
}

.web-camera-container .camera-box .camera-shutter {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;
}
.web-camera-container .camera-box .camera-shutter.flash {
  opacity: 1;
}
.web-camera-container .camera-shoot {
  margin: 5px 0;
}
.web-camera-container .camera-shoot button {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.web-camera-container .camera-shoot button .iconify {
  height: 30px;
  width: 30px;
  padding: 3.5px;
}
.web-camera-container .camera-loading {
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  min-height: 150px;
  margin: 3rem 0 0 -1.2rem;
}
.web-camera-container .camera-loading ul {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 999999;
  margin: 0;
}
.web-camera-container .camera-loading .loader-circle {
  display: block;
  height: 14px;
  margin: 0 auto;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  padding: 0;
}
.web-camera-container .camera-loading .loader-circle li {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  line-height: 10px;
  padding: 0;
  position: relative;
  margin: 0 0 0 4px;
  background: #999;
  animation: preload 1s infinite;
  top: -50%;
  border-radius: 100%;
}
.web-camera-container .camera-loading .loader-circle li:nth-child(2) {
  animation-delay: 0.2s;
}
.web-camera-container .camera-loading .loader-circle li:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes preload {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
