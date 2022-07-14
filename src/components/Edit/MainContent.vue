<template>
  <div class="col-lg-8">
    <div class="card">
      <div class="card-body" id="mainWrapper">

        <div v-for="(doc, index) in userDocument.documentUploads" :key="index" class="shadow">

          <div v-for="(tool, index) in doc.tools" :key="index">
            <template v-if="tool.tool_name == 'Textarea'">
              <dl :id="tool.tool_id" :class="[tool.tool_class, tool.tool_name]" :data-doc="doc.id"
                :data-user="tool.tool_user" :data-name="tool.tool_name" :data-id="tool.id"
                :style="{ top: tool.tool_pos_top + 'px', left: tool.tool_pos_left + 'px' }">
                <div class="text-wrapper">
                  <button type="button" @click="remove(tool.id)" class="btn-close removeItem" :data-id="tool.id"
                    style="right:0"></button>

                  <textarea class="textareaTool resize" :class="{ 'border-light': tool.tool_user != '' }"
                    placeholder="Input text here"
                    :style="{ width: tool.tool_width + 'px', height: tool.tool_height + 'px' }"
                    :data-id="tool.id">Text value</textarea>

                  <div class="name-style" ref="userId" :data-id="tool.user_id">{{ tool.user_id }}</div>
                </div>
              </dl>
            </template>
            <template v-else-if="tool.tool_name == 'Photo'">
              <div class="image-area" :class="tool.tool_class" :id="tool.tool_id" :data-doc="doc.id"
                :data-user="tool.tool_user" :data-name="tool.tool_name" :data-id="tool.id"
                :style="{ width: tool.tool_width + 'px', height: tool.tool_height + 'px', top: tool.tool_pos_top + 'px', left: tool.tool_pos_left + 'px' }">
                <div class="photo-layer">
                  <span>Processing...</span>
                </div>

                <input type="file" id="imgupload" @click="uploadImage = true" style="display:none" accept="image/*"
                  :data-id="tool.id" :data-doc="doc.id" :data-user="tool.tool_user" />

                <template v-if="tool.append_print_id == null">
                  <img src="@/modules/assets/noimage.jpg" @click="uploadImage = true" class="img-fluid"
                    id="imagePreview" alt="Preview">
                </template>
                <template v-else>
                  <img :src="tool.file" class="img-fluid" id="imagePreview" alt="Preview">
                </template>

                <button type="button" @click="remove(tool.id)" class="btn-close removePhoto"
                  :data-id="tool.id"></button>
                <div class="name-style" ref="userId" :data-id="tool.user_id">{{ tool.user_id }}</div>
              </div>
            </template>
            <template v-else>
              <dl class="bg-fill" :class="[tool.tool_class, tool.tool_name]" :data-user="tool.user_id"
                :data-name="tool.tool_name" :data-id="tool.id" :data-doc="doc.id"
                :style="{ top: tool.tool_pos_top + 'px', left: tool.tool_pos_left + 'px' }">

                <div>
                  <button type="button" @click="remove(tool.id)" class="btn-close deleteItem"
                    :data-id="tool.id"></button>
                  <div class="element">{{ tool.tool_name }}</div>
                </div>
                <div class="name-style" ref="userId" :data-id="tool.user_id">{{ fullName }}</div>
              </dl>
            </template>
          </div>

          <div class=" mb-1 toDownload">
            <div class=" text-center">
              <img :src="doc.file" @click="getDocumentUploadId(doc.id)" class="img-fluid" :alt="doc.id">
            </div>

            <div class="clearfix">
              <h6 class="float-end me-1">Page {{ ++index }} of {{ userDocument.documentUploads.length }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalComp :show="uploadImage" @close="uploadImage = false">
    <template #header>
      <h4 class="modal-title">Image Management</h4>
    </template>

    <template #body>
      <TabWrapper>
        <TabContent title="Upload">
          <div class="custom-size">
            <DropZone @drop.prevent="drop" @change="selectedFile">
              <template #format>
                PNG, JPEG OR JPG
              </template>
              <template #input>
                <input type="file" id="dropzoneFile" class="dropzoneFile" accept="image/png, image/jpg, image/jpeg" />
              </template>
            </DropZone>
          </div>

          <div class="d-flex justify-content-center align-items-center my-2">
            <template v-if="!isSelected">
              <img src="@/modules/assets/noimage.jpg" class="img-thumbnail" width="100" alt="preview" />
            </template>
            <template v-else>
              <img :src="preview" class="img-thumbnail" width="120" alt="preview" />
            </template>
          </div>

          <button class="btn btn-primary d-block ms-auto mt-2" :class="{ disabled: !isSelected }"
            @click="uploadSignature">
            Append
          </button>
        </TabContent>

        <TabContent title="Snap">
          Take a picture
        </TabContent>
      </TabWrapper>
    </template>
  </ModalComp>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";

import ModalComp from "@/modules/export/components/ModalComp.vue";
import TabContent from "@/modules/export/components/Tab/TabContent.vue";
import TabWrapper from "@/modules/export/components/Tab/TabWrapper.vue";
import DropZone from "@/modules/export/components/CustomDropZone.vue";

const { useGetters, useActions } = createNamespacedHelpers("document");


const { userDocument } = useGetters(["userDocument"]);
const { removeTool } = useActions(["removeTool"]);

const { prints } = useGetters('prints/print', ['prints']);
// const { prints } = useGetters(["prints"]);
console.log("PRINTS: ", prints)

// const { prints } = useGetters(["prints"]);
// const { savePrint } = useActions(["savePrint"]);
// console.log("PRINTS: ", prints)

// const participantId = ref('')
const uploadImage = ref(false);
const fullName = ref('-')
const userId = ref(null)
const preview = ref(null)
const isSelected = ref(false);
let dropzoneFile = ref("");


function preparedFile(file) {
  let reader = new FileReader();

  reader.onloadend = () => {
    preview.value = reader.result
  };

  reader.readAsDataURL(file);
  isSelected.value = true;
}

const drop = (e) => {
  let dropFiles = (dropzoneFile.value = e.dataTransfer.files[0]);
  preparedFile(dropFiles);
};

const selectedFile = () => {
  let dropFiles = (dropzoneFile.value =
    document.querySelector(".dropzoneFile").files[0]);
  preparedFile(dropFiles);
};

const uploadSignature = () => {
  const uploadFile = {
    file: preview.value,
    type: "Upload",
    category: "Upload",
  };

  preview.value = require('@/modules/assets/noimage.jpg')
  // savePrint(uploadFile)
  console.log("TO BE UPLOADED: ", uploadFile)
  uploadImage.value = false
};


const remove = (params) => removeTool(params);

const participantArray = userDocument.value.participants;

onMounted(() => {

  if (userId.value != null) {
    userId.value.map(item => {
      participantArray.map((params) => {
        console.log('RESULTING ERROR CHECK: ', params)
        if (params.user.id == item.dataset.id) {
          fullName.value = params.user.first_name + ' ' + params.user.last_name
          item.innerText = "***" + fullName.value + "***"
        }
      });
    })
  }
})

const emit = defineEmits(['docId'])
const getDocumentUploadId = (params) => {
  emit('docId', params)
}

</script>

<style scoped>
/* @import "@/modules/assets/admin/css/doc-edit.css"; */


@media (min-width: 576px) {
  .custom-size {
    width: 75%;
    display: block;
    margin: 0 auto;
  }
}
</style>
