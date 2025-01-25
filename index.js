const express = require('express');
const dotenv = require('dotenv');
const videoRoutes = require('./routes/videoRoutes');

const app = express();

// Load environment variables
dotenv.config();

// Initialize Express

// Middleware
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
