import http from './http-commons';

class StuffDataService {
  //User
  //create 
  createUser(data) {
    return http.post("/user", data);
  }
  // login
  postLogin(data) {
    return http.post(`/user/login`, data);
  }
  //read one
  getUser(id) {
    return http.get(`/user/${id}`);
  }
  // update
  updateUser(id, data) {
    return http.post(`/user/${id}`, data);
  }
  //delete one
  deleteUser(id) {
    return http.get(`/user/${id}`);
  }

  //Documents
  //create 
  createDocument(data) {
    return http.post("/document", data);
  }
  //read all
  getDocuments(id) {
    return http.get(`/document/all/${id}`);
  }
  //read one
  getDocument(id) {
    return http.get(`/document/${id}`);
  }
  // update
  updateDocument(id, data) {
    return http.post(`/document/${id}`, data);
  }
  //delete one
  deleteDocument(id) {
    return http.get(`/document/${id}`);
  }
  uploadDocument(data) {
    return http.post(`/upload`, data);
  }



  //Sections
  //create 
  createSection(data) {
    return http.post("/section", data);
  }
  //read all
  getSections() {
    return http.get(`/section/all`);
  }
  //read one
  getSection(id) {
    return http.get(`/section/${id}`);
  }
  // update
  updateSection(id, data) {
    return http.post(`/section/${id}`, data);
  }
  //delete one
  deleteSection(id) {
    return http.get(`/section/${id}`);
  }

  //Templates
  //create 
  createTemplate(data) {
    return http.post("/template", data);
  }
  //read all
  getTemplates() {
    return http.get(`/template/all`);
  }
  //read one
  getTemplate(id) {
    return http.get(`/template/${id}`);
  }
  // update
  updateTemplate(id, data) {
    return http.post(`/template/${id}`, data);
  }
  //delete one
  deleteTemplate(id) {
    return http.get(`/template/${id}`);
  }
 
}

export default new StuffDataService(); 