import './Advantage.css'
import basket from '../../assets/basket.png'



function Advantage(props){

    

    function setValue(event){
        props.setAdvantage(event.target.value, props.id)
        
    }
    function removeAdv(){
        props.removeAdvantage(props.id)
    }
    
    
    return(
        <div className='advantage'>
            <div className='input__wrap'>
                <input  onChange={setValue} id={`field-advatages-${props.id + 1}`} placeholder='placeholder' className='article__input input-step2'/>
                <img onClick={removeAdv} id={`button-remove-${props.id + 1}`}  className='input__wrap--img' src={basket} />
            </div>
        </div>
    )
}

export default Advantage