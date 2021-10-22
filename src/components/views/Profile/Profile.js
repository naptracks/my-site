import s from './Profile.module.scss';
import Subtitle from "../../Subtitle";
import KeyPoint from "../../KeyPoint/KeyPoint";
import {svg} from '../../../data/svg';
import Button from "../../Button";
import Socials from "../../Socials";

const Profile = () => {

    const p ="Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation."
    const strongSkill = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment,"



    return (
        <div>
            <Subtitle cursor white p={p} img>
                Let me <span className={s.yellow}>introduce</span> myself
            </Subtitle>
            <Socials/>
            <div className={s.btn}>
                <Button white>CONTACT</Button>
            </div>
            <div className={s.skillSet}>
                <div className={s.ability}>
                    <KeyPoint p={strongSkill} white>{svg.iconSkill1} strong skills.</KeyPoint>
                </div>
                <div className={s.ability}>
                    <KeyPoint p={strongSkill} white>{svg.iconSkill3} passionate.</KeyPoint>
                </div>
                <div className={s.ability}>
                    <KeyPoint p={strongSkill} white>{svg.iconSkill2} easy to work with.</KeyPoint>
                </div>
            </div>

        </div>
    )
}

export default Profile