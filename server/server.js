import express from "express";
import cors from "cors";
import router  from "./routes/routes.js";
import DBConnection from "./database/db.js";

const app = express();

app.use(cors());
app.use('/' , router);

DBConnection();

app.listen(8000 , () => {
    console.log("server is linstening on port 8000!");
});