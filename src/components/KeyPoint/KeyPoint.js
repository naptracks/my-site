import s from './KeyPoint.module.scss';
import cn from 'classnames';

const KeyPoint = ({children, white, bar, p, classname, minHeight}) => {

    const styles = cn({
        [s.keyPoint]: true,
        [s.white]: white,
        [s.minHeight]: minHeight,
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