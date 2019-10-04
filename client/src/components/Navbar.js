import React from 'react'
import {Button, Navbar} from 'reactstrap'

import useLocalStorage from '../hooks/useLocalStorage'

function NavbarClass() {
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
        <Navbar>
            <Button
                className="ml-auto"
                onClick={darkModeHandler}
            >
                {darkMode?'Dark Mode':'Light Mode'}
            </Button>
        </Navbar>
    )
}

export default NavbarClass