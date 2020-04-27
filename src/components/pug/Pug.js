import React, {useState, useContext} from 'react'
import {ContextPugChosen} from '../../context/ContextPugChosen'
import PropTypes from 'prop-types'
import './Pug.css'

function Pug ({pugInfo}) {
    const [hovered, setHovered] = useState(false);
    const {chosenPugs, updateChosenPugs, removeChosenPug} = useContext(ContextPugChosen);

    const handleChosenPug = () => {
        updateChosenPugs(pugInfo);
    }

    const chooseIcon = () => {
        const alreadyChosen = chosenPugs.some(pug => pug.id === pugInfo.id)
        if(alreadyChosen) {
            return <i className='far fa-grin-hearts choose chosen-icon' onClick={() => removeChosenPug(pugInfo)}></i>
        } else if(hovered) {
            return <i className='far fa-grin-hearts choose choose-icon' onClick={handleChosenPug}></i>
        }
    }

    return (
        <div 
            className='image-container'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {chooseIcon()}
            {hovered && <i className='fas fa-dog favorite'></i>}
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