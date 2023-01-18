import React, {useState} from 'react'

const Admin = props => {
    const [loginClass, setLoginClass] = useState('noDisplay')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const checkAccount = (e) => {
        e.preventDefault()
        if(login === 'admin' && password === 'admin'){
            localStorage.setItem('login', true)
            setLoginClass('noDisplay')
            window.location.reload()
        }
    }

    const adminButton = () => {
        const adminLogin = (e) => {
            document.body.style.overflow = 'hidden'
            setLoginClass('login')
        }

        return <button className='loginButton' onClick={adminLogin}>Admin</button>
    }

    const logoutButton = () => {
        const logout = () => {
            localStorage.setItem('login', false)
            window.location.reload()
        }
        
        return <button onClick={logout}>Wyloguj</button>
    }

    const isLogged = props.login
    return(
        <div>
          {isLogged ? logoutButton() : adminButton()}
            <div className={loginClass}>
                <form onSubmit={checkAccount}>
                    <input 
                        type={'text'} 
                        name={'login'}
                        required
                        placeholder={'Login'}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input 
                        type={'password'} 
                        name={'password'} 
                        placeholder={'Hasło'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Admin