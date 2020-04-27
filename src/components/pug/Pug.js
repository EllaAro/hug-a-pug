import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Pug.css'

function Pug ({pugInfo}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className='image-container'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && <i className='far fa-grin-hearts favorite'></i>}
            {hovered && <i class='fas fa-dog choose'></i>}
            <img src={pugInfo.url} className='image-grid' alt={pugInfo.name}/>
        </div>
    )
}

Pug.propTypes = {
    pugInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        url: PropTypes.string.isRequired,
        expenses: PropTypes.number.isRequired,
      }),
}

export default Pug