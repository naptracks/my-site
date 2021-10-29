import s from './Form.module.scss'

const Form = ({data}) => {


    return (
        <div className={s.formContainer}>
            <section>
                <form className={s.form}>
                    <label>{data.email}</label>
                    <input/>
                    <label>{data.name}</label>
                    <input/>
                    <label>{data.message}</label>
                    <textarea/>
                        <button>{data.button}</button>
                </form>
            </section>

        </div>
    )
}

export default Form;