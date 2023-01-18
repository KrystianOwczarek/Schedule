import React from 'react'

const CurrentDate = props => {
    const getMonth = () => {
        const date = new Date()
        const month = date.getMonth()
        const currentMonth = props.monthArray[month]

        return(
            currentMonth
        )
    }

    return(
        <h1>{getMonth()}</h1>
    )
}

export default CurrentDate