import express from "express";

const PORT = 3000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
const  privateMiddleware = (req, res, next) =>  {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not allowed</h1>");
    }
    console.log("Allowed, you may continue.")
    next();
} 

const handleHome = (req, res)=> {
    return res.send("Home")
}
const handleLogin = (req, res) => {
    return res.send({ messege : "Login page"});
}

const handleProtected = (req, res) => {

}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome );
app.get("/protected", handleProtected );


const handleListening = () => {console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `);}

app.get("/login", handleLogin );

app.listen(PORT, handleListening);
