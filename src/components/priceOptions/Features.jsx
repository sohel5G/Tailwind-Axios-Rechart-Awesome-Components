import PropTypes from 'prop-types';
import { BsCheck2Circle } from 'react-icons/bs';

function Features({ feature }) {
    return (
        <>
            <h1 className='flex gap-4 justify-center'>
                <span><BsCheck2Circle /></span> <span> {feature} </span> 
            </h1>
        </>
    )
}

export default Features;

Features.propTypes = {
    feature: PropTypes.string
}




