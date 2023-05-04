import React from 'react';
import logo from '../images/logoRyM.jpg';
import styles from '../styles/Login.module.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

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
            errors.email = "Debe haber un email..."
        } else if (!regexEmail.test(inputs.email)) {
            errors.email = "Debe ser un e-mail valido..."
        } else if (!inputs.password) {
            errors.password = "Debe haber un password..."
        } else if (!regexPassword.test(inputs.password)) {
            errors.password = "Debe ser un password valido..."            
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
        e.preventDefault()
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
            return login(inputs)
        } return alert('Falta data')

    }
  return (
    <div className={styles.login}>
        <h2>Bienvenidos</h2>
        <img src={logo} alt='logo' />
        <form className={styles.form_login} onSubmit={handleSubmit}>
            <label>E-mail:</label>
            <input name='email' value={inputs.email} onChange={handleChange} placeholder='eje@mail.com'></input>
            <p className={styles.danger}>{errors.email}</p>
            <label>Password:</label>
            <input name='password' value={inputs.password} onChange={handleChange} placeholder='@Model101'></input>
            <p className={styles.danger}>{errors.password}</p>
            {
                Object.keys(errors).length === 0 ? (<button type= 'submit'>Ingresar</button>) : null
            }
        </form>
    </div>
  )
}
