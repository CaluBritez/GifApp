import { useState } from "react"


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState([''])

    const inputChange = ({ target: { value } }) => {
        setInputValue(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        setCategories((categories) => [...categories, inputValue]);
        setInputValue('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Agregar una categoria"
                    onChange={inputChange}
                    value={inputValue}
                />
            </form>
        </>
    )
}