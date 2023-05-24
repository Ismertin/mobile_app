import styles from "./Header.module.scss"
import { useAuth } from "../../hooks/useAuth.js"
import { FiArrowLeft } from "react-icons/fi"
import Hamburger from "../hamburger/Hamburger"



const Header = ({backLink}) => {
          const {isAuth} = useAuth()
          


    return (
      <header className="{styles.header}">
            <button onClick={() => { }}>
                <FiArrowLeft/>
            </button>
            <Hamburger />
            
      </header>
  )
}
export default Header