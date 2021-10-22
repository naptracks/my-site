import s from './IDE.module.scss';
import cn from 'classnames';
import {useEffect, useState} from "react";
import {svg} from '../../data/svg';

const IDE = ({blur}) => {

    const [active, setActive] = useState(1)
    const [anim, setAnim] = useState(1)

    useEffect(() => {
            const time = setInterval(() => setAnim(t =>t + 1), 780);
            return () => clearInterval(time)
    },[active])

    const hookL = '<'
    const hookR = '>'
    const bracketL = '{'
    const bracketR = '}'
    const parL = '('
    const parR = ')'


    const styles = cn({
        [s.ideContainer]: true,
        [s.blur]: blur
    })
    const codeStyle = cn ({
        [s.code]: true,
        [s.spaceBar]: true
    })

    const onClick = (active) => {
        setActive(active)
        setAnim(1)
    }

    //TAB 1
    const l1 =  <code className={ anim === 1 ? codeStyle : s.code}>
        <span className={s.purple}>import</span> React <span className={s.purple}>from</span> <span className={s.green}>'react'</span>
    </code>
    const l2 = <code className={anim === 2 ? codeStyle : s.code}>
        // Hi there, I'm Cesar Martel and you are on my portfolio.
    </code>
    const l3 = <code className={anim === 3 ? codeStyle : s.code}>
        // Please enjoy watching my experiences and works,
    </code>
    const l4 =  <code className={anim === 4 ? codeStyle : s.code}>
        // and don't forget to contact me!
    </code>
    const l5 =  <code className={anim === 5 ? codeStyle : s.code}>
        <span className={s.purple}>async function</span>  <span className={s.yellow}>welcomeToMyProfile</span>(<span className={s.blue}>name</span>, <span className={s.blue}>job</span>): <span className={s.yellow}>Promise</span>{hookL}<span className={s.blue}>boolean</span>{hookR} {bracketL}
    </code>
    const l6 = <code className={anim === 6 ? codeStyle : s.code}>
        <span className={s.purple}>const</span> response = <span className={s.purple}>await</span> <span className={s.yellow}>fetch</span>{parL}<span className={s.green}>`http://cesar-martel.com/api/`</span>, {bracketL}
    </code>
    const l7 = <code className={anim === 7 ? codeStyle : s.code}>
        <span className={s.orange}>method</span>: <span className={s.green}>"POST"</span>,
    </code>
    const l8 = <code className={anim === 8 ? codeStyle : s.code}>
        <span className={s.orange}>body</span>: <span className={s.green}>`Hi I'm </span>${bracketL}<span className={s.blue}>name</span>{bracketR}<span className={s.green}> and I work as ${bracketL}<span className={s.blue}>job</span>{bracketR}`</span>,
    </code>
    const l9 = <code className={anim === 9 ? codeStyle : s.code}>
        <span className={s.orange}>headers</span>: {bracketL}
    </code>
    const l10 = <code className={anim === 10 ? codeStyle : s.code}>
        <span className={s.green}>"Content-Type"</span>: <span className={s.green}>"application/x-www-form-urlencoded"</span>,
    </code>
    const l11 = <code className={anim === 11 ? codeStyle : s.code}>
        {bracketR},
    </code>
    const l12 = <code className={anim === 12 ? codeStyle : s.code}>
        {bracketR}{parR};
    </code>
    const l13 = <code className={anim === 13 ? codeStyle : s.code}>
        <span className={s.purple}>const</span> json = <span className={s.purple}>await</span> response.<span className={s.yellow}>json</span>{parL}{parR};
    </code>
    const l14 =  <code className={anim === 14 ? codeStyle : s.code}>
        <span className={s.purple}>return </span>json.label === <span className={s.green}>"pos"</span>;
    </code>
    const l15 = <code className={anim === 15 ? codeStyle : s.code}>
        {bracketR};
    </code>

    //TAB 2
    const l1b =  <code className={ anim === 1 ? codeStyle : s.code}>
        <span className={s.purple}>import</span> React <span className={s.purple}>from</span> <span className={s.green}>'react'</span>
    </code>
    const l2b = <code className={anim === 2 ? codeStyle : s.code}>
        // Hi there, I'm Cesar Martel and you are on my portfolio.
    </code>
    const l3b = <code className={anim === 3 ? codeStyle : s.code}>
        // Please enjoy watching my experiences and works,
    </code>
    const l4b =  <code className={anim === 4 ? codeStyle : s.code}>
        // and don't forget to contact me!
    </code>
    const l5b =  <code className={anim === 5 ? codeStyle : s.code}>
        <span className={s.purple}>async function</span>  <span className={s.yellow}>isPositive</span>(text: <span className={s.blue}>string</span>): <span className={s.yellow}>Promise</span>{hookL}<span className={s.blue}>boolean</span>{hookR} {bracketL}
    </code>
    const l6b = <code className={anim === 6 ? codeStyle : s.code}>
        <span className={s.purple}>const</span> response = <span className={s.purple}>await</span> <span className={s.yellow}>fetch</span>{parL}<span className={s.green}>`http://text-processing.com/api/sentiment/`</span>, {bracketL}
    </code>
    const l7b = <code className={anim === 7 ? codeStyle : s.code}>
        <span className={s.orange}>method</span>: <span className={s.green}>"POST"</span>,
    </code>
    const l8b = <code className={anim === 8 ? codeStyle : s.code}>
        <span className={s.orange}>body</span>: <span className={s.green}>`text=</span>${bracketL}text{bracketR}<span className={s.green}>`</span>,
    </code>
    const l9b = <code className={anim === 9 ? codeStyle : s.code}>
        <span className={s.orange}>headers</span>: {bracketL}
    </code>
    const l10b = <code className={anim === 10 ? codeStyle : s.code}>
        <span className={s.green}>"Content-Type"</span>: <span className={s.green}>"application/x-www-form-urlencoded"</span>,
    </code>
    const l11b = <code className={anim === 11 ? codeStyle : s.code}>
        {bracketR},
    </code>
    const l12b = <code className={anim === 12 ? codeStyle : s.code}>
        {bracketR}{parR};
    </code>
    const l13b = <code className={anim === 13 ? codeStyle : s.code}>
        <span className={s.purple}>const</span> json = <span className={s.purple}>await</span> response.<span className={s.yellow}>json</span>{parL}{parR};
    </code>
    const l14b =  <code className={anim === 14 ? codeStyle : s.code}>
        <span className={s.purple}>return </span>json.label === <span className={s.green}>"pos"</span>;
    </code>
    const l15b = <code className={anim === 15 ? codeStyle : s.code}>
        {bracketR};
    </code>

    //TAB 3
    const l1c =  <code className={ anim === 1 ? codeStyle : s.code}>
        <span className={s.purple}>import</span> React <span className={s.purple}>from</span> <span className={s.green}>'react'</span>
    </code>
    const l2c = <code className={anim === 2 ? codeStyle : s.code}>
        // Hi there, I'm Cesar Martel and you are on my portfolio.
    </code>
    const l3c = <code className={anim === 3 ? codeStyle : s.code}>
        // Please enjoy watching my experiences and works,
    </code>
    const l4c =  <code className={anim === 4 ? codeStyle : s.code}>
        // and don't forget to contact me!
    </code>
    const l5c =  <code className={anim === 5 ? codeStyle : s.code}>
        <span className={s.purple}>async function</span>  <span className={s.yellow}>isPositive</span>(text: <span className={s.blue}>string</span>): <span className={s.yellow}>Promise</span>{hookL}<span className={s.blue}>boolean</span>{hookR} {bracketL}
    </code>
    const l6c = <code className={anim === 6 ? codeStyle : s.code}>
        <span className={s.purple}>const</span> response = <span className={s.purple}>await</span> <span className={s.yellow}>fetch</span>{parL}<span className={s.green}>`http://text-processing.com/api/sentiment/`</span>, {bracketL}
    </code>
    const l7c = <code className={anim === 7 ? codeStyle : s.code}>
        <span className={s.orange}>method</span>: <span className={s.green}>"POST"</span>,
    </code>
    const l8c = <code className={anim === 8 ? codeStyle : s.code}>
        <span className={s.orange}>body</span>: <span className={s.green}>`text=</span>${bracketL}text{bracketR}<span className={s.green}>`</span>,
    </code>
    const l9c = <code className={anim === 9 ? codeStyle : s.code}>
        <span className={s.orange}>headers</span>: {bracketL}
    </code>
    const l10c = <code className={anim === 10 ? codeStyle : s.code}>
        <span className={s.green}>"Content-Type"</span>: <span className={s.green}>"application/x-www-form-urlencoded"</span>,
    </code>
    const l11c = <code className={anim === 11 ? codeStyle : s.code}>
        {bracketR},
    </code>
    const l12c = <code className={anim === 12 ? codeStyle : s.code}>
        {bracketR}{parR};
    </code>
    const l13c = <code className={anim === 13 ? codeStyle : s.code}>
        <span className={s.purple}>const</span> json = <span className={s.purple}>await</span> response.<span className={s.yellow}>json</span>{parL}{parR};
    </code>
    const l14c =  <code className={anim === 14 ? codeStyle : s.code}>
        <span className={s.purple}>return </span>json.label === <span className={s.green}>"pos"</span>;
    </code>
    const l15c = <code className={anim === 15 ? codeStyle : s.code}>
        {bracketR};
    </code>


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
                active === 1 ?
                    <div className={s.body}>
                        <div className={s.boxContent}>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    1
                                </div>
                                {anim >= 1  && l1}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    2
                                </div>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    3
                                </div>
                                {anim >= 2 && l2}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    4
                                </div>
                                {anim >= 3 && l3}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    5
                                </div>
                                {anim >= 4 && l4}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    6
                                </div>
                                {anim >= 5 && l5}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    7
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 6 && l6}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    8
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 7 && l7}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    9
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 8 && l8}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    10
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 9 && l9}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    11
                                </div>
                                <p className={s.tabL}>
                                    {anim >= 10 && l10 }
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    12
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 11 && l11}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    13
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 12 && l12}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    14
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 13 && l13}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    15
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 14 && l14}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    16
                                </div>
                                {anim >= 15 && l15}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    17
                                </div>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    18
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
            {
                active === 2 ?
                    <div className={s.body}>
                        <div className={s.boxContent}>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    1
                                </div>
                                {anim >= 1  && l1}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    2
                                </div>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    3
                                </div>
                                {anim >= 2 && l2}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    4
                                </div>
                                {anim >= 3 && l3}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    5
                                </div>
                                {anim >= 4 && l4}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    6
                                </div>
                                {anim >= 5 && l5}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    7
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 6 && l6}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    8
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 7 && l7}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    9
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 8 && l8}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    10
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 9 && l9}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    11
                                </div>
                                <p className={s.tabL}>
                                    {anim >= 10 && l10 }
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    12
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 11 && l11}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    13
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 12 && l12}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    14
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 13 && l13}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    15
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 14 && l14}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    16
                                </div>
                                {anim >= 15 && l15}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    17
                                </div>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    18
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
            {
                active === 3 ?
                    <div className={s.body}>
                        <div className={s.boxContent}>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    1
                                </div>
                                {anim >= 1  && l1}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    2
                                </div>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    3
                                </div>
                                {anim >= 2 && l2}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    4
                                </div>
                                {anim >= 3 && l3}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    5
                                </div>
                                {anim >= 4 && l4}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    6
                                </div>
                                {anim >= 5 && l5}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    7
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 6 && l6}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    8
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 7 && l7}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    9
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 8 && l8}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    10
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 9 && l9}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    11
                                </div>
                                <p className={s.tabL}>
                                    {anim >= 10 && l10 }
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    12
                                </div>
                                <p className={s.tabM}>
                                    {anim >= 11 && l11}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    13
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 12 && l12}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    14
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 13 && l13}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    15
                                </div>
                                <p className={s.tabS}>
                                    {anim >= 14 && l14}
                                </p>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    16
                                </div>
                                {anim >= 15 && l15}
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    17
                                </div>
                            </div>
                            <div className={s.lineCol}>
                                <div className={s.lineNumber}>
                                    18
                                </div>
                            </div>
                        </div>
                    </div> : null

            }
        </div>
    )
}

export default IDE;

