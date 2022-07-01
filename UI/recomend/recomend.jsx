import classes from './recomend.module.scss';


/**
 * @description - Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @param {('small'|'medium'|'large'|'vertical')} type - размер и тип рекламного блока
 * @constructor
 */

 const Recomend = () => {
    return  (
            <div className={classes.recomend}>
                <h1 className={classes.recomend__title}>
                    FEED MARKET рекомендует
                </h1>
                <div className={classes.recomend__btn}>
                    Перейти в рекомендации
				</div>
            </div>
    )
}
export default Recomend;