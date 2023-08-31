import { useState, useEffect } from "react"
import AddCategory from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
    const [categories , setCategories] = useState(['One punch'])

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return

        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory onNewCategory={onAddCategory}  />

                {categories.map(category => 
                (
                    <GifGrid  key={category} category={category}/>
                ))}

        </>
    )
}