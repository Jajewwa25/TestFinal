const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database','username','password',{
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/TopChartMusic.sqlite'
});

const ThaiSong = sequelize.define('ThaiSongs',{
    rank:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    namesong:{
        type: Sequelize.STRING,
        allowNull: false
    },
    artist:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const EngSong = sequelize.define('EngSongs',{
    rank:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    namesong:{
        type: Sequelize.STRING,
        allowNull: false
    },
    artist:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const KoreanSong = sequelize.define('KoreanSongs',{
    rank:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    namesong:{
        type: Sequelize.STRING,
        allowNull: false
    },
    artist:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

sequelize.sync();

app.get('/ThaiSongs',(req, res) =>{
    ThaiSong.findAll().then(ThaiSongs => {
        res.json(ThaiSongs);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/ThaiSongs/:id',(req, res) =>{
    ThaiSong.findByPk(req.params.id).then(ThaiSongs => {
        res.json(ThaiSongs);
    }).catch(err => {
       res.status(500).send(err);
    });
});

app.post('/ThaiSongs',(req, res) =>{
    ThaiSong.create(req.body).then(ThaiSong => {
        res.send(ThaiSong);
    }).catch(err => {
            res.status(500).send(err);
        });
    });

app.put('/ThaiSongs/:id',(req,res) => {
    ThaiSong.findByPk(req.params.id).then(ThaiSong => {
        if (!ThaiSong) {
            res.status(404).send('ThaiSong not found');
        } else {
            ThaiSong.update(req.body).then(() =>{
                res.send(ThaiSong);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/ThaiSongs/:id',(req,res) => {
    ThaiSong.findByPk(req.params.id).then(ThaiSong => {
        if (!ThaiSong){
            res.status(404).send('ThaiSong not found');
        } else {
            ThaiSong.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// EngSongs 

app.get('/EngSongs',(req, res) =>{
    EngSong.findAll().then(EngSongs => {
        res.json(EngSongs);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/EngSongs/:id',(req, res) =>{
    EngSong.findByPk(req.params.id).then(EngSongs => {
        res.json(EngSongs);
    }).catch(err => {
       res.status(500).send(err);
    });
});

app.post('/EngSongs',(req, res) =>{
    EngSong.create(req.body).then(EngSong => {
        res.send(EngSong);
    }).catch(err => {
            res.status(500).send(err);
        });
    });

app.put('/EngSongs/:id',(req,res) => {
    EngSong.findByPk(req.params.id).then(EngSong => {
        if (!EngSong) {
            res.status(404).send('EngSong not found');
        } else {
            EngSong.update(req.body).then(() =>{
                res.send(EngSong);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/EngSongs/:id',(req,res) => {
    EngSong.findByPk(req.params.id).then(EngSong => {
        if (!EngSong){
            res.status(404).send('EngSong not found');
        } else {
            EngSong.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// KoreanSongs

app.get('/KoreanSongs',(req, res) =>{
    KoreanSong.findAll().then(KoreanSongs => {
        res.json(KoreanSongs);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/KoreanSongs/:id',(req, res) =>{
    KoreanSong.findByPk(req.params.id).then(KoreanSongs => {
        res.json(KoreanSongs);
    }).catch(err => {
       res.status(500).send(err);
    });
});

app.post('/KoreanSongs',(req, res) =>{
    KoreanSong.create(req.body).then(KoreanSong => {
        res.send(KoreanSong);
    }).catch(err => {
            res.status(500).send(err);
        });
    });

app.put('/KoreanSongs/:id',(req,res) => {
    KoreanSong.findByPk(req.params.id).then(EngSong => {
        if (!EngSong) {
            res.status(404).send('EngSong not found');
        } else {
            EngSong.update(req.body).then(() =>{
                res.send(EngSong);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/EngSongs/:id',(req,res) => {
    EngSong.findByPk(req.params.id).then(EngSong => {
        if (!EngSong){
            res.status(404).send('EngSong not found');
        } else {
            EngSong.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));