import classNames from 'classnames';
import classes from './checkbox.module.scss';

const Checkbox = ({id, groupChecked, ...other}) => {
    return (
        <div>
            <input type="checkbox" id={id} className={classNames(classes.customCheckbox,
                groupChecked ? classes.groupChecked : '')}
                   {...other}/>
            <label htmlFor={id}/>
        </div>
    );
}

export default Checkbox;