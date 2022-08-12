<template>
  <div class="agora-video-player" ref="player" :id="domId"></div>
</template>

<script>
export default {
  name: "stream-player",
  props: ["localAudio", "localVideo", "domId"],
  mounted() {
    this.$nextTick(function () {
      if (this.localVideo) {
        this.localVideo.play(`${this.domId}`, { fit: "cover" }, (err) => {
          if (err && err.status !== "aborted") {
            console.warn("trigger autoplay policy");
          }
        });
      }
    });
  },
  beforeUnmount() {
    if (this.localVideo) {
      if (this.localVideo.isPlaying()) {
        this.localVideo.stop();
      }
      this.localVideo.close();
    }
  },
};
</script>

<style>
.agora-video-player {
  height: 100%;
  width: 100%;
}
</style>
