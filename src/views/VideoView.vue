<template>
  <div class="container">
    <div class="my-1 py-1"></div>

    <div class="row">
      <!-- toolbox display section  -->
      <div class="col-lg-2 my-2">
        <ToolBox />
      </div>

      <!-- document display section  -->
      <div class="col-lg-7 my-2">
        <DocumentBox />
      </div>

      <!-- video display section  -->
      <div class="col-lg-3 my-2">
        <VideoCallBox />
      </div>
    </div>
  </div>
</template>

<script>
import DocumentBox from "@/components/VideoSession/DocumentBox.vue";
import VideoCallBox from "@/components/VideoSession/VideoCallBox.vue";
import ToolBox from "@/components/Document/ToolBox.vue";

export default {
  data() {
    return {};
  },
  components: {
    DocumentBox,
    VideoCallBox,
    ToolBox,
  },
};
</script>

<style></style>
