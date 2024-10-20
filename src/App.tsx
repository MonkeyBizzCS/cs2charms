import React, {useState, useEffect} from 'react';
import './App.css';
import CharmCard, {CardProps} from './components/CharmCard';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [cards] = useState<CardProps[]>([
    { id: 1, rarity: 3, name: 'Lil\' Ava', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_ava.png', className: ''},
    { id: 2, rarity: 4, name: 'That\'s Bananas', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_banana.png', className: ''},
    { id: 3, rarity: 4, name: 'Lil\' Whiskers', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_cat.png', className: '' },
    { id: 4, rarity: 4, name: 'Lil\' Sandy', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_catbeach.png', className: '' },
    { id: 5, rarity: 4, name: 'Chicken Lil\'', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_chicken.png', className: '' },
    { id: 6, rarity: 3, name: 'Lil\' Crass', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_guerilla.png', className: '' },
    { id: 7, rarity: 6, name: 'Hot Howl', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_howl.png', className: '' },
    { id: 8, rarity: 3, name: 'Big Kev', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_kev.png', className: '' },
    { id: 9, rarity: 5, name: 'Lil\' Monster', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_monster.png', className: '' },
    { id: 10, rarity: 3, name: 'Hot Sauce', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_catchup.png', className: '' },
    { id: 11, rarity: 5, name: 'Diamond Dog', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_diamond.png', className: '' },
    { id: 12, rarity: 3, name: 'Pinch O\' Salt', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_salty.png', className: '' },
    { id: 13, rarity: 5, name: 'Diner Dog', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_shape.png', className: '' },
    { id: 14, rarity: 4, name: 'Lil\' Teacup', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sam_toile.png', className: '' },
    { id: 15, rarity: 3, name: 'Lil\' SAS', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_sas.png', className: '' },
    { id: 16, rarity: 6, name: 'Hot Wurst', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_wurst.png', className: '' },
    { id: 33, rarity: 4, name: 'Lil\' Squatch', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/missinglink/kc_missinglink_bigfoot.png', className: '' },
    { id: 17, rarity: 3, name: 'Baby\'s AK', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ak_base.png', className: '' },
    { id: 18, rarity: 4, name: 'Die-cast AK', pattern: 0, colorBased: true, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ak_jelly.png', className: '' },
    { id: 19, rarity: 3, name: 'Pocket AWP', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_awp_plastic.png', className: '' },
    { id: 20, rarity: 5, name: 'Titeenium AWP', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_awp_spoon.png', className: '' },
    { id: 21, rarity: 6, name: 'Baby Karat CT', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ctknife_gold.png', className: '' },
    { id: 22, rarity: 3, name: 'Whittle Knife', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_ctknife_wood.png', className: '' },
    { id: 23, rarity: 4, name: 'POP Art', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_m4a1s_comic.png', className: '' },
    { id: 24, rarity: 5, name: 'Lil\' Squirt', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_m4a1s_ss.png', className: '' },
    { id: 25, rarity: 4, name: 'Disco MAC', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_mac10_glitter.png', className: '' },
    { id: 26, rarity: 3, name: 'Backsplash', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_mac10_tile.png', className: '' },
    { id: 27, rarity: 3, name: 'Lil\' Cap Gun', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tec9_cap.png', className: '' },
    { id: 28, rarity: 4, name: 'Hot Hands', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tec9_magma.png', className: '' },
    { id: 29, rarity: 5, name: 'Semi-Precious', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tknife_crystal.png', className: '' },
    { id: 30, rarity: 6, name: 'Baby Karat T', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_tknife_gold.png', className: '' },
    { id: 31, rarity: 4, name: 'Glamour Shot', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_usp_jewel.png', className: '' },
    { id: 32, rarity: 3, name: 'Stitch-Loaded', pattern: 0, colorBased: false, imageSrc: 'https://cs2.cdn.cashtrader.pro/econ/keychains/weapon_1/kc_wpn_usp_yarn.png', className: '' },

  ]);

  const [sortOption, setSortOption] = useState<number>(() => {
    const storedSort = localStorage.getItem('sort-option');
    return storedSort ? Number(storedSort) : 0;
  });

  const sortCards = (cards: CardProps[], option: number) => {
    const sorted = [...cards];

    switch(option) {
      case 1:
        return sorted.sort((a, b) => b.rarity - a.rarity);
      case 2:
        return sorted.sort((a, b) => a.rarity - b.rarity);
    }

    return sorted;
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(+e.target.value);

    localStorage.setItem('sort-option', e.target.value);
  };

  const sortedCards = sortCards(cards, sortOption);

  const [scrollCount, setScrollCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [triggerEasterEgg, setTriggerEasterEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const now = new Date();
      const is3AM = now.getHours() === 3 && now.getMinutes() === 0 && now.getSeconds() < 30;

      if (is3AM && scrollCount < 3) {
        setScrollCount(prev => prev + 1);
      }

      if (scrollCount === 3 && !triggerEasterEgg) {
        setTriggerEasterEgg(true);
        setIsModalOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollCount, triggerEasterEgg]);


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>    
      <div className='sort'>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="0">Default</option>
          <option value="1">Rarity - Descending</option>
          <option value="2">Rarity - Ascending</option>
        </select>
      </div>
      <Modal show={isModalOpen} onClose={closeModal} />
      <div className='grid'>
        {sortedCards.map((card, index) => (
          <CharmCard key={index} rarity={card.rarity} id={card.id} name={card.name} pattern={card.pattern} colorBased={card.colorBased} imageSrc={card.imageSrc} className={triggerEasterEgg ? 'falling-image' : ''}/>
        ))}
      </div>
    </div>
  );
};

export default App;
