import express from "express";
import { watch, getEdit, upload, deleteVideo, postEdit } from "../controllers/videoController"

console.log(process.cwd());

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;