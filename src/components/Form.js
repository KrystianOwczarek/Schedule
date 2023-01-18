import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [company, setCompany] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const form = useRef()

    const addReservation = () => {
        let resID = localStorage.getItem('id')
        let id = localStorage.getItem(`c${resID}`)
        localStorage.setItem(`c${id}name`, name)
        localStorage.setItem(`c${id}surname`, surname)
        localStorage.setItem(`c${id}company`, company)
        localStorage.setItem(`c${id}mail`, mail)
        localStorage.setItem(`c${id}phone`, phone)
        window.location.reload()
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_uh7p767', 'template_9f12nbr', form.current, 're7Z2aTQaKh30uKoq')
          .then((result) => {
              console.log(result.text);
              addReservation()
          }, (error) => {
              console.log(error.text);
          })
      }

    return(
        <form ref={form} onSubmit={sendEmail}>
            <input 
                type={'text'} 
                name={'name'}
                required
                placeholder={'Imię'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type={'text'} 
                name={'surname'}
                required
                placeholder={'Nazwisko'}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <input 
                type='text' 
                name='company'
                required 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder='Nazwa firmy'
            />
            <input 
                type='email' 
                name='mail'
                required 
                placeholder='E-mail'
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
            <input 
                type='phone'
                name='phone'
                required 
                placeholder='Numer telefonu'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <textarea value='Rezerwacja spotkania.' name='message'></textarea>
            <button>Dodaj rezerwacje</button>
        </form>
    )
}

export default Form