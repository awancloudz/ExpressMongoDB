const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOptions = {
    origin: "*"
};

//Regoster Cors Middleware
app.use(cors(corsOptions));
app.use(express.json());

//Koneksi ke Database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
db.mongoose.connect(db.url, mongooseConfig)
    .then(()=>console.log("Database Connected!"))
    .catch(err => {
        console.log(`DB Fail Connection! ${err.message}`);
        process.exit();
    })

//Membuat Routes
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));