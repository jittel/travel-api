const router = require('express').Router();
const { Trip, Location } = require('../../models');

// The `/api/Locations` endpoint

router.get('/', (req, res) => {
    // find all Locations
    Location.findAll({
        // be sure to include its associated location and Traveller data
        include: [Trip]
    })
        .then(dbLocations => {
            res.json(dbLocations);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.get('/:id', (req, res) => {
    // find a single Location by its `id`
    Location.findByPk(req.params.id, {
        // be sure to include its associated location and Traveller data
        include: [Trip]
    })
        .then(dbLocations => {
            res.json(dbLocations);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.post('/', (req, res) => {
    // create a new Location
    Location.create(req.body)
        .then(newLocation => {
            res.json(newLocation);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.delete('/:id', (req, res) => {
    // delete on Location by its `id` value
    Location.destroy({
        where: {
            id: req.params.id
        }
    }).then(delLocation => {
        res.json(delLocation);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

module.exports = router;
