
import classes from './card_main.module.scss';
import Image from 'next/image';


const CardMain = (props) => {
    const {img, title, animal, percentage, weight, price, click} = props;

	return (
		<div className={classes.card}>
            <div className={classes.card__img_wrapper}>
                <div className={classes.card__img}>
                    <Image src={img} width={88} height={124}alt={"image"}/>
                </div>
            </div>
            <div className={classes.card__wrapper}>
                <ul className={classes.card__list}>
                    <li className={classes.card__item}>{title}</li>
                    <li className={classes.card__item}>{animal}</li>
                    <li className={classes.card__item}>{percentage}</li>
                    <li className={classes.card__item}>{weight}</li>
                </ul>
            </div>
            <div className={classes.card__footer}>
                <div className={classes.card__price_inner}>
                    <div className={classes.card__price}>{price}руб.</div>
                </div>
                <button className={classes.card__button} onClick={() => click('Оно работает))')}><Image src={"/card/Stroke.svg"} width={18} height={18} alt={"logo"}/></button>
            </div>
        </div>
	);
};

export default CardMain
