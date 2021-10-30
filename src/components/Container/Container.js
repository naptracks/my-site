import s from './Container.module.scss';
import cn from 'classnames'

const Container = (props) => {

    const {children, isDark, darkContact, footer, style, navbar, radius, fullRadius} = props
    const dark = cn({
        [s.dark]: isDark,
        [s.darkContact]: darkContact,
        [s.white]: !isDark && true,
        [s.radius]: radius,
        [s.fullRadius]: fullRadius
    })
    const container = cn({
        [s.container]: true,
        [s.footer]: footer,
        [s.navbar]: navbar,
        // [className]: className
    })

    return (
        <div className={dark}>
            <div className={container} style={style}>
                {children}
            </div>
        </div>
    )
}

export default Container;

