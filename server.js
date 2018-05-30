import express from 'express';
import welcome from './welcome';

const app = express();

app.get('/', (req, res) => res.send(welcome));

const port = 5000;

app.listen(port, () => console.log(`App listening on port ${port}`));
