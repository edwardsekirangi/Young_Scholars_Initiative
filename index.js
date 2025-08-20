const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // serve static files from 'public' folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/programs.html');
    res.sendFile(__dirname + '/public/success.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
