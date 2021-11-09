import React from 'react'
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ isLoading, items }) => {
    
    return isLoading ? (
        <Spinner />
    ) 
    : 
    (
        <div className="cards">
            {
                items.map((item, index) => (
                    <CharacterItem key={index} item={item}/>
                ))
            }
        </div>
    )
}

export default CharacterGrid
