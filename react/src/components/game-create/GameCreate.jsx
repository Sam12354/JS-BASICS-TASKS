import { useNavigate } from "react-router-dom"
import { useCreateItem } from "../../hooks/userService.js"
import { useForm } from "../../hooks/useForm.js"

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
}

export default function GameCreate() {

    const navigate = useNavigate()
    const createItem = useCreateItem()

    const createHandler = async (values) => {

        try {
            const { _id: itemId } = await createItem(values)
            navigate(`/catalog/${itemId}/details`)
        } catch (err) {
            console.log(err.message); 
        }

    }

    const { values, changeHandler, onSubmit } = useForm(initialValues, createHandler)

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit} >
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} placeholder="Enter game title..." />

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" value={values.category} onChange={changeHandler} placeholder="Enter game category..." />

                            <label htmlFor="levels">MaxLevel:</label>
                            <input type="number" id="maxLevel" name="maxLevel" value={values.maxLevel} onChange={changeHandler} min="1" placeholder="1" />

                                <label htmlFor="game-img">Image:</label>
                                <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Upload a photo..." />

                                    <label htmlFor="summary">Summary:</label>
                                    <textarea name="summary" value={values.summary} onChange={changeHandler} id="summary"></textarea>
                                    <input className="btn submit" type="submit" value="Create Game" />
                                    </div>
                                </form>
                            </section>
                            )
}