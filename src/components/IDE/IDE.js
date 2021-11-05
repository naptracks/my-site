import s from './IDE.module.scss';
import cn from 'classnames';
import {useEffect, useState} from "react";
import {svg} from '../../data/svg';
import {idePageOne, idePageTwo, idePageThree} from "../../data/ide";

const IDE = ({blur, lang}) => {

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


    const code = (lineNumber, code, margin, header, click) => {
        if(code.length === 0) return;
        if(header) return <code onClick={() => setActive(2)} style={tabHeader} className={anim === lineNumber ? codeStyle : s.code}>{code}</code>
        if(click) return <code onClick={() => setActive(3)} style={tabHeader} className={anim === lineNumber ? codeStyle : s.code}>{code}</code>
        if(margin === 1) return <code style={tabS} className={anim === lineNumber ? codeStyle : s.code}>{code}</code>
         else if(margin === 2) return <code style={tabM} className={anim === lineNumber ? codeStyle : s.code}>{code}</code>
         else if(margin === 3) return <code style={tabL} className={anim === lineNumber ? codeStyle : s.code}>{code}</code>
        return <code className={anim === lineNumber ? codeStyle : s.code}>{code}</code>
    }

    const appear = () => {
        setAnim(19)
    }

    const bodyOf = (page) => <div className={s.body} onClick={() => appear()}>
        <div className={s.boxContent}>
            {
                page.map((c, i) => {
                    let lineNumber = i + 1
                    return (
                            <div key={i} className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    {lineNumber}
                                </div>
                                {anim >= lineNumber && code(lineNumber, c.line, c.margin, c.header, c.click)}
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
                    {svg.tsMini} <span className={s.tabContent}>app.js</span>
                </button>
                <button onClick={() => onClick(2)} className={active === 2 ? s.tabUsed : s.tab}>
                    {svg.tsMini} <span className={s.tabContent}>Header.js</span>
                </button>
                <button onClick={() => onClick(3)} className={active === 3 ? s.tabUsed : s.tab}>
                    {svg.tsMini} <span className={s.tabContent}>ContactButton.js</span>
                </button>
            </div>
            {
                active === 1 && bodyOf(idePageOne(lang))
            }
            {
                active === 2 && bodyOf(idePageTwo(lang))
            }
            {
                active === 3 && bodyOf(idePageThree)
            }
        </div>
    )
}

export default IDE;


// margin on code text. 3 sizes of margin: s, m, l.
const tabS = {
    textIndent: '20px',
    margin: '0'
}

const tabM = {
    textIndent: '40px',
    margin: '0'
}

const tabL = {
    textIndent: '60px',
    margin: '0'
}

const tabHeader = {
    textIndent: '60px',
    margin: '0',
    cursor: 'pointer'
}
