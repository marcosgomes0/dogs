
import React from "react"


const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
},
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message: 'Mínimo 8 dígitos, 1 letra maiúscula, 1 letra minúscula e um número'
  },
  number: {
    regex: /^[0-9]+$/,
    message: 'Apenas números'
  }
}

const useForm = (type) => {
const [value, setValue] = React.useState(null);
const [error, setError] = React.useState(null);

function validate (value){
  
  if(type === false) {
    return true;
  }
  if (value.length === 0){
    setError("Preencha um valor");
    return false;
  }
  else if (types[type] && !types[type].regex.test(value)){
    setError(types[type].message);
  }
  else{
    setError(null)
    return true;
  }
}

function onChange({target}){
  if (error) validate(target.value)
  setValue(target.value)
}

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onblur: () => validate(value)
  }
}

export default useForm