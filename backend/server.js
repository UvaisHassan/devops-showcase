const express = require("express")
const path = require("path")

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.json({
    message: "Hello from DevOps Showcase!",
    status: "running",
    version: "1.0.0",
  })
})

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
