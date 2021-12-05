import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter.js';
import globalRouter from './routers/globalRouter.js';
import videoRouter from './routers/videoRouter.js';
import { globalRouterVariables } from './middleware/globalrouters.js';
import routes from './routes.js';

const app = express();

app.use(helmet());
app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(globalRouterVariables);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use('/videos', videoRouter);

export default app;
