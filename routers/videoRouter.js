import express from 'express';
const router = express.Router();

import {
	editVideoController,
	videoDeleteContronller,
	videoDetailController,
	videosController,
	videoUploadController,
} from '../controllers/videoController.js';
import routes from '../routes.js';
//router.route('/').get(homeRouter);
router.route(routes.upload).get(videoUploadController);
router.route(routes.deleteVideo).get(videoDeleteContronller);
router.route(routes.editVideo).get(editVideoController);
router.route(routes.videoDetail).get(videoDetailController);
router.route(routes.videos).get(videosController);

export default router;
