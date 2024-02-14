import { useState } from 'react'
import './index.css'

function Navbar_a( { className, href, children } ) {
    return <a className={className} href={href}>{children}</a>
}

function NavBar() {
    const class_navibar = "navibar"

    return(
        <div className="text-xl p-2 flex justify-center">
            <Navbar_a className={class_navibar} href="index.html" children="Kezdőlap" />
            <Navbar_a className={class_navibar} href="#" children="Oldalak" />
            <Navbar_a className={class_navibar} href="#" children="Tanulás" />
            <Navbar_a className={class_navibar} href="#" children="Kriptovaluta figyelő"/>
            <Navbar_a className={class_navibar} href="#" children="Rólunk" />
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
