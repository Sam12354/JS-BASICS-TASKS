import { useState } from "react"
import { useRegister } from "../../hooks/useAuth.js"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm.js"

const initialValues = {email: '', password: '', 'confirm-password': '' }

export default function Register() {

    const [error, setError] = useState('')
    const register = useRegister()
    const navigate = useNavigate()

    const registerHandler = async (values) => {

        if(values.password !== values['confirm-password']){
            return setError('Password missmatch!')
        }

        try {
            await register(values.email, values.password)
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    } 

    const {values, changeHandler, onSubmit } = useForm(initialValues, registerHandler)

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container" >
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={values.email}
                    onChange={changeHandler} 
                    placeholder="maria@email.com"
                    />

                        <label htmlFor="pass">Password:</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                        />

                            <label htmlFor="con-pass">Confirm Password:</label>
                            <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password"
                            value={values['confirm-password']}
                            onChange={changeHandler}
                            />

                            {error && (
                                <p>
                                    <span>{error}</span>
                                </p>
                            )}

                                <input className="btn submit" type="submit" value="Register" />

                                    <p className="field">
                                        <span>If you already have profile click <a href="#">here</a></span>
                                    </p>
                                </div>
                            </form>
                        </section>
                        )
}