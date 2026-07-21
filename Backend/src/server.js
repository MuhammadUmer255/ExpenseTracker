const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Expense Tracker API is Running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});