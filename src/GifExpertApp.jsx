import './styles.css'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    return (        
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />
            
            <ul>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ul>
        </>
    )           

}