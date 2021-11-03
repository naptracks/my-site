import color from "../styles/colors.module.scss";
import {
    hookL,
    hookR,
    bracketL,
    bracketR,
    parL,
    parR,
    a,
    o,
    g,
    p,
    y
} from './tools'


//write lines of code by writing object like so: {line, margin<1 to 3><optional>}
// {line: ''} => blank line
export const idePageOne = [
    {
        line: <>{p('import')} React {p('from')} {g("'react'")}</>
    },
    {line: ''},
    {line: '// Hi there, I\'m Cesar Martel and you are on my portfolio.'},
    {line: '// Please enjoy watching my experiences and works,'},
    {line: '// and don\'t forget to contact me!'},
    {line: <>{p('import ')} React {p('from')} {g('react')}</>},
    {
        line: <> <span className={color.purple}>async function</span> <span
            className={color.yellow}>welcomeToMyProfile</span>(<span
            className={color.blue}>name</span>, <span className={color.blue}>job</span>): <span
            className={color.yellow}>Promise</span>{hookL}<span
            className={color.blue}>boolean</span>{hookR} {bracketL} </>
    },
    {
        line: <><span className={color.purple}>const</span> response = <span className={color.purple}>await</span> <span
            className={color.yellow}>fetch</span>{parL}<span
            className={color.green}>`https://cesar-martel.com/api/`</span>, {bracketL}</>,
        margin: 1
    },

    {
        line: <><span className={color.orange}>method</span>: <span className={color.green}>"POST"</span></>,
        margin: 2
    },
    {
        line: <><span className={color.orange}>body</span>: <span
            className={color.green}>`Hi I'm </span>${bracketL}<span
            className={color.blue}>name</span>{bracketR}<span className={color.green}> and I work as ${bracketL}<span
            className={color.blue}>job</span>{bracketR}`</span>,</>,
        margin: 2
    },
    {
        line: <><span className={color.orange}>headers</span>: {bracketL}</>,
        margin: 2
    },
    {
        line: <> <span className={color.green}>"Content-Type"</span>: <span
            className={color.green}>"application/x-www-form-urlencoded"</span>,</>,
        margin: 3
    },

    {
        line: <>{bracketR},</>,
        margin: 2
    },

    {
        line: <>{bracketR}{parR};</>,
        margin: 1
    },

    {
        line: <><span className={color.purple}>const</span> json = <span className={color.purple}>await</span> response.<span
            className={color.yellow}>json</span>{parL}{parR};</>,
        margin: 1
    },

    {
        line: <><span className={color.purple}>return </span>json.label === <span className={color.green}>"pos"</span>;
        </>,
        margin: 1
    },

    {line: <>{bracketR};</>},
    {line: ''}

]

export const idePageTwo = [
    {line: 'hello bitches'}
]


export const idePageThree = [
    {line: 'how are you?'},
    {line: ''},
    {line: ''},
    {line: "I'm good thanks!"}
]


