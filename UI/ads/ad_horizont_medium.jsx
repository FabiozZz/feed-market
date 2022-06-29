import classes from './ad_horizont_medium.module.scss';
import Image from 'next/image';

/**
 * @description Горизонтальный Средний Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @constructor
 */

 const AdHorizontalMedium = ({img, reference} = {}) => {
    return  (
            <a className={classes.ad__horizontal_small} href={reference} target="_blank" rel="noopener noreferrer">
                <Image  className={classes.ad__horizontal__img} src={img} width={1092} height={328} alt="ad"/>
            </a>
    )
}
export default AdHorizontalMedium;