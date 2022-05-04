const router = require('express').Router();
const { Trip, Traveler, Location } = require('../../models');

// The `/api/trips` endpoint

router.get('/', (req, res) => {
    // find all trips
    Trip.findAll({
        // be sure to include its associated location and traveler data
        include: [Traveler, Location]
    })
        .then(dbTrips => {
            res.json(dbTrips);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.get('/:id', (req, res) => {
    // find a single trip by its `id`
    Trip.findByPk(req.params.id, {
        // be sure to include its associated location and traveler data
        include: [Traveler, Location]
    })
        .then(dbTrips => {
            res.json(dbTrips);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.post('/', (req, res) => {
    // create a new trip
    Trip.create(req.body)
        .then(newTrip => {
            res.json(newTrip);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.delete('/:id', (req, res) => {
    // delete on trip by its `id` value
    Trip.destroy({
        where: {
            id: req.params.id
        }
    }).then(delTrip => {
        res.json(delTrip);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

module.exports = router;
