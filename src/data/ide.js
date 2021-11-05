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
import {data} from './data';


//write lines of code by writing object like so: {line, margin<1 to 3><optional>}
// {line: ''} => blank line
export const idePageOne = (lang) => {
    const ide = lang === 'eng' ? data.home.eng.header.ide : data.home.fr.header.ide
    return [
        {
            line: <>{p('import')} {b('React')} {p('from')} {g("'react'")}</>
        },
        {line: ''},
        {line: <>{w(`// ${ide.line1}`)}</>},
        {line: <>{w(`// ${ide.line2}`)}</>},
        {line: <>{w(`// ${ide.line3}`)}</>},
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
            click2: true
        },
        {
            line: <><a href={'#skills'}>{hookL}{o('Skills')}/{hookR}</a> // {ide.com}</>,
            margin: 3
        },
        {
            line: <><a href={'#profile'}>{hookL}{o('Profile')}/{hookR}</a> // {ide.com}</>,
            margin: 3
        },
        {
            line: <><a href={'#portfolio'}>{hookL}{o('Portfolio')}/{hookR}</a> // {ide.com}</>,
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
}

export const idePageTwo = (lang) => {
    const ide = lang === 'eng' ? data.home.eng.header.ide : data.home.fr.header.ide

    return [
        {
            line: <>{p('import')} {b('React')} {p('from')} {g("'react'")}</>
        },
        {
            line: ''
        }
        ,
        {
            line: <>{p('export default function')} {y('Header')}() {bracketL}</>
        }
        ,
        {
            line: <>{p('return')} {parL}</>,
            margin: 1
        }
        ,
        {
            line: <>{hookL}{hookR}</>,
            margin: 2
        }
        ,
        {
            line: <>{hookL}{o('Nav')}/{hookR}</>,
            margin: 3
        }
        ,
        {
            line: <>{hookL}{o('Title')}{hookR}{w(`${ide.title}`)}{hookL}/{o('Title')}{hookR}</>,
            margin: 3
        }
        ,
        {
            line: <>{hookL}{o('ContactButton')}/{hookR}</>,
            margin: 3,
            click3: true
        },
        {
            line: <>{hookL}{o('IDE')}/{hookR}</>,
            margin: 3
        },
        {
            line: <>{hookL}/{hookR}</>,
            margin: 2
        }
        ,
        {
            line: <>{parR}</>,
            margin: 1
        }
        ,
        {
            line: <>{bracketR};</>,
        }
        ,
        {
            line: ''
        }
        ,
        {
            line: ''
        }
        ,
        {
            line: ''
        }
        ,
        {
            line: ''
        }
        ,
        {
            line: ''
        }
        ,
        {
            line: ''
        }
        ,
    ]
}


export const idePageThree = [
    {
        line: <>{p('import')} {b('React')} {p('from')} {g("'react'")}</>
    },
    {
        line: <>{p('import')} {bracketL} {b('getContact, getNiceReadableCode, getWorkDoneWithUpdates')} {bracketR} {p('from')} {g("'./lib'")}</>
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
        line: <>{hookL}{o('div')} {o('className')}{g('="contactButton"')}{hookR}</>,
        margin: 2
    },
    {
        line: <>{hookL}{o('button')} {o('onClick')}{g('=')}{bracketL}{w(<>{parL}{parR} => </>)}{y('handleClick')}{parL}{parR}{bracketR}{hookR}{w('CONTACT')}{hookL}/{o('button')}{hookR}</>,
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
]


