const express = require('express');
const path = require('path');
const booksRoutes = require('./routes/books');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/books', booksRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));