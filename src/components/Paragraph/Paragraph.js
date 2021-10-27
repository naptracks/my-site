import s from './Paragraph.module.scss';
import cn from 'classnames'
import {ImportSvg} from "../../data/svg";
import {techno} from '../Stack/Stack';

const Paragraph = ({children, p, wide, title, svgTab}) => {

    const tab = svgTab ? svgTab.map(name => ImportSvg(name)) : null
    const styles = cn({
        [s.paragraph]: true,
        [s.wide]: wide,
        [s.title]: title
    })

    return (
        <div className={styles}>
            <h1>{children}</h1>
            {p && <p>{p}</p>}
            <div className={s.tech}>
                {svgTab && tab.map(t => techno(t.svg, t.name, t.href))}
            </div>
        </div>
    )
}

export default Paragraph;