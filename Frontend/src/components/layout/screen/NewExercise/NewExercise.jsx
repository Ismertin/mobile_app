import stylesLayots from '../../Layout.module.scss'
import styles from '../NewWorkout/NewWorkout.module.scss'
import Header from "../../header/Header.jsx";
import {useNavigate} from "react-router-dom";
import cn from "clsx";
import {useForm} from "react-hook-form";
import Field from "../../../UI/field/Field.jsx";

const NewExercise = () => {
    const navigate = useNavigate()
    const {formState: errors, handleSubmit} = useForm()
    return <div className="wrapper_inner_page">
        <>
        <div className={cn(stylesLayots.wrapper_otherPage, stylesLayots.wrapper)} style={{backgroundImage: `url('public/new-exercise.jfif')`, height:400}}>
            <Header/>
            <div className={styles.heading}>Добавление упражнения</div>
        </div>
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors}
                       register={register}
                       options={{required:"required"}}
                       name="exericse"
                       type="text"
                       placeHolder = "Введите название упражнения"/>
                </form>
            </div>
            </>

    </div>
}
export default NewExercise
