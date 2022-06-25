import classes from './card_catalog.module.scss';
import Image from 'next/image';

/**
 * @descrition Под экраны mobile
 * @descrition Карточка товара для страницы: Каталог
 * @param {} props 
 * @property {('img'|'title'|'animal'|'percentage'|'weight'|'price'|'click')} props
 * 
 * @returns {JSX.Element}
 */


export const CardCatalog = (props) => {
const {img, title, animal, percentage, weight, price, click} = props;
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
                        <li className={classes.card__text}>{percentage}</li> 
                        <li className={classes.card__text}>{weight}</li>
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

