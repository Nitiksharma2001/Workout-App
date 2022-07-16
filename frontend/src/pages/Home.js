import React, { useEffect, useState } from 'react'
import WorkoutDetails from "../components/workoutDetails"
import WorkoutForm from '../components/workoutForm'
const Home = () => {
	const [workouts, setWorkouts] = useState(null)
	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("http://localhost:4000/api/workouts/")
			const json = await response.json();
			if(response.ok){
				setWorkouts(json)
			}
		}
		fetchWorkouts();
	}, [])
	
  return (
	<div>
		<WorkoutForm workouts = {workouts} setWorkouts = {setWorkouts}/>
		{workouts && workouts.map((workout) => {
			return (
				<WorkoutDetails key={workout._id} workout = {workout} workouts = {workouts} setWorkouts = {setWorkouts} />
			)
		})}
	</div>
  )
}

export default Home