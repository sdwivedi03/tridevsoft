const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: { type: String, required: true },
  category: { type: [String], default: [] },
  logoUrl: { type: String, required: true },
  bannerUrl: { type: String },
  appUrl: { type: String, required: true },
  repoUrl: { type: String },
  docsUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  techStack: { type: [String], default: [] },
  status: { type: String, enum: ['Active', 'In Development', 'Archived'], default: 'Active' },
  deleted: { type: Boolean, default: false }, // soft delete flag
}, { timestamps: true });

module.exports = mongoose.model('App', appSchema);