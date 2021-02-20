import React from 'react'



function FullList() {
    return (
    <>
        <ul>
            {/* this is where the ENTIRE LIST of mushrooms will populate to */}
            <button>Edit</button><li>Mushroom 1</li><button>Delete</button>
            <br/>
            <br/>
            <button>Edit</button><li>Mushroom 2</li><button>Delete</button>
        </ul>
    </>
    )
}


export default FullList;
