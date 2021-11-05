import Link from 'next/link'
import s from './Portfolio.module.scss';
import Subtitle from "../../../Subtitle";
import Button from "../../../Button";
import {useState} from "react";
import KeyPoint from "../../../KeyPoint/KeyPoint";
import Paragraph from "../../../Paragraph";
import {svg} from '../../../../data/svg';

const Portfolio = ({data, projects, lang}) => {
    const [active, setActive] = useState(0)
    const [up, setUp] =useState({top: '0'})

    const Content = (project, i) => {

        const svgTab = project.tech?.split(',')
        const image = (url) => url ? <div key={url} className={s.image} style={{backgroundImage: `url(${url})`}}/> : null

        return (
            <div key={i} className={s.content} style={up}>

                <a className={s.link} href={project.url} target={'_blank'}>
                    {svg.link}<Paragraph title>{project.title}</Paragraph>
                </a>

                {project.images.map(img => image(img.url))}

                <div className={s.siteProfile}>
                    <Paragraph wide svgTab={svgTab}>Technologies</Paragraph>
                    {
                        lang === 'eng' ? <>
                                <Paragraph wide p={project.eng.specsOne.p}>{project.eng.specsOne.title}</Paragraph>
                                <Paragraph wide p={project.eng.specsTwo.p}>{project.eng.specsTwo.title}</Paragraph>
                            </> :
                            <>
                                <Paragraph wide p={project.fr.specsOne.p}>{project.fr.specsOne.title}</Paragraph>
                                <Paragraph wide p={project.fr.specsTwo.p}>{project.fr.specsTwo.title}</Paragraph>
                            </>
                    }
                </div>
            </div>
        )
    }

    const onClick = i => {
        setActive(i)
        setUp({top: '0'})
    }

    return (
        <>
            <Subtitle p={data.p} cursor>{data.subtitle}</Subtitle>
            <div className={s.btn}>
                <Link href={'/contact'}>
                    <a><Button black>CONTACT</Button></a>
                </Link>
            </div>
            <div className={s.container}>
                <div className={s.col}>
                    <KeyPoint bar>{data.keyPoint}</KeyPoint>
                    <div className={s.menu}>
                        {
                            projects.map((p, i) => (
                                p.title &&
                                <button
                                    id={active}
                                    key={i}
                                    onClick={() => onClick(i)}
                                    className={active === i && s.active}>
                                    {p.title}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className={s.selection}>
                    <select className={s.selector} onChange={e => setActive(e.target.selectedIndex)} value={active}>
                        {
                            projects.map((p, i) => p.title && <option key={i} value={i}>{p.title}</option>)
                        }
                    </select>
                </div>
                {
                    projects.map((project, i) => active === i && Content(project, i))
                }
            </div>
        </>
    )
}


export default Portfolio;

