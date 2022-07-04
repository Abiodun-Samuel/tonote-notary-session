<template>
  <div class="document__box">
    <h4 class="text-center">Document</h4>
    <div class="image__placeholder" @click="showModal">
      <img
        draggable="true"
        class="passport"
        v-if="!imageNotReady"
        :src="imgSrc"
        alt=""
      />
      <!-- <div v-for="key in count" :key="key">
            <input type="text" v-model="values['dynamic-field-'+key]" size="50" placeholder="Another Field" :id="key">
         </div> -->
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
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vitae
      impedit totam repudiandae dicta officia dolorum dolore eligendi, quam
      fugit blanditiis doloremque sed atque consectetur consequatur molestiae
      harum qui, ab corrupti dignissimos delectus unde necessitatibus in quas?
      Tempore, et exercitationem repellendus, earum quas molestiae aliquid
      voluptatum quae eos, cum nisi! Illo quia officia ea nam, repellat
      blanditiis nemo sint mollitia illum, sed aliquam. Nostrum facere
      laudantium, doloremque beatae repellat atque ipsum illum nesciunt? Facilis
      numquam labore soluta sint dolore temporibus magni dolorum minima placeat
      neque ab minus voluptatem eaque consectetur architecto, pariatur unde
      nulla quis iste quidem esse eveniet quia? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Corporis velit nulla veritatis tempore quos.
      Magni, ipsum ipsam cupiditate recusandae vitae tempore optio quisquam
      nisi. Sed laudantium accusantium quam magnam veritatis deserunt aspernatur
      soluta, iste mollitia minus quia in architecto esse earum consequatur!
      Voluptatum debitis, doloribus itaque soluta illum exercitationem,
      voluptatem, fugiat quibusdam fuga est porro repellendus inventore
      perferendis dicta dolores deserunt. Sint, et. Debitis id saepe nulla
      possimus animi fuga vero ea illum, quibusdam officia rerum corrupti eos
      blanditiis soluta totam voluptatem est culpa et voluptates. Placeat,
      cumque quae iste minus expedita nisi dicta, eum atque deleniti maxime
      inventore explicabo assumenda dolore eaque optio modi? Reprehenderit quis
      dolore labore accusamus quasi atque dolor libero laudantium iure
      exercitationem nisi debitis excepturi, sint ex earum voluptatum nulla
      minima esse ullam? Velit autem molestias porro distinctio blanditiis
      aliquid, temporibus aperiam praesentium mollitia dolore deleniti, nesciunt
      veritatis officia corrupti sit fugit dolorum sint illum? Ab pariatur
      recusandae dolore perferendis reiciendis autem eos quae labore, eveniet,
      necessitatibus in? Doloremque iste sint labore ipsam in eveniet eaque
      animi, quibusdam alias. Laudantium optio officiis assumenda quasi quia,
      omnis neque. Assumenda commodi, reiciendis, sequi officiis architecto hic,
      provident nemo ullam amet reprehenderit iste pariatur temporibus tempora
      mollitia cumque? Earum, aliquid voluptatum. Porro dolore provident nihil
      consectetur sequi nisi, beatae illo ex reprehenderit distinctio iste
      laborum optio. Esse, molestias dolorum quibusdam praesentium similique
      nobis nisi. Nobis totam tenetur nesciunt libero cum? Commodi debitis
      reiciendis minima, repellendus doloribus provident, accusamus qui vero
      repellat et quam laudantium aperiam cumque dolores itaque hic asperiores
      facere nostrum accusantium pariatur possimus laboriosam iste. Illo
      quisquam magni quis at, dolor pariatur impedit possimus a doloremque
      tenetur beatae quaerat, quos assumenda enim? Dolorum expedita ipsam,
      voluptates sequi impedit, officia placeat labore voluptate quos quae
      tempora sed dolor vitae sit cupiditate possimus accusantium molestias
      omnis et rem nostrum incidunt nesciunt! Perspiciatis modi eius fuga in
      quaerat laborum neque? Impedit nesciunt aperiam ex nam. Temporibus
      voluptas neque esse labore, recusandae facere, blanditiis totam ex,
      necessitatibus assumenda quia! Saepe eaque facere optio esse maiores
      ratione aspernatur provident non pariatur eius, veniam suscipit odit
      repellendus asperiores rem delectus, ullam culpa libero quam hic ex ipsum
      voluptatum. Necessitatibus error, aspernatur fuga excepturi quas,
      molestiae ab voluptas quod fugiat veritatis aliquam tenetur vel quibusdam
      distinctio. Quod officiis quia iure neque nesciunt reprehenderit enim
      unde, quas, suscipit, eos aliquid! Consectetur quae quaerat, nesciunt
      dolor nemo ex repellat doloribus corporis quibusdam reprehenderit! Natus
      molestiae officia provident repudiandae atque non iusto placeat temporibus
      beatae. Temporibus officiis atque eius obcaecati, magnam quis, ea dolore
      necessitatibus dicta amet consequuntur incidunt aspernatur pariatur
      aliquid exercitationem aliquam natus quibusdam dolorum, totam quidem
      impedit. Eius voluptatum, corrupti quisquam, consequuntur expedita
      excepturi doloribus nisi velit at libero esse! Ea quam quia expedita
      consectetur. Quae est officiis et optio dolorem incidunt nam cumque
      temporibus ipsum, quibusdam accusantium, debitis expedita sed tempora,
      alias earum atque vel eius neque. Iste officiis qui sit nostrum? Facere
      fuga delectus magni velit aliquid distinctio minima exercitationem
      incidunt quisquam iure autem, est at neque saepe repudiandae quis
      voluptate aspernatur sapiente, repellendus rem, nisi culpa quam doloribus.
      Omnis tempore consequatur necessitatibus numquam accusamus quo et, eos
      nobis dolorem, voluptatum voluptatibus in illo fuga impedit. Ea explicabo
      aperiam labore non perspiciatis, reiciendis itaque deserunt possimus vel
      aspernatur? Laboriosam incidunt minima neque voluptatum ratione harum
      impedit, expedita rem, voluptates praesentium illo aliquam libero beatae
      dolores eius cum nobis a repellat qui sit! Quos atque odit consequuntur,
      cum maiores adipisci at tempore quod quam culpa porro voluptates fuga
      aperiam tempora pariatur nobis, consequatur quisquam corporis numquam
      perspiciatis asperiores quis? Nam pariatur, quis itaque esse temporibus
      iure eveniet veritatis, incidunt repellendus consectetur accusantium
      soluta facilis reprehenderit, veniam atque distinctio? Fugit nulla, rerum
      dolores corrupti harum, alias provident non aliquam aspernatur
      reprehenderit magni impedit, sit unde similique autem repellat minima
      dolor. Vitae atque, obcaecati deserunt iste ipsa rem dolorum aut minima.
      Nihil nam exercitationem corporis iste! Temporibus, officia neque,
      possimus eos rerum quisquam deleniti id aliquam corrupti magnam quibusdam,
      pariatur voluptas nostrum ipsa modi sequi laudantium labore dolores!
      Maxime a placeat molestiae quaerat rerum repellendus repudiandae nesciunt
      quod tenetur voluptate maiores fugiat, error quis culpa possimus iste
      laudantium eos amet ullam quidem libero. Fugit, animi laborum velit
      impedit explicabo dignissimos sint voluptatibus accusantium id optio
      dolorem temporibus accusamus debitis vel cum error veritatis consequuntur
      porro repudiandae perspiciatis unde quidem quibusdam magnam? Sapiente
      quisquam deserunt ipsa illum obcaecati! Sunt aliquid voluptatibus vel
      quas, quia earum expedita facere! Nisi inventore nemo est omnis maiores,
      et suscipit eum eveniet asperiores perspiciatis ipsum vel doloribus nihil
      nostrum placeat tenetur officia. Illo animi consectetur nam? Ad, rem enim
      expedita accusantium sit molestiae eligendi vitae magnam sunt. Commodi
      aliquid tempora voluptatum magni enim sequi nam sint sapiente libero saepe
      atque, similique quaerat fugit repudiandae reprehenderit deleniti delectus
      provident nesciunt explicabo incidunt veritatis. Nam magnam incidunt
      veritatis consectetur quaerat mollitia dicta recusandae expedita nostrum
      adipisci iure suscipit id repudiandae earum aliquid laudantium praesentium
      alias minima delectus, blanditiis fuga, quisquam sequi. Cupiditate commodi
      veritatis odio temporibus repudiandae aspernatur natus enim quisquam quia,
      dolore ipsum perspiciatis quis laboriosam sed dolorum explicabo hic rem
      quo quaerat repellendus cumque corrupti nihil. Culpa iure doloremque
      similique veniam ducimus perspiciatis veritatis pariatur. Consequatur,
      laudantium praesentium sit nesciunt optio sequi distinctio alias quasi
      corporis repudiandae. Illo quo enim corporis magni nihil fugiat numquam
      molestiae, est optio necessitatibus molestias esse assumenda! A ratione
      quaerat hic praesentium explicabo pariatur commodi? Distinctio quia
      repudiandae tenetur, iste a incidunt alias animi! Beatae voluptatem
      doloremque iure aliquid fugiat ipsa, sequi consequatur totam placeat
      possimus blanditiis, voluptatum consectetur similique, asperiores
      quibusdam reprehenderit eum ex quia. Enim, repellat tempora reprehenderit
      velit voluptates dolor perspiciatis repellendus reiciendis debitis
      distinctio iure! Ab veniam, dolore saepe maxime reprehenderit sed quidem
      laudantium voluptatum. Provident reiciendis qui consectetur quasi
      doloribus at similique doloremque. Quisquam ducimus natus saepe
      necessitatibus soluta molestiae nulla voluptates officia! Nisi voluptas
      unde sapiente deleniti explicabo adipisci fuga cumque. Sint porro ut
      excepturi laboriosam laborum fugit at nam, voluptatum ipsum vitae animi
      consequatur hic ex deleniti blanditiis iste esse exercitationem natus quas
      tenetur eius omnis quisquam. Dignissimos.
    </p>
  </div>

  <Modal v-model="isShow" :close="closeModal" @before-enter="beforeEnter">
    <div class="modal">
      <div class="modal__content">
        <div class="modal__header">
          <button
            class="btn btn-sm bg-white text-danger px-0 py-0 close-btn shadow-lg"
            @click="closeModal"
          >
            <span
              class="iconify"
              @click="closeModal"
              data-icon="eva:close-fill"
            ></span>
          </button>
        </div>
        <div class="modal__body">
          <h4 class="my-2 fw-bold lh-base">
            Do you want to upload your image or take a snap shot?
          </h4>
          <div>
            <tabs
              :options="{ useUrlFragment: false }"
              @clicked="tabClicked"
              @changed="tabChanged"
              nav-item-class="nav-item"
              cache-lifetime="0"
            >
              <tab name="Upload" data-aos="fade-right">
                <div class="file-input">
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    class="file-input__input"
                    @change="handleImageUpload"
                  />
                  <div class="d-flex justify-content-center align-items-center">
                    <label class="file-input__label" for="file-input">
                      <!-- <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="upload"
                        class="svg-inline--fa fa-upload fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        ></path>
                      </svg> -->
                      <span class="iconify" data-icon="bi:image"></span>
                      <p>Upload Image</p>
                    </label>
                  </div>
                </div>
                <img
                  v-if="uploadImgSrc"
                  :src="uploadImgSrc"
                  id="display__snapshot"
                  class="mt-2"
                />
              </tab>

              <tab name="Snap Shot" data-aos="fade-right">
                <div id="" class="web-camera-container">
                  <div class="camera-button">
                    <button
                      type="button"
                      class="button is-rounded"
                      :class="{
                        'is-primary': !isCameraOpen,
                        'is-danger': isCameraOpen,
                      }"
                      @click="toggleCamera"
                    >
                      <span v-if="!isCameraOpen">
                        <span
                          class="iconify"
                          data-icon="bi:camera-video-fill"
                        ></span>
                      </span>
                      <!-- <span v-else>
                        <span
                          class="iconify"
                          data-icon="bi:camera-video-off-fill"
                        ></span>
                      </span> -->
                    </button>
                  </div>
                  <p data-aos="zoom-in" v-if="timer" class="mt-1 timer">
                    {{ timer }}
                  </p>
                  <!-- <div class="camera-loading"> -->
                  <div
                    v-show="isCameraOpen && isLoading"
                    class="camera-loading"
                  >
                    <ul class="loader-circle">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>

                  <div
                    v-if="isCameraOpen"
                    v-show="!isLoading"
                    class="camera-box"
                    :class="{ flash: isShotPhoto }"
                  >
                    <div
                      class="camera-shutter"
                      :class="{ flash: isShotPhoto }"
                    ></div>

                    <video
                      v-show="!isPhotoTaken"
                      ref="camera"
                      :width="450"
                      :height="337.5"
                      autoplay
                    ></video>

                    <canvas
                      v-show="isPhotoTaken"
                      id="photoTaken"
                      ref="canvas"
                      :width="450"
                      :height="337.5"
                    ></canvas>
                  </div>

                  <div
                    v-if="isCameraOpen && !isLoading"
                    class="camera-shoot mt-0 py-0 mb-1"
                  >
                    <button type="button" class="button" @click="takePhoto">
                      <span class="iconify" data-icon="bxs:camera"></span>
                    </button>
                  </div>

                  <!-- <div
                    v-if="isPhotoTaken && isCameraOpen"
                    class="camera-download"
                  > -->
                  <img
                    v-if="snapImgSrc"
                    :src="snapImgSrc"
                    id="display__snapshot"
                  />
                  <!-- <a
                      id="downloadPhoto"
                      download="my-photo.jpg"
                      class="button"
                      role="button"
                      @click="downloadImage"
                    >
                      Download
                    </a> -->
                  <!-- </div> -->
                </div>
              </tab>
            </tabs>
          </div>
        </div>
        <div
          class="modal__footer mt-3 gap-1 d-flex justify-content-end align-items-center"
        >
          <button class="btn btn-primary btn-sm" @click="closeModal">
            Cancel
          </button>
          <button
            :disabled="isDisabled"
            class="btn btn-primary btn-sm"
            @click="proceed"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
