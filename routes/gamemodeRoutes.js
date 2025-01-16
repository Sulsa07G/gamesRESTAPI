const express = require("express");
const router = express.Router();
const gameModeController = require("../controllers/gamemodeController");

/**
 * @swagger
 * /api/gamemodes:
 *     get:
 *      tags:
 *         - gamemodes
 *      summary: Get all gamemodes - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: a list of gamemodes
 */
router.get("/", gameModeController.getAllGameModes);
/**
 * @swagger
 * /api/gamemodes/{id}:
 *     get:
 *      tags:
 *         - gamemodes
 *      summary: Get a specific gamemode
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: a single gamemode
 */
router.get("/:id", gameModeController.getGameModeById);

module.exports = router;
