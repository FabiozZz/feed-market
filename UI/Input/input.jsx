import React, {useEffect, useState} from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Visibility, VisibilityOff } from '@mui/icons-material';

/**
 * @param {import('@mui/material').TextFieldProps} props
 * @property {boolean} [props.pass]
 * @property {boolean} [props.searchIcon]
 * @property {function():void} [props.setValue]
 * @returns {JSX.Element}
 * @constructor
 */
const Input = (props) => {
	const {
		pass = false,
		searchIcon = false,
		setValue,
		value,
		...other
	} = props
	const [showPass, setShowPass] = useState(false);

	const [localState,setLocalState] = useState('')

	const onChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if (props.name) {
			const obj = {
				[name]:value
			};
			if (setValue) {
				setValue(obj);
			}
		}else{
			if (setValue) {
				setValue(value);
			}
		}
		setLocalState(value)
	};

	useEffect(() => {
		if (value){
			setLocalState(value)
		}
	},[value]);

	return (
		<TextField
			id="standard-basic"
			type={pass && !showPass ? 'password' : 'text'}
			value={localState}
			onChange={onChange}
			size={'small'}
			sx={{
				'& label.Mui-focused': {
					color: 'green',
				},
				'& .MuiOutlinedInput-root': {
					borderRadius: 4,
					background: '#F2FAF5',
					'& fieldset': {
						borderColor: '#EEEFF1',
					},
					'&:hover': {
						backgroundColor: '#FFFFFF',
						borderColor: '#EEEFF1',
					},
					'&.Mui-focused fieldset': {
						backgroundColor: 'transparent',
						borderColor: '#F3DB00',
					},
					'&.Mui-focused': {
						backgroundColor: '#FFFFFF',
					},
				},
			}}
			InputProps={{
				...(searchIcon || pass && pass?{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => setShowPass(prevState => !prevState)}>
								{showPass ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}:searchIcon ?{
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon />
						</InputAdornment>
					),
				}:null),
			}}
			{...other}
		/>
	);
};

export default Input;
