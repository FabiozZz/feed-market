import Card from "UI/cards/pc/card"
import CardCatalog from "UI/cards/mobile/card_catalog"
import CardLC from "UI/cards/mobile/card_lc" 
import CardMain from "UI/cards/mobile/card_main"
import AdHorizontal from "UI/ads/ad_horizontal"
import AdHorizontalMedium from "UI/ads/ad_horizont_medium"
import AdHorizontalSmall from "UI/ads/ad_horizont_small"
import Layout from "components/common/layouts"
import AdVertical from "UI/ads/ad_vertical"


const Test = () => {

    const test = {
        img: '/card/PreMix-Pigs_1.jpg',
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
    }

    return ( 
        <Layout>
            <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
            percentage={test.percentage} weight={test.weight} price={test.price}/>
            <CardCatalog reference={test.reference} img={test.img} title={test.title} animal={test.animal}
            percentage={test.percentage} weight={test.weight} price={test.price} click={test.click}/>
            <CardLC reference={test.reference} img={test.img} title={test.title} animal={test.animal}
            percentage={test.percentage} weight={test.weight} price={test.price} titleLc={test.titleLc} stock={test.stock} article={test.article} barcode={test.barcode} dateCreated={test.dateCreated}/>
            <CardMain reference={test.reference} img={test.img}  title={test.title} animal={test.animal}
            percentage={test.percentage} weight={test.weight} price={test.price} />
            <AdHorizontal  img={test.img} reference={test.reference}/>
            <AdHorizontalMedium img={test.img} reference={test.reference}/>
            <AdHorizontalSmall img={test.img} reference={test.reference}/>
            <AdVertical img={test.img} reference={test.reference}/>

        </Layout>
    )

}

export default Test;