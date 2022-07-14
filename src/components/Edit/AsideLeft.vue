<template>
  <div class="col-lg-2 d-sm-none d-lg-block">
    <div class="d-flex justify-content-center">
      <div class="sidebar-nav card px-2 pt-2" style="width: 200px">
        <div style="height: 100vh">
          <div>
            Edit Tools
            <hr />
          </div>
          <div class="form-check form-check-primary form-switch">
            <input type="checkbox" class="form-check-input" ref="addMeAsSigner" id="collapse-sidebar-switch"
              @click="addMe" />
            <label class="form-check-label" for="collapse-sidebar-switch">Add me as Signer</label>
          </div>

          <hr />

          <div class="border-bottom mb-1 pb-1">
            <div class="d-grid col-lg-12 col-md-12 mb-1 mb-lg-0">
              <button type="button" class="btn btn-primary waves-effect waves-float waves-light"
                @click="addSignerModal = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span> Add Signer</span>
              </button>
            </div>
          </div>

          <div class="signer-list">
            <div class="border-bottom mb-1 pb-1">
              <label class="form-label">Select a signer</label>
              <select class="form-select select2" @change="selectSigner" v-model="signerEmail">
                <option value="">Select Signer</option>
                <option v-for="(signer, index) in watchDocument.participants" :value="signer.user.email"
                  :data-email="signer.user.email" :key="index">
                  {{ signer.user.first_name }} {{ signer.user.last_name }}
                </option>
              </select>
            </div>
          </div>

          <div class="signer-wrapper">
            <ToolKits :tools="toolKit" @bindTool="addMouseMoveListener" />
          </div>
        </div>
      </div>
    </div>
  </div>


  <ModalComp :show="addSignerModal" @close="addSignerModal = false">
    <template #header>
      <h5 class="modal-title">Add Signer</h5>
    </template>

    <template #body>
      <AddSigner @close="addSignerModal = false" />
    </template>
  </ModalComp>

  <ModalComp :show="removeMeFromSignerModal" :size="'modal-sm'" @close="removeMeFromSignerModal = false">
    <template #header>
      <h4 class="ms-auto">Warning</h4>
    </template>
    <template #body>
      <h4 class="modal-title text-center">
        Are you sure you want to remove this signer ?
      </h4>
      <p class="modal-text text-center">
        This will remove all tools added in the signer's name
      </p>
    </template>
    <template #footer>
      <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-outline-danger" @click="yesRemove">
          Yes Remove
        </button>
      </div>
    </template>
  </ModalComp>
</template>

<script setup>
import ModalComp from "@/modules/components/ModalComp.vue";
import AddSigner from "@/modules/components/AddSigner.vue";

import { ref, onMounted, defineProps, watch } from "vue";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";

import "jquery/dist/jquery.min";
import $ from "jquery";
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/draggable.css'
import 'jquery-ui/themes/base/resizable.css'
import 'jquery-ui/ui/widgets/resizable'
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min'

import { useRoute } from "vue-router";
import ToolKits from "./ToolKits.vue";

const { useActions, useGetters } = createNamespacedHelpers(["document"]);

/* ------- // *** Props from views\documents\DocumentEdit.vue (PARENT) ------ */
const props = defineProps({ userDocument: Object, chunkFileId: String })
const { userDocument } = useGetters(["userDocument"]);

const watchDocument = ref('')
const watchFileId = ref('')

watch(
  () => [userDocument.value, props.chunkFileId],
  ([newUserDoc, newChunkF]) => {
    watchDocument.value = newUserDoc
    watchFileId.value = newChunkF
  },
  { deep: true }
);

const { addSelf } = useActions(["addSelf"]);
const { editTools } = useActions(["editTools"]);
// const { removeParticipant } = useActions(["removeParticipant"]);

const { resourceTools } = useActions(["resourceTools"]);

const route = useRoute();

const addMeAsSigner = ref("");
const addSignerModal = ref(false);
const removeMeFromSignerModal = ref(false);
const hasPresence = ref(false);
const signerEmail = ref("");
const participantId = ref("");

const tempStorage = ref(null);
const tool_class = ref("");
const tool_id = ref("");
const toolKit = ref({});
const tempData = ref(false)


const yesRemove = () => {
  // removeParticipant(userDocument.participants[0].id);
  addMeAsSigner.value.checked = false;
  removeMeFromSignerModal.value = false;
};

