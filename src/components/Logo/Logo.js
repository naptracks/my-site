import s from './Logo.module.scss';
import color from '../../styles/colors.module.scss';
import cn from "classnames";
import {ENG_AVAILABLE, ENG_BUSY, FR_AVAILABLE, FR_BUSY} from "../../data/data";

const Logo = ({status}) => {


    const styles = cn({
        [s.status]: true,
        [s.busy]: status === ENG_BUSY || status === FR_BUSY,
        [s.available]: status === ENG_AVAILABLE || status === FR_AVAILABLE
    })

    return (
        <div className={s.logo}>
            <h3>CESAR <span className={color.yellow}>MARTEL</span></h3>
            <div className={styles}/>
            {
                status === ENG_BUSY || status === FR_BUSY ?
                    <h3 className={color.orange}>{status}</h3>
                    :
                    <h3 className={color.green}>{status}</h3>
            }
        </div>
    )
}

export default Logo;
