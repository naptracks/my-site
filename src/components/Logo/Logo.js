import s from './Logo.module.scss';
import color from '../../styles/colors.module.scss';
import cn from "classnames";

const Logo = ({status}) => {


    const styles = cn({
        [s.status]: true,
        [s.busy]: status === 'ACTUALLY BUSY' || status === 'ACTUELLEMENT OCCUPÉ',
        [s.available]: status === 'ACTUALLY AVAILABLE' || status === 'ACTUELLEMENT DISPONIBLE'
    })

    return (
        <div className={s.logo}>
            <h3>CESAR <span className={color.yellow}>MARTEL</span></h3>
            <div className={styles}></div>
            {
                status === 'ACTUALLY BUSY' || status === 'ACTUELLEMENT OCCUPÉ' ?
                <h3 className={color.orange}>{status}</h3>
                    :
                    <h3 className={color.green}>{status}</h3>
            }

        </div>
    )
}

export default Logo;
