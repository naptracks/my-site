import s from './Surfer.module.scss';
import {svg} from "../../data/svg";

const Surfer = ({anim}) => {


    return (
        <div className={s.van}  >
            {/*<div className={s.text}> <KeyPoint>Surf the web with style...</KeyPoint> </div>*/}
            <div className={s.surferContainer} style={anim}>
                {svg.surfer}
            </div>
        </div>

    )
}

export default Surfer


// const refMain = useRef();
// const [anim, setAnim] = useState({})
// useLayoutEffect(() => {
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
// })
// const onScroll = () => {

//     const top = refMain.current.getBoundingClientRect().top
//     const scrollRef = top + 3500;
//     const width = (scrollRef) * -1.8
//     if(top <= -3500 && top >= -4500) {
//         setAnim({
//             transform: `translateX(${width}px)`,
//         })
//     }
// }
