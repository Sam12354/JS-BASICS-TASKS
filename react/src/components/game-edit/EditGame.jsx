import { useNavigate, useParams } from "react-router"
import { useForm } from "../../hooks/useForm"
import { update } from "../../api/api"
import { useGetOneItem } from "../../hooks/userService"

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
}

export default function GameEdit() {

    const navigate = useNavigate()
    const { itemId } = useParams()
    const [ item ] = useGetOneItem(itemId)

    const { changeHandler, onSubmit, values } = useForm(Object.assign(initialValues, item), async (values) => {
        await update(itemId, values)

        navigate(`/catalog/${itemId}/details`);
    })

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input onChange={changeHandler} value={values.title} type="text" id="title" name="title" />

                        <label htmlFor="category">Category:</label>
                        <input onChange={changeHandler} value={values.category} type="text" id="category" name="category" />

                            <label htmlFor="levels">MaxLevel:</label>
                            <input onChange={changeHandler} value={values.maxLevel} type="number" id="maxLevel" name="maxLevel" min="1" />

                                <label htmlFor="game-img">Image:</label>
                                <input onChange={changeHandler} value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" />

                                    <label htmlFor="summary">Summary:</label>
                                    <textarea name="summary" id="summary" onChange={changeHandler} value={values.summary || ''} ></textarea>
                                    <input className="btn submit" type="submit" />

                                    </div>
                                </form>
                            </section>
                            )
}