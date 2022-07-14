<template>
  <div
    class="horizontal-layout horizontal-menu 1-column navbar-floating footer-static"
    data-open="hover"
    data-menu="horizontal-menu"
    data-col="1-column"
  >
    <TheHeader :data="headerObj" />

    <div class="app-content content email-application">
      <div class="content-overlay"></div>
      <div class="header-navbar shadow-lg"></div>

      <div class="content-area-wrapper container-xxl p-0">
        <div class="container-fluid">
          <div class="row my-2">
            <div class="col-lg-12">
              <div class="float-end">
                <button
                  class="btn btn-sm btn-outline-primary waves-effect"
                  @click="isDownload = !isDownload"
                >
                  Download
                </button>
                <router-link
                  :to="{ name: 'Notary' }"
                  class="btn btn-sm btn-outline-primary waves-effect"
                  style="margin: 0 5px"
                >
                  Request a Notary
                </router-link>
                <button
                  class="btn btn-sm btn-primary waves-effect waves-float waves-light"
                  data-bs-toggle="modal"
                  data-bs-target="#finishModal"
                >
                  Share document
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            <AsideLeft :chunkFileId="pageId" />

            <MainContent @docId="getDocId" />

            <AsideRight :userDocument="userDocument" />
          </div>
        </div>

        <div
          class="modal fade"
          id="finishModal"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Notice</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <div class="text-center py-1">
                  <p>
                    The following people will be invited to sign this document
                  </p>
                  <div class="table-responsive text-center mb-1 p-1">
                    <table
                      class="table table-bordered table-sm"
                      style="font-size: 1rem"
                    >
                      <thead>
                        <tr class="bg-secondary text-white">
                          <td>Name</td>
                          <td>Email</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Frances Udeme</td>
                          <td>udeme@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <button class="btn btn-outline-primary waves-effect">
                      Send now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="selectSignatureModal">
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Pick a resource to append</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form method="post" id="editToolForms">
                <div class="modal-body">
                  <input
                    type="hidden"
                    id=""
                    name="saveTool[document_id]"
                    value="<?php echo $_GET['document_id']?> "
                  />
                  <input
                    type="hidden"
                    id="tool_id"
                    name="editTool[tool_id]"
                    placeholder="tool_id"
                  />
                  <input
                    type="hidden"
                    id="tool_name"
                    name="editTool[tool_name]"
                    placeholder="tool_name"
                  />
                  <input
                    type="hidden"
                    id="pos_top"
                    name="editTool[tool_pos_top]"
                  />
                  <input
                    type="hidden"
                    id="pos_left"
                    name="editTool[tool_pos_left]"
                  />
                  <input
                    type="hidden"
                    id="filename"
                    name="editTool[filename]"
                    placeholder="filename"
                  />
                  <input
                    type="hidden"
                    id="file"
                    name="editTool[file]"
                    placeholder="filename"
                  />

                  <div id="showElement"></div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    class="btn btn-primary waves-effect waves-float waves-light"
                    id="append"
                  >
                    Append
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "@/modules/export/Header/TheHeader.vue";
import TheFooter from "@/modules/export/Footer/TheFooter.vue";

import AsideLeft from "@/modules/export/Edit/AsideLeft.vue";
import AsideRight from "@/modules/export/Edit/AsideRight.vue";
import MainContent from "@/modules/export/Edit/MainContent.vue";

import { ref, onMounted, watch } from "vue";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";
import { useRouter } from "vue-router";
import html2pdf from "html2pdf.js";

const route = useRouter();
const pageId = ref("");
const isDownload = ref(false);
const toDownload = ref("");

watch(
  () => isDownload.value,
  (newValue) => {
    exportPDF(newValue);
    isDownload.value = false;
  },
  { deep: true }
);

const { useActions, useGetters } = createNamespacedHelpers(["document"]);

const { getUserDocument } = useActions(["getUserDocument"]);
const { userDocument } = useGetters(["userDocument"]);

const getDocId = (params) => (pageId.value = params);

const exportPDF = (params) => {
  toDownload.value = document.querySelector(".toDownload");
  if (params) {
    html2pdf(toDownload.value, {
      margin: 1,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    });
  }
};

onMounted(() => {
  getUserDocument(route.currentRoute.value.query.document_id);
});
</script>

<style scoped>
@import "@/modules/assets/admin/css/bootstrap.min.css";

.btn-outline-primary:hover:not(.disabled):not(:disabled) {
  /* background-color: rgba(115, 103, 240, 0.04); */
  background-color: #003bb3;
  /* color: #003bb3; */
  color: #fff;
}
</style>
