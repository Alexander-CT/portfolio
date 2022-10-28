import { VscGithubInverted, VscProject } from 'react-icons/vsc'
import { ImLinkedin } from 'react-icons/im'
import { HiOutlineHome } from 'react-icons/hi'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import '../css/Navbar.css'
let navbarButtons = [
    {
        text: "home",
        link: "#",
        icon: <HiOutlineHome className='icon'/>
    },
    {
        text: "sobre mi",
        link: "#",
        icon: <VscProject className='icon'/>
    },
    {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/alexander-castro-tocaffondi/",
        icon: <ImLinkedin className='icon'/>
    },
    {
        text: "Github",
        link: "https://github.com/Alexander-CT",
        icon: <VscGithubInverted className='icon'/>
    },
]
function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <nav className="Navbar">
            {
                navbarButtons.map((button) => {
                    return (
                        <li className='option'>
                            <a className='link' href={button.link} target='_blank'>
                                {button.icon}
                                {button.text}
                            </a>
                        </li>
                    )
                })
            }
        </nav>
  )
}

export default Navbar
