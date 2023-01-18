import React, {useRef} from 'react'
import exit from './img/exit.png'
import emailjs from '@emailjs/browser'

const CustomerInformation = props => {
    const form1 = useRef()
    const form2= useRef()

    const getName = () => {
        let resID = localStorage.getItem('id')
        let id = localStorage.getItem(`c${resID}`)
        const name = localStorage.getItem(`c${id}name`)
        return `${name}`
    }

    const getSurname = () => {
        let resID = localStorage.getItem('id')
        let id = localStorage.getItem(`c${resID}`)
        const surname = localStorage.getItem(`c${id}surname`)
        return `${surname}`
    }

    const getCompany = () => {
        let resID = localStorage.getItem('id')
        let id = localStorage.getItem(`c${resID}`)
        const company = localStorage.getItem(`c${id}company`)
        return company
    }

    const getEmail = () => {
        let resID = localStorage.getItem('id')
        let id = localStorage.getItem(`c${resID}`)
        const mail = localStorage.getItem(`c${id}mail`)
        return mail
    }

    const getPhone = () => {
        let resID = localStorage.getItem('id')
        let id = localStorage.getItem(`c${resID}`)
        const phone = localStorage.getItem(`c${id}phone`)
        return phone
    }

    const Cancel = (e) => {
        e.preventDefault()
        const divs = document.querySelectorAll('td div')
        const id = localStorage.getItem('id')
        const divID = id - 1
        emailjs.sendForm('service_uh7p767', 'template_9f12nbr', form1.current, 're7Z2aTQaKh30uKoq')
          .then((result) => {
            console.log(result.text)
            divs[divID].classList.remove('selected')
            localStorage.setItem(`c${id}name`, '')
            localStorage.setItem(`c${id}surname`, '')
            props.updateReservation()
            window.location.reload()
          }, (error) => {
              console.log(error.text);
          });
    }

    const updateConfirmed = () => {
        const divs = document.querySelectorAll('td div')
        const confirmed = document.querySelectorAll('.confirmed')

        const confirmedIndex = [...confirmed].map((div) => [...divs].indexOf(div))
        localStorage.setItem('con', JSON.stringify(confirmedIndex))
    }

    const Confirm = (e) => {
        e.preventDefault()
        const divs = document.querySelectorAll('td div')
        const id = localStorage.getItem('id')
        const divID = id - 1
        emailjs.sendForm('service_uh7p767', 'template_9f12nbr', form2.current, 're7Z2aTQaKh30uKoq')
          .then((result) => {
            console.log(result.text);
            divs[divID].classList.remove('selected')
            props.updateReservation()
            divs[divID].classList.toggle('confirmed')
            updateConfirmed()
            window.location.reload()
          }, (error) => {
              console.log(error.text);
          });
    }

    return(
            <div className='information'>
                <img src={exit} onClick={props.Back}/>
                <h2>{getName()} {getSurname()}</h2>
                <p>Nazwa firmy: {getCompany()}</p>
                <p>E-mail: {getEmail()}</p>
                <p>Numer telefonu: {getPhone()}</p>
                <button onClick={Cancel} className='cancel'>Anuluj</button>
                <form ref={form1}>
                    <input name='name' value={getName()}></input>
                    <input name='surname' value={getSurname()}></input>
                    <input name='company' value={getCompany()}></input>
                    <input name='mail' value={getEmail()}></input>
                    <input name='phone' value={getPhone()}></input>
                    <textarea name='message' value='Spotkanie anulowane.'></textarea>
                </form>
                <button onClick={Confirm} className='confirm'>Potwierdź</button>
                <form ref={form2}>
                    <input name='name' value={getName()}></input>
                    <input name='surname' value={getSurname()}></input>
                    <input name='company' value={getCompany()}></input>
                    <input name='mail' value={getEmail()}></input>
                    <input name='phone' value={getPhone()}></input>
                    <textarea name='message' value='Spotkanie potwierdzone.'></textarea>
                </form>
            </div>
    )
}

export default CustomerInformation