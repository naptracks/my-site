import s from './Portfolio.module.scss';
import Subtitle from "../../Subtitle";
import Button from "../../Button";
import {useState} from "react";
import KeyPoint from "../../KeyPoint/KeyPoint";
import Paragraph from "../../Paragraph";

const Portfolio = () => {

    const [active, setActive] = useState(1)

    const p ="Having worked in the exciting live music environment, I developed a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation."

    // const displaySite = (value, name) => {
    //     return <button onClick={() => setActive(value)} className={active === value && s.active}>{name}</button>
    //
    // }



    return (
        <div>
            <Subtitle p={p} cursor>Here is <span className={s.green}>what</span> I <span className={s.orange}>do</span></Subtitle>
            <div className={s.btn}>
                <Button black>CONTACT</Button>
            </div>
            <div className={s.row}>
                <div className={s.col}>
                    <KeyPoint bar>Select a web-site</KeyPoint>
                    <div className={s.menu}>
                        <button onClick={() => setActive(1)} className={active === 1 && s.active}>Le Comptoir des Roses</button>
                        <button onClick={() => setActive(2)} className={active === 2 && s.active}>Marc Bourreau</button>
                        <button onClick={() => setActive(3)} className={active === 3 && s.active}>Portfolio</button>
                        <button onClick={() => setActive(4)} className={active === 4 && s.active}>Snake Game</button>
                        <button onClick={() => setActive(5)} className={active === 5 && s.active}>Social Network</button>
                    </div>
                </div>
                <div className={s.content}>
                    <a href={'https://www.lecomptoirdesroses-frejus.fr/home'}>
                        <Paragraph title>Le Comptoir des Roses</Paragraph>
                    </a>

                    <div className={s.image}/>

                    <div className={s.siteProfile}>
                        <Paragraph p={p}>Specifications</Paragraph>
                        <Paragraph p={p}>Specifications</Paragraph>
                        <Paragraph p={p} wide>Specifications</Paragraph>
                        <Paragraph p={p}>Specifications</Paragraph>
                        <Paragraph p={p}>Specifications</Paragraph>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Portfolio;