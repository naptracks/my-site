import s from './Form.module.scss'
import {useState} from "react";
import axios from "axios";

const Form = ({data}) => {
    const [email, setEmail] = useState({messageSent: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/sendEmail', email)
            .then((res) => {
                console.log(res)
                setEmail({...email, messageSent: true})
            }, (error) => {
                console.log(error);
            });
    }

    const handleChange = e => {
        setEmail({...email, [e.target.name]: e.target.value})
    }

    return (
        <div className={s.formContainer}>
            <section>
                <form onSubmit={e => handleSubmit(e)} className={s.form}>
                    <label>{data.email}</label>
                    <input type={'email'} name={'email'} onChange={e => handleChange(e)}/>
                    <label>{data.name}</label>
                    <input type={'name'} name={'name'}/>
                    <label name={'message'}>{data.message}</label>
                    <textarea/>
                    <button type={'submit'}>{data.button}</button>
                </form>
            </section>
        </div>
    )
}

export default Form;