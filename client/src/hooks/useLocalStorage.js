import React from 'react'

function useLocalStorage(key, value) {
    const [item, setItem] = React.useState(() => {
        const localItem = localStorage.getItem(key)
        return localItem ? JSON.parse(localItem) : value
    })

    function updateItem(value) {
        setItem(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [item, updateItem]
}

export default useLocalStorage