<template>
  <div class="horizontal-layout horizontal-menu 1-column navbar-floating footer-static" data-open="hover"
    data-menu="horizontal-menu" data-col="1-column">
    <TheHeader :data="headerObj" />

    <div class="app-content content email-application">
      <div class="content-overlay"></div>
      <div class="header-navbar shadow-lg"></div>

      <div class="content-area-wrapper container-xxl p-0">

        <TheLeftAside />

        <div class="content-right">
          <div class="content-wrapper container-xxl p-0">
            <div class="content-header row"></div>
            <div class="content-body">
              <div class="body-content-overlay"></div>

              <div class="email-app-list">
                <div class="app-fixed-search d-flex align-items-center">
                  <div class="sidebar-toggle d-block d-lg-none ms-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-menu font-medium-5">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </div>
                  <div class="d-flex align-content-center justify-content-between w-100">
                    <div class="input-group input-group-merge">
                      <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-search text-muted">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </span>
                      <input type="text" class="form-control" id="email-search" placeholder="Search email"
                        aria-label="Search..." aria-describedby="email-search" />
                    </div>
                  </div>
                </div>
                <div class="app-action">
                  <div class="action-left">
                    <div class="form-check selectAll">
                      <input type="checkbox" class="form-check-input" id="selectAllCheck" />
                      <label class="form-check-label fw-bolder ps-25" for="selectAllCheck">Select All</label>
                    </div>
                  </div>
                  <div class="action-right">
                    <ul class="list-inline m-0">
                      <li class="list-inline-item mail-delete">
                        <span class="action-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                            </path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="email-user-list ps ps--active-y">
                  <ul class="email-media-list">
                    <li v-for="(file, index) in documents" :key="index" class="d-flex user-mail">
                      <div class="mail-left pe-50">
                        <div class="user-action">
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="customCheck1">
                            <label class="form-check-label" for="customCheck1"></label>
                          </div>
                        </div>
                      </div>

                      <div class="mail-body" @click="getDocument(file.id)">
                        <div class="mail-details" data-id="62bc1b89641c7">
                          <div class="mail-items">
                            <h5 class="mb-25 text-dark"><b>{{ file.title.substring(0, 20) }}...</b>
                            </h5>
                            <span class="text-truncate">🎯 <b>Participants</b>: ({{ file.participants.length }})
                            </span>
                          </div>

                          <div class="mail-meta-item">
                            <div>Last Updated</div>
                            <span class="me-50 bullet bullet-warning bullet-sm"></span>
                            <span class="mail-date">{{ dateTime(file.updated_at) }}</span>
                          </div>
                        </div>

                      </div>
                    </li>
                  </ul>

                  <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                  </div>
                  <div class="ps__rail-y" style="top: 0px; height: 84px; right: 0px;">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 15px;"></div>
                  </div>
                </div>

              </div>

              <div class="email-app-details" :class="{ show: isHidden }">
                <div class="email-detail-header">
                  <div class="email-header-left d-flex align-items-center" @click="isHidden = !isHidden" role="button">
                    <span class="go-back me-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-chevron-left font-medium-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </span>
                    <h4 class="email-subject mb-0">Back</h4>
                  </div>
                  <div class="email-header-right ms-2 ps-1">
                    <ul class="list-inline m-0"></ul>
                  </div>
                </div>

                <div class="email-scroll-area ps view">

                  <DocumentShow :document="document" />

                  <div class="ps__rail-x" style="left: 0px; bottom: 0px">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
                  </div>
                  <div class="ps__rail-y" style="top: 0px; right: 0px">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
                  </div>
                </div>
              </div>

              <!--/ Detailed Email View -->
              <div class="modal modal-sticky" id="compose-mail" data-bs-keyboard="false">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                  <div class="modal-content p-0">
                    <div class="modal-header">
                      <h5 class="modal-title">Compose Mail</h5>
                      <div class="modal-actions">
                        <a href="#" class="text-body me-75">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-minus">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </a>
                        <a href="#" class="text-body me-75 compose-maximize">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-maximize-2">
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <polyline points="9 21 3 21 3 15"></polyline>
                            <line x1="21" y1="3" x2="14" y2="10"></line>
                            <line x1="3" y1="21" x2="10" y2="14"></line>
                          </svg>
                        </a>
                        <a class="text-body" href="#" data-bs-dismiss="modal" aria-label="Close">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div class="modal-body flex-grow-1 p-0">
                      <form class="compose-form">
                        <div class="compose-mail-form-field select2-primary">
                          <label for="email-to" class="form-label">To: </label>
                          <div class="flex-grow-1">
                            <div class="position-relative">
                              <div class="position-relative">
                                <div class="position-relative">
                                  <select class="select2 form-select w-100 select2-hidden-accessible" id="email-to"
                                    multiple="" tabindex="-1" aria-hidden="true" data-select2-id="email-to">
                                    <option data-avatar="1-small.png" value="Jane Foster">
                                      Jane Foster
                                    </option>
                                    <option data-avatar="3-small.png" value="Donna Frank">
                                      Donna Frank
                                    </option>
                                    <option data-avatar="5-small.png" value="Gabrielle Robertson">
                                      Gabrielle Robertson
                                    </option>
                                    <option data-avatar="7-small.png" value="Lori Spears">
                                      Lori Spears
                                    </option>
                                  </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                    data-select2-id="11" style="width: auto"><span class="selection"><span
                                        class="select2-selection select2-selection--multiple" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                        <ul class="select2-selection__rendered">
                                          <li class="select2-search select2-search--inline">
                                            <input class="select2-search__field" type="search" tabindex="-1"
                                              autocomplete="off" autocorrect="off" autocapitalize="none"
                                              spellcheck="false" role="searchbox" aria-autocomplete="list"
                                              placeholder="" style="width: 0.75em" />
                                          </li>
                                        </ul>
                                      </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                              </div>
                              <div class="position-relative">
                                <span
                                  class="select2 select2-container select2-container--default select2-hidden-accessible"
                                  dir="ltr" data-select2-id="1" style="width: auto" tabindex="-1" aria-hidden="true">
                                  <span class="selection">
                                    <span class="select2-selection select2-selection--multiple" role="combobox"
                                      aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                      <ul class="select2-selection__rendered">
                                        <li class="select2-search select2-search--inline">
                                          <input class="select2-search__field" type="search" tabindex="0"
                                            autocomplete="off" autocorrect="off" autocapitalize="none"
                                            spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder=""
                                            style="width: 0.75em" />
                                        </li>
                                      </ul>
                                    </span>
                                  </span>
                                  <span class="dropdown-wrapper" aria-hidden="true"></span> </span><span
                                  class="select2 select2-container select2-container--default" dir="ltr"
                                  data-select2-id="2" style="width: 100%"><span class="selection"><span
                                      class="select2-selection select2-selection--single" role="combobox"
                                      aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                      aria-labelledby="select2-gir8-container"><span class="select2-selection__rendered"
                                        id="select2-gir8-container" role="textbox" aria-readonly="true"></span><span
                                        class="select2-selection__arrow" role="presentation"><b
                                          role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                                    aria-hidden="true"></span></span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <a class="toggle-cc text-body me-1" href="#">Cc</a>
                            <a class="toggle-bcc text-body" href="#">Bcc</a>
                          </div>
                        </div>
                        <div class="compose-mail-form-field cc-wrapper">
                          <label for="emailCC" class="form-label">Cc: </label>
                          <div class="flex-grow-1">
                            <div class="position-relative">
                              <div class="position-relative">
                                <div class="position-relative">
                                  <select class="select2 form-select w-100 select2-hidden-accessible" id="emailCC"
                                    multiple="" tabindex="-1" aria-hidden="true" data-select2-id="emailCC">
                                    <option data-avatar="1-small.png" value="Jane Foster">
                                      Jane Foster
                                    </option>
                                    <option data-avatar="3-small.png" value="Donna Frank">
                                      Donna Frank
                                    </option>
                                    <option data-avatar="5-small.png" value="Gabrielle Robertson">
                                      Gabrielle Robertson
                                    </option>
                                    <option data-avatar="7-small.png" value="Lori Spears">
                                      Lori Spears
                                    </option>
                                  </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                    data-select2-id="16" style="width: auto"><span class="selection"><span
                                        class="select2-selection select2-selection--multiple" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                        <ul class="select2-selection__rendered">
                                          <li class="select2-search select2-search--inline">
                                            <input class="select2-search__field" type="search" tabindex="-1"
                                              autocomplete="off" autocorrect="off" autocapitalize="none"
                                              spellcheck="false" role="searchbox" aria-autocomplete="list"
                                              placeholder="" style="width: 0.75em" />
                                          </li>
                                        </ul>
                                      </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                              </div>
                              <div class="position-relative">
                                <span
                                  class="select2 select2-container select2-container--default select2-hidden-accessible"
                                  dir="ltr" data-select2-id="2" style="width: auto" tabindex="-1" aria-hidden="true">
                                  <span class="selection">
                                    <span class="select2-selection select2-selection--multiple" role="combobox"
                                      aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                      <ul class="select2-selection__rendered">
                                        <li class="select2-search select2-search--inline">
                                          <input class="select2-search__field" type="search" tabindex="0"
                                            autocomplete="off" autocorrect="off" autocapitalize="none"
                                            spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder=""
                                            style="width: 0.75em" />
                                        </li>
                                      </ul>
                                    </span>
                                  </span>
                                  <span class="dropdown-wrapper" aria-hidden="true"></span> </span><span
                                  class="select2 select2-container select2-container--default" dir="ltr"
                                  data-select2-id="4" style="width: 100%"><span class="selection"><span
                                      class="select2-selection select2-selection--single" role="combobox"
                                      aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                      aria-labelledby="select2-isoa-container"><span class="select2-selection__rendered"
                                        id="select2-isoa-container" role="textbox" aria-readonly="true"></span><span
                                        class="select2-selection__arrow" role="presentation"><b
                                          role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                                    aria-hidden="true"></span></span>
                              </div>
                            </div>
                          </div>
                          <a class="text-body toggle-cc" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-x">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </a>
                        </div>
                        <div class="compose-mail-form-field bcc-wrapper">
                          <label for="emailBCC" class="form-label">Bcc: </label>
                          <div class="flex-grow-1">
                            <div class="position-relative">
                              <div class="position-relative">
                                <div class="position-relative">
                                  <select class="select2 form-select w-100 select2-hidden-accessible" id="emailBCC"
                                    multiple="" tabindex="-1" aria-hidden="true" data-select2-id="emailBCC">
                                    <option data-avatar="1-small.png" value="Jane Foster">
                                      Jane Foster
                                    </option>
                                    <option data-avatar="3-small.png" value="Donna Frank">
                                      Donna Frank
                                    </option>
                                    <option data-avatar="5-small.png" value="Gabrielle Robertson">
                                      Gabrielle Robertson
                                    </option>
                                    <option data-avatar="7-small.png" value="Lori Spears">
                                      Lori Spears
                                    </option>
                                  </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                    data-select2-id="21" style="width: auto"><span class="selection"><span
                                        class="select2-selection select2-selection--multiple" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                        <ul class="select2-selection__rendered">
                                          <li class="select2-search select2-search--inline">
                                            <input class="select2-search__field" type="search" tabindex="-1"
                                              autocomplete="off" autocorrect="off" autocapitalize="none"
                                              spellcheck="false" role="searchbox" aria-autocomplete="list"
                                              placeholder="" style="width: 0.75em" />
                                          </li>
                                        </ul>
                                      </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                              </div>
                              <div class="position-relative">
                                <span
                                  class="select2 select2-container select2-container--default select2-hidden-accessible"
                                  dir="ltr" data-select2-id="3" style="width: auto" tabindex="-1" aria-hidden="true">
                                  <span class="selection">
                                    <span class="select2-selection select2-selection--multiple" role="combobox"
                                      aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                      <ul class="select2-selection__rendered">
                                        <li class="select2-search select2-search--inline">
                                          <input class="select2-search__field" type="search" tabindex="0"
                                            autocomplete="off" autocorrect="off" autocapitalize="none"
                                            spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder=""
                                            style="width: 0.75em" />
                                        </li>
                                      </ul>
                                    </span>
                                  </span>
                                  <span class="dropdown-wrapper" aria-hidden="true"></span> </span><span
                                  class="select2 select2-container select2-container--default" dir="ltr"
                                  data-select2-id="6" style="width: 100%"><span class="selection"><span
                                      class="select2-selection select2-selection--single" role="combobox"
                                      aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                      aria-labelledby="select2-9a9u-container"><span class="select2-selection__rendered"
                                        id="select2-9a9u-container" role="textbox" aria-readonly="true"></span><span
                                        class="select2-selection__arrow" role="presentation"><b
                                          role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                                    aria-hidden="true"></span></span>
                              </div>
                            </div>
                          </div>
                          <a class="text-body toggle-bcc" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-x">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </a>
                        </div>
                        <div class="compose-mail-form-field">
                          <label for="emailSubject" class="form-label">Subject:
                          </label>
                          <input type="text" id="emailSubject" class="form-control" placeholder="Subject"
                            name="emailSubject" />
                        </div>
                        <div id="message-editor">
                          <div class="editor ql-container ql-snow" data-placeholder="Type message...">
                            <div class="ql-editor ql-blank" data-gramm="false" contenteditable="true">
                              <p><br /></p>
                            </div>
                            <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
                            <div class="ql-tooltip ql-hidden">
                              <a class="ql-preview" rel="noopener noreferrer" target="_blank"
                                href="about:blank"></a><input type="text" data-formula="e=mc^2"
                                data-link="https://quilljs.com" data-video="Embed URL" /><a class="ql-action"></a><a
                                class="ql-remove"></a>
                            </div>
                          </div>
                          <div class="compose-editor-toolbar ql-toolbar ql-snow">
                            <span class="ql-formats me-0">
                              <span class="ql-font ql-picker">
                                <span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false"
                                  aria-controls="ql-picker-options-0" data-label="Sailec Light">
                                  <svg viewBox="0 0 18 18">
                                    <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon>
                                    <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon>
                                  </svg>
                                </span>
                                <span class="ql-picker-options" aria-hidden="true" tabindex="-1"
                                  id="ql-picker-options-0"><span tabindex="0" role="button"
                                    class="ql-picker-item ql-selected" data-label="Sailec Light"></span><span
                                    tabindex="0" role="button" class="ql-picker-item" data-value="sofia"
                                    data-label="Sofia Pro"></span><span tabindex="0" role="button"
                                    class="ql-picker-item" data-value="slabo" data-label="Slabo 27px"></span><span
                                    tabindex="0" role="button" class="ql-picker-item" data-value="roboto"
                                    data-label="Roboto Slab"></span><span tabindex="0" role="button"
                                    class="ql-picker-item" data-value="inconsolata"
                                    data-label="Inconsolata"></span><span tabindex="0" role="button"
                                    class="ql-picker-item" data-value="ubuntu" data-label="Ubuntu Mono"></span></span>
                              </span>
                              <span class="ql-font ql-picker" style="display: none"><span class="ql-picker-label"
                                  tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-0"
                                  data-label="Sailec Light"><svg viewBox="0 0 18 18">
                                    <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon>
                                    <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon>
                                  </svg></span><span class="ql-picker-options" aria-hidden="true" tabindex="-1"
                                  id="ql-picker-options-0"><span tabindex="0" role="button"
                                    class="ql-picker-item ql-selected" data-label="Sailec Light"></span><span
                                    tabindex="0" role="button" class="ql-picker-item" data-value="sofia"
                                    data-label="Sofia Pro"></span><span tabindex="0" role="button"
                                    class="ql-picker-item" data-value="slabo" data-label="Slabo 27px"></span><span
                                    tabindex="0" role="button" class="ql-picker-item" data-value="roboto"
                                    data-label="Roboto Slab"></span><span tabindex="0" role="button"
                                    class="ql-picker-item" data-value="inconsolata"
                                    data-label="Inconsolata"></span><span tabindex="0" role="button"
                                    class="ql-picker-item" data-value="ubuntu"
                                    data-label="Ubuntu Mono"></span></span></span><select class="ql-font"
                                style="display: none">
                                <option selected="">Sailec Light</option>
                                <option value="sofia">Sofia Pro</option>
                                <option value="slabo">Slabo 27px</option>
                                <option value="roboto">Roboto Slab</option>
                                <option value="inconsolata">Inconsolata</option>
                                <option value="ubuntu">Ubuntu Mono</option>
                              </select>
                            </span>
                            <span class="ql-formats me-0">
                              <button class="ql-bold" type="button">
                                <svg viewBox="0 0 18 18">
                                  <path class="ql-stroke"
                                    d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z">
                                  </path>
                                  <path class="ql-stroke"
                                    d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z">
                                  </path>
                                </svg>
                              </button>
                              <button class="ql-italic" type="button">
                                <svg viewBox="0 0 18 18">
                                  <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                                  <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                                  <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                                </svg>
                              </button>
                              <button class="ql-underline" type="button">
                                <svg viewBox="0 0 18 18">
                                  <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3">
                                  </path>
                                  <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect>
                                </svg>
                              </button>
                              <button class="ql-link" type="button">
                                <svg viewBox="0 0 18 18">
                                  <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>
                                  <path class="ql-even ql-stroke"
                                    d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z">
                                  </path>
                                  <path class="ql-even ql-stroke"
                                    d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z">
                                  </path>
                                </svg>
                              </button>
                            </span>
                          </div>
                        </div>
                        <div class="compose-footer-wrapper">
                          <div class="btn-wrapper d-flex align-items-center">
                            <div class="btn-group dropup me-1">
                              <button type="button" class="btn btn-primary waves-effect waves-float waves-light">
                                Send
                              </button>
                              <button type="button"
                                class="btn btn-primary dropdown-toggle dropdown-toggle-split waves-effect waves-float waves-light"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                data-reference="parent">
                                <span class="visually-hidden">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"> Schedule Send</a>
                              </div>
                            </div>
                            <div class="email-attachement">
                              <label for="file-input" class="form-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" class="feather feather-paperclip ms-50">
                                  <path
                                    d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                  </path>
                                </svg>
                              </label>
                              <input id="file-input" type="file" class="d-none" />
                            </div>
                          </div>
                          <div class="footer-action d-flex align-items-center">
                            <div class="dropup d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-more-vertical font-medium-2 cursor-pointer me-50" role="button"
                                id="composeActions" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                              </svg>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="composeActions">
                                <a class="dropdown-item" href="#">
                                  <span class="align-middle">Add Label</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                  <span class="align-middle">Plain text mode</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                  <span class="align-middle">Print</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                  <span class="align-middle">Check Spelling</span>
                                </a>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-trash font-medium-2 cursor-pointer"
                              data-bs-dismiss="modal">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!--/ compose email -->
            </div>
          </div>
        </div>

      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/modules/export/Header/TheHeader.vue";
