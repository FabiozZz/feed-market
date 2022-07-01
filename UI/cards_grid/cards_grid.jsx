import Card from '/UI/cards/pc/card';
import classes from './cards_grid.module.scss'



/**
 * @description - Блок под карточки
 * @param {('row'|'block'|'long')} type - тип блока под карточки
 * @constructor
 */
 const test = {
    img: '/card/PreMix-Pigs_1.jpg',
    imgAd: '/ad.jpg',
    title: 'Премикс VITOMEK',
    animal: 'Свиноматки лактирующие (СК-1) ',
    percentage: '10 кг/т',
    weight: '10',
    price: '10 000',
    click:  function test(e) {
        stopPropagation(e);
        alert('test');
    },
    titleLc: 'Premix для птицы, возможно ...',
    article: 'PremixBird12',
    barcode: 'VIT45068149MEK',
    dateCreated: '22.05.2022  19:16',
    stock: 218,
    reference: 'https://translate.google.com/?hl=ru&tab=TT',
    large: 'large',
    medium: 'medium',
    small: 'small',
    vertical: 'vertical',
}


 const CardGrid = ({type} = {}) => {
    const typeGrid = 'cards__' +  type;

    if (type === 'row') return(
    <div className={classes[typeGrid]}>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal} percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/> 
    </div>)

    if (type === 'block') return(
    <div className={classes[typeGrid]}>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal} percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
    percentage={test.percentage} weight={test.weight} price={test.price}/>
    </div>)
}
export default CardGrid;