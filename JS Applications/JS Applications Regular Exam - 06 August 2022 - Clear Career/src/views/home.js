import { html, render } from "../lib.js";

const homeTemplate = () => html`
    <section id="home">
        <img
        src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
        alt="home"
        />
        <h2>Searching for a job?</h2>
        <h3>The right place for a new career start!</h3>
    </section>
`

export function homeView(){
    render(homeTemplate())
}