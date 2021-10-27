import color from "../styles/colors.module.scss";

const hookL = '<'
const hookR = '>'
const bracketL = '{'
const bracketR = '}'
const parL = '('
const parR = ')'

export const idePageOne = [
    //l1
    {line: <><span className={color.purple}>import</span> React < span className = {color.purple} > from < /span> <span
            className = {color.green} > 'react' < /span></>},
    //l2
    {line: '// Hi there, I\'m Cesar Martel and you are on my portfolio.'},
    //l3
    {line: '// Please enjoy watching my experiences and works,'},
    //l4
    {line: '// and don\'t forget to contact me!'},
    //l5
    {line: <> <span className={color.purple}>async function</span> <span className={color.yellow}>welcomeToMyProfile</span>(<span
            className={color.blue}>name</span>, <span className={color.blue}>job</span>): <span
            className={color.yellow}>Promise</span>{hookL}<span className={color.blue}>boolean</span>{hookR} {bracketL} </>},
    //l6
    {line: <><span className={color.purple}>const</span> response = <span className={color.purple}>await</span> <span
            className={color.yellow}>fetch</span>{parL}<span
            className={color.green}>`https://cesar-martel.com/api/`</span>, {bracketL}</> },
    //l7
    {line: <><span className={color.orange}>method</span>: <span className={color.green}>"POST"</span></>,},
    //l8
    {line: <><span className={color.orange}>body</span>: <span className={color.green}>`Hi I'm </span>${bracketL}<span
            className={color.blue}>name</span>{bracketR}<span className={color.green}> and I work as ${bracketL}<span
            className={color.blue}>job</span>{bracketR}`</span>,</>},
    //l9
    {line: <><span className={color.orange}>headers</span>: {bracketL}</>},
    //10
    {line: <> <span className={color.green}>"Content-Type"</span>: <span
            className={color.green}>"application/x-www-form-urlencoded"</span>,</>},
    //l11
    {line: <>{bracketR},</>},
    //l12
    {line: <>{bracketR}{parR};</>},
    //l13
    {line: <><span className={color.purple}>const</span> json = <span className={color.purple}>await</span> response.<span
            className={color.yellow}>json</span>{parL}{parR};</>},
    //l14
    {line: <><span className={color.purple}>return </span>json.label === <span className={color.green}>"pos"</span>;
        </>},
    //l15
    {line: <>{bracketR};</>},
    //l16
    {line: ''},
    //l17
    {line: ''},
    //l18
    {line: ''}
]

export const idePageTwo = [
    //l1
    {line: <><span className={color.purple}>import</span> React < span className = {color.purple} > from < /span> <span
            className = {color.green} > 'react' < /span></>},
    //l2
    {line: '  // Hi there, I\'m Cesar Martel and you are on my portfolio.'},
    //l3
    {line: '// Please enjoy watching my experiences and works,'},
    //l4
    {line: '// and don\'t forget to contact me!'},
    //l5
    {line: <> <span className={color.purple}>async function</span> <span className={color.yellow}>welcomeToMyProfile</span>(<span
            className={color.blue}>name</span>, <span className={color.blue}>job</span>): <span
            className={color.yellow}>Promise</span>{hookL}<span className={color.blue}>boolean</span>{hookR} {bracketL} </>},
    //l6
    {line: <><span className={color.purple}>const</span> response = <span className={color.purple}>await</span> <span
            className={color.yellow}>fetch</span>{parL}<span
            className={color.green}>`https://cesar-martel.com/api/`</span>, {bracketL}</> },
    //l7
    {line: <><span className={color.orange}>method</span>: <span className={color.green}>"POST"</span></>,},
    //l8
    {line: <><span className={color.orange}>body</span>: <span className={color.green}>`Hi I'm </span>${bracketL}<span
            className={color.blue}>name</span>{bracketR}<span className={color.green}> and I work as ${bracketL}<span
            className={color.blue}>job</span>{bracketR}`</span>,</>},
    //l9
    {line: <><span className={color.orange}>headers</span>: {bracketL}</>},
    //10
    {line: <> <span className={color.green}>"Content-Type"</span>: <span
            className={color.green}>"application/x-www-form-urlencoded"</span>,</>},
    //l11
    {line: <>{bracketR},</>},
    //l12
    {line: <>{bracketR}{parR};</>},
    //l13
    {line: <><span className={color.purple}>const</span> json = <span className={color.purple}>await</span> response.<span
            className={color.yellow}>json</span>{parL}{parR};</>},
    //l14
    {line: <><span className={color.purple}>return </span>json.label === <span className={color.green}>"pos"</span>;
        </>},
    //l15
    {line: <>{bracketR};</>},
    //l16
    {line: ''},
    //l17
    {line: ''},
    //l18
    {line: ''}
]


export const idePageThree = [
    //l1
    {line: <><span className={color.purple}>import</span> React < span className = {color.purple} > from < /span> <span
            className = {color.green} > 'react' < /span></>},
    //l2
    {line: '  // Hi there, I\'m Cesar Martel and you are on my portfolio.'},
    //l3
    {line: '// Please enjoy watching my experiences and works,'},
    //l4
    {line: '// and don\'t forget to contact me!'},
    //l5
    {line: <> <span className={color.purple}>async function</span> <span className={color.yellow}>welcomeToMyProfile</span>(<span
            className={color.blue}>name</span>, <span className={color.blue}>job</span>): <span
            className={color.yellow}>Promise</span>{hookL}<span className={color.blue}>boolean</span>{hookR} {bracketL} </>},
    //l6
    {line: <><span className={color.purple}>const</span> response = <span className={color.purple}>await</span> <span
            className={color.yellow}>fetch</span>{parL}<span
            className={color.green}>`https://cesar-martel.com/api/`</span>, {bracketL}</> },
    //l7
    {line: <><span className={color.orange}>method</span>: <span className={color.green}>"POST"</span></>,},
    //l8
    {line: <><span className={color.orange}>body</span>: <span className={color.green}>`Hi I'm </span>${bracketL}<span
            className={color.blue}>name</span>{bracketR}<span className={color.green}> and I work as ${bracketL}<span
            className={color.blue}>job</span>{bracketR}`</span>,</>},
    //l9
    {line: <><span className={color.orange}>headers</span>: {bracketL}</>},
    //10
    {line: <> <span className={color.green}>"Content-Type"</span>: <span
            className={color.green}>"application/x-www-form-urlencoded"</span>,</>},
    //l11
    {line: <>{bracketR},</>},
    //l12
    {line: <>{bracketR}{parR};</>},
    //l13
    {line: <><span className={color.purple}>const</span> json = <span className={color.purple}>await</span> response.<span
            className={color.yellow}>json</span>{parL}{parR};</>},
    //l14
    {line: <><span className={color.purple}>return </span>json.label === <span className={color.green}>"pos"</span>;
        </>},
    //l15
    {line: <>{bracketR};</>},
    //l16
    {line: ''},
    //l17
    {line: ''},
    //l18
    {line: ''}
]
