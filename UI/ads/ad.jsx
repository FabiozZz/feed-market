import classes from './ad.module.scss';
import Image from 'next/image';

/**
 * @description - Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @param {('small'|'medium'|'large'|'vertical')} type - размер и тип рекламного блока
 * @returns {JSX.Element}
 * @constructor
 */
 const Ad = ({img, reference, type} = {}) => {
    const typeAd = 'ad__' +  type;

    return  (
            <a className={classes[typeAd]} href={reference} target="_blank" rel="noopener noreferrer">
                <Image  src={img} layout="fill" objectFit="fill" alt="ad"/>
            </a>
    )
}
export default Ad;