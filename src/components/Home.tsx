import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import '../css/Home.css'
import Navbar from './Navbar'
import Particles from 'react-particles'
import Animation from './Animation'
function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Animation/>
            <Navbar/>
            <h1>Castro Tocaffondi</h1>
            <p>FullStack developer</p>
            <iframe src="https://drive.google.com/file/d/1H9N1ttqArxlfDr0csGvYzCGfS8fqi1qV/preview" width="800" height="500"></iframe>
        </>
  )
}

export default Home
