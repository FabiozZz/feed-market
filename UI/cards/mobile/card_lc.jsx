import classes from './card_lc.module.scss';
import Image from 'next/image';

/**
 * @description Под экраны mobile: Карточка товара для страницы: Личный кабинет
 *
 * @param {string} img - путь до картинки
 * @param {string} titleLc - название продукта
 * @param {string} article - артикул продукта
 * @param {number} barcode - штрихкод продукта
 * @param {number} dateCreated - дата создания продукта
 * @param {number} stock - количество продукта на складе
 * @param {number} price - цена продукта
 * @param {number} weight - вес продукта
 * @param {(function():void)} click - callback функция для покупки
 * @constructor
 */


const CardLC = ({img, titleLc, article, barcode, dateCreated, stock, price, weight, click}) => {
    return (
        <div className={classes.list_item}>
            <div className={classes.list_item__title_img_product}>
            <Image  src={img} width={63} height={85} alt="product"/>
            </div>
            <h3>{titleLc}</h3>
            <p><span>Артикул: </span>{article}</p>
            <p><span>Штрихкод: </span>{barcode}</p>
            <p><span>Дата создания: </span>{dateCreated}</p>
            <p><span>На складе: </span>{stock}</p>
            <p><span>Цена, руб: </span>{price}</p>
            <p><span>Вес, кг: </span>{weight}</p>
            <div className={classes.list_item__title_img} onClick={() => click()}>
            <Image src={'/card/Settings-burger.svg'} width={29} height={21} alt={'button'}/>
            </div>
        </div>
    );
};

export default CardLC