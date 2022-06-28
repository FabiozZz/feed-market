import classes from './radiobutton.module.scss';
import classNames from 'classnames';
// import 'materialize-css/dist/css/materialize.min.css';

/**
 * @description Компонент кнопки
 *
 * @param {React.ButtonHTMLAttributes} props
 * @property {string} id - обязательно для заполнение отвечает за работу радио кнопки
 * @returns {JSX.Element}
 * @constructor
 */
const RadioButton = ({id,children , ...other}) => {
    return (
        <div className={classNames(classes.form_radio)}>
            <label>
                <input type="radio" {...other} />
                <span className={classNames(classes.radioButtonView)}/>
                <span className={classes.child}>{children}</span>
            </label>

        </div>
    );
}

export default RadioButton;