import { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar_a( { className, href, children } ) {
    return <a className={className} href={href}>{children}</a>
}

function NavBar() {
    const class_navibar = "navibar"

    return (
        <>
            <div className="text-xl p-2 flex justify-center">
                <Navbar_a className={class_navibar} href="index.html" children="Kezdőlap"/>
                <Navbar_a className={class_navibar} href="#" children="Oldalak"/>
                <Navbar_a className={class_navibar} href="#" children="Tanulás"/>
                <Navbar_a className={class_navibar} href="#" children="Kriptovaluta figyelő"/>
                <Navbar_a className={class_navibar} href="#" children="Rólunk"/>
            </div>
        </>
    )
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBar />
    </>
  )
}

export default App
