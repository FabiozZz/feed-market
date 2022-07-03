import Card from '/UI/cards/pc/card';
import classes from './cards_grid.module.scss'


/**
 * @description - Блок под карточки
 * @param {('row'|'block')} type - тип блока под карточки
 * @returns {JSX.Element}
 * @constructor
 */
    const CardGrid = ({type, cards}) => {
        const typeGrid = type === 'block' ? 'cards__block' : 'cards__row';
        cards.length > 4 && type == 'row' ? cards = cards.slice(0, 4) : cards;
    return(
        <div className={classes[typeGrid]}>
            {cards.map((card, i) => <Card key={i} reference={card.reference} img={card.img} title={card.title}
            animal={card.animal} percentage={card.percentage} weight={card.weight} price={card.price} click={(event) =>{
                event.stopPropagation();
                alert('TECT')
            }}/>
            )}
        </div>
    )
}

export default CardGrid;
