import routes from '../routes.js';

export const globalRouterVariables = (req, res, next) => {
	res.locals.siteName = 'GallyWood';
	res.locals.routes = routes;
	next();
};
