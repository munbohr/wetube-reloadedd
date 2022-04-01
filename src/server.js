import express from "express";

const PORT = 3000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log(`Someone is going to : ${req.url}`);
    next();
}

const handleHome = (req, res)=> {
    return res.send("Home")
}
const handleLogin = (req, res) => {
    return res.send({ messege : "Login page"});
}
app.use(gossipMiddleware);
app.get("/", handleHome );

const handleListening = () => {console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `);}

app.get("/login", handleLogin );

app.listen(PORT, handleListening);
