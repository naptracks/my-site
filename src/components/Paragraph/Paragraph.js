import s from './Paragraph.module.scss';
import cn from 'classnames'

const Paragraph = ({children, p, wide, title}) => {

    const styles = cn ({
        [s.paragraph]: true,
        [s.wide]: wide,
        [s.title]: title
    })

    return (
        <div className={styles}>
            <h1>{children}</h1>
            {p && <p>{p}</p>}
        </div>
    )
}

export default Paragraph;