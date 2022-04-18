import React from "react";
import { useDispatch} from 'react-redux';
import { setFavorite } from '../../actions';
import { MAIN_COLOR, FAV_COLOR, NON_FAV_COLOR } from "../../utils/constants";
import { Grid, Icon, Image, Label, LabelGroup } from "semantic-ui-react";
import './styles.css';

const PokemonCard = ({ pokemon }) => {

    const color = pokemon.isFavorite ? FAV_COLOR : NON_FAV_COLOR;

    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(setFavorite(pokemon));
    };

    
    if(!pokemon) return null;

    return (
    <Grid.Column mobile=  {16} tablet={8} computer={4}>
        <div className="PokemonCard" >
            <button className="PokemonCard-favorite" onClick={handleFavorite}>
                <Icon name="favorite" color={color} />
            </button>
            <Image centered src={pokemon.sprites.front_default} alt='Pokemon Front' />
            <p className="Pokemon-title">{pokemon.name}</p>
            <LabelGroup>
                {pokemon.types.map(type => (<Label color={MAIN_COLOR} key={`${pokemon.id}${type.type.name}`} > {type.type.name} </Label>))}
            </LabelGroup>
        </div>
    </Grid.Column>
    );
};

export default PokemonCard;

