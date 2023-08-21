import style from './StartPagePromo.module.css';
import {Slider} from '../Slider/Slider'

export function StartPagePromo() {
  const arrFood = ['/img/food/food1.jpg', '/img/food/food2.jpg', '/img/food/food3.jpg', '/img/food/food4.jpg', '/img/food/food5.jpg'];
  const arrInterer = ['/img/interer/interer1.jpg', '/img/interer/interer2.jpg', '/img/interer/interer3.jpg', '/img/interer/interer4.jpg', '/img/interer/interer5.jpg'];
  return (
    <div className={style.content}>
      <div 
        className={style.start}
        style={{
          backgroundImage: 'url(/img/cucker.jpg)'
        }}
      >
        <div className={style.title}>
          The <br/> RestoMagic
        </div>
      </div>
      <Slider source={arrFood} isCircle = {false}/>
      <div className={style.menu}>
        <button className={style.lanch}>Lanch</button>
        <button className={style.dinner}>Dinner</button>
        <button className={style.child}>Children</button>
        <button className={style.cocteils}>Cocteils</button>
        <button className={style.dessert}>Dessert</button>
        <button className={style.wines}>Wines</button>
        <button className={style.beer}>Beer</button>
      </div>
      <Slider source={arrInterer}/>
      <div 
        className={style.shef}
      >
        <div 
        className={style.imgShef}
        style={{
          backgroundImage: 'url(/img/shef.jpg)'
        }}
        >
        </div>
        <div className={style.resume}>
          'Наши Блюда – Вдохновленные Искусством Шеф-повара.Добро пожаловать в мир вкусов и впечатлений, где каждое блюдо – это произведение искусства, созданное руками нашего талантливого шеф-повара. Встречайте мастера своего дела, творца на кухне и вдохновителя гастрономических чудес – Ивана Иванова.Иван Иванов: Путешествие Сквозь Вкусы. С детства Иван был окружен ароматами свежих ингредиентов и множеством кулинарных тайн, переданных ему от предков. В своей карьере шеф-повара он объездил множество стран, погружаясь в культуры и кулинарные традиции каждого уголка планеты. Это путешествие через вкусы и ароматы помогло ему расширить горизонты, создавая уникальные блюда, в которых переплетаются национальные традиции с современными гастрономическими трендами. Искусство на Тарелке: Каждое блюдо, подготовленное Иваном, – это история, которая начинается с тщательного выбора ингредиентов. В его руках овощи превращаются в произведения искусства, мясо тает во рту, а соусы дополняют ароматы, создавая неповторимый вкусовой букет. Его блюда – это путешествие в мир вкусов, где каждая тарелка – это уникальное путешествие через культуры и традиции. Гастрономические Вечера и Мастер-классы: Иван Иванов не только создает невероятные блюда, но и делится своим опытом с вами. У нас вы можете насладиться гастрономическими вечерами, где каждое блюдо сопровождается рассказами о его создании и вдохновении. А для тех, кто хочет научиться искусству кулинарии, у нас проводятся мастер-классы, на которых Иван делает первые шаги в мире вкуса доступными для каждого. Резервация Столика. Погрузитесь в мир вкусов, овеянных вдохновением и страстью Ивана Иванова. Забронируйте столик прямо сейчас и станьте участником гастрономического путешествия, где каждый вкус – это история, а каждое блюдо – неповторимое произведение искусства. Мы ждем вас, чтобы подарить вам волшебные моменты вкуса и наслаждения!';
        </div>
      </div>
    </div>
  );
}
