<template>


  <div class="sidebar-left">
    <div class="sidebar">
      <div class="sidebar-content email-app-sidebar">
        <div class="email-app-menu">
          <div class="form-group-compose text-center compose-btn">
            <div class="btn-group w-100">
              <button class="compose-email btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2"
                data-bs-toggle="dropdown" aria-expanded="false">
                New Request
              </button>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2" style="">
                <router-link :to="{ name: 'ExportEdit' }" class="dropdown-item">
                  Sign a document</router-link>
              </div>
            </div>
          </div>
          <div class="sidebar-menu-list ps">
            <div class="list-group list-group-messages">
              <a href="#dashboard/index.php?status=1" class="list-group-item list-group-item-action active">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-mail font-medium-3 me-50">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span class="align-middle">Inbox</span>
                <span class="badge badge-light-primary rounded-pill float-end">0</span>
              </a>
              <a href="#dashboard/index.php?status=3" class="list-group-item list-group-item-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-send font-medium-3 me-50">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span class="align-middle">Sent</span>
                <span class="badge badge-light-success rounded-pill float-end">0</span>
              </a>
              <a href="#dashboard/index.php?status=2" class="list-group-item list-group-item-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-edit-2 font-medium-3 me-50">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
                <span class="align-middle">Draft</span>
                <span class="badge badge-light-warning rounded-pill float-end">1</span>
              </a>
              <a href="#dashboard/index.php?status=4" class="list-group-item list-group-item-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-star font-medium-3 me-50">
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                  </polygon>
                </svg>
                <span class="align-middle">Completed</span>
                <span class="badge badge-light-info rounded-pill float-end">0</span>
              </a>

              <a href="#dashboard/index.php?status=5" class="list-group-item list-group-item-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-trash font-medium-3 me-50">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                <span class="align-middle">Trash</span>
              </a>
            </div>
            <!-- <hr /> -->
            <h6 class="section-label mt-3 mb-1 px-2 d-none">Labels</h6>
            <div class="list-group list-group-labels d-none">
              <a href="#" class="list-group-item list-group-item-action"><span
                  class="bullet bullet-sm bullet-success me-1"></span>Personal</a>
              <a href="#" class="list-group-item list-group-item-action"><span
                  class="bullet bullet-sm bullet-primary me-1"></span>Company</a>
              <a href="#" class="list-group-item list-group-item-action"><span
                  class="bullet bullet-sm bullet-warning me-1"></span>Important</a>
              <a href="#" class="list-group-item list-group-item-action"><span
                  class="bullet bullet-sm bullet-danger me-1"></span>Private</a>
            </div>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px">
              <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; height: 416px; right: 0px">
              <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 384px"></div>
            </div>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px">
              <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px">
              <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  
</template>

<script setup>
// import { createNamespacedHelpers } from "vuex-composition-helpers/dist";
// const { useActions } = createNamespacedHelpers("document");
// const { useGetters, useActions } = createNamespacedHelpers("document");

// const { documents } = useGetters(["documents"]);

</script>

<style scoped>
</style>
