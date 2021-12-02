import express, { application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.get('/', (req, res) => {
	res.send('Hello word');
});
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
