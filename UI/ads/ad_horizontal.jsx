import classes from './ad_horizontal.module.scss';
import Image from 'next/image';

/**
 * @description Горизонтальный Основной Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @constructor
 */

const AdHorizontal = ({img, reference} = {}) => {
    return  (
            <a className={classes.ad__horizontal} href={reference} target="_blank" rel="noopener noreferrer">
                <Image  className={classes.ad__horizontal__img} src={img} width={1463} height={328} alt="ad"/>
            </a>
    )
}
export default AdHorizontal;