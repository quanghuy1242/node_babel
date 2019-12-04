import express from 'express';

const app = express();

app.set('port', 3000 || process.env.PORT);

app.get('/', (req, res) => {
  const { name } = req.query;
  return name
    ? res.json({ message: `Hello, ${name}!` })
    : res.json({ message: 'Please specific a query name!' });
});

app.listen(app.get('port'), () => {
  console.log(`Server is running under port ${app.get('port')}`);
});