// import { ref } from "vue";
import AOS from "aos";

export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: "#",
      isShow: false,
      imageNotReady: true,
      uploadImgSrc: null,
      snapImgSrc: null,
      imgSrc: null,
      isDisabled: true,
      rawImg: "",
      timer: null,
    };
  },
  methods: {
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

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("src", canvas);
    },

    showModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
      this.isCameraOpen = false;
      // this.imageNotReady = false;
      this.snapImgSrc = "";
      this.uploadImgSrc = "";
      // this.imgSrc = "";
      // this.stopCameraStream();
    },
    beforeEnter() {
      this.isCameraOpen = false;
      // this.uploadImgSrc = null;
      // this.snapImgSrc = null;
      // this.isDisabled = true;
      // this.imageNotReady = true;
      // this.stopCameraStream();
    },
    proceed() {
      this.imageNotReady = false;
      this.snapImgSrc = "";
      this.uploadImgSrc = "";
      this.closeModal();
    },
    handleImageUpload() {
      // Check for the File API support.
      // if (window.File && window.FileReader && window.FileList && window.Blob) {
      //   document
      //     .getElementById("files")
      //     .addEventListener("change", handleFileSelect, false);
      // } else {
      //   alert("The File APIs are not fully supported in this browser.");
      // }

      // function handleFileSelect() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      //   let ;
      // this.imageNotReady = true;
      reader.onloadend = () => {
        this.rawImg = reader.result;
        this.uploadImgSrc = this.rawImg;
        this.imgSrc = this.uploadImgSrc;
        this.isDisabled = false;
      };
      reader.readAsDataURL(file);
      // console.log(file);
      // this.imgSrc = file;
      // console.log(file);
    },
    //  },
  },
  mounted() {
    AOS.init({ duration: 500 });
  },
};

// const img = ref(null);
</script>

<style>
#display__snapshot {
  width: 50%;
  height: auto;
}
.tabs-component .tabs-component-tabs {
  display: flex !important;
  justify-content: center;
  list-style: none;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.tabs-component .tabs-component-tabs .nav-item a.tabs-component-tab-a {
  border-bottom: 1.5px solid var(--bs-gray-100);
  padding: 6px;
  color: var(--bs-gray-100);
}

.tabs-component
  .tabs-component-tabs
  .nav-item
  a.tabs-component-tab-a.is-active {
  color: var(--bs-purple);
  font-weight: bold;
  border-bottom: 2px solid var(--bs-purple);
}

.modal {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 500px;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: var(--bs-box-shadow);
  z-index: 100000;
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

.file-input {
  width: 100%;
  height: 150px;
  border: 1.2px solid var(--bs-gray-100);
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
  /* border-radius: 4px; */
  font-size: 1rem;
  /* font-weight: 600; */
  color: var(--bs-gray-100);
  /* padding: 100%; */
  /* background-color: var(--bs-purple); */
  /* box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25); */
}
.file-input__label p {
  margin: 5px;
  padding: 0;
}

.file-input__label .iconify {
  height: 45px;
  width: 45px;
}
</style>
