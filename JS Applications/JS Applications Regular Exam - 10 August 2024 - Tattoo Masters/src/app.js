import { logout } from "./data/user.js";
import { page } from "./lib.js";
import { updateNav } from "./utils.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";

updateNav();

page('/', homeView);
page('/catalog', catalogView)
page('/catalog/:id', detailsView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/edit/:id', editView)

page.start();

document.getElementById("logout").addEventListener("click", () => {
    logout();
    updateNav();
    page.redirect('/');
})