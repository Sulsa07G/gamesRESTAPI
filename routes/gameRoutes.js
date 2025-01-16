const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gameController");

/**
 * @swagger
 * /api/games:
 *     get:
 *      tags:
 *         - games
 *      summary: Get all games - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: a list of games
 */

router.get("/", gamesController.getAllGames);

/**
 * @swagger
 * /api/games/{id}:
 *     get:
 *      tags:
 *         - games
 *      summary: Get a specific game
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: a single game
 */
router.get("/:id", gamesController.getGameById);

module.exports = router;
