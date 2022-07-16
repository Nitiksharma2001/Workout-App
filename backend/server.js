require("dotenv").config();
// process object main dotenv ko link ker dega ye otherwise PORT nahi dikega
const express = require("express");
const mongoose = require("mongoose")

const workoutRoutes = require("./routes/workouts")
const app = express();

//middleware
app.use(express.urlencoded())
app.use(express.json())
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
})

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
})
//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.connect(process.env.MONG_URL)
.then(() => {
	// listening the port after connecting to db
	app.listen(process.env.PORT, () => {
		console.log("connecting to db and listening on port " + process.env.PORT);
	})
})
.catch((error) => {
	console.log(error);
});
