import { logout } from "./data/user.js";
import { page } from "./lib.js";
import { updateNav } from "./utils.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchview } from "./views/search.js";

updateNav()

page('/', homeView);
page('/catalog', catalogView)
page('/catalog/:id', detailsView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/edit/:id', editView)
page('/search', searchview)

page.start();

document.getElementById("logout").addEventListener("click", () => {
    logout(),
    updateNav(),
    page.redirect('/catalog')
})