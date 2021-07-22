import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( c => 
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
