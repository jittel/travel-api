const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const userRoutes = require("./travellerRoutes");
router.use("/api/users",userRoutes)

const petRoutes = require("./Routes");
router.use("/api/pets",petRoutes)

const toyRoutes = require("./Routes");
router.use("/api/toys",toyRoutes)

module.exports = router;