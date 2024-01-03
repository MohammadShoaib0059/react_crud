import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();

export const HeaderContext = ({ children }) => {
    const [data, setData] = useState([
        { id: 1, first: 'John', last: 'doe', email: 'jdoe@gmail.com', phone: "7020563058", location: "Uk", Position: "Developer" },
        { id: 2, first: 'Tom', last: 'Henry', email: 'Tomhenry@gmail.com', phone: "8030256305", location: "Us", Position: "Designer" },
    ])

    const [editedData, seteditedData] = useState(null)

    const sortedData = data.sort((a, b) => (a.name < b.name ? -1 : 1));

    const addData = (id, first, last, email, phone, location, Position) => {
        setData([...data, { id, first, last, email, phone, location, Position }])
    }

    const deleteData = (id) => {
        setData(data.filter(data => data.id !== id))
    }

    const updateData = (id, updatedData) => {
        setData(data.map((data) => data.id === id ? updatedData : data))
    }



    return (
        <GlobalContext.Provider value={{ sortedData, addData, deleteData, updateData, seteditedData, editedData, setData }}>
            {children}
        </GlobalContext.Provider>
    )

}