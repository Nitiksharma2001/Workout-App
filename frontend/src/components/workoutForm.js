import React, { useState } from 'react'

const WorkoutForm = ({workouts, setWorkouts}) => {
	const [title, setTitle] = useState("")
	const [reps, setReps] = useState("")
	const [load, setLoad] = useState("")
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault();
		const workout = {title, reps, load};
		const response = await fetch("http://localhost:4000/api/workouts/", 
		{
			method : "POST",
			body : JSON.stringify(workout),
			headers : {
				"Content-Type" : "application/json" 
			}
		} )
		const json = await response.json();
		if(!response.ok){
			setError(json.error);
		}
		else{
			setTitle("");
			setReps("");
			setLoad("");
			setError(null)
			setWorkouts([json, ...workouts ]);
			console.log("new entry added");
		}
	}
  return (
	<>
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='title'> Title </label>
				<input type="text" id='title' value={title} name="title" onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<div>
				<label htmlFor='reps'> Reps </label>
				<input type="text" id='reps' value={reps} name="reps" onChange={(e) => setReps(e.target.value)}/>
			</div>
			<div>
				<label htmlFor='load'> Load </label>
				<input type="text" id='load' value={load} name="load" onChange={(e) => setLoad(e.target.value)}/>
			</div>
			<button>Add workout</button>
			{error && <div>{error}</div>}
		</form>
	</>
  )
}

export default WorkoutForm