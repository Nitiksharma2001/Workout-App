import React from 'react'
import "./workoutDetails.css"
const workoutDetails = ({workout, workouts, setWorkouts }) => {
	const handleDelete = async (e) => {
		const response = await fetch("http://localhost:4000/api/workouts/" + workout._id, {
			method : "DELETE",
		})
		const json = await response.json();
		setWorkouts(workouts.filter((currWorkout) => {
			return currWorkout._id !== json._id;
		}))
	}
	
  return (
	<div className="workout">
		<span id="title"> {workout.title} </span>
		<div> Load : {workout.load} </div>
		<div> Repetions : {workout.reps} </div>
		<button onClick = {handleDelete}>Delete</button>
	</div>
  )
}

export default workoutDetails