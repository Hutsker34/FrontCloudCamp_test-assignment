import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    visible: false,
    mainScreen: {
        phone: '',
        email: ''
    },
    step1: {
        nickname: '',
        name: '',
        surname: '',
        sex: 'man',
    },
    
    step2: {
        advantages: ["","",""],
        radio: 0,
        checkbox: [],
    },
    step3: {
        about: ''
    },
    userData: {
        phone: '',
        email: '',
        nickname: '',
        name: '',
        surname: '',
        sex: 'man',
        advantages: [],
        radio: 0,
        checkbox: [],
        about: ''
    }
    
};

export const step1slice = createSlice({
    name: "step1slice",
    initialState,
    reducers: {
    setUserData: (state) => {
        state.userData = {
            phone: state.mainScreen.phone,
            email: state.mainScreen.email,
            nickname: state.step1.nickname,
            name: state.step1.name,
            surname: state.step1.surname,
            sex: state.step1.sex,
            advantages: state.step2.advantages,
            radio: state.step2.radio,
            checkbox: state.step2.checkbox,
            about: state.step3.about
        }
    },
        setMainScreen: (state, {payload}) => {
            state.mainScreen = {...payload}
    },
        setAdvantages: (state, {payload}) => {
            state.step2.advantages = payload
    },

        addAdvantages: (state) => {
            state.step2.advantages.push("")
    },
        setStep2Info: (state, {payload}) =>{
            state.step2 = payload
    },
        setStep3Info: (state, {payload}) =>{
            state.step3 = payload
    },
    
        setStep1Info: (state, {payload}) => {
            state.step1 = payload
    },
        openModal: (state) => {
            state.visible = true
    },
        closeModal: (state) => {
            state.visible = false
    }
    
    }
});

export const {setStep3Info, setStep2Info, setStep1Info, addAdvantages, setAdvantages, setMainScreen, setUserData,closeModal, openModal} = step1slice.actions;

export default step1slice.reducer;
