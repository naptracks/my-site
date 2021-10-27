import s from './Stack.module.scss'
import KeyPoint from "../KeyPoint/KeyPoint";
import {svg} from '../../data/svg';
import color from '../../styles/colors.module.scss';


export const techno = (svg, name, href ) => {

    return <div className={s.col}>
        {svg}
        <a href={href} target={'_blank'}><p>{name}</p> </a>
    </div>

}

const Stack = () => {

    return (
        <div className={s.stack}>

            <KeyPoint bar>frameworks<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(svg.reactjs.svg, svg.reactjs.name, svg.reactjs.href)}
                {techno(svg.nextjs.svg, svg.nextjs.name, svg.nextjs.href)}
            </div>

            <KeyPoint bar>languages<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(svg.js.svg, svg.js.name, svg.js.href)}
                {techno(svg.ts.svg, svg.ts.name, svg.ts.href)}
            </div>

            <KeyPoint bar>backend<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(svg.nodejs.svg, svg.nodejs.name, svg.nodejs.href)}
                {techno(svg.graphql.svg, svg.graphql.name, svg.graphql.href)}
                {techno(svg.apollo.svg, svg.apollo.name, svg.apollo.href)}
            </div>

            <KeyPoint bar>hosting<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(svg.aws.svg, svg.aws.name, svg.aws.href)}
                {techno(svg.heroku.svg, svg.heroku.name, svg.heroku.href)}
                {techno(svg.firebase.svg, svg.firebase.name, svg.firebase.href)}
            </div>

            <KeyPoint bar>styles<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(svg.sass.svg, svg.sass.name, svg.sass.href)}
                {techno(svg.materialui.svg, svg.materialui.name, svg.materialui.href)}
                {techno(svg.tailwind.svg, svg.tailwind.name, svg.tailwind.href)}
            </div>

            <KeyPoint bar>tools<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(svg.git.svg, svg.git.name, svg.git.href)}
                {techno(svg.ws.svg, svg.ws.name, svg.ws.href)}
                {techno(svg.vsc.svg, svg.vsc.name, svg.vsc.href)}
                {techno(svg.wp.svg, svg.wp.name, svg.wp.href)}
            </div>
        </div>
    )
}

export default Stack;