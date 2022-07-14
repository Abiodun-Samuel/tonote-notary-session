<template>
  <div class="col-lg-2 d-sm-none d-lg-block">
    <div class="d-flex justify-content-center">
      <div class="sidebar-nav card px-2 pt-2" style="width: 172px">
        <div style="height: 100vh">
          <div style="font-size: 12px">
            Tool Management
            <hr />
          </div>
          <button type="button" class="btn btn-sm btn-outline-dark waves-effect" @click="updateSignatureModal = true">
            Update Signature
          </button>

          <hr />

          <div>
            <div class="btn-group align-items-center">
              <div class="btn btn-sm waves-effect waves-float waves-light">
                Added Tool
              </div>
              <div class="btn btn-sm waves-effect waves-float waves-light">
                0
              </div>
            </div>
          </div>

          <hr />

          <div id="list-signers">
            <p>Signers</p>

            <div class="avatar-group">
              <div v-for="(init, index) in userDocument.participants" data-popup="tooltip-custom"
                data-bs-placement="top" :title="init.user.first_name + ' ' + init.user.last_name" class="avatar pull-up"
                :data-bs-original-title="init.user.first_name" :data-id="init.id" :key="index">
                <div class="avatar-content">{{ getFirstLetters(init.user.first_name + ' ' + init.user.last_name) }}
                </div>
              </div>
            </div>

          </div>

          <hr />

          <p role="button" class="isHover" @click="editSignerModal = true">
            View all signers <span>&rightarrow;</span>
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="tool-box tool-style textTool ui-draggable ui-draggable-handle" id="textTool">
      <input aria-invalid="false" type="text" class="textareaTool" value="" />
    </div> -->

    <div class="tool-box textTool" id="textTool">
      <input aria-invalid="false" type="text" class="v-textareaTool" value="">
      <img src="@/modules/assets/anchor.svg" alt="anchor">
    </div>

    <div class="tool-box tool-style signTool" id="signTool">
      <div class="element">Sign<i data-feather='arrow-down-right'></i></div>
    </div>

    <div class="tool-box tool-style initialTool" id="initialTool">
      <div class="element">Initial<i data-feather='arrow-down-right'></i></div>
    </div>

    <div class="tool-box tool-style stampTool" id="stampTool">
      <div class="element">Stamp<i data-feather='arrow-down-right'></i></div>
    </div>

    <div class="tool-box tool-style sealTool" id="sealTool">
      <div class="element">Seal<i data-feather='arrow-down-right'></i></div>
    </div>

    <div class="tool-box dateTool" id="dateTool">
      <div class="element">Date<i data-feather='arrow-down-right'></i></div>
    </div>

    <div class="tool-box photoTool" id="photoTool">
      <div class="element border" style="width: 200px; height:200px">
        <img src="@/modules/assets/noimage.jpg" class="img-fluid" alt="Default">
      </div>
    </div>
  </div>

  <ModalComp :show="editSignerModal" @close="editSignerModal = false">
    <template #header>
      <h5 class="modal-title">Edit Signer</h5>
    </template>

    <template #body>
      <form @submit.prevent="onAddParticipant">
        <div id="addSignerErrorMsg" class="text-center text-danger"></div>
        <div class="modal-body">
          <table class="table table-bordered" id="expense-item-table">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th class="text-center">+/-</th>
            </tr>
            <tr class="mtable" v-for="(row, index) in userDocument.participants" :key="index">
              <td>
                <input type="text" name="first_name" v-model="row.user.first_name" placeholder="First Name"
                  class="form-control form-control-sm first_name" required />
              </td>
              <td>
                <input type="text" name="last_name" v-model="row.user.last_name" placeholder="Last Name"
                  class="form-control form-control-sm last_name" required />
              </td>
              <td>
                <input type="email" name="email" v-model="row.user.email" placeholder="Email"
                  class="form-control form-control-sm email" required />
              </td>
              <td>
                <input type="text" name="phone" v-model="row.user.phone" placeholder="Phone Number"
                  class="form-control form-control-sm phone" />
              </td>
              <td>
                <button type="button" class="btn btn-sm btn-outline-danger" @click="removeParticipant(row.id)">
                  &minus;
                </button>
              </td>
            </tr>
          </table>
        </div>
        <button type="submit" class="btn btn-primary waves-effect waves-float waves-light d-block ms-auto me-2">
          Update Signer
        </button>
      </form>
    </template>
  </ModalComp>

  <!-- <Teleport to="body"> -->
  <ModalComp :show="updateSignatureModal" @close="updateSignatureModal = false">
    <template #header>
      <h4 class="modal-title">Update Your Signature</h4>
    </template>

    <template #body>
      <TabWrapper>
        <TabContent title="Draw">
          <SignaturePad />
        </TabContent>

        <TabContent title="Type">
          <SignatureTyped />
        </TabContent>

        <TabContent title="Upload">
          <SignatureUpload />
        </TabContent>
      </TabWrapper>
    </template>
  </ModalComp>
  <!-- </Teleport> -->
</template>

<script setup>
import SignaturePad from "@/modules/components/Signature/SignaturePad.vue";
import ModalComp from "@/modules/components/ModalComp.vue";
import TabContent from "@/modules/components/Tab/TabContent.vue";
import TabWrapper from "@/modules/components/Tab/TabWrapper.vue";
import SignatureTyped from "@/modules/components/Signature/SignatureTyped.vue";
import SignatureUpload from "@/modules/components/Signature/SignatureUpload.vue";
// import AddSigner from "@/modules/components/AddSigner.vue";


import { ref, watch } from "vue";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";

const updateSignatureModal = ref(false);
const editSignerModal = ref(false);
const fullName = ref('');
const nameInitials = ref('');
const initialObj = ref([])
const participantArray = ref([])

const getFirstLetters = (str) => {
  const firstLetters = str
    .split(' ')
    .map(word => word[0])
    .join('');

  return firstLetters;
}

const { useGetters, useActions } = createNamespacedHelpers(["document"]);
const { userDocument } = useGetters(["userDocument"]);
const { signers } = useGetters(["signers"]);
const { removeParticipant } = useActions(["removeParticipant"]);
const { getUserDocument } = useActions(["getUserDocument"]);

initialObj.value = []
participantArray.value = userDocument.value.participants;
participantArray.value.map(params => {
  fullName.value = params.user.first_name + ' ' + params.user.last_name
  nameInitials.value = getFirstLetters(fullName.value)
  initialObj.value.push({ id: params.id, initials: nameInitials.value, fullName: fullName.value })
});

watch(
  () => signers,
  (newValue) => {
    getUserDocument(newValue.value.id)
  },
  { deep: true }
)

const onAddParticipant = (params) => {
  console.log('formObj to be submitted: ', params);
  // addParticipant(formObj)
  // formObj = [];
  // rows.value = [{ first_name: "", last_name: "", email: "", action: "+" }]
};

</script>

<style scoped>
/* @import "@/modules/assets/admin/css/doc-edit.css"; */

p.isHover {
  background-image: linear-gradient(to right,
      #003bb3,
      #003bb3 50%,
      #000 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

p.isHover:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #003bb3;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

p.isHover:hover {
  background-position: 0;
}

p.isHover:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
