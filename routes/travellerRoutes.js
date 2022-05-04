const express = require("express");
const router = express.Router();
const {Traveller,Location,Trips} = require("../models/");


//find all
router.get("/", (req, res) => {
  Traveller.findAll({
      include:[]
  })
    .then(dbTrip => {
      res.json(dbTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Traveller.findByPk(req.params.id,{
    include:[Location]
  })
    .then(dbPets => {
      res.json(dbTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Traveller.create(req.body)
    .then(newTraveller => {
      res.json(newTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a user
router.delete("/:id", (req, res) => {
  Traveller.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTraveller => {
    res.json(delTraveller);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
