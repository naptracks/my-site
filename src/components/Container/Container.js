import s from './Container.module.scss';
import cn from 'classnames'

const Container = (props) => {

    const {children, isDark, footer, className, style} = props
    const dark = cn({
        [s.dark]: isDark,
    })
    const container = cn({
        [s.container]: true,
        [s.footer]: footer,
        [className]: className
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