const addMe = () => {
  if (addMeAsSigner.value.checked === true) return addSelf(route.query.document_id);

  removeMeFromSignerModal.value = true;
  addMeAsSigner.value.checked = true;
};

const selectSigner = () => {
  hasPresence.value = signerEmail.value != "" ? true : false;
  const participantArray = watchDocument.value.participants;

  participantArray.map((params) => {
    if (params.user.email == signerEmail.value)
      return (participantId.value = params.user.id);
  });

  /* --- // *** Get selected userId and userEmail to populate the tools-kit --- */
  toolKit.value = {
    hasPresence: hasPresence.value,
    userEmail: signerEmail.value,
    userId: participantId.value,
  }

};

/* -------------------------------------------------------------------------- */
/*          // !==================== jQuery IN Vue ==================         */
/* -------------------------------------------------------------------------- */

const addMouseMoveListener = (params) => {
  tempData.value = true

  let count = 1;
  tempStorage.value = params
  $(document).bind("mousemove", function (e) {
    count = count + 1;
    tool_id.value = count;

    $("." + params.toolId).attr("id", count);
    $("." + params.toolId).css({
      display: "block",
      left: e.pageX + 10,
      top: e.pageY,
    });
  });
};


$(document).on("click", "#mainWrapper", function (e) {
  if (tempStorage.value == null) return
  $("#" + tool_id.value).css("display", "none");
  $(document).unbind("mousemove");

  let posX = $(this).offset().left;
  let posY = $(this).offset().top;
  let x = e.pageX - posX;
  let y = e.pageY - posY;

  const toolName = tempStorage.value.tool_name;

  if (toolName == "Sign" || toolName == "Initial") {
    checkSignatureOwnership();
    tool_class.value = "tool-box tool-style main-element";
  } else if (toolName == "Textarea") {
    tool_class.value = "main-element";
  } else if (toolName == "Photo") {
    tool_class.value = "main-element photo-style";
  } else {
    tool_class.value = "tool-box main-element";
  }

  let saveTools = {
    document_upload_id: watchFileId.value,
    user_id: participantId.value,
    append_print_id: "",
    tool_name: toolName,
    tool_class: tool_class.value,
    tool_pos_top: y.toString(),
    tool_pos_left: x.toString()
  }

  dragElement();
  if (tempData.value === true) {
    resourceTools(saveTools)
    tempData.value = false
  }

});

const checkSignatureOwnership = () => { };

function dragElement() {
  $(".main-element").each(function () {
    const currentElement = $(this);

    currentElement.draggable({
      containment: "#mainWrapper", scroll: false,
      stop: (e, ui) => {
        let tool_id = e.target.dataset.id

        const editObj = {
          document_upload_id: e.target.dataset.doc,
          append_print_id: "",
          tool_name: e.target.dataset.name,
          tool_pos_top: ui.position.top.toString(),
          tool_pos_left: ui.position.left.toString()
        }

        editTools({ id: tool_id, payload: editObj })
      },
    });
  });
}

function resizeElement() {
  $(".resize").each(function () {
    const $elem = $(this);
    // const tool_id = $(this).data("id");
    $elem.resizable({
      option: true,
      // handles: "se, sw, nw",
      handles: "se",
      // stop: function (e, ui) {
      // let tool_width = ui.size.width;
      // let tool_height = ui.size.height;
      // updateSize(tool_id, tool_width, tool_height);
      // },

    });
  });
}

// $(document).on("click", "#imagePreview", function () {
//   $(".photo-layer").css("display", "flex");
//   $("#imgupload").trigger("click");
//   setTimeout(function () {
//     $(".photo-layer").css("display", "none");
//   }, 5000);
// });


function removeMouseMoveListener() {
  $(document).unbind("mousemove");
}

/* -------------------------------------------------------------------------- */
/*          // !==================== jQuery IN Vue ==================         */
/* -------------------------------------------------------------------------- */
onMounted(() => {
  dragElement();
  resizeElement()
  removeMouseMoveListener()
  $(document).unbind("mousemove");

  if (
    userDocument.value.participants.length != 0 &&
    userDocument.value.participants[0].id != ""
  )
    return (addMeAsSigner.value.checked = true);
});
</script>

<style scoped>
/* @import "@/assets/admin/css/doc-edit.css"; */
</style>
