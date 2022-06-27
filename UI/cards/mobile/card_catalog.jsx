import Image from 'next/image';
import classes from './card_catalog.module.scss';

/**
 * @description Под экраны mobile: Карточка товара для страницы: Каталог
 *
 * @param {string} img - путь до картинки
 * @param {string} title - название продукта
 * @param {string} animal - категория продукта
 * @param {number} percentage - Показатель ввода продукта
 * @param {number} weight - вес продукта
 * @param {number} price - цена продукта
 * @param {(function():void)} click - callback функция для покупки
 * @constructor
 */
const CardCatalog = ({img,title,animal,percentage,weight,price,click})=> {
    return (
        <div className={classes.card}>
            <div className={classes.card__wrapper}>
                <div className={classes.card__img_wrapper}>
                    <div className={classes.card__img}>
                        <Image src={img} height={132} width={93} alt={'image'}/>
                    </div>
                </div>
                <div>
                    <ul className={classes.card__list}>
                        <li className={classes.card__text}>{title}</li>
                        <li className={classes.card__text}>{animal}</li>
                        <li className={classes.card__text}>Процент ввода - {percentage} кг/т</li>
                        <li className={classes.card__text}>{weight} кг</li>
                    </ul>
                </div>
            </div>
            <div className={classes.card__bottom}>
                <p className={classes.card__price}>{price} руб</p>
                <button className={classes.card__button} onClick={() => click('Оно работает))')}>В корзину</button>
            </div>
        </div>
    );
};

export default CardCatalog;

