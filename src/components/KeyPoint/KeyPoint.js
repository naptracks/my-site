import s from './KeyPoint.module.scss';
import cn from 'classnames';

const KeyPoint = ({children, white, bar, p, classname}) => {

    const styles = cn({
        [s.keyPoint]: true,
        [s.white]: white,
        [classname]: classname
    })

    return (
        <div className={styles}>
            <h1>{children}</h1>
            {bar && <div className={s.bar}/>}
            {p && <p>{p}</p>}
        </div>
    )
}

export default KeyPoint;