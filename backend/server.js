const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const Reserve = require("./routes/reserve");

mongoose
    .connect(
        "mongodb+srv://seif:seif@cluster0.eiiqqcs.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connect with mongoDB with successfully"))
    .catch((err) => console.log(err));

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/Reserve", Reserve);
app.use(express.static(path.join(__dirname, "..")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "/file.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
