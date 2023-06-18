import './Modalka.css'
import { useDispatch, useSelector} from 'react-redux'
import { closeModal } from '../../screens/Step1/step1slice'


function Modalka(props){
    const dispatch = useDispatch()
    if(useSelector((state => state.step1slice.visible)) == false){
        return null
    }
    return(
        <div className='modal'>
            <div className='modal__window'>
                <p>are you sure?</p>
                <button onClick = {() => dispatch(closeModal())}>X</button>
            </div>
        </div>       
    )     
}

export default Modalka