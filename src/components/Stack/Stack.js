import s from './Stack.module.scss'
import KeyPoint from "../KeyPoint/KeyPoint";
import {svg} from '../../data/svg';


const Stack = () => {



    return (
        <div className={s.stack}>

            <KeyPoint bar>frameworks.</KeyPoint>
            <div className={s.content}>
                <div className={s.col}>
                    {svg.reactjs}
                   <a href={'https://reactjs.org/'} target={'_blank'}><p>React JS</p> </a>
                </div>
                <div className={s.col}>
                    {svg.nextjs}
                    <a href={'https://nextjs.org/'} target={'_blank'}>
                        <p>Next JS</p>
                    </a>
                </div>
            </div>

            <KeyPoint bar>languages.</KeyPoint>
            <div className={s.content}>
                <div className={s.col}>
                    {svg.js}
                    <a href={'https://developer.mozilla.org/en-US/docs/Web/javascript'} target={'_blank'}>
                    <p>JavaScript</p>
                    </a>
                </div>
                <div className={s.col}>
                    {svg.ts}
                    <a href={'https://developer.mozilla.org/en-US/docs/Web/typescript'} target={'_blank'}>
                    <p>TypeScript</p>
                    </a>
                </div>

            </div>

            <KeyPoint bar>backend.</KeyPoint>
            <div className={s.content}>
                <div className={s.col}>
                    {svg.nodejs}
                    <a href={'https://nodejs.org/en/'} target={'_blank'}>
                        <p>Node JS</p>
                    </a>

                </div>
                <div className={s.col}>
                    {svg.graphql}
                    <a href={'https://graphql.org/'} target={'_blank'}>
                        <p>GraphQL</p>
                    </a>

                </div>
               <div className={s.col}>
                   {svg.apollo}
                   <a href={'https://www.apollographql.com/'} target={'_blank'}>
                       <p>Apollo</p>
                   </a>

               </div>


            </div>
            <KeyPoint bar>hosting.</KeyPoint>
            <div className={s.content}>
                <div className={s.col}>
                    {svg.aws}
                    <a href={'https://aws.amazon.com/fr/'} target={'_blank'}>
                        <p>Amazon Web Services</p>
                    </a>

                </div>
                <div className={s.col}>
                    {svg.heroku}
                    <a href={'https://heroku.com/'} target={'_blank'}>
                        <p>Heroku</p>
                    </a>

                </div>
                <div className={s.col}>
                    {svg.firebase}
                    <a href={'https://firebase.com/'} target={'_blank'}>
                        <p>Firebase</p>
                    </a>

                </div>
                <div className={s.col}>
                    {svg.mongodb}
                    <a href={'https://mongodb.com/'} target={'_blank'}>
                        <p>Mongo DB</p>
                    </a>

                </div>
            </div>

            <KeyPoint bar>styles.</KeyPoint>
            <div className={s.content}>
                <div className={s.col}>
                    {svg.sass}
                    <a href={'https://sass-lang.com/'} target={'_blank'}>
                        <p>SASS</p>
                    </a>

                </div>
                <div className={s.col}>
                    {svg.materialui}
                    <a href={'https://mui.com/'} target={'_blank'}>
                        <p>Material UI</p>
                    </a>

                </div>
                <div className={s.col}>
                    {svg.tailwind}
                    <a href={'https://tailwindcss.com/'} target={'_blank'}>
                        <p>Tailwind CSS</p>
                    </a>

                </div>

            </div>

            <KeyPoint bar>tools.</KeyPoint>
            <div className={s.content}>
                <div className={s.col}>
                    {svg.git}
                    <a href={'https://git-scm.com/'} target={'_blank'}>
                        <p>Git</p>
                    </a>
                </div>
                <div className={s.col}>
                    {svg.vsc}
                    <a href={'https://code.visualstudio.com/'} target={'_blank'}>
                        <p>Visual Studio Code</p>
                    </a>
                </div>
                <div className={s.col}>
                    {svg.ws}
                    <a href={'https://www.jetbrains.com/fr-fr/webstorm/'} target={'_blank'}>
                        <p>WebStorm</p>
                    </a>
                </div>
                <div className={s.col}>
                    {svg.wp}
                    <a href={'https://www.wordpress.org/'} target={'_blank'}>
                        <p>Wordpress</p>
                    </a>
                </div>
            </div>
            <div className={s.techno}>
            </div>
            <div className={s.skills}>

            </div>
        </div>
    )
}

export default Stack;