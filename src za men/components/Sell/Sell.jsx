import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useCreateItem } from "../../hooks/useService"

const initialValues = {
    title: '',
    brand: '',
    price: '',
    image: '',
    description: '',
}

export default function Sell() {

    const navigate = useNavigate()
    const createItem = useCreateItem()

    const createHandler = async (values) => {
        try {
            await createItem(values)
            navigate(`/catalog`) 
        } catch (err) {
            console.log(err.message)
        }
    }

    const { values, changeHandler, onSubmit } = useForm(initialValues, createHandler)

    return (
        <section className="page-section bg-light d-flex align-items-center justify-content-center min-vh-100 py-5"
        style={{ background: "url('/images/header-bg.jpg') center/cover no-repeat" }}>
            <div className="container pt-5">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{ color: "#ffc800" }}>Sell</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card shadow p-4 bg-white">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="title" 
                                    name="title" 
                                    value={values.title}
                                    onChange={changeHandler}
                                    required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="brand" className="form-label">Brand</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="brand" 
                                    name="brand" 
                                    value={values.brand}
                                    onChange={changeHandler}
                                    required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price ($)</label>
                                    <input type="number"
                                     className="form-control" 
                                    id="price" 
                                    name="price" 
                                    value={values.price}
                                    onChange={changeHandler}
                                    required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image URL</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="image" 
                                    name="image" 
                                    value={values.image}
                                    onChange={changeHandler}
                                    required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea 
                                    className="form-control" 
                                    id="description" 
                                    name="description" 
                                    value={values.description}
                                    onChange={changeHandler}
                                    required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sell</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
