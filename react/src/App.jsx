import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route } from 'react-router-dom'
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameCreate from "./components/game-create/GameCreate"
import Catalog from "./components/catalog/Catalog"
import GameDetails from "./components/game-details/GameDetails"
import { AuthContextProvider } from "./contexts/AuthContext"
import Logout from "./components/logout/Logout"

function App() {

    // const [authState, setAuthState] = useState({})

    // const changeAuthState = (state) => {

    //     // localStorage.setItem('accessToken', state.accessToken)

    //     setAuthState(state)
    // }

    // const contextData = {
    //     userId: authState._userId,
    //     email: authState.email,
    //     accessToken: authState.accessToken,
    //     isAuthenticated: !!authState.email,
    //     changeAuthState
    // }

    return (
        <AuthContextProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        < Route path="/" element = {<Home />} />
                        < Route path="/login" element = {<Login />} />
                        < Route path="/register" element = {<Register />} />
                        < Route path="/create" element = {<GameCreate />} />
                        < Route path="/catalog" element = {<Catalog />} />
                        < Route path="/logout" element = {<Logout />} />
                        < Route path="/catalog/:itemId/details" element = {<GameDetails />} />
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    )
}

export default App
