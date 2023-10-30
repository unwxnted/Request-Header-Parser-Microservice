const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/api/whoami", (req, res) => {
    const ip = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];

    return res.json({
        "ipaddress":ip,
        "language": language,
        "software": software
    });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});