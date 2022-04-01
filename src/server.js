import express from "express";

const PORT = 3000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log("i'm in the Middleware");
    next();
}

const handleHome = (req, res, next)=> {
    return res.send("Home")
}
const handleLogin = (req, res) => {
    return res.send({ messege : "Login page"});
}
app.get("/",gossipMiddleware, handleHome );
app.get("/login", handleLogin );

const handleListening = () => {console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `);}

app.listen(PORT, handleListening);
