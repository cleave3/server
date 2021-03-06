import Express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Route from './route/route';

dotenv.config();

const app = Express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.use(Route);

app.get('/', (req, res) => res.status(200).json('WELCOME TO OWHIDOM'));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} press CTRL + C to stop server`);
});

export default app;