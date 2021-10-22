import s from './Subtitle.module.scss';
import cn from 'classnames';

const Subtitle = ({children, cursor, p, white, img}) => {

    const subtitle = cn({
        [s.subtitle]: true,
        [s.white]: white,
        [s.center]:true
    })
    const spaceBar = cn({
        [s.spaceBar]:true,
        [s.white]: white
    })

    return (
        <div className={s.center}>
            <div className={s.flex}>
                {img && <img className={s.pic} src={`/me.jpg`} alt={'Cesar Martel'}/>}

                <h1 className={subtitle}>
                    {children}
                    {
                        cursor &&  <span className={spaceBar}>_</span>
                    }
                </h1>
            </div>

            {
                p && <p>{p}</p>
            }
        </div>

    )
}

export default Subtitle;