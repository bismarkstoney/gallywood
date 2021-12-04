import express from 'express';
const router = express.Router();

import {
	changePassword,
	getUser,
	login,
	logout,
	userDetails,
	userProfileEdit,
} from '../controllers/userController.js';
import routes from '../routes.js';

router.route(routes.users).get(getUser);
router.route(routes.login).get(login);
router.route(routes.logout).get(logout);
router.route(routes.userDetails).get(userDetails);
router.route(routes.editProfile).get(userProfileEdit);
router.route(routes.changePassword).get(changePassword);

export default router;
