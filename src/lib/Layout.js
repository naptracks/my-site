import {
    getLocation,
    getProjectFive,
    getProjectFour,
    getProjectOne,
    getProjectThree,
    getProjectTwo,
    getStatus
} from "./api";
import {useProject} from "../hooks/useProject";

const Layout = ({Component,props}) => {


    return (
        <>
            <Component {...props}/>
        </>
    )
}

export default Layout;
