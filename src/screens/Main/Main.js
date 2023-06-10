import './Main.css'
import vector from '../../assets/Vector.png'
import { Link } from 'react-router-dom';



function Main(){
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
                        <input placeholder='+7 981 256-56-69' className='article__input'></input>
                    </div>
                    <div className='article__inputform'>
                        <label className='article__label'>email</label>
                        <input placeholder='slavasotnikov228@gmail.com' className='article__input'></input>
                    </div>
                    <Link className='article__button' id="button-start" to="/create">
                        Начать
                    </Link>
                </article>
            </div>
        </div>
    )
}

export default Main;