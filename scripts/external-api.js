import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from external API!' };
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`External API is running on port ${port}`);
});