import TheFooter from "@/modules/export/Footer/TheFooter.vue";
import TheLeftAside from "@/modules/export/ExportLeftAside.vue";
import DocumentShow from "@/modules/export/ExportDocumentShow.vue"
import { mapActions, mapGetters } from "vuex";

import moment from 'moment'

export default {
  name: "DocumentIndex",
  components: { TheHeader, TheFooter, TheLeftAside, DocumentShow },

  data() {
    return {
      isHidden: false,
      headerObj: {}
    }
  },

  computed: {
    ...mapGetters({
      token: "auth/token",
      profile: "auth/profile",
      documents: "document/documents",
      document: "document/userDocument",
    }),
  },

  methods: {
    ...mapActions({
      token: "auth/token",
      getUserDocuments: "document/getUserDocuments",
      getUserDocument: "document/getUserDocument",
    }),

    getDocument(params) {
      this.isHidden = true
      this.getUserDocument(params)
    },

    dateTime(value) {
      return moment(value).format('YYYY-MM-DD [at] HH:mm a');
    }
  },

  mounted() {
    this.getUserDocuments(this.token);
    this.headerObj = {
      token: this.token,
      profile: this.profile
    }

    console.log(this.headerObj)
  },
};

</script>

<style>
@import "@/modules/assets/admin/css/bootstrap.min.css";
/* @import '@/modules/assets/admin/css/app-email.min.css'; */

@media (min-width: 1440px) {
  .container-xxl {
    max-width: 1300px;
  }
}


.table> :not(caption)>* {
  padding: 0.72rem 1rem;
}

.table-bordered> :not(caption) * {
  border-width: 1px;
}

.btn:focus,
.btn-outline-primary:focus {
  outline: none !important;
  box-shadow: none !important;
}

.form-control-sm {
  padding: 0.188rem 0.857rem !important;
}

.btn-group-sm>.btn,
.btn-sm {
  padding: 0.486rem 1rem !important;
}
</style>
