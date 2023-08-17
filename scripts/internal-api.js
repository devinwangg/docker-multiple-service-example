import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from internal API!' };
  res.json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Internal API is running on port ${port}`);
});
