import Api from "./Api";

const END_POINT = "v1/documents";
const DOCUMENT_PARTICIPANT_ADD_SELF = "v1/document-participant-add-self";
const DOCUMENT_PARTICIPANTS = "v1/document-participants";
const DOCUMENT_RESOURCE_TOOLS = "v1/document-resource-tools";
// const UPLOAD_END_POINT = "v1/document-parent-uploads";



export default {
  allDocuments(token) {
    return Api.get(`${END_POINT}`, token);
  },

  showDocument(documentId) {
    return Api.get(`${END_POINT}/${documentId}`);
  },

  storeFileUpload(data) {
    /** @param data The parameter for this call is the data object */
    return Api.post(END_POINT, data);
  },

  storeSelf(documentId) {
    /** @param documentId The parameter for this call is the documentId object */
    return Api.get(`${DOCUMENT_PARTICIPANT_ADD_SELF}/${documentId}`);
  },

  storeParticipant(data) {
    /** @param data The parameter for this call is the data object */
    return Api.post(DOCUMENT_PARTICIPANTS, data);
  },

  deleteParticipant(participantId) {
    return Api.delete(`${DOCUMENT_PARTICIPANTS}/${participantId}`);
  },

  storeTools(data) {
    /** @param data The parameter for this call is the data object */
    return Api.post(DOCUMENT_RESOURCE_TOOLS, data);
  },

  updateTool(id, data) {
    return Api.put(`${DOCUMENT_RESOURCE_TOOLS}/${id}`, data);
  },

  deleteTool(toolId) {
    return Api.delete(`${DOCUMENT_RESOURCE_TOOLS}/${toolId}`);
  },
};
