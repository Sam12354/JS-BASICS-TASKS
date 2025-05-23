import { register } from "../data/user.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler, updateNav } from "../utils.js";
import { notify } from "./notification.js";

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onRegister} class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
</section>
`

export function registerView(){
    render(registerTemplate(createSubmitHandler(onRegister)))
}

async function onRegister(data, formRef){

    const {email, password, rePass = data['re-password']} = data;
    if (!email || !password || rePass !== password) {
        notify("Passwords don't match");
    } else {
        await register(email, password);
        updateNav();
        page.redirect('/');
        formRef.reset();
    }

}
