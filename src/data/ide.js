import color from "../styles/colors.module.scss";
import {
    hookL, // <
    hookR, // >
    bracketL, // {
    bracketR, // }
    parL, // (
    parR, // )
    a, // link(name, url)
    o, // orange
    g, // green
    p, // purple
    y, // yellow
    w, // white,
    b, // blue
} from './tools'


//write lines of code by writing object like so: {line, margin<1 to 3><optional>}
// {line: ''} => blank line
export const idePageOne = [
    {
        line: <>{p('import')} {b('React')} {p('from')} {g("'react'")}</>
    },
    {line: ''},
    {line: <>{w('// Hi there, I\'m Cesar Martel and you are on my portfolio.')}</>},
    {line: <>{w('// Please enjoy watching my experiences and works,')}</>},
    {line: <>{w('// and don\'t forget to click on the contact button!')}</>},
    {line: ''},
    {
        line: <>{p('export default function')} {y('WelcomeToMyProfile')}() {bracketL}</>
    },
    {
        line: <>{p('return')} {parL}</>,
        margin: 1
    },
    {
        line: <>{hookL}{hookR}</>,
        margin: 2
    },
    {
        line: <>{hookL}{o('Header')}/{hookR}</>,
        margin: 3,
        header: true
    },
    {
        line: <a href={'#skills'}>{hookL}{o('Skills')}/{hookR}</a>,
        margin: 3
    },
    {
        line: <a href={'#profile'}>{hookL}{o('Profile')}/{hookR}</a>,
        margin: 3
    },
    {
        line: <a href={'#portfolio'}>{hookL}{o('Portfolio')}/{hookR}</a>,
        margin: 3
    },
    {
        line: <>{hookL}{o('Footer')}/{hookR}</>,
        margin: 3
    },
    {
        line: <>{hookL}/{hookR}</>,
        margin: 2
    },
    {
        line: <>{parR}</>,
        margin: 1
    },
    {
        line: <>{bracketR};</>,
    },
    {line: ''}

]

export const idePageTwo = [
    {
        line: <>{p('import')} {b('React')} {p('from')} {g("'react'")}</>
    },
    {line: ''},
    {
        line: <>{p('export default function')} {y('Header')}() {bracketL}</>
    },
    {
        line: <>{p('return')} {parL}</>,
        margin: 1
    },
    {
        line: <>{hookL}{hookR}</>,
        margin: 2
    },
    {
        line: <>{hookL}{o('Nav')}/{hookR}</>,
        margin: 3
    },
    {
        line: <>{hookL}{o('Title')}{hookR}{w('Web Developer')}{hookL}/{o('Title')}{hookR}</>,
        margin: 3
    },
    {
        line: <>{hookL}{o('ContactButton')}/{hookR}</>,
        margin: 3,
        click: true
    },
    {
        line: <>{hookL}{o('IDE')}/{hookR}</>,
        margin: 3
    },
    {
        line: <>{hookL}/{hookR}</>,
        margin: 2
    },
    {
        line: <>{parR}</>,
        margin: 1
    },
    {
        line: <>{bracketR};</>,
    },
    {line: ''},
    {line: ''},
    {line: ''},
    {line: ''},
    {line: ''},
    {line: ''},
]


export const idePageThree = [
    {
        line: <>{p('import')} {b('React')} {p('from')} {g("'react'")}</>
    },
    {
        line: <>{p('import')} {bracketL} {b('getContact, getNiceReadableCode, getWorkDoneWithUpdates')} {bracketR} {p('from')} {g("'react'")}</>
    },
    {line: ''},
    {
        line: <>{p('export default function')} {y('ContactButton')}() {bracketL}</>
    },
    {line: ''},
    {
        line: <>{p('const')} {y('handleClick')} {g('=')} () {g('=>')} {bracketL}</>,
        margin: 1
    },
    {
        line: <>{b('getContact')}{parL}{parR};</>,
        margin: 2
    },
    {
        line: <>{b('getNiceReadableCode')}{parL}{parR};</>,
        margin: 2
    },
    {
        line: <>{b('getWorkDoneWithUpdates')}{parL}{parR};</>,
        margin: 2
    },
    {
        line: <>{bracketR};</>,
        margin: 1
    },
    {line: ''},
    {
        line: <>{p('return')} {parL}</>,
        margin: 1
    },
    {
        line: <>{hookL}{o('div')} {o('className=')}{g('"contactButton"')}{hookR}</>,
        margin: 2
    },
    {
        line: <>{hookL}{o('button')} {o('onClick=')}{bracketL}{w(<>{parL}{parR}</>)} => {y('handleClick')}{parL}{parR}{bracketR} {hookR}{w('CONTACT')}{hookL}/{o('button')}{hookR}</>,
        margin: 3
    },
    {
        line: <>{hookL}/{o('div')}{hookR}</>,
        margin: 2
    },
    {
        line: <>{parR}</>,
        margin: 1
    },
    {
        line: <>{bracketR};</>,
    },
    {line: ''},
    {line: ''}
]


