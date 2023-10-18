const { failureResponse, successResponse } = require("./utils");

const Content = require("../models/Content");

const createContent = async (req, res) => {
  try {
    const {
      name,
      description,
      genre,
      duration,
      language,
      coverPhoto,
      contentUrl,
    } = req.body;
    const content = new Content({
      name,
      description,
      genre,
      duration,
      language,
      coverPhoto,
      contentUrl,
    });
    await content.save();
    successResponse(res, "Content Created Successfully", 201);
  } catch (error) {
    // return res.status(500).json({ error: error });
    failureResponse(res, error);
  }
};

const getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      failureResponse(res, "Content not found");
    } else successResponse(res, content);
  } catch (error) {
    failureResponse(res, error);
  }
};

const getAllContent = async (req, res) => {
  try {
    const content = await Content.find();
    successResponse(res, content);
  } catch (error) {
    failureResponse(res, error);
  }
};

const updateContent = async (req, res) => {
  try {
    let contentId = req.params.id;
    if (contentId) {
      // whether the content ID exists in the database or not
      let content = await Content.findById(contentId);
      if (!content) {
        throw new Error("Content not found");
      } else {
        const {
          name,
          description,
          genre,
          duration,
          language,
          coverPhoto,
          contentUrl,
        } = req.body;
        content.name = name ? name : content.name;
        content.description = description ? description : content.description;
        content.genre = genre ? genre : content.genre;
        content.duration = duration ? duration : content.duration;
        content.language = language ? language : content.language;
        content.coverPhoto = coverPhoto ? coverPhoto : content.coverPhoto;
        content.contentUrl = contentUrl ? contentUrl : content.contentUrl;

        await content.save();
        successResponse(res, "Content updated successfully");
      }
    } else {
      failureResponse(res, "Content not found");
    }
  } catch (error) {
    failureResponse(res, error);
  }
};

const deleteContent = async (req, res) => {
  try {
    let contentId = req.params.id;
    let content = await Content.findById(contentId);
    if (!content) {
      throw new Error("Content not found");
    } else {
      await content.deleteOne({ id: contentId });
      //   await content.remove();
      successResponse(res, "Content deleted successfully");
    }
  } catch (error) {
    failureResponse(res, error);
  }
};

module.exports = {
  createContent,
  getContentById,
  getAllContent,
  updateContent,
  deleteContent,
};
