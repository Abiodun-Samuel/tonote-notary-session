<template>
  <div class="agora-video-player" ref="player" :id="domId"></div>
</template>

<script>
export default {
  props: ["remoteStream", "domId"],
  mounted() {
    //  console.log(this.remoteStream);
    this.$nextTick(function () {
      if (this.remoteStream) {
        //   this.remoteStream.videoTrack.play(
        //     `${this.domId}`,
        //     { fit: "cover" },
        //     (err) => {
        //       if (err && err.status !== "aborted") {
        //         console.warn("trigger autoplay policy");
        //       }
        //     }
        //   );
        this.remoteStream.audioTrack.play();
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
