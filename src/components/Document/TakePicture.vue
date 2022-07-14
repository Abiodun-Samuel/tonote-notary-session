<template>
  <div class="my-2" data-aos="zoom-in">
    <div class="camera__container">
      <div class="alert__box">
        <p class="small text-danger">
          Place your head within the box. <br />
          No glasses or face-cap. <br />
          Background must be plain.
        </p>
        <p data-aos="zoom-in" v-if="timer" class="timer">
          {{ timer }}
        </p>
      </div>
      <video ref="video" id="passport__video" autoplay></video>
      <div class="photoArea"></div>
    </div>
    <div class="control d-flex justify-content-center align-items-center">
      <button
        class="btn btn-primary d-flex justify-content-center align-items-center"
        @click="takePhoto()"
      >
        <span class="iconify" data-icon="fluent:camera-20-filled"></span>
      </button>
    </div>
    <canvas
      width="140"
      height="190"
      ref="canvas"
      style="display: none"
    ></canvas>
    <div>
      <img
        v-show="snapImgSrc"
        :src="snapImgSrc"
        class="snap__shoot"
        width="140"
        height="190"
        data-aos="zoom-in"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import AOS from "aos";
import { useStore } from "vuex";
var localMediaStream = null;
const video = ref(null);
const canvas = ref(null);
let snapImgSrc = ref(false);
const store = useStore();
const timer = ref(null);

function takePhoto() {
  if (localMediaStream) {
    let count = 3;
    timer.value = 3;
    setInterval(() => {
      if (count >= 1) {
        count--;
        timer.value = count;
      }
    }, 1000);

    setTimeout(() => {
      var ctx = canvas.value.getContext("2d");
      ctx.drawImage(video.value, 180, 80, 280, 380, 0, 0, 140, 190);
      snapImgSrc.value = canvas.value.toDataURL("image/jpeg");
      store.commit(
        "documentStore/loadPassport",
        canvas.value.toDataURL("image/jpeg")
      );
    }, 3000);
  }
}

function startCapture() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  window.URL = window.URL || window.webkitURL;

  navigator.getUserMedia(
    { video: true },
    function (stream) {
      video.value.srcObject = stream;
      localMediaStream = stream;
    },
    function (e) {
      console.log(e);
    }
  );
}

function stopCapture() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  window.URL = window.URL || window.webkitURL;

  navigator.getUserMedia(
    { video: true },
    function (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
        track.enabled = false;
      });
    },
    function (e) {
      console.log(e);
    }
  );
}

onUnmounted(() => {
  stopCapture();
});

onMounted(() => {
  AOS.init({ duration: 500 });
  startCapture();
});
</script>

<style lang="css" scoped>
.iconify {
  height: 20px;
  width: 20px;
}
button {
  border-radius: 50%;
  padding: 5px;
  height: 35px;
  width: 35px;
}

.camera__container {
  width: auto;
  height: 240px;
  position: relative;
}
.camera__container video {
  width: 100%;
  height: 100%;
  position: absolute;
}

.camera__container .photoArea {
  border: 2px dashed white;
  width: 140px;
  height: 190px;
  margin: 0 auto;
  position: relative;
  top: 40px;
}
.control {
  position: relative;
  margin-top: 6rem;
  margin-bottom: 1rem;
  z-index: 100;
}
.alert__box {
  display: flex;
  justify-content: space-between;
}
.timer {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: var(--bs-purple);
  color: #fff;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
