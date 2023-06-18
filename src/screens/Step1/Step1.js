import './Step1.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts'
import Advantage from '../../components/Advantages/Advantage';
import { useSelector, useDispatch } from 'react-redux';
import { setAdvantages, addAdvantages , setStep1Info, setUserData } from './step1slice';
import { setStep2Info } from './step1slice';
import { setStep3Info } from './step1slice';
import { openModal } from './step1slice';
import Modalka from '../../components/Modalka/Modalka';
import axios from 'axios';

function Step1(){
    const [isOpen, setIsOpen] = useState(false);
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [progressbarFirst, setProgressbarFirst] = useState(false);
    const [progressbarSecond, setProgressbarSecond] = useState(false);
    const [text, setText] = useState("");
    const [nickname , setNickname] = useState('');
    const [name , setName] = useState('');
    const [surname , setSurname] = useState('');
    const [selectedOption, setSelectedOption] = useState('Не выбрано');
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [radio, setRadio] = useState(0);
    const [checkboxValues, setCheckboxValues] = useState([]);
    const [isValid, setIsValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isSurnameValid, setIsSurnameValid] = useState(true)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    

    const dispatch = useDispatch()
    const maxWidth992 = useMediaQuery('(max-width: 992px)');
    const maxWidth650 = useMediaQuery('(max-width: 650px)');
    const maxWidth480 = useMediaQuery('(max-width: 480px)');
    const options = ['Man', 'Woman'];
    const advantages = useSelector((state) => state.step1slice.step2.advantages)
    const data = useSelector((state) => state.step1slice.userData)
    const count = text.replace(/\s/g, '').length;

    function setStep1Nickname(e){
        setNickname(e.target.value)
        const value = e.target.value
        const regex = /^[a-zA-Zа-яА-Я0-9\s]+$/
        const isValidInput = regex.test(value)
        setIsValid(isValidInput)
    }
    


    function setStep1Name(e){
        setName(e.target.value)
        const value = e.target.value
        const regex = /^[a-zA-Zа-яА-Я]+$/;
        const isValidInput = regex.test(value)
        setIsNameValid(isValidInput)
    }
    function setstep1Surname(e){
        setSurname(e.target.value)
        const value = e.target.value
        const regex = /^[a-zA-Zа-яА-Я]+$/;
        const isValidInput = regex.test(value)
        setIsSurnameValid(isValidInput)
    }
    
    
    
    
    const handleCheckboxChange = (e) => {
        const value = parseInt(e.target.value);
        const isChecked = e.target.checked;
    
        if (isChecked) {
            setCheckboxValues([...checkboxValues, value]);
        } else {
            setCheckboxValues(checkboxValues.filter((v) => v !== value));
        }
        };


    function addAdvantage(){
        dispatch(addAdvantages())
    }
    function setAllInfo(){
        console.log(data)
        axios.post(`https://api.sbercloud.ru/content/v1/bootcamp/frontend`,{
            data
        })
        .then(() => {
            setSuccess(true);
            setError(false);
        })
        .catch((err) => {
            setSuccess(false);
            setError(true);
        });
        dispatch(openModal())
    }
    

    function setStep1Information(){
        dispatch(setStep1Info({
            nickname: nickname,
            name: name,
            surname: surname,
            sex: selectedOption,
        }))
    }
    function setStep2Information(){
        dispatch(setStep2Info({
            advantages: advantages,
            radio: radio,
            checkbox: checkboxValues,
        }))
        setCheckboxValues([])
    }
    



    function setAdvantage(text, index){
        const newAdvantage = [...advantages]
        newAdvantage[index] = text
        dispatch(setAdvantages(newAdvantage))
    }



    function removeAdvantage(index){
        const newAdvantage = [...advantages]
        newAdvantage.splice(index, 1)
        console.log('NEW',newAdvantage)
        dispatch(setAdvantages(newAdvantage))
    }
    
    



    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1);
        setCheckbox2(false);
        setCheckbox3(false);
        setRadio(1)
    };
    
    const handleCheckbox2Change = () => {
        setCheckbox1(false);
        setCheckbox2(!checkbox2);
        setCheckbox3(false);
        setRadio(2)
    };
    
    const handleCheckbox3Change = () => {
        setCheckbox1(false);
        setCheckbox2(false);
        setCheckbox3(!checkbox3);
        setRadio(3)
    };

    function showStep1(){
        setStep1(true)
        setStep2(false)
        setStep3(false)
        setProgressbarFirst(false);
    }
    function showStep2(){
        setStep1(false)
        setStep2(true)
        setStep3(false)
        setProgressbarFirst(true);
        setProgressbarSecond(false);
        setStep1Information();
    }
    function showStep3(){
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setStep2Information()
        setProgressbarSecond(true);
    }


    function handleChange(event) {
        setText(event.target.value);
        dispatch(setStep3Info({
            about: text,
        }))
        dispatch(setUserData())
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    };

    const renderOptions = () => {
        return options.map((option, index) => (
        <div key={index} className="select-item" onClick={() => handleOptionClick(option)}>
            {option}
        </div>
        ));
    }
    function helpUser(){
       if(nickname == ''){
        setIsValid(false)
       }
       if(name == ''){
        setIsNameValid(false)
       }if(surname == ''){
        setIsSurnameValid(false)
       }
    }
    



    return(
        <div className='site'>
            <div className='mainBlock--step1'>
                <div className='progressbar'>
                    <div className='progressbar__ball first__ball'></div>
                    <div className='progressbar__part ' style={{ backgroundColor: progressbarFirst ? '#5558FA' : '#F4F4F5' }}></div>
                    {maxWidth480 ? (
                        <div className='progressbar__ball second--ball' style={{ 
                            border: progressbarFirst ? '6px solid #5558FA' : 'none', 
                            backgroundColor: progressbarFirst ? 'white' : '#A6A6A6' ,
                            width: progressbarFirst ? '15px' : '16px' ,
                            
                            
                            }}>
    
                        </div>
                        
                    ) : maxWidth650 ? (
                        <div className='progressbar__ball second--ball' style={{ 
                            border: progressbarFirst ? '7px solid #5558FA' : 'none', 
                            backgroundColor: progressbarFirst ? 'white' : '#A6A6A6' ,
                            height: progressbarFirst ? '17px' : '16px' ,
                            }}>
    
                        </div>
                    ): maxWidth992 ?(
                        <div className='progressbar__ball second--ball' style={{ 
                            border: progressbarFirst ? '7px solid #5558FA' : 'none', 
                            backgroundColor: progressbarFirst ? 'white' : '#A6A6A6' ,
                            }}>
    
                        </div>
                    ) :(
                        <div className='progressbar__ball second--ball' style={{ 
                            border: progressbarFirst ? '9px solid #5558FA' : 'none', 
                            backgroundColor: progressbarFirst ? 'white' : '#A6A6A6' ,
                            }}>
    
                        </div>
                    )}
                    
                    <div className='progressbar__part second--part' style={{ backgroundColor: progressbarSecond ? '#5558FA' : '#F4F4F5' }}></div>
                    {maxWidth480 ? (
                        <div className='progressbar__ball third--ball' 
                            style={{ border: progressbarSecond ? '6px solid #5558FA' : 'none', 
                            backgroundColor: progressbarSecond ? 'white' : '#A6A6A6' ,
                            width: progressbarSecond ? '15px' : '16px' ,
                            
                            }}>

                        </div>
                    ) : maxWidth650 ? (
                        <div className='progressbar__ball third--ball' 
                            style={{ border: progressbarSecond ? '7px solid #5558FA' : 'none', 
                            backgroundColor: progressbarSecond ? 'white' : '#A6A6A6' ,
                            height: progressbarSecond ? '17px' : '16px' ,
                            }}>

                        </div>
                    ): maxWidth992 ?(
                        <div className='progressbar__ball third--ball' 
                            style={{ border: progressbarSecond ? '7px solid #5558FA' : 'none', 
                            backgroundColor: progressbarSecond ? 'white' : '#A6A6A6' 
                            }}>

                        </div>
                    ) :(
                        <div className='progressbar__ball third--ball' 
                            style={{ border: progressbarSecond ? '9px solid #5558FA' : 'none', 
                            backgroundColor: progressbarSecond ? 'white' : '#A6A6A6' 
                            }}>

                        </div>
                    )}
                    
                </div>
                {step1 &&
                    <article className='mainBlock__article'>
                        <div className='article__inputform'>
                            <label className='article__label'>Nickname</label>
                            <input maxLength={30} value={nickname} onChange={setStep1Nickname} id='field-nickname' placeholder='placeholder' className='article__input input-step1'/>
                            {!isValid && <p className='error__message'>Допустимы только буквы и цифры</p>}
                        </div>
                        <div className='article__inputform'>
                            <label className='article__label'>Name</label>
                            <input maxLength={50} value={name} onChange={setStep1Name} id='field-name' placeholder='placeholder' className='article__input input-step1'/>
                            {!isNameValid && <p className='error__message'>Допустимы только буквы</p>}
                        </div>
                        <div className='article__inputform'>
                            <label className='article__label'>Surname</label>
                            <input value={surname} onChange={setstep1Surname} id='field__sername' placeholder='placeholder' className='article__input input-step1'/>
                            {!isSurnameValid && <p className='error__message'>Допустимы только буквы</p>}
                        </div>
                        <div className='article__inputform '>
                            <label className='article__label'>Sex</label>
                            <div id='field-sex' className="custom-select ">
                                <div  className="select-selected " onClick={handleSelectClick}>
                                    {selectedOption}
                                    <span className='select-selected--chevron'>&#709;</span>
                                </div>
                                {isOpen && (
                                    <div className="select-items">
                                    {renderOptions()}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='mainBlock__buttons'>
                            <Link className='article__button article__button--back' id="button-back" to="/FrontCloudCamp_test-assignment">
                                назад
                            </Link>
                            {isNameValid && isSurnameValid && isValid && name !== '' && surname !== '' && nickname !== '' && selectedOption !== 'Не выбрано'? (
                                    <div  onClick={showStep2} className='article__button' id="button-next" >
                                        Далее
                                    </div>
                                ) : (
                                    <div onClick={helpUser} className='article__button' id="button-next" >
                                        Далее
                                    </div>
                                )
                            }
                        </div>
                        
                    </article>
                }   
                {step2 &&
                    <div className='mainBlock__article'>
                        <div className='article__inputform'>
                            <label className='article__label'>Advantages</label>
                            {advantages.map((item,index)=> {
                                return <Advantage  removeAdvantage={removeAdvantage} setAdvantage={setAdvantage} id={index} text={item} key={index} />
                            })}
                            <div onClick={addAdvantage} id='button-add' className='add__input'>+</div>
                        </div>
                        <div className='article__checkboxes'>
                            <div className='checkbox__group'>
                                Checkbox group
                                <div className='checkbox__group--wrap'>
                                    <input value={1} onChange={handleCheckboxChange} id='field-checkbox-group-option-1' className='checkboxes__square' type="checkbox"/>
                                    <label className='group__wrap--label'>1</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input value={2} onChange={handleCheckboxChange} id='field-checkbox-group-option-2' className='checkboxes__square' type="checkbox"/>
                                    <label className='group__wrap--label'>2</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input value={3} onChange={handleCheckboxChange} id='field-checkbox-group-option-3' className='checkboxes__square' type="checkbox"/>
                                    <label className='group__wrap--label'>3</label>
                                </div>
                            </div>
                            <div className='checkbox__group'>
                                Radio group 
                                <div className='checkbox__group--wrap'>
                                    <input checked={checkbox1} onChange={handleCheckbox1Change} id='field-radio-group-option-1' className='checkboxes__round' type="checkbox"/>
                                    <label className='group__wrap--label'>1</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input checked={checkbox2} onChange={handleCheckbox2Change} id='field-radio-group-option-2' className='checkboxes__round' type="checkbox"/>
                                    <label className='group__wrap--label'>2</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input checked={checkbox3} onChange={handleCheckbox3Change} id='field-radio-group-option-3' className='checkboxes__round' type="checkbox"/>
                                    <label className='group__wrap--label'>3</label>
                                </div>
                            </div>
                        </div>
                        <div className='mainBlock__buttons'>
                            <div onClick={showStep1} className='article__button article__button--back' id="button-back" >
                                назад
                            </div>
                            {radio !== 0 && checkboxValues !== []? (
                                    <div onClick={showStep3} className='article__button' id="button-next">
                                        Далее
                                    </div>
                                ) : (
                                    <div className='article__button' id="button-next">
                                        Далее
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
                {step3 &&
                    <div className='mainBlock__article'>
                        <div className='article__text'>
                            <label className='article__text--label'>About</label>
                            <textarea value={text} onChange={handleChange} maxLength={200} placeholder='placeholder' id='field-about' className='article__text--textarea' ></textarea>
                            <div className='article__text--letterscounter'>{count} символов</div>
                        </div>
                        <div className='mainBlock__buttons mainBlock__buttons--step3'>
                            <div onClick={showStep2} className='article__button article__button--back button__back--step3' id="button-back" >
                                назад
                            </div>
                            <div onClick={setAllInfo} className='article__button button__submit--step3' id="button-send">
                                Отправить
                            </div>
                        </div>
                        <Modalka error={error} success={success} modalOpen = {() => dispatch((openModal()))} />
                    </div>
                    
                }
            </div>
            
            
        </div>
    )
}

export default Step1;