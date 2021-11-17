import s from './Socials.module.scss';
import {svg} from "../../data/svg";
import cn from 'classnames'

const Socials = ({small, orange}) => {

    const styles = cn({
        [s.social]: true,
        [s.small]: small,
        [s.orange]: orange
    })

    return (
        <div className={styles}>
            <a href={'https://www.linkedin.com/in/cesar-martel-250309157/'} target={'_blank'}> {svg.linkedIn} </a>
            <a href={'https://github.com/naptracks'} target={'_blank'}> {svg.github} </a>
            <a href={'https://www.malt.fr/profile/cesarmartel'} target={'_blank'}> {svg.malt} </a>
            <a  href={svg.codingGame.href} target={'_blank'}> {svg.codingGame.svg} </a>
        </div>
    )
}

export default Socials;