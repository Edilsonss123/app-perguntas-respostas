import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:linguagem', (req, res) => {
    const objeto:Object = {
        nome:req.params.nome??'Não informado', 
        linguagem: req.params.linguagem??'Não informado', 
        empresa: 'Infornet', 
        inscritos: 1900
    };
    return res.render('index', objeto);
});

app.listen(1818, _=> {
    console.log('App rodando');
});