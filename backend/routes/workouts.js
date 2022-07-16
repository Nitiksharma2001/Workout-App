const express = require("express");
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require("../controller/workoutController");
const router = express.Router();
// get all workouts
router.get("/", getWorkouts)

// get single workout
router.get("/:id", getWorkout)

// create a single workout
router.post("/", createWorkout)

// delete a new workout
router.delete("/:id", deleteWorkout)

// update a single workout
router.patch("/:id", updateWorkout)

module.exports = router