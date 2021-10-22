import s from './Container.module.scss';
import cn from 'classnames'

const Container = (props) => {

    const {children, isDark, center, footer} = props
    const dark = cn ({
        [s.dark]: isDark,
    })
    const container = cn({
        [s.container]: true,
        [s.footer]: footer
    })

    return (
        <div className={dark}>
            <div className={container}>
                {children}
            </div>
        </div>

    )
}

export default Container;

