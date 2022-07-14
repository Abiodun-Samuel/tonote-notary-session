<template>
  <div>
    <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent
      @drop.prevent="toggleActive" :class="{ 'active-dropzone': active }" class="dropzone">
      <label for="dropzoneFile" class="custom-file-upload">
        <div class="text-center">
          <h4>Drop file here to start uploading</h4>
          <h4>OR</h4>
          <h4 class="btn btn-primary">Select File</h4>
          <div class="text-muted mt-1" style="font-size:12px">
            <slot name="format">PDF, DOC, DOCX, PNG, JPG or JPEG only</slot>
          </div>
          <slot name="input">
            <input type="file" id="dropzoneFile" multiple class="dropzoneFile" />
          </slot>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",
  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return { active, toggleActive };
  },
};
</script>

<style scoped>
.dropzone {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #999;
  background-color: #fff;
  transition: 0.3s ease all;
  border-radius: 3px;
}

label {
  transition: 0.3s ease all;
}

.dropzone input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #00cfe8;
}

.custom-file-upload {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
