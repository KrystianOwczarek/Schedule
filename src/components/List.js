import {useEffect, useState} from 'react'
import Form from './Form'
import CustomerInformation from './CustomerInformation'

const List = props => {
    const [date] = useState(new Date())
    const [lastDay] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0))
    const [formClass, setFormClass] = useState('noDisplay')
    const [informationClass, setInformationClass] = useState('noDisplay')

    const calendarHeader = () => {
        let isLogged = props.login

        return(
            <thead>
                <tr><th>Data</th><th id='activityHeader'>Aktywność</th><th id='reservations' colSpan={4}>{isLogged ? 'Zarezerwowane dni' : 'Rezerwacja dni'}</th><th>{isLogged ? "Ilości rezerwacji danego dnia" : "Ilość możliwych rezerwacji w ciągu dnia"}</th></tr>
            </thead>
        )
    }

    const monthDays = () => {

        return(
            <tbody> 
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr className='noLeap'><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr className='leap'><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
                <tr><td></td><td className='activity'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='reservation'></td><td className='seting'></td></tr>
            </tbody>
        )
    }

    useEffect(() => {
        const tr1 = document.querySelector('tbody tr:last-child')
        const tr2 = document.querySelector('.leap')
        const tr3 = document.querySelector('.noLeap')
        if(lastDay.getDate() === 30){
            tr1.style.display = 'none'
        }else if(lastDay.getDate() === 29){
            tr1.style.display = 'none'
            tr2.style.display = 'none'
        }else if(lastDay.getDate() === 28){
            tr1.style.display = 'none'
            tr2.style.display = 'none'
            tr3.style.display = 'none'
        }
    }, [])

    useEffect(() => {
        let day = 1;
        const td = document.querySelectorAll('tbody td:first-child')
        const tr = document.querySelectorAll('tbody tr')
        const activity = document.querySelectorAll('.activity')
        
        for(let i = 0; i < td.length; i++){
            if(day<=lastDay.getDate()){
                td[i].innerHTML = `${day++}`
                tr[i].setAttribute('id', `c${day-1}`)
            }else{
                td[i].innerHTML = ''
                tr[i].setAttribute('id', '')
            }
        }
        for(let i = 0; i <= lastDay.getDate() - 1; i++){
            activity[i].innerHTML = 'Spotkanie'
        }
    }, [])

    const setReserved = () => {
        const divs = document.querySelectorAll('td div')
        const sel = JSON.parse(localStorage.getItem('sel'));
        if (sel !== null && sel.length > 0) {
            divs.forEach((div, index) => {
                if(sel.indexOf(index) > -1) {
                    let divID = index+1 
                    const name = localStorage.getItem(`c${divID}name`)
                    const surname = localStorage.getItem(`c${divID}surname`)
                    div.classList.add('selected')
                    div.innerHTML = `${name} ${surname}`
                }
          })
        }
    }

    const updateReservation = () => {
        const divs = document.querySelectorAll('td div')
        const selected = document.querySelectorAll('.selected')

        const selectedIndex = [...selected].map((div) => [...divs].indexOf(div))
        localStorage.setItem('sel', JSON.stringify(selectedIndex))
    }

    const getDiv = () => {
        const div = document.querySelectorAll('td div')
        let isLogged = props.login
        div.forEach((d, index) => d.addEventListener('click', (e) => {
            if(isLogged === false){
                if(e.target.classList.contains('selected') === false  && e.target.classList.contains('confirmed') === false){
                    e.target.classList.add('selected')
                    let divID = index +1
                    localStorage.setItem('id', divID)
                    document.body.style.overflow = 'hidden'
                    let id = localStorage.getItem('id')
                    localStorage.setItem(`c${divID}`, id)
                    setFormClass('form')
                    updateReservation()
                }
            }else if(e.target.classList.contains('selected') === true){
                let divID = index +1
                localStorage.setItem('id', divID)
                setInformationClass('informationDiv')
                let id = localStorage.getItem('id')
                localStorage.setItem(`c${divID}`, id)
                document.body.style.overflow = 'hidden'
            }
        }))
    }

    const reservationDiv = () => {
        const res = document.querySelectorAll('.reservation')
        
        for(let i = 0; i < res.length; i++){
            res[i].innerHTML = `<div data-id="allReservations"></div>`
        }
        getDiv()
    }

    const setSelectValue = () => {
        const selects = document.querySelectorAll('select')
        const selectedSelect = JSON.parse(localStorage.getItem('selectedSelect'))
        selects.forEach(select => select.addEventListener('click', (e) => { localStorage.setItem('selectID', e.target.id) }))
        const selectID = localStorage.getItem('selectID')
        if (selectedSelect !== null && selectedSelect.length > 0) {
            selects.forEach(select => {
                let value = localStorage.getItem(`${select.id}select`)
                if(value === null){
                    select.value = 4
                }else{
                    select.value = value
                }
            })
        }
    }

    const updateNumberOfReservation = () => {
        const selects = document.querySelectorAll('select')
        const selectedSelect = document.querySelectorAll('.selectedSelect')
        const selectIndex = [...selectedSelect].map((select) => [...selects].indexOf(select))
 
        localStorage.setItem('selectedSelect', JSON.stringify(selectIndex))
    }
    
    const setNumberOfReservations = () => {
        const selects = document.querySelectorAll('select')

        selects.forEach(select => select.addEventListener('click', (e) => {
            e.target.classList.add('selectedSelect')
            let id = e.target.id
            let value = e.target.value
            let divs = document.querySelectorAll(`#${id} div`)
            let hiddenDivs = 5 - value
            localStorage.setItem(`${e.target.id}select`, e.target.value)
            if(hiddenDivs === 3){
                divs[2].style.display = 'none'
                divs[3].style.display = 'none'
            }else if(hiddenDivs === 2){
                divs[2].style.display = ''
                divs[3].style.display = 'none'
            }else{
                divs[2].style.display = ''
                divs[3].style.display = ''
            }
            updateNumberOfReservation()
        }))
    }

    const setSelect = () => {
        let isLogged = props.login
        let string = ''
        for(let i = 1; i <= lastDay.getDate(); i++){
            string += `${i} `
        }

        let days = string.split(' ')
        const select = days.map(day => <select disabled={isLogged ? false : true} key={Math.random()} onChange={setNumberOfReservations} id={`c${day}`}><option>2</option><option>3</option><option selected>4</option></select>)
        return select
    }

    const resetFreeDays = () => {
        let isLogged = props.login
        const resetDays = () => {
            let firstID = localStorage.getItem('firstID')
            let secondID = localStorage.getItem('secondID')
            let thirdID = localStorage.getItem('thirdID')
            if(firstID != null && secondID === null && thirdID === null){
                window.location.reload()
                localStorage.removeItem('firstID')
            }else if(firstID != null && secondID != null && thirdID === null){
                window.location.reload()
                localStorage.removeItem('firstID')
                localStorage.removeItem('secondID')
            }else if(firstID != null && secondID != null && thirdID != null){
                window.location.reload()
                localStorage.removeItem('firstID')
                localStorage.removeItem('secondID')
                localStorage.removeItem('thirdID')
            } 
        }

        return(
            isLogged ? <button onClick={resetDays} className='reset'>Reset dni</button> : ''
        )
    }
    
    useEffect(() => {
        let firstID = localStorage.getItem('firstID')
        let secondID = localStorage.getItem('secondID')
        let thirdID = localStorage.getItem('thirdID')
        const id1 = document.querySelector(`table #${firstID}`)
        const id2 = document.querySelector(`table #${secondID}`)
        const id3 = document.querySelector(`table #${thirdID}`)
        let isLogged = props.login
        const select1 = document.querySelector(`${isLogged ? '.selectForAdmin' : '.selectForUser'} #${firstID}`)
        const select2 = document.querySelector(`${isLogged ? '.selectForAdmin' : '.selectForUser'} #${secondID}`)
        const select3 = document.querySelector(`${isLogged ? '.selectForAdmin' : '.selectForUser'} #${thirdID}`)
        const button1 = document.querySelector(`.buttonPosition #${firstID}`)
        const button2 = document.querySelector(`.buttonPosition #${secondID}`)
        const button3 = document.querySelector(`.buttonPosition #${thirdID}`)
        if(firstID != null && id1 != null){
            id1.style.visibility = 'hidden'
            select1.style.visibility = 'hidden'
            if(isLogged === true){
                button1.style.visibility = 'hidden'
            }
        }
        if(secondID != null && id2 != null){
            id2.style.visibility = 'hidden'
            select2.style.visibility = 'hidden'
            if(isLogged === true){
                button2.style.visibility = 'hidden'
            }
        }
        if(thirdID != null && id3 != null){
            id3.style.visibility = 'hidden'
            select3.style.visibility = 'hidden'
            if(isLogged === true){
                button3.style.visibility = 'hidden'
            }
        }
    }, [])

   
    const setConfirmed = () => {
        const divs = document.querySelectorAll('td div')
        const con = JSON.parse(localStorage.getItem('con'));
        if (con !== null && con.length > 0) {
            divs.forEach((div, index) => {
                if(con.indexOf(index) > -1) {
                    let divID = index+1 
                    const name = localStorage.getItem(`c${divID}name`)
                    const surname = localStorage.getItem(`c${divID}surname`)
                    div.classList.add('confirmed')
                    div.innerHTML = `${name} ${surname}`
                }
          })
        }
    }

    useEffect(() => {
        reservationDiv()
        setConfirmed()
        setReserved()
        setSelectValue()
    },[])

    useEffect(() => {
        const selects = document.querySelectorAll('select')

        selects.forEach(select => {
            let divs = document.querySelectorAll(`#${select.id} div`)
            let value = localStorage.getItem(`${select.id}select`)
            let hiddenDivs = 5 - value
            if(hiddenDivs === 3 && divs[3] !== undefined && divs[2] !== undefined){
                divs[2].style.display = 'none'
                divs[3].style.display = 'none'
            }else if(hiddenDivs === 2 && divs[3] !== undefined && divs[2] !== undefined){
                divs[2].style.display = ''
                divs[3].style.display = 'none'
            }
        })
    }, [])

    const setFreeDay = (e) => {
        let buttonId = e.target.id
        let firstID = localStorage.getItem('firstID')
        let secondID = localStorage.getItem('secondID')
        let thirdID = localStorage.getItem('thirdID')
        if(firstID === null && secondID === null && thirdID === null){
            localStorage.setItem('firstID', buttonId)
            let id = localStorage.getItem('firstID')
            const td = document.querySelector(`table #${id}`)
            const select = document.querySelector(`.selectForAdmin #${id}`)
            const button = document.querySelector(`.buttonPosition #${id}`)

            td.style.visibility = 'hidden'
            select.style.visibility = 'hidden'
            button.style.visibility = 'hidden'
        }else if(firstID != null && secondID === null && thirdID === null){
            localStorage.setItem('secondID', buttonId)
            let id = localStorage.getItem('secondID')
            const td = document.querySelector(`table #${id}`)
            const select = document.querySelector(`.selectForAdmin #${id}`)
            const button = document.querySelector(`.buttonPosition #${id}`)
            td.style.visibility = 'hidden'
            select.style.visibility = 'hidden'
            button.style.visibility = 'hidden'
        }else if(firstID != null && secondID != null && thirdID === null){
            localStorage.setItem('thirdID', buttonId)
            let id = localStorage.getItem('thirdID')
            let td = document.querySelector(`table #${id}`)
            const select = document.querySelector(`.selectForAdmin #${id}`)
            const button = document.querySelector(`.buttonPosition #${id}`)
            td.style.visibility = 'hidden'
            select.style.visibility = 'hidden'
            button.style.visibility = 'hidden'
        }
    }

    const allFreeButtons = () => {
        let isLogged = props.login
        let string = '';
        for(let i = 1; i <= lastDay.getDate(); i++){
            string += `${i} `
        }
        let days = string.split(' ')
        const buttons = days.map(day => <button onClick={setFreeDay} key={Math.random()} className='freeDayButton' id={`c${day}`}>Dzień wolny</button>)
        return  isLogged ? buttons : ''
    }

    const Back = () => {
        setInformationClass('noDisplay')
        document.body.style.overflowY = 'visible'
    }
    
    let isLogged = props.login
    return(
        <div className={isLogged ? 'positionForAdmin' : 'positionForUser'} id="position">
            {resetFreeDays()}
            <table>
                {calendarHeader()}
                {monthDays()}
            </table>
            <div className='buttonPosition'>{allFreeButtons()}</div>
            <div className={isLogged ? 'selectForAdmin' : 'selectForUser'}>{setSelect()}</div>
            <div className={formClass}><Form/></div>
            <div className={informationClass}><CustomerInformation updateReservation={updateReservation} Back={Back}/></div>
        </div>

    )
}

export default List