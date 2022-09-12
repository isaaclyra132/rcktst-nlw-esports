import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        {id: 1,  title: 'Anuncio 1'},
        {id: 2,  title: 'Anuncio 2'},
        {id: 3,  title: 'Anuncio 3'},
        {id: 4,  title: 'Anuncio 4'},
        {id: 5,  title: 'Anuncio 5'}
    ]);
});

app.listen(3333);