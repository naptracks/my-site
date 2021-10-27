import s from './IDE.module.scss';
import cn from 'classnames';
import {useEffect, useState} from "react";
import {svg} from '../../data/svg';
import {idePageOne, idePageTwo, idePageThree} from "../../data/ide";

const IDE = ({blur}) => {

    const [active, setActive] = useState(1)
    const [anim, setAnim] = useState(1)

    useEffect(() => {
        const time = setInterval(() => setAnim(t => t + 1), 780);
        return () => clearInterval(time)
    }, [active])


    const styles = cn({
        [s.ideContainer]: true,
        [s.blur]: blur
    })
    const codeStyle = cn({
        [s.code]: true,
        [s.spaceBar]: true
    })

    const onClick = (active) => {
        setActive(active)
        setAnim(1)
    }

    const code = (lineNumber, code) => <code className={anim === lineNumber ? codeStyle : s.code}>{code}</code>

    const bodyOf = (page) => <div className={s.body}>
        <div className={s.boxContent}>
            {
                page.map((c, i) => {
                    let lineNumber = i + 1
                    return (
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    {lineNumber}
                                </div>
                                {anim >= lineNumber && code(lineNumber, c.line)}
                            </div>
                    )
                })
            }

        </div>
    </div>

    //RENDER
    return (
        <div className={styles}>
            <div className={s.headerContainer}>
                <button onClick={() => onClick(1)} className={active === 1 ? s.tabUsedWithRadius : s.tabWithRadius}>
                    {svg.tsMini} <span className={s.tabContent}>sentiments.ts</span>
                </button>
                <button onClick={() => onClick(2)} className={active === 2 ? s.tabUsed : s.tab}>
                    {svg.tsMini} <span className={s.tabContent}>my_sql.ts</span>
                </button>
                <button onClick={() => onClick(3)} className={active === 3 ? s.tabUsed : s.tab}>
                    {svg.tsMini} <span className={s.tabContent}>other.ts</span>
                </button>
            </div>
            {
                active === 1 && bodyOf(idePageOne)
            }
            {
                active === 2 && bodyOf(idePageTwo)
            }
            {
                active === 3 && bodyOf(idePageThree)
            }
        </div>
    )
}

export default IDE;

