import NavBar from 'components/common/layouts/nav-bar';
import React, { useEffect, useState } from 'react';
import Slide from "@mui/material/Slide";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {AppBar} from "@mui/material";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const  HideOnScroll = ({children})=> {

	const [scrollTarget,setScrollTarget] = useState(undefined)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setScrollTarget(document.getElementById('__next'))
		}
	},[]);
	const trigger = useScrollTrigger({target:scrollTarget});
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

/**
 * @description Корневой Layout, содержит основную разметку страницы, одинаковую для нескольких страниц
 *
 * @example <caption>Пример использования компонента</caption>
 *
 * // pages/index.js
 *
 * export default function Index(){
 *     return (
 *         <Layout>
 *             // ... other code
 *         </Layout>
 *     )
 * }
 *
 *
 * @param children - страница которую вы оборачиваете
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ({ children }) => {

	/**
	 * @type {React.MutableRefObject<HTMLDivElement | null>}
	 */

	return (
		<div className={'app'}>
			<HideOnScroll>
				<AppBar color={'transparent'} sx={{
					'&':{
						boxShadow:'none'
					}
				}}>
					{/*<Toolbar>*/}
					  <NavBar />
					{/*</Toolbar>*/}
				</AppBar>
			</HideOnScroll>
			<main  className='app__content'>{children}</main>
		</div>
	);
};

export default Layout;
