const express = require('express');
const router = express.Router();
const Country = require('../model/dbSchema');

router.post('/create', (req, res, next) => {
    var newCountry = new Country({
        name: req.body.name,
        capital: req.body.capital
    });
    newCountry.save((err, country) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            res.status(200).json({ msg: country });
        }
    });
});

router.get('/read', (req, res, next) => {
    Country.find({}, (err, countries) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            res.status(200).json({ msg: countries });
        }
    });
});

router.put('/update', (req, res, next) => {
    Country.findById(req.body._id, (err, country) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            country.name = req.body.name;
            country.capital = req.body.capital;
            country.save(() => {
                if (err) {
                    res.status(500).json({ errmsg: err });
                } else {
                    res.status(200).json({ msg: country });
                }
            });
        }
    });
});

router.delete('/delete/:id', (req, res, next) => {
    Country.findOneAndRemove({ _id: req.params.id }, (err, country) => {
        if(err){
            res.status(500).json({ errmsg: err });            
        }else{
            res.status(200).json({ msg: country });
        }
    });
});

module.exports = router;