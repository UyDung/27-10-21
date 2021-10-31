import { useState } from "react";

const useForm = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);         
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    const trySubmit = () => {
        setIsTouched(true);
    }
    

    return {
        value: enteredValue,        
        valueIsValid,
        hasError,
        inputChangeHandler: inputChangeHandler,
        inputBlurHandler: inputBlurHandler,
        reset,
        trySubmit,
    };
};

export default useForm;
