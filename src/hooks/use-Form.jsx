import {useState} from 'react'

const useForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
        setInputError('');
    };

    const inputBlurHandler = () => {
        if (inputValue.trim() === "") {
            setInputError("Username can not be empty");
        }
    };

    return {
        inputValue,
        inputError,
        onChange: inputChangeHandler,
        onBlur: inputBlurHandler
    }
}

export default useForm
