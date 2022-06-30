import classes from './radiobutton.module.scss';
import classNames from 'classnames';

/**
 * @description Компонент RadioButton
 *
 * @param {React.ButtonHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */
const RadioButton = ({children, ...other }) => {
	return (
		<div className={classNames(classes.form_radio)}>
			<label>
				<input type="radio" {...other} />
				<span className={classNames(classes.radioButtonView)} />
				<span className={classes.child}>{children}</span>
			</label>
		</div>
	);
};

export default RadioButton;
