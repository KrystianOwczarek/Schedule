import React from 'react'

const Legend = () => {
    return(
        <div className='legend'>
            <div><div className='lightgreen'></div><span>wolny termin</span></div>
            <div><div className='red'></div><span>zarezerwowany termin</span></div>
            <div><div className='blue'></div>potwierdzona rezerwacja<span></span></div>
        </div>
    )
}

export default Legend