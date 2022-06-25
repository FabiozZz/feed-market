import classes from './card_lc.module.scss';
import Image from 'next/image';

const CardLC = (props) => {

    const {img, titleLc , weight, price, article, barcode, dateCreated, stock, click} = props;

    return (
        <div className={classes.list_item}>
            <div className={classes.list_item__title_img_product}>
            <Image  src={img} width={63} height={85} alt="product"/>
            </div>
            <h3>{titleLc}</h3>
            <p><span>Артикул:</span>{article}</p>
            <p><span>Штрихкод:</span>{barcode}</p>
            <p><span>Дата создания:</span>{dateCreated}</p>
            <p><span>На складе:</span>{stock}</p>
            <p><span>Цена, руб:</span>{price}</p>
            <p><span>Вес, кг: </span>{weight}</p>
            <div className={classes.list_item__title_img} onClick={() => click('Оно работает))')}>
            <Image src={'/card/Settings-burger.svg'} width={29} height={21} alt={'button'}/>
            </div>
        </div>
    );
};

export default CardLC