const express = require("express");
const router = express.Router();
const similarController = require("../controllers/similarController");

/**
 * @swagger
 * /api/similar:
 *     get:
 *      tags:
 *         - similar
 *      summary: Get all similar games - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: a list of similar games
 */
router.get("/", similarController.getAllSimilarGames);
/**
 * @swagger
 * /api/similar/{id}:
 *     get:
 *      tags:
 *         - similar
 *      summary: Get a specific similar game
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: a single similar game
 */
router.get("/:id", similarController.getSimilarByGameId);

module.exports = router;
