import './Modalka.css'
import { useDispatch, useSelector} from 'react-redux'
import { closeModal } from '../../screens/Step1/step1slice'
import modalkaSucsses from '../../assets/modalkaSucsses.png'
import modalkaError from '../../assets/modalkaError.png'
import { Link } from 'react-router-dom'

function Modalka(props){
    const dispatch = useDispatch()
    if(useSelector((state => state.step1slice.visible)) == false){
        return null
    }
    return(
        <div className='modal'>
            {props.success ? (
                    <div className='modal__window'>
                        <p className='modalka__h1'>Форма успешно отправлена</p>
                        <img className='modalka__img' src={modalkaSucsses} />
                        <Link onClick = {() => dispatch(closeModal())} className='article__button modal__btn' id="button-to-main" to="/FrontCloudCamp_test-assignment">
                            На главную
                        </Link>
                    </div>
            ): props.error && (
                <div className='modal__window'>
                    <div className='error__wrap'>
                        <p className='modalka__h1'>Ошибка</p>
                    </div>

                    <div className='error__wrap wrap2'>
                        <img src={modalkaError} />
                    </div>

                    <div className='error__wrap wrap3'>
                        <div onClick = {() => dispatch(closeModal())} className='article__button modal__btn' id="button-close" >
                            Закрыть
                        </div>
                    </div>
                    
                    
                    
                </div>
            )}
            
        </div>       
    )     
}

export default Modalka