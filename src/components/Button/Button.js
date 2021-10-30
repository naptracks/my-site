import s from './Button.module.scss';
import cn from 'classnames';
import {svg} from '../../data/svg'

const Button = ({children, white, black, onClick, cian}) => {

    const styles = cn({
        [s.btn]: true,
        [s.black]: black,
        [s.white]: white,
        [s.cian]: cian
    })

    return (
       <button onClick={onClick} className={styles}><p>{children} {svg.arrow}</p></button>
    )
}

export default Button;
