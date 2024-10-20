import React, {useState, useEffect} from 'react';
import { generateKeyChainInspectUrl } from '../utils/KeychainGen';
import { getRarity } from '../utils/Rarity';

export interface CardProps {
    id: number;
    rarity: number;
    name: string;
    pattern: number;
    colorBased: boolean;
    imageSrc: string;
    className: string;
  }

const CharmCard: React.FC<CardProps> = ({ id, rarity, name, pattern, colorBased, imageSrc, className }) => {
    const [currentPattern, setCurrentPattern] = useState<number>(pattern);
    const [inspectUrl, setInspectUrl] = useState<string>("");
  
    const rarityData = getRarity(rarity);

    const backgroundStyle = {
      background: rarityData.gradientStyle
    };

    useEffect(() => {
        setInspectUrl(generateKeyChainInspectUrl(currentPattern, id, rarity));
      }, [currentPattern, id, rarity]);
    
      // Handle slider and number input changes with validation
      const handlePatternChange = (newPattern: number) => {
        if (newPattern >= 0 && newPattern <= 100000) {
          setCurrentPattern(newPattern);
        }
      };

    return (
      <div className={'charm-card ' + className} style={backgroundStyle}>
        <h3>{name}</h3>
        <h5>{rarityData.name}</h5>
        <img className='card-image' src={imageSrc} alt={name} />
        <div className='slider-title'>Pattern</div>
        <div className='slider-container'>
          <div className="slider-controls">
            <button
            className="arrow-button"
            onClick={() => handlePatternChange(currentPattern - 1)}
            >
                &lt;
            </button>
            <input
            type="number"
            min="0"
            max="100000"
            value={currentPattern}
            onChange={(e) => handlePatternChange(Number(e.target.value))}
            />
            <button
            className="arrow-button"
            onClick={() => handlePatternChange(currentPattern + 1)}
            >
                &gt;
            </button>
          </div>
          <div className="slider-range">
            <input
              type="range"
              min="0"
              max="100000"
              value={currentPattern}
              onChange={(e) => handlePatternChange(Number(e.target.value))}
            />
          </div>
        </div>

        <div>
            <a href={inspectUrl} className='inspect-button'>Inspect in Game</a>
        </div>
      </div>
    );
  };

export default CharmCard;