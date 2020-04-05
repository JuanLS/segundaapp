const path = require('path');
const express = requiere('express');
const app = express();
const publictPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publictPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publictPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});