// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// Set the view engine, e.g., EJS
app.set('view engine', 'ejs'); // If you’re using EJS, for example

// Define where your views (templates) are located
app.set('views', './views'); // Update this path if necessary


// 2. Create an express app and set the port number.
const app = express();
const port = 4000;

// 3. Use the public folder for static files.
app.use(express.static("public")); 

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",  async (req, res) =>{
    const API_URL =  "https://secrets-api.appbrewery.com/random";

    try{
        const result = await axios.get(API_URL );
        res.render("index.ejs", {secret: result.data.secret, user: result.data.username});
    } catch(error){
        res.render("Error some where!")
    }
    
});

// const obj= {
//     a: "one",
//     b: "throw",
//   a: "four"
//  }
// console.log(obj)

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, ()=> {
    console.log(`You are running on ${port}`)

})



