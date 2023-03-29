import React from 'react';
import { Link } from 'react-router-dom';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Login({login}) {
    const [inputs, setInputs] = React.useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = React.useState({
        email: "",
        password: ""
    })
    function validate(inputs) {
        const errors = []
        if (!inputs.email) {
            errors.email = "Debe haber un email"
        } else if (!inputs.password) {
            errors.password = "Debe haber un password"
        } else if (!regexEmail.test(inputs.email)) {
            errors.email = 'Debe ser un e-mail valido' 
        }
        return errors;
    }

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value,
        })
        setErrors(validate({
            ...inputs,
            [e.target.name]:e.target.value,
        }))

    }
    function handleSubmit(e) {
        e.prevent.default()
        const aux = Object.keys(errors)
        if(aux.length === 0) {
            //envio
            setInputs({
                email: "",
                password: ""
            })
            setErrors({
                email: "",
                password: ""
            })
            login(inputs)
            return alert('ok')
        } return alert('Falta data')

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>E-mail:</label>
            <input name='email' value={inputs.email} onChange={handleChange}></input>
            <p className='danger'>{errors.email}</p>
            <label>password</label>
            <input name='password' value={inputs.password} onChange={handleChange}></input>
            <p className='danger'>{errors.password}</p>
            {
                Object.keys(errors).length === 0 ? (<Link to='/home'><button type= 'submit'>ingresar</button></Link>) : null
            }
        </form>
    </div>
  )
}
