import { AiOutlineArrowLeft } from "react-icons/ai"
import { useAuth } from "../../hooks/useAuth.js"
import styles from "./Header.module.scss"
import { FiArrowLeft } from "react-icons/fi"
const Header = ({ backLink }) => {

  const { isAuth } = useAuth()
  
  return <header className="{styles.header}">
    <button onClick={() => { }}>
      <AiOutlineArrowLeft color="white"/>
    </button>

  </header>
}
export default Header