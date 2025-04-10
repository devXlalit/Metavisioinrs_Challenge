/**
 * @swagger
 * components:
 *   schemas:
 *     HelpRequest:
 *       type: object
 *       required:
 *         - title
 *         - seekerId
 *         - latitude
 *         - longitude
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated ID
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         seekerId:
 *           type: number
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         timestamp:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /help-request:
 *   post:
 *     summary: Create a new help request
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HelpRequest'
 *     responses:
 *       201:
 *         description: Help request created
 */

/**
 * @swagger
 * /help-request/{id}:
 *   get:
 *     summary: Get help request by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Help request ID
 *     responses:
 *       200:
 *         description: Help request data
 */

/**
 * @swagger
 * /help-requests:
 *   get:
 *     summary: Get help requests within 1km radius
 *     parameters:
 *       - in: query
 *         name: latitude
 *         schema:
 *           type: number
 *         required: true
 *       - in: query
 *         name: longitude
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         description: List of help requests nearby
 */

import express from "express";
import {
  createHelpRequest,
  getHelpRequestById,
  getHelpRequestsNearby,
} from "../controllers/HelpRequestController.js";

const router = express.Router();

router.post("/help-request", createHelpRequest);
router.get("/help-request/:id", getHelpRequestById);
router.get("/help-requests", getHelpRequestsNearby);

export default router;
