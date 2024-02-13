import { useState } from 'react'
import './index.css'

function NavBar() {
    return(
        <div className="text-xl p-2 flex justify-center">
            <a className="navibar" href="#">Kezdőlap</a>
            <a className="navibar" href="#">Oldalak</a>
            <a className="navibar" href="#">Tanulás</a>
            <a className="navibar" href="#">Kriptovaluta figyelő</a>
            <a className="navibar" href="#">Rólunk</a>
        </div>
    )
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-3xl bg-purple-600 text-white text-center font-Inter font-bold mx-auto top-0 left-0">React
                App fejlesztés alatt!</h1>
            <NavBar />
    </>
  )
}

export default App
