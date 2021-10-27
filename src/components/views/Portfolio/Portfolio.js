import s from './Portfolio.module.scss';
import Subtitle from "../../Subtitle";
import Button from "../../Button";
import {useState} from "react";
import KeyPoint from "../../KeyPoint/KeyPoint";
import Paragraph from "../../Paragraph";
import {svg} from '../../../data/svg';

const Portfolio = ({data, projects, lang}) => {
    const [active, setActive] = useState(1)

    const projectOne = projects[0]
    const projectTwo = projects[1]
    const projectThree = projects[2]
    const projectFour = projects[3]
    const projectFive = projects[4]


    const Content = (project) => {
        const svgTab = project.tech?.split(',')
        const image = (url) => url ? <div className={s.image} style={{backgroundImage: `url(${url})`}}/> : null
        return (
                <div className={s.content}>

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



    return (
        <div>
            <Subtitle p={data.p} cursor>{data.subtitle}</Subtitle>
            <div className={s.btn}>
                <Button black>CONTACT</Button>
            </div>
            <div className={s.row}>
                <div className={s.col}>
                    <KeyPoint bar>{data.keyPoint}</KeyPoint>
                    <div className={s.menu}>
                        {
                            projects.map((p,i) => (
                                <button onClick={() => setActive((i+1))} className={active === (i+1) && s.active}>{p.title}</button>
                            ))
                        }

                    </div>
                </div>

                {active === 1 && Content(projectOne)}
                {active === 2 && Content(projectTwo)}
                {active === 3 && Content(projectThree)}
                {active === 4 && Content(projectFour)}
                {active === 5 && Content(projectFive)}
            </div>

        </div>
    )
}


export default Portfolio;

