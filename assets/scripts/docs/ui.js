'use strict';

const myFilesTemplate = require('../templates/my-files.handlebars');

const showMyDocs = function(myFiles){
  console.log(myFiles);
  $('#content').html(myFilesTemplate(myFiles));
};

// const getAllDocsSuccess = function(data){
//   console.log(data);
// };

// const getDocSuccess = function(data){
//   console.log(data);
// };
//
// const createDocSuccess = function(data){
//   console.log(data);
// };
//
// const updateDocSuccess = function(data){
//   console.log(data);
// };
//
// const deleteDocSuccess = function(data){
//   console.log(data);
// };

const failure = function(error){
  console.error(error);
};

module.exports = {
  showMyDocs,
  // getAllDocsSuccess,
  // getDocSuccess,
  // createDocSuccess,
  // updateDocSuccess,
  // deleteDocSuccess,
  failure,
};