/* NodeJS-MongoDB RestAPI example */
/* By Mayank Choudhary */

import express from "express";
import bodyParser from "body-parser";
import "./database/connection.js";
import Routes from "./routes/users.js";
import Path from "path";

// express
const app = express();

const PORT = 5000; // Port where our server will run!
const ROOT_DIRECTORY = Path.resolve(); // to get the root

// add css directory
app.use(express.static(Path.join(ROOT_DIRECTORY, 'styles')));

// parse to json
app.use(bodyParser.json());

// route for users API
app.use("/users", Routes);

// default route for API
app.get("/", (req, res) => {
  res.sendFile(Path.join(ROOT_DIRECTORY, "/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
