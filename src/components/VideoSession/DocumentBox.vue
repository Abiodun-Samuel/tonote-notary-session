<template>
  <div class="document__box" id="document__box">
    <h4 class="text-center">Document</h4>
    <div
      class="image__placeholder"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <img class="passport" v-if="show" :src="passport" />
    </div>

    <!-- <div class="parent">
      <DraggableContainer :disabled="true"> -->
    <!-- <Vue3DraggableResizable
      key="12"
      :parent="true"
      :initW="100"
      :initH="100"
      v-model:x="x1"
      v-model:y="y1"
      v-model:w="w1"
      v-model:h="h1"
      v-model:active="active"
      :draggable="true"
      :resizable="true"
      @activated="print('activated')"
      @deactivated="print('deactivated')"
      @drag-start="print('drag-start')"
      @resize-start="print('resize-start')"
      @dragging="print('dragging')"
      @resizing="print('resizing')"
      @drag-end="dragEndHandle"
      @resize-end="print('resize-end')"
    >
      test
    </Vue3DraggableResizable> -->

    <Vue3DraggableResizable key="1" :parent="true"
      >Lorem, ipsum.</Vue3DraggableResizable
    >

    <Vue3DraggableResizable key="4" :parent="true"
      >Lorem, ipsum.</Vue3DraggableResizable
    >

    <Vue3DraggableResizable
      key="1"
      :parent="true"
      :initW="50"
      :initH="50"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      v-model:active="active"
      :draggable="true"
      :resizable="true"
      @activated="print('activated')"
      @deactivated="print('deactivated')"
      @drag-start="print('drag-start')"
      @resize-start="print('resize-start')"
      @dragging="print('dragging')"
      @resizing="print('resizing')"
      @drag-end="dragEndHandle"
      @resize-end="print('resize-end')"
    >
      another two
    </Vue3DraggableResizable>
    <!-- </DraggableContainer>
    </div> -->

    <div class="card-body mail-message-wrapper pt-2">
      <div class="mail-message">
        <div v-for="(doc, index) in files" class="border mb-1" :key="index">
          <span class="d-block text-center">
            <img :src="doc.file" class="img-fluid" :alt="doc.id" />
          </span>

          <div class="clearfix">
            <h6 class="float-end">Page {{ ++index }} of {{ files.length }}</h6>
          </div>
        </div>
      </div>
    </div>

    <button @click="download">download</button>
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
        <div class="modal-header">
          <h4 class="fw-bolder m-auto py-1">
            Upload image, take a picture or select
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="">
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

<script lang="js">
import AOS from "aos";
import TabNav from "../Tab/TabNav.vue";
import TabComponent from "../Tab/TabComponent.vue";
import ImageUpload from "../Document/ImageUpload";
import TakePicture from "../Document/TakePicture.vue";
import SelectImage from "../Document/SelectImage.vue";
import { mapState } from "vuex";
import store from "@/store";
import domtoimage from "dom-to-image-more";
// import { saveAs } from 'file-saver';

// import { DraggableContainer } from 'vue3-draggable-resizable'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

export default {
  data() {
    return {
      selected: "Upload",
      x: 100,
      y: 100,
      h: 100,
      w: 100,
      x1: 50,
      y1: 50,
      w1: 100,
      h1:150,
      active: false
    };
  },
  components: { TabNav, TabComponent, ImageUpload, TakePicture, SelectImage, Vue3DraggableResizable },
  computed: {
    ...mapState("documentStore", { passport: (state) => state.passport }),
    ...mapState("documentStore", { isDisabled: (state) => state.isDisabled }),
    ...mapState("documentStore", { show: (state) => state.show }),
    ...mapState("documentStore", {
      files: (state) => state.documents.files.documentUploads,
    }),
  },
  methods: {
    download(){
      domtoimage
  .toPng(document.getElementById("document__box"), { quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
  });
    },
    dragEndHandle( {x, y}){
      console.log({x,y});
    },
    print(val) {
      console.log(val)
    },
    setSelected(tab) {
      this.selected = tab;
    },
    proceed() {
      store.commit("documentStore/showPassport");
      store.dispatch("documentStore/postPassport");
    },
  },

  mounted() {
    AOS.init({ duration: 500 });
    store.dispatch(
      "documentStore/getDocument",
      "ba67f5db-e70f-43a6-9dcb-56620495b7c5"
    );
  },
};
</script>

<style>
.parent {
  width: 800px;
  height: 800px;
  position: absolute;
  /* top: 100px;
  left: 100px; */
  border: 1px solid #000;
  user-select: none;
}

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
  height: 90vh;
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
