import { shortText } from '../helpers/helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function BasketCard({ data, clickHandler }) {
    const { image, title, quantity } = data;

    return (
        <>
            <div className='flex h-30 items-center justify-between mb-4 p-4 rounded-md border border-purple-300 bg-white shadow-md shadow-purple-300/40'>
                <div className='flex items-center space-x-4'>
                    <img src={image} alt={title} className='w-20 h-20 object-contain' />
                    <p className='text-xl font-bold text-purple-700'>{shortText(title)}</p>
                </div>
                <div className='flex space-x-4 justify-center items-center transition-all ease-out bg-purple-900 px-3 py-1 rounded-md text-white'>
                    {quantity === 1 && (
                        <button onClick={() => clickHandler("REMOVE_ITEM", data)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    )}
                    {quantity > 1 && (
                        <button onClick={() => clickHandler("DECREASE", data)}>-</button>
                    )}
                    <span>{quantity}</span>
                    <button onClick={() => clickHandler("INCREASE", data)}>+</button>
                </div>
            </div>
            
        </>
    )
}

export default BasketCard