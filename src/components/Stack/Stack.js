import s from './Stack.module.scss'
import KeyPoint from "../KeyPoint/KeyPoint";
import {svg} from '../../data/svg';
import color from '../../styles/colors.module.scss';


export const techno = (svg, name, href) => {
    return <div key={name} className={s.col}>
        {svg}
        <a href={href} target={'_blank'}><p>{name}</p></a>
    </div>
}



const Stack = () => {

    const {
        reactjs,
        nextjs,
        js,
        ts,
        nodejs,
        graphql,
        apollo,
        aws,
        heroku,
        firebase,
        vercel,
        sass,
        materialui,
        tailwind,
        ws,
        git,
        wp,
        vsc
    } = svg

    return (
        <div className={s.stack}>

            <KeyPoint bar>frameworks<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(reactjs.svg, reactjs.name, reactjs.href)}
                {techno(nextjs.svg, nextjs.name, nextjs.href)}
            </div>

            <KeyPoint bar>languages<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(js.svg, js.name, js.href)}
                {techno(ts.svg, ts.name, ts.href)}
            </div>

            <KeyPoint bar>backend<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(nodejs.svg, nodejs.name, nodejs.href)}
                {techno(graphql.svg, graphql.name, graphql.href)}
                {techno(apollo.svg, apollo.name, apollo.href)}
            </div>

            <KeyPoint bar>hosting<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(aws.svg, aws.name, aws.href)}
                {techno(heroku.svg, heroku.name, heroku.href)}
                {techno(firebase.svg, firebase.name, firebase.href)}
                {techno(vercel.svg, vercel.name, vercel.href)}
            </div>
            <KeyPoint bar>styles<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(sass.svg, sass.name, sass.href)}
                {techno(materialui.svg, materialui.name, materialui.href)}
                {techno(tailwind.svg, tailwind.name, tailwind.href)}
            </div>

            <KeyPoint bar>tools<span className={color.orange}>.</span></KeyPoint>
            <div className={s.content}>
                {techno(git.svg, git.name, git.href)}
                {techno(ws.svg, ws.name, ws.href)}
                {techno(vsc.svg, vsc.name, vsc.href)}
                {techno(wp.svg, wp.name, wp.href)}
            </div>
        </div>
    )
}

export default Stack;