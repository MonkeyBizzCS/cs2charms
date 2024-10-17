import React, {useState, useEffect} from 'react';
import { generateKeyChainInspectUrl } from '../utils/KeychainGen';

export interface CardProps {
    id: number;
    name: string;
    pattern: number;
    colorBased: boolean;
    imageSrc: string;
  }

const CharmCard: React.FC<CardProps> = ({ id, name, pattern, colorBased, imageSrc }) => {
    const [currentPattern, setCurrentPattern] = useState<number>(pattern);
    const [inspectUrl, setInspectUrl] = useState<string>("");
  
    useEffect(() => {
        setInspectUrl(generateKeyChainInspectUrl(currentPattern, id));
      }, [currentPattern, id]);
    
      // Handle slider and number input changes with validation
      const handlePatternChange = (newPattern: number) => {
        if (newPattern >= 0 && newPattern <= 100000) {
          setCurrentPattern(newPattern);
        }
      };

    return (
      <div className='charm-card'>
        <h3>{name}</h3>
        <img className='card-image' src={imageSrc} alt={name} />
        <div className='slider-title'>Pattern</div>
        <div className='slider-container'>
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
        <input
        type="range"
        min="0"
        max="100000"
        value={currentPattern}
        onChange={(e) => handlePatternChange(Number(e.target.value))}
        />
        <div>
            <a href={inspectUrl} className='inspect-button'>Inspect in Game</a>
        </div>
      </div>
    );
  };

export default CharmCard;