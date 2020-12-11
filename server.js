const express = require("express");
const app = express();
const apiRoutes = require("./routes/api-routes")
const clientRoutes = require("./routes/client-routes")
const PORT = 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api", apiRoutes)

app.use("/", clientRoutes)

app.listen(PORT, () => console.log(`listning at http://localhost:${PORT}`));