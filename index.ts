import express, { Express, Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ hi: 'there' });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
