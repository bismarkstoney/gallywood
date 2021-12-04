import express from 'express';
const router = express.Router();
import {
	homeController,
	joinController,
	loginContronller,
	logOutController,
	searchController,
} from '../controllers/globalController.js';
import routes from '../routes.js';
//router.route('/').get(homeRouter);
router.route(routes.home).get(homeController);
router.route(routes.join).get(joinController);
router.route(routes.search).get(searchController);
router.route(routes.logout).get(logOutController);
router.route(routes.login).get(loginContronller);

export default router;
