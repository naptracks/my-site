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

