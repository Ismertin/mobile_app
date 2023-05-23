import {useState} from "react";
import styles from "./Hamburger.module.scss"
import {AiOutlineMenu, VscChromeClose} from "react-icons/all.js";

const Hamburger = () => {
    const [isShow,  setIsShow] = useState(false)

    const logoutHandler = () => {}
    return (
    <div className={styles.wrapper}>
        <button onClick={() => setIsShow(!isShow)}>
            {isShow ? <VscChromeClose color="white"/> : <AiOutlineMenu color="white"/>}

        </button>
    </div>
    )
}
export default Hamburger
