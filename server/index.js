import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (requestAnimationFrame, res) =>{
res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('running on local host 3000'));