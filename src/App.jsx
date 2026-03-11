import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check localStorage for theme preference
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <div className="relative">
            {/* Theme Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-6 right-20 md:right-6 z-[70] p-3 glass dark:bg-gray-800/70 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Toggle dark mode"
            >
                {darkMode ? (
                    <HiSun className="w-6 h-6 text-yellow-400" />
                ) : (
                    <HiMoon className="w-6 h-6 text-gray-700" />
                )}
            </button>

            <Navbar />
            <main>
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}

export default App
