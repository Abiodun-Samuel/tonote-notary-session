<template>
  <div class="row">
    <div class="col-12">
      <div class="email-label">
        <router-link :to="{ name: 'document.edit', query: { document_id: props.document.id } }"
          class="mail-label badge rounded-pill badge-light-primary">Edit
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header email-detail-head">
            <div class="user-details d-flex justify-content-between align-items-center flex-wrap">
              <div class="mail-items">
                <h5 class="mb-0">
                  {{ props.document.title.substring(0, 20) }}...
                </h5>
                <div class=" email-info-dropup dropdown">
                  <span role="button" class="dropdown-toggle font-small-3 text-muted" id="card_top01"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Participants: ({{ props.document.participants.length }})
                  </span>
                  <div class="dropdown-menu" aria-labelledby="card_top01">
                    <table class="table table-sm table-hover">
                      <tbody>
                        <tr v-for="(signer, index) in props.document.participants" :key="index">
                          <td>{{ ++index }}.</td>
                          <td>{{ signer.user.first_name }}</td>
                          <td>{{ signer.user.email }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="mail-meta-item d-flex align-items-center">
              <small class="mail-date-time text-muted">
                {{ createdAt(document.created_at) }}
              </small>
              <div class="dropdown ms-50">
                <div role="button" class="dropdown-toggle hide-arrow" id="email_more" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-more-vertical font-medium-2">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </div>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="email_more">
                  <div class="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-corner-up-left me-50">
                      <polyline points="9 14 4 9 9 4"></polyline>
                      <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                    </svg>
                    Reply
                  </div>
                  <div class="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-corner-up-right me-50">
                      <polyline points="15 14 20 9 15 4"></polyline>
                      <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                    </svg>
                    Forward
                  </div>
                  <div class="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-trash-2 me-50">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                      </path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body mail-message-wrapper pt-2">
            <div class="mail-message">
              <div v-for="(doc, index) in props.document.documentUploads" class="border mb-1" :key="index">
                <span class="d-block text-center">
                  <img :src="doc.file" class="img-fluid" :alt="doc.id">
                </span>

                <div class="clearfix">
                  <h6 class="float-end">Page {{ ++index }} of {{ props.document.documentUploads.length }} </h6>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
      <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
    </div>
    <div class="ps__rail-y" style="top: 0px; height: 426px; right: 0px;">
      <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 221px;"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import moment from 'moment'

const props = defineProps({ document: Object });

const createdAt = (dateParams) => {
  return moment(dateParams).format('YYYY-MM-DD [at] hh:mm a');
}

</script>

<style scoped>
</style>