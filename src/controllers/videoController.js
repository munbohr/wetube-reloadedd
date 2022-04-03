const fakeUser = {
    username: "munbohr",
    loggedIn: true,
  };
  
  export const trending = (req, res) =>
    res.render("home", { pageTitle: "Home", fakeUser });
export const see = (r,eq, res) => { res.render("watch", {pageTitle : "Watch", fakeUser})}
export const edit = (req, res) =>{res.render("edit", {pageTitle : "Edit"})}
export const search = (req, res) => {res.send("Search")}
export const upload = (req, res) => {res.send("Upload")}
export const deleteVideo = (req, res) => {
    return res.send("Delete Video")
}