import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter.js';
import globalRouter from './routers/globalRouter.js';
import videoRouter from './routers/videoRouter.js';

const app = express();

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

export default app;
