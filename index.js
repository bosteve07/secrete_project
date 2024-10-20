// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 4000;


// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');


// 4. Define where your views (templates) are located
// app.set('views', './views'); // Update this path if necessary

// 5. Use the public folder for static files.
app.use(express.static("public"));

// 6. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    const API_URL = "https://secrets-api.appbrewery.com/random";

    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", { secret: result.data.secret, user: result.data.username });
    } catch (error) {
        res.status(500).send("Error occurred while fetching data!");
    }
});

// 7. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
