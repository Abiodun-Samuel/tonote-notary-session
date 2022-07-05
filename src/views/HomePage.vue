<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 mt-2">
        <h3 class="fw-bolder">Test Audio and Video Quality</h3>
        <p>
          Before your session is set up, please confirm that your camera and
          microphone are switched on.
        </p>
      </div>
    </div>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-7 col-md-6 my-2">
        <div class="video-container">
          <div class="notification">
            <div
              data-aos="zoom-in"
              class="my-1"
              v-if="!camera && display_notification_2"
            >
              <span class="d-flex justify-content-center align-items-center">
                <Icon icon="carbon:video-off-filled" class="mx-1" /> Camera Off
              </span>
            </div>
            <div
              data-aos="zoom-in"
              class="my-1"
              v-if="camera && display_notification_2"
            >
              <span class="d-flex justify-content-center align-items-center">
                <!-- <span class="iconify" data-icon="fa:microphone-slash"></span> -->
                <Icon icon="carbon:video-filled" class="mx-1" /> Camera On
              </span>
            </div>
            <div
              data-aos="zoom-in"
              class="my-1"
              v-if="!microphone && display_notification"
            >
              <span class="d-flex justify-content-center align-items-center">
                <Icon icon="fa:microphone-slash" class="mx-1" /> Microphone Off
              </span>
            </div>
            <div
              data-aos="zoom-in"
              class="my-1"
              v-if="microphone & display_notification"
            >
              <span class="d-flex justify-content-center align-items-center">
                <Icon icon="fa:microphone" class="mx-1" /> Microphone On
              </span>
            </div>
          </div>

          <video class="shadow video" id="video" playsinline autoplay></video>
          <div
            class="icon__container d-flex justify-content-between align-items-end"
          >
            <canvas
              class="shadow-sm hidden__two"
              id="canvas_two"
              width="36"
              height="36"
            ></canvas>

            <div class="d-flex justify-content-start align-items-center">
              <button v-if="!camera" class="icon__off" @click="camera__on">
                <Icon icon="carbon:video-off-filled" />
              </button>
              <button v-if="camera" class="icon__on" @click="camera__off">
                <Icon icon="carbon:video-filled" />
              </button>

              <button
                v-if="!microphone"
                class="icon__off"
                @click="microphone__on"
              >
                <Icon icon="fa:microphone-slash" />
              </button>
              <button
                v-if="microphone"
                class="icon__on"
                @click="microphone__off"
              >
                <Icon icon="fa-solid:microphone" />
              </button>
            </div>
            <canvas
              class="shadow-sm hidden__two"
              id="canvas"
              width="36"
              height="36"
            ></canvas>
          </div>
        </div>
      </div>

      <div class="col-lg-5 col-md-6 my-2">
        <div v-if="$route.params.role !== 'notary'" class="display-container">
          <div style="height: 30px" class="mb-3 ps-5">
            <h4 class="element fw-bold"></h4>
          </div>
          <div class="text-center">
            <!-- <a href="/video" class="btn btn-primary">Proceed</a> -->
            <button class="btn btn-primary" disabled>Proceed</button><br />
            <router-link target="_blank" to="/video">Proceed</router-link>
          </div>
        </div>
        <div v-else>
          <!-- <div class="my-3"> -->
          <h4 class="element hidden"></h4>
          <div class="display-container">
            <h4 class="fw-bold mb-3 ps-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, dicta
            </h4>
            <div class="text-center">
              <a
                target="_blank"
                href="/video"
                class="btn btn-primary d-inline-block"
                >Proceed</a
              >
            </div>
            <!-- <button class="btn btn-primary">
                Proceed
              </button> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useToast } from "vue-toastification";
import AOS from "aos";
import Typed from "typed.js";

