const express = require("express");

const router = express.Router();

const {
  createContent,
  getAllContent,
  getContentById,
  updateContent,
  deleteContent,
} = require("../controllers/ContentController");
const { authenticate } = require("../middleware/auth");

// create content
router.post("/", createContent);

// update content
router.put("/:id", authenticate, updateContent);

// delete content
router.delete("/:id", authenticate, deleteContent);

// get all content
router.get("/", authenticate, getAllContent);

// get content by id
router.get("/:id", authenticate, getContentById);

// upload content

module.exports = router;
