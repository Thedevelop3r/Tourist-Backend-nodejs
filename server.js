import express from "express"
import cors from "cors"
const app = express()

import routes from "./routes/index.js";



import { sequelize } from "./model/index.js";
// const db = import('./model') ? create new models according to the requirements
import errorHandler from "./middleware/errorHandler.js"

const cors_setting = {
  origin: "*",
}

// Sync the database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database Synced")
  })
  .catch((err) => {
    console.log("Database Sync Failed ", err)
  })

// Server Config
app.use(cors(cors_setting))
app.use(express.json())

// route home - server starting server
app.get("/", (req, res) => {
  return res.send("Server Running!!")
})

// import api routes
app.use("/api", routes);

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server Running http://localhost:", PORT)
})
