import classes from './ad_vertical.module.scss';
import Image from 'next/image';

/**
 * @description Вертикальный Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @constructor
 */

const AdVertical = ({img, reference} = {}) => {
    return  (
            <a className={classes.ad__vertical} href={reference} target="_blank" rel="noopener noreferrer">
                <Image  className={classes.ad__vertical__img} src={img} width={346} height={960} alt="ad"/>
            </a>
    )
}
export default AdVertical;