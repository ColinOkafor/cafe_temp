const express = require('express');
const cors = require('cors');
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = 3002;
app.use(cors({ origin: 'https://cafe-temp-frontend.onrender.com' }));
app.use(express.json());//parse JSON body
app.use(express.urlencoded({ extended: true }));//parse form data

const userRoutes = require('./connect.js');
app.use('/', userRoutes);

// SIMPLE PASSWORD
const ADMIN_PASSWORD = "secret123";

// Serve admin HTML page
app.get("/admin", (req, res) => {
    const pass = req.query.pass;

    if (pass !== ADMIN_PASSWORD) {
        return res.status(401).send("Unauthorized");
    }

    res.sendFile(path.join(__dirname, "admin.html"));
});

// Serve JSON table data
app.get("/admin/data", (req, res) => {
    const pass = req.query.pass;

    if (pass !== ADMIN_PASSWORD) {
        return res.status(401).send("Unauthorized");
    }

    const filePath = path.join(__dirname, "data.json");

    // JSON file exists?
    if (!fs.existsSync(filePath)) {
        return res.json([]); // send empty array if file missing
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
