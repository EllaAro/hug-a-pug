import React, {useState} from 'react'
import './Pug.css'

function Pug ({pugInfo}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="image-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={pugInfo.url} className="image-grid" alt={pugInfo.name}/>
        </div>
    )
}

export default Pug