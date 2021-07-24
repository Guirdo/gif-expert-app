import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div className="m-5">
            <div className="head-app">
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories} />
                <hr />
            </div>

            <ol>
                {
                    categories.map(c =>
                        <GifGrid
                            category={c}
                            key={c}
                        />
                    )
                }
            </ol>

        </div>
    )
}

export default GifExpertApp
