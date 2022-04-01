import express from "express";
import morgan from "morgan";

const PORT = 3000;

const app = express();
const logger = morgan("dev");
app.use(logger);


const globalRouter = express.Router();

const handleHome = (req, res) =>{
    res.send("Home");
}

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser= (req,res) => {
    res.send("Edit User");
}

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideos = (req, res) => {
    res.send("Watch Video")
}

videoRouter.get("/watch", handleWatchVideos);

app.use("/", globalRouter );
app.use("/users", userRouter );
app.use("/videos", videoRouter );


const handleListening = () => {console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `);}

app.listen(PORT, handleListening);
