const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//学生数据模式
const StudentSchema = new Schema({
  id: String,
  password: String,  
  name: String,
  gender: String,
  major: String
});

//项目数据模式
const ProjectSchema = new Schema({
  id: String,
  kind: String,
  name: String,
  applyPoint: Number,
  finalPoint: Number,
  remark: String
})

//数据模型
const StudentModel = mongoose.model('Student', StudentSchema);
const ProjectModel = mongoose.model('Project', ProjectSchema);

Models = {
  Student: StudentModel,
  Project: ProjectModel
};

module.exports = Models;