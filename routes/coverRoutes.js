const express = require("express");
const router = express.Router();
const coverController = require("../controllers/coverController");

/**
 * @swagger
 * /api/covers:
 *     get:
 *      tags:
 *         - covers
 *      summary: Get all covers - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: a list of covers
 */
router.get("/", coverController.getAllCovers);
/**
 * @swagger
 * /api/covers/{id}:
 *     get:
 *      tags:
 *         - covers
 *      summary: Get a specific cover
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: a single cover
 */
router.get("/:id", coverController.getCoverById);

module.exports = router;
