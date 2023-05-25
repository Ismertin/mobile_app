import { useState } from "react"
import styles from "./Hamburger.module.scss"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Hamburger = () => {
    const [isShow, setIsShow] = useState(false)

    const logout = () => {}

  return (
      <div className={styles.wrapper}>
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? <AiOutlineMenu color='white'/> : <AiOutlineClose color="white"/> } 
      </button>

    </div>
  )
}
export default Hamburger