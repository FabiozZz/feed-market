import classes from './ad_horizont_small.module.scss';
import Image from 'next/image';

/**
 * @description Горизонтальный Маленький Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @constructor
 */

 const AdHorizontalSmall = ({img, reference} = {}) => {
    return  (
            <a className={classes.ad__horizontal_small} href={reference} target="_blank" rel="noopener noreferrer">
                <Image  className={classes.ad__horizontal__img} src={img} width={1092} height={272} alt="ad"/>
            </a>
    )
}
export default AdHorizontalSmall;