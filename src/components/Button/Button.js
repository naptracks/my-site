import s from './Button.module.scss';
import cn from 'classnames';
import {svg} from '../../data/svg'

const Button = ({children, white, black, onClick, cian, className, style}) => {

    const styles = cn({
        [s.btn]: true,
        [s.black]: black,
        [s.white]: white,
        [s.cian]: cian,
        [className]: className
    })

    return (
       <button onClick={onClick} style={style} className={styles}><p>{children} {svg.arrow}</p></button>
    )
}

export default Button;
