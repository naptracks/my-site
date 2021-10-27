import s from './Socials.module.scss';
import {svg} from "../../data/svg";
import cn from 'classnames'

const Socials = ({small}) => {

    const styles = cn({
        [s.social]: true,
        [s.small]: small,
    })

    return (
        <div className={styles}>
            <a href={'https://www.linkedin.com/in/cesar-martel-250309157/'} target={'_blank'}> {svg.linkedIn} </a>
            <a href={'https://github.com/naptracks'} target={'_blank'}> {svg.github} </a>
            <a href={'https://twitter.com/CesarMartel10'} target={'_blank'}> {svg.tweeter} </a>
            <a href={'https://stackoverflow.com/users/10972145/mc-code'} target={'_blank'}> {svg.stackOverFlow} </a>
        </div>
    )
}

export default Socials;