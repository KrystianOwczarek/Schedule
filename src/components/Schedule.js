import { Component } from 'react'
import List from './List'
import CurrentMonth from './CurrentMonth'
import Admin from './Admin'
import Legend from './Legend'
import './style.css'

class Schedule extends Component{
    state = {
        monthArray: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],

        login: this.getLoginStatus()
    }

    getLoginStatus() {
        const login = localStorage.getItem('login')
        if(login === null){
            return false
        }else{
            return JSON.parse(login)
        }
    }

    render() {
        console.log(this.state.login)
        return (
            <div> 
                <Legend/>
                <Admin login={this.state.login}/>
                <div className='container'>
                    <CurrentMonth monthArray={this.state.monthArray}/>
                    <List login={this.state.login} monthDays={this.state.monthDays}/>
                </div>
            </div>
        )
    }
}

export default Schedule