export default {
  data() {
    return {
      camera: false,
      microphone: false,
      display_notification: true,
      display_notification_2: true,
    };
  },
  components: {
    Icon,
  },
  methods: {
    async camera__on(event) {
      this.on_2();
      this.camera = true;
      const video__player = document.querySelector("video#video");
      let videoStream;
      const video_constraints = {
        audio: false,
        video: {
          aspectRatio: 1.777777778,
          frameRate: { max: 30 },
          facingMode: { exact: "user" },
        },
      };
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          video_constraints
        );
        videoStream = stream;
        video__player.srcObject = videoStream;
        this.show_cam_on();
      } catch (e) {
        console.error("navigator.getUserMedia error:", e);
      }
      // `event` is the native DOM event
      if (event) {
        // alert(event.target.tagName)
      }
      this.off_2();
    },
    async camera__off(event) {
      this.on_2();
      this.camera = false;
      const video__player = document.querySelector("video#video");
      let videoStream;
      const video_constraints = {
        audio: false,
        video: {
          aspectRatio: 1.777777778,
          frameRate: { max: 30 },
          facingMode: { exact: "user" },
        },
      };
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          video_constraints
        );
        videoStream = stream;

        const tracks = videoStream.getTracks();
        tracks.forEach(function (track) {
          track.stop();
          track.enabled = false;
        });
        video__player.srcObject = null;
        this.show_cam_off();
      } catch (e) {
        console.error("navigator.getUserMedia error:", e);
      }
      // `event` is the native DOM event
      if (event) {
        // alert(event.target.tagName)
      }
      this.off_2();
    },
    async microphone__on() {
      this.on();
      // const audio_constraints = {
      //   audio: true,
      //   video: false,
      // };
      // const video__player = document.querySelector("video#video");
      // let videoStream;
      this.microphone = true;
      try {
        // const stream = await navigator.mediaDevices.getUserMedia(audio_constraints);
        // videoStream = stream;
        // video__player.srcObject = videoStream;
      } catch (e) {
        console.error("navigator.getUserMedia error:", e);
      }
      this.show_mic_on();
      // `event` is the native DOM event
      this.off();
    },
    async microphone__off() {
      this.on();
      // const audio_constraints = {
      //   audio: true,
      //   video: false,
      // };
      this.microphone = false;

      // const video__player = document.querySelector("video#video");
      // let videoStream;
      try {
        // const stream = await navigator.mediaDevices.getUserMedia(audio_constraints);
        // videoStream = stream;
        // video__player.srcObject = videoStream;
      } catch (e) {
        console.error("navigator.getUserMedia error:", e);
      }
      this.show_mic_off();
      this.off();
    },
    show_cam_off() {
      this.toast.error(`Camera is Off`);
    },
    show_cam_on() {
      this.toast.success(`Camera is On`);
    },
    show_mic_off() {
      this.toast.error(`Microphone is Off`);
    },
    show_mic_on() {
      this.toast.success(`Microphone is On`);
    },
    off() {
      setTimeout(() => {
        this.display_notification = false;
      }, 1000);
    },
    off_2() {
      setTimeout(() => {
        this.display_notification_2 = false;
      }, 1000);
    },
    on() {
      this.display_notification = true;
    },
    on_2() {
      this.display_notification_2 = true;
    },
  },
  setup() {
    const toast = useToast();
    return { toast };
  },

  mounted() {
    AOS.init({ duration: 500 });
    new Typed(".element", {
      strings: ["Connecting to the next available notary..."],
      typeSpeed: 40,
      showCursor: false,
      loop: true,
      backSpeed: 0,
    });
  },
};
</script>

<style scoped>
/* h4{
  color: var(--bs-gray-900);
} */
.video-container {
  height: 380px;
  position: relative;
}
.icon__container {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
.display-container {
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video {
  width: 100%;
  height: 100%;
  background-color: #000000;
  border-radius: 5px;
}

.hidden {
  display: none;
}

.hidden__two {
  visibility: hidden;
}

.waiting {
  animation: blink 1s linear infinite;
  font-weight: 500;
  letter-spacing: 0.5px;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

#canvas {
  background-color: #dde7fc;
  border-radius: 50%;
}

#canvas_two {
  background-color: #dde7fc;
  border-radius: 50%;
}

#background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(transparent, #00035f, transparent);
  background-size: 100% 7px;
  animation: bg 1s infinite linear;
  z-index: 2;
  opacity: 0.3;
}

@keyframes bg {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 8px 8px;
  }
}

.btn-primary {
  background-color: #003bb3 !important;
  /* color: #FFF !important; */
  border-color: #003bb3 !important;
}
.btn {
  /* box-shadow: none; */
  font-weight: 400;
  font-size: 1rem;
}
.hidden__two {
  visibility: hidden;
}
.icon__off {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1.5px solid var(--bs-danger);
  background: transparent;
  padding: 3px;
  margin: 5px;
  font-size: 1rem;
  color: var(--bs-danger);
}
.icon__on {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1.5px solid var(--bs-gray-600);
  background: transparent;
  padding: 3px;
  font-size: 1rem;
  margin: 5px;
  color: var(--bs-gray-600);
}
.notification {
  position: absolute;
  top: 5px;
  right: 30%;
  left: 30%;
}
.notification span {
  background: var(--bs-gray-900);
  border-radius: 1rem;
  color: var(--bs-gray-600);
  padding: 0.5rem;
}
button:disabled,
button[disabled] {
  background: #f2f2f2 !important;
  color: #7b7b7b !important;
  border-color: #f2f2f2 !important;
  border: none;
  cursor: not-allowed !important;
  box-shadow: none;
}
</style>
