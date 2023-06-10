import './Step1.css'
import vector from '../../assets/Vector.png'
import { Link } from 'react-router-dom';

function Step1(){
    return(
        <div className='site'>
            <div className='mainBlock'>
                <article className='mainBlock__article'>
                    <div className='article__inputform'>
                        <label className='article__label'>Номер телефона</label>
                        <input placeholder='+7 981 256-56-69' className='article__input'></input>
                    </div>
                    <div className='article__inputform'>
                        <label className='article__label'>email</label>
                        <input placeholder='slavasotnikov228@gmail.com' className='article__input'></input>
                    </div>
                    <div className='article__inputform'>
                        <label className='article__label'>email</label>
                        <input placeholder='slavasotnikov228@gmail.com' className='article__input'></input>
                    </div>
                    <div className='article__inputform'>
                        <label className='article__label'>email</label>
                        <input placeholder='slavasotnikov228@gmail.com' className='article__input'></input>
                    </div>
                    <div>
                        <Link className='article__button' id="button-start" to="/FrontCloudCamp_test-assignment">
                            назад
                        </Link>
                        <Link className='article__button' id="button-start" to="/create">
                            Далее
                        </Link>
                    </div>
                    
                </article>
            </div>
        </div>
    )
}

export default Step1;