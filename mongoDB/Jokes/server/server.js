require('./config/mongoose.config');
const express = require("express");
const app = express();
const PORT = 8000;
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./routes/jokes.routes");
AllMyUserRoutes(app);
    
app.listen(PORT, () => console.log("The server is all fired up on port 8000"));
