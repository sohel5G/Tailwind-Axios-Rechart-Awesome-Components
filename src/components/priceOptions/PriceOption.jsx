import PropTypes from 'prop-types';
import Features from './Features';

function PriceOption({ option }) {

    const { price, name, description, currency, id, features } = option;

    return (
        <div className='text-center p-7 border border-emerald-400'>
            <h1 className='text-4xl'> Name : {name} </h1>
            <h1 className='text-lg'> description : {description} </h1>
            <h1 className='text-3xl'> {currency} </h1>
            <h1 className='text-3xl'> id : {id} </h1>
            <h1 className='text-3xl'> price : {price} </h1>
            <div>
                {
                    features.map((feature, index) => <Features key={index} feature={feature}/> )
                }
            </div>
        </div>
        
    )
}

export { PriceOption };

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}






