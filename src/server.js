import express from "express";

const PORT = 3000;

const app = express();

const handleHome = (req, res)=> {
    console.log(res);
}

app.get("/", handleHome );

const handleListening = () => {console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `);}

app.listen(PORT, handleListening);
