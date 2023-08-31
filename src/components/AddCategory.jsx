import React, { useState } from 'react'

export default function AddCategory({onNewCategory}) {
  const [inputValue, setinputValue] = useState('One punch')

  const onInputChange = (event) =>{
    setinputValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    
    if(inputValue.trim().length <= 1 ) return

    // setCategories(categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim())
    setinputValue('')

  }

  
  return (
    <>
        <div>AddCategory</div>
        <form onSubmit={onSubmit}>

          <input type="text" placeholder='Search gifs' value={inputValue} onChange={(event) => onInputChange(event)} />

        </form>
    </>
  )
}
