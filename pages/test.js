import Card from "UI/cards/pc/card"
import CardCatalog from "UI/cards/mobile/card_catalog"
import CardLC from "UI/cards/mobile/card_lc" 
import CardMain from "UI/cards/mobile/card_main"
import Ad from "UI/ads/ad"
import Layout from "components/common/layouts"
import Recomend from "UI/recomend/recomend"
import CardGrid from "UI/cards_grid/cards_grid"



const Test = () => {

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

    return ( 
        <Layout>
            <div className='home'>
                <Ad img={test.imgAd} reference={test.reference} type={test.large}/>
                <div className="card__top">
                    <Recomend/>
                    <CardGrid type='row'/>
                </div>

                <div className="card__middle">
                        <Recomend/>
                    <div className="card__block__wrapper">
                        <Ad img={test.imgAd} reference={test.reference} type={test.vertical}/>
                        <CardGrid type='block'/>
                    </div>
                </div>

                <div className="card__bottom">
                    <Recomend/>
                    <Ad img={test.imgAd} reference={test.reference} type={test.large}/>
                    <CardGrid type='row'/>
                </div>


                
            
                {/* <Card reference={test.reference} img={test.img} title={test.title} animal={test.animal}
                percentage={test.percentage} weight={test.weight} price={test.price}/>
                <CardCatalog reference={test.reference} img={test.img} title={test.title} animal={test.animal}
                percentage={test.percentage} weight={test.weight} price={test.price} click={test.click}/>
                <CardLC reference={test.reference} img={test.img} title={test.title} animal={test.animal}
                percentage={test.percentage} weight={test.weight} price={test.price} titleLc={test.titleLc} stock={test.stock} article={test.article} barcode={test.barcode} dateCreated={test.dateCreated}/>
                <CardMain reference={test.reference} img={test.img}  title={test.title} animal={test.animal}
                percentage={test.percentage} weight={test.weight} price={test.price} />
                <Ad img={test.imgAd} reference={test.reference} type={test.small}/>
                <Ad img={test.imgAd} reference={test.reference} type={test.medium}/>
                <Ad img={test.imgAd} reference={test.reference} type={test.vertical}/> */}
            </div>
        </Layout>
    )
}

export default Test;