import { deleteJob, getJobById } from "../data/CRUD.js";
import { applyJob, getApplicationsId } from "../data/apply.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, apply, hasUser, hasApplied, isOwner, onApply, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.title}</p>
        <p id="details-category">
            Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${data.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
            <h4>Description</h4>
            <span>${data.description}</span>
            </div>
            <div id="details-requirements">
            <h4>Requirements</h4>
            <span>${data.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${apply}</strong></p>

        <!--Edit and Delete are only for creator-->
        ${hasUser ? html`
        <div id="action-buttons">
            ${isOwner ? html`
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            ` : null}

                ${hasApplied ? null : html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`}
        ` : null}
            </div>
            </div>
    </section>
`

export async function detailsView(ctx){
    const id = ctx.params.id 
    const [data, applyInfo] = await Promise.all([
        getJobById(id),
        getApplicationsId(id)
    ])

    const userData = getUserData()
    const isOwner = userData?._id === data._ownerId

    let hasApplied = applyInfo.hasApplied;

    render(detailsTemplate(data, applyInfo.apply, Boolean(userData), hasApplied, isOwner, onApply, onDelete))

    async function onApply(){
        await applyJob(id)
        hasApplied = true; 
        page.redirect('/catalog/' + id) 
    }

    async function onDelete(){
        const choice = confirm("Are you sure?")
        if(!choice){
            return
        }
        await deleteJob(id)
        page.redirect('/catalog')
    }
}