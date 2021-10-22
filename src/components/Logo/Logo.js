import s from './Logo.module.scss';

const Logo = () => {



    return (
        <div className={s.logo}>
            <h3>CESAR <span className={s.yellow}>MARTEL</span></h3>
            <div className={s.status}></div>
            <h3 className={s.green}>ACTUALLY AVAILABLE</h3>
        </div>
    )
}

export default Logo;
