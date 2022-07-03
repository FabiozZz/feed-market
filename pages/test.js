import Card from "UI/cards/pc/card"
import CardCatalog from "UI/cards/mobile/card_catalog"
import CardLC from "UI/cards/mobile/card_lc" 
import CardMain from "UI/cards/mobile/card_main"
import Ad from "UI/ads/ad"
import Layout from "components/common/layouts"
import Recomend from "/components/recomend/recomend"
import CardGrid from "/components/cards_grid/cards_grid"



const Test = ({cards}) => {
    
    return ( 
        <Layout>
            <div className='home'>
                <Ad img={cards[0].imgAd} reference={cards[0].reference} type={cards[0].large}/>
                <div className="card__top">
                    <Recomend/>
                    <CardGrid type='row' cards={cards}/>
                </div>

                <div className="card__middle">
                        <Recomend/>
                    <div className="card__block__wrapper">
                    <Ad img={cards[0].imgAd} reference={cards[0].reference} type={cards[0].vertical}/>
                        <CardGrid type='block' cards={cards}/>
                    </div>
                </div>

                <div className="card__bottom">
                    <Recomend/>
                    <Ad img={cards[0].imgAd} reference={cards[0].reference} type={cards[0].large}/>
                    <CardGrid type='row' cards={cards}/>
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/cards')
    const cards = await res.json()
    return{
        props: {
            cards,
        },
    }
}
export default Test;