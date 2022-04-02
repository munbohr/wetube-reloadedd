export const trending = (req, res) => {res.send("<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Home</h1><footer>&copy;2022 Wetube -  All rights reserved</footer></body></html>"
)}
export const see = (req, res) => {
    return res.render("home")}
export const edit = (req, res) =>{
    console.log(req.params);
    return res.send(`<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit Video #${req.params.id}</h1><footer>&copy;2022 Wetube -  All rights reserved</footer></body></html>`)}
export const search = (req, res) => {res.send("Search")}
export const upload = (req, res) => {res.send("Upload")}
export const deleteVideo = (req, res) => {
    return res.send("Delete Video")
}