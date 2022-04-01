import express from "express";
import trending from "../controllers/userController"
const globalRouter = express.Router();

const handleHome = (req, res) =>{
    res.send("Home");
}
const handleJoin = (req, res) => {
    res.send("Join");
}

globalRouter.get("/", trending);
globalRouter.get("/join", handleJoin);

export default globalRouter;