import React, {useState} from 'react';
import './App.css';
import CharmCard, {CardProps} from './components/CharmCard';


const App: React.FC = () => {
  const [cards] = useState<CardProps[]>([
    { id: 1, name: 'Lil\' Ava', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_ava.png'},
    { id: 2, name: 'That\'s Bananas', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_banana.png'},
    { id: 3, name: 'Lil\' Whiskers', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_cat.png' },
    { id: 4, name: 'Lil\' Sandy', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_catbeach.png' },
    { id: 5, name: 'Chicken Lil\'', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_chicken.png' },
    { id: 6, name: 'Lil\' Crass', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_guerilla.png' },
    { id: 7, name: 'Hot Howl', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_howl.png' },
    { id: 8, name: 'Big Kev', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_kev.png' },
    { id: 9, name: 'Lil\' Monster', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_monster.png' },
    { id: 10, name: 'Hot Sauce', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_catchup.png' },
    { id: 11, name: 'Diamond Dog', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_diamond.png' },
    { id: 12, name: 'Pinch O\' Salt', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_salty.png' },
    { id: 13, name: 'Diner Dog', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_shape.png' },
    { id: 14, name: 'Lil\' Teacup', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_toile.png' },
    { id: 15, name: 'Lil\' SAS', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sas.png' },
    { id: 16, name: 'Hot Wurst', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_wurst.png' },
    { id: 33, name: 'Lil\' Squatch', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_bigfoot.png' },
    { id: 17, name: 'Baby\'s AK', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ak_base.png' },
    { id: 18, name: 'Die-cast AK', pattern: 0, colorBased: true, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ak_jelly.png' },
    { id: 19, name: 'Pocket AWP', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_awp_plastic.png' },
    { id: 20, name: 'Titeenium AWP', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_awp_spoon.png' },
    { id: 21, name: 'Baby Karat CT', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ctknife_gold.png' },
    { id: 22, name: 'Whittle Knife', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ctknife_wood.png' },
    { id: 23, name: 'POP Art', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_m4a1s_comic.png' },
    { id: 24, name: 'Lil\' Squirt', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_m4a1s_ss.png' },
    { id: 25, name: 'Disco MAC', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_mac10_glitter.png' },
    { id: 26, name: 'Backsplash', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_mac10_tile.png' },
    { id: 27, name: 'Lil\' Cap Gun', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tec9_cap.png' },
    { id: 28, name: 'Hot Hands', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tec9_magma.png' },
    { id: 29, name: 'Semi-Precious', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tknife_crystal.png' },
    { id: 30, name: 'Baby Karat T', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tknife_gold.png' },
    { id: 31, name: 'Glamour Shot', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_usp_jewel.png' },
    { id: 32, name: 'Stitch-Loaded', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_usp_yarn.png' },

  ]);

  return (
    <div className='grid'>
      {cards.map((card, index) => (
        <CharmCard key={index} id={card.id} name={card.name} pattern={card.pattern} colorBased={card.colorBased} imageSrc={card.imageSrc}/>
      ))}
    </div>
  );
};

export default App;
