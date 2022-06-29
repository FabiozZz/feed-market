import classNames from 'classnames';
import classes from './checkbox.module.scss';

/**
 * @description Компонент Checkbox
 *
 * @param {React.InputHTMLAttributes} props
 * @property {boolean} props.groupChecked - флаг для отображения выбора всех checkbox
 * @property {function} props.onChange - callback для события change
 * @returns {JSX.Element}
 * @constructor
 */

const Checkbox = ({groupChecked, children, ...other}) => {

    // let {disabled} = other;

    // const changeHandler = (e) => {
    //     if (onChange) {
    //         onChange();
    //     }
    //
    //     let parent = e.target.parentElement;
    //
    //     if (parent.className.indexOf('groupChecked') !== -1) {
    //         return;
    //     }
    //
    //     if (parent.className.indexOf('achecked') !== -1) {
    //         parent.className = classes.a;
    //     } else {
    //         parent.className = classNames(classes.a, classes.achecked);
    //     }
    // }
    //, !disabled || classes.adisabled, groupChecked ? classes.groupChecked : ''

    return (
        <div>
            <label>
                <input type="checkbox" {...other} className={classNames(classes.customCheckbox)}/>
                <span className={classes.view}/>
                <span>{children}</span>
            </label>
        </div>
    );
}

export default Checkbox;