import { getAllJobs } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { jobTemplate } from "./partials/job.js";

const catalogTemplate = (job) => html`
        <h2>Job Offers</h2>
    <section id="dashboard">
        ${job.length ? job.map(jobTemplate) : html`<h2>No offers yet.</h2>`}
    </section>
`

export async function catalogView(){
    const jobs = await getAllJobs()
    render(catalogTemplate(jobs))
}