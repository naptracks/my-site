import s from './Title.module.scss';

const Title = ({children, p}) => {
    return (
        <div className={s.center}>
            <h1>{children}</h1>
            {p && <p>{p}</p>}
        </div>
    )
}

export default Title;