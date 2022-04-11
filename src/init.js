import "./db";
import  "./models/Video";
import app from "./server";

const PORT = 3939;

const handleListening = () => { console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `); }

app.listen(PORT, handleListening);