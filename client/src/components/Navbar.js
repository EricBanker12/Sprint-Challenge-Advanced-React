import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

function Navbar() {
    const [darkMode, setDarkMode] = useLocalStorage(false)

    function darkModeHandler() {
        setDarkMode(!darkMode)
    }

    React.useEffect(()=>{
        const theme = document.createElement('link')
        theme.href=`https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/${darkMode?'darkly':'flatly'}/bootstrap.min.css`
        theme.rel='stylesheet'
        document.head.appendChild(theme)
        return () => {document.head.removeChild(theme)}
    },[darkMode])

    return (
        <div>
            <button
                onClick={darkModeHandler}
            >
                {darkMode?'Dark Mode':'Light Mode'}
            </button>
        </div>
    )
}

export default Navbar