import stylesLayout from "../../Layout.module.scss"
import cn from 'clsx'
import styles from "./NewWorkout.module.scss"
import Header from '../../header/Header.jsx'
const NewWorkout = () => {
  return <div className={cn(stylesLayout.wrapper, stylesLayout.wrapper_otherPage)} style={{backgroundImage:`url('/public/new-workout.jpg')`, height: 400}}>
    <Header />
      <div className={styles.heading}>Создание новой тренировки</div>
  </div>

}
export default NewWorkout;
