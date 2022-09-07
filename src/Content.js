import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        //console.log(`key: ${id}`)
        const listItems = items.map((item) => item.id === id ? {
            ...item,
            checked: !item.checked
        } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // cuva u lokalnoj memoriji
    }


    const handleDelete = (id) => {
        // console.log(id)
        const listItems = items.filter((item) => item.id !== id) // filter ce stvoriti novi niz i on ce imati samo id-ove koji nisu jednaki id-ju itema
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // cuva u lokalnoj memoriji
    }


    return (

        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        // Keys pomažu da identifikuje koje su stavke promenjene, dodate ili uklonjene. Elementima unutar niza treba dati ključeve kako bi se elementima dao stabilan identitet:
                        <li className="item" key={item.id}> 
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{marginTop: '2rem' }}>Your list is empty </p>
            )}
        </main>
        // kod buttona handleClick 2 pozivamo argument name pomocu anonimne funckije a u zagradi dodeljujemo vrednost imena 
    )
}

export default Content
