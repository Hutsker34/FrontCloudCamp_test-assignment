import './Step1.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import basket from '../../assets/basket.png'

function Step1(){
    const [selectedOption, setSelectedOption] = useState('Не выбрано');
    const [isOpen, setIsOpen] = useState(false);
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [progressbarFirst, setProgressbarFirst] = useState(false);
    const [progressbarSecond, setProgressbarSecond] = useState(false);





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
    }
    function showStep3(){
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setProgressbarSecond(true);
    }

    const options = ['Man', 'Woman'];

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


    

   



    return(
        <div className='site'>
            <div className='mainBlock--step1'>
                <div className='progressbar'>
                    <div className='progressbar__ball first__ball'></div>
                    <div className='progressbar__part ' style={{ backgroundColor: progressbarFirst ? '#5558FA' : '#F4F4F5' }}></div>
                    <div className='progressbar__ball second--ball' style={{ border: progressbarFirst ? '9px solid #5558FA' : 'none', backgroundColor: progressbarFirst ? 'white' : '#A6A6A6' }}></div>
                    <div className='progressbar__part second--part' style={{ backgroundColor: progressbarSecond ? '#5558FA' : '#F4F4F5' }}></div>
                    <div className='progressbar__ball third--ball' style={{ border: progressbarSecond ? '9px solid #5558FA' : 'none', backgroundColor: progressbarSecond ? 'white' : '#A6A6A6' }}></div>
                </div>
                {step1 &&
                    <article className='mainBlock__article'>
                        <div className='article__inputform'>
                            <label className='article__label'>Nickname</label>
                            <input id='field-nickname' placeholder='placeholder' className='article__input input-step1'/>
                        </div>
                        <div className='article__inputform'>
                            <label className='article__label'>Name</label>
                            <input id='field-name' placeholder='placeholder' className='article__input input-step1'/>
                        </div>
                        <div className='article__inputform'>
                            <label className='article__label'>Sername</label>
                            <input placeholder='placeholder' className='article__input input-step1'/>
                        </div>
                        <div className='article__inputform '>
                            <label className='article__label'>Sex</label>
                            <div className="custom-select ">
                                <div className="select-selected " onClick={handleSelectClick}>
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
                            <Link className='article__button article__button--back' id="button-start" to="/FrontCloudCamp_test-assignment">
                                назад
                            </Link>
                            <Link onClick={showStep2} className='article__button' id="button-start" to="/create">
                                Далее
                            </Link>
                        </div>
                        
                    </article>
                }   
                {step2 &&
                    <div className='mainBlock__article'>
                        <div className='article__inputform'>
                            <label className='article__label'>Advantages</label>
                            <div className='input__wrap'>
                                <input id='field-nickname' placeholder='placeholder' className='article__input input-step2'/>
                                <img className='input__wrap--img' src={basket} />
                            </div>

                            <div className='input__wrap'>
                                <input id='field-nickname' placeholder='placeholder' className='article__input input-step2'/>
                                <img className='input__wrap--img' src={basket} />
                            </div>

                            <div className='input__wrap'>
                                <input id='field-nickname' placeholder='placeholder' className='article__input input-step2'/>
                                <img className='input__wrap--img' src={basket} />
                            </div>
                            <div className=' add__input'>+</div>
                        </div>
                        <div className='article__checkboxes'>
                            <div className='checkbox__group'>
                                Checkbox group
                                <div className='checkbox__group--wrap'>
                                    <input className='checkboxes__square' type="checkbox"/>
                                    <label className='group__wrap--label'>1</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input  className='checkboxes__square' type="checkbox"/>
                                    <label className='group__wrap--label'>2</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input className='checkboxes__square' type="checkbox"/>
                                    <label className='group__wrap--label'>3</label>
                                </div>
                            </div>
                            <div className='checkbox__group'>
                                Radio group 
                                <div className='checkbox__group--wrap'>
                                    <input className='checkboxes__round' type="checkbox"/>
                                    <label className='group__wrap--label'>1</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input className='checkboxes__round' type="checkbox"/>
                                    <label className='group__wrap--label'>2</label>
                                </div>
                                <div className='checkbox__group--wrap'>
                                    <input className='checkboxes__round' type="checkbox"/>
                                    <label className='group__wrap--label'>3</label>
                                </div>
                            </div>
                        </div>
                        <div className='mainBlock__buttons'>
                            <Link onClick={showStep1} className='article__button article__button--back' id="button-start" >
                                назад
                            </Link>
                            <Link onClick={showStep3} className='article__button' id="button-start">
                                Далее
                            </Link>
                        </div>
                    </div>
                }
                {step3 &&
                    <div className='mainBlock__article'>
                        <div className='article__text'>
                            <label className='article__text--label'>About</label>
                            <textarea placeholder='placeholder' className='article__text--textarea' ></textarea>
                        </div>
                        <div className='mainBlock__buttons step3--buttons'>
                            <div onClick={showStep2} className='article__button article__button--back' id="button-start" >
                                назад
                            </div>
                            <div  className='article__button' id="button-start">
                                Отправить
                            </div>
                        </div>
                        
                    </div>
                }
            </div>
            
            
        </div>
    )
}

export default Step1;