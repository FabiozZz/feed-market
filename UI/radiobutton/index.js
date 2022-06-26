import classes from './radiobutton.module.scss';
import classNames from 'classnames';

/**
 * @description Компонент кнопки
 *
 * @param {React.ButtonHTMLAttributes} props
 * @property {string} id - обязательно для заполнение отвечает за работу радио кнопки
 * @returns {JSX.Element}
 * @constructor
 */
const RadioButton = ({id, ...other}) => {
    return (
        <div className={classNames(classes.form_radio)}>
            <input id={id} type="radio" {...other}/>
            <label htmlFor={id} className={classNames(classes.radioButtonView)}></label>
        </div>
    );
}

export default RadioButton;