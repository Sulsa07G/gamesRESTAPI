const Cover = require("../models/cover");

async function getAllCovers(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const covers = await Cover.getAllCovers(start, limit, gameid);
    res.status(200).json(covers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch covers." + err });
  }
}

async function getCoverById(req, res) {
  try {
    const covers = await Cover.getCoverById(req.params.id);
    if (covers) {
      res.status(200).json(game_mode);
    } else {
      res.status(404).json({ error: "Cover not found." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cover." });
  }
}

module.exports = { getAllCovers, getCoverById };
