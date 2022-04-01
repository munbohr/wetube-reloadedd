import express from "express";

const PORT = 3000;

const app = express();
const loggerMiddleware = logger("dev");





const routerLogger = (req, res, next) => {
    console.log("PATH",req.path);
    next();
}
const methodLogger = (req, res, next) => {
    console.log("METHOD",req.method);
    next();
}
const  privateMiddleware = (req, res, next) =>  {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
} 

const handleHome = (req, res)=> {
    console.log("I'm homepage");
    return res.send("Home");
}

const handleProtected = (req, res) => {

}

const login = (req, res) => {
    return res.send("login");
}
app.use(privateMiddleware);
app.get("/",methodLogger,routerLogger, handleHome );
app.get("/protected", handleProtected );


const handleListening = () => {console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `);}

app.get("/login", login );

app.listen(PORT, handleListening);
