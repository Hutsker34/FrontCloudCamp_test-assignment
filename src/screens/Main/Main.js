import './Main.css'
import vector from '../../assets/Vector.png'
import { Link } from 'react-router-dom';
import { setMainScreen} from '../Step1/step1slice';
import { useDispatch} from 'react-redux'
import { useState } from 'react';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'


function Main(){
    const dispatch = useDispatch()
    const [ phone , setPhone ] = useState('')
    const [phoneError, setPhoneError] = useState(true);
    const [ email , setEmail ] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true);
    
    const convertPhoneNumber = (inp) => {
        if (isValidPhoneNumber(inp, 'RU')) {
          const phoneNumber = parsePhoneNumber(inp, 'RU')
          return phoneNumber.formatNational()
        }
        return inp
      }

      const handleInputChange = (e) => {
        const value = e.target.value
        const formattedValue = convertPhoneNumber(value)
        setPhone(formattedValue)
        setPhoneError(isValidPhoneNumber(value, 'RU'))
      }

    const validateEmail = (email) => {
        
        const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
        if (emailPattern.test(email)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
        };
    function helpUser(){
        if(phone == ''){
            setPhoneError(false)
        }else if(email == '' && phone == ''){
            setIsEmailValid(false)
            setPhoneError(false)
        }else if(email == ''){
            setIsEmailValid(false)
        }
        
    }


    function setuserEmail(event){
        setEmail(event.target.value)
        const newEmail = event.target.value;
            setEmail(newEmail);
            validateEmail(newEmail);
    }


    function addContacts(){
        dispatch(setMainScreen({phone: phone, email: email}))
    }

    return(
        <div className='site'>
            <div className='mainBlock'>
                <header className='mainBlock__header'>
                    <div className='header__logo'>
                        <p className='OS'>ВС</p>
                    </div>
                    <div className='header__info'>
                        <h1 className='header__info--name'>Вячеслав Сотников</h1>
                        <div className='header__info--Links'>
                            <a className='info__links--a a1' href="https://t.me/webKonung">
                                <img className='info__links--img' src={vector}/>
                                Telegram
                            </a>
                            <a className='info__links--a' href="https://github.com/viacheslav34/FrontCloudCamp_test-assignment">
                                <img className='info__links--img' src={vector}/>
                                GitHub
                            </a>
                            <a className='info__links--a' href="https://www.google.com">
                                <img className='info__links--img' src={vector}/>
                                Resume
                            </a>
                        </div>
                    </div>
                </header>
                <article className='mainBlock__article'>
                    <div className='article__inputform'>
                        <label className='article__label'>Номер телефона</label>
                        <input maxLength={11} value={phone} onChange={handleInputChange} placeholder='+7 999 999 99 99' className='article__input article__input--phone'></input>
                        {!phoneError && <p style={{ color: 'red' }}>Некорректный номер телефона</p>}
                    </div>
                    <div className='article__inputform'>
                        <label className='article__label'>email</label>
                        <input value={email} onChange={setuserEmail} placeholder='tim.jennings@example.com' className='article__input'></input>
                        {!isEmailValid && <p className='error__message'>Некорректный email</p>}
                    </div>
                    {isEmailValid && phoneError && phone !== '' && email !=='' ? (
                        <Link onClick={addContacts} className='article__button' id="button-start" to="/create">
                            Начать
                        </Link>
                    ) : (
                        <Link onClick={helpUser} className='article__button' id="button-start" >
                            Начать
                        </Link>
                    )
                }
                    
                </article>
            </div>
        </div>
    )
}

export default Main;