import color from "../styles/colors.module.scss";

export const hookL = '<'
export const hookR = '>'
export const bracketL = '{'
export const bracketR = '}'
export const parL = '('
export const parR = ')'
export const y = (text) => <span className={color.yellow}>{text}</span> //yellow
export const p = (text) => <span className={color.purple}>{text}</span> // purple
export const g = (text) => <span className={color.green}>{text}</span> // green
export const o = (text) => <span className={color.orange}>{text}</span> //orange
export const a = (text, href) => <a className={color.purple} href={href}>{text}</a> // link