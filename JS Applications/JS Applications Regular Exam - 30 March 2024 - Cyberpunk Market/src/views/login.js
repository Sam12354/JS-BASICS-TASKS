import { login } from "../data/user.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler, updateNav } from "../utils.js";
import { notify } from "./notification.js";


const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
      <h2>Login</h2>

      <form @submit=${onLogin} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
</section>
`

export function loginView(){
    render(loginTemplate(createSubmitHandler(onLogin)))
}

async function onLogin(data, formRef) {
    const {email, password} = data;
    if (!email || !password) {
        notify('Oops');
    } else {
        await login(email, password)
        updateNav();
        page.redirect('/');
        formRef.reset();
    }
}

