// server-side/models/FounderPost.js
const mongoose = require('mongoose');

const founderPostSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  funded: {
    type: String,
    required: true
  },
  left_for_fund: {
    type: String,
    required: true
  },
  raised: {
    type: Number,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  project_pic: {
    type: String,
    required: true
  },
  required_funding: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FounderPost', founderPostSchema);
