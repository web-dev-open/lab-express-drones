const express = require("express");
const router = express.Router();

// require the Drone model here

const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((drones) => {
      res.render("drones/list.hbs", { drones });
      console.log("Drones fetched", res);
    })
    .catch((err) => {
      console.log("Drones fetch failed", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  DroneModel.create()
    .then((drones) => {
      res.render("drones/create-form.hbs");
      console.log("Drones fetched", res);
    })
    .catch((err) => {
      console.log("Drones fetch failed", err);
    });
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone

  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Drones creating failed", err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  DroneModel.findById(id)
    .then((drone) => {
      res.render("drones/update-form.hbs", { drone });
    })
    .catch((err) => {
      console.log("drone detail failed", err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect(`/drones`);
    })
    .catch((err) => {
      console.log("Drone Edit failed", err);
    });
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Drone Delete failed", err);
    });
});

module.exports = router;
