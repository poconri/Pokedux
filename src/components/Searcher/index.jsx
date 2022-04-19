import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Search } from 'semantic-ui-react';
import { search } from '../../actions';
import './styles.css';

export default function SearchBar() {
  /*i need to this input to look for the pokemon by name please*/
  const dispatch = useDispatch();
  const handleSearch = (e, { value }) => {
    dispatch(search (value));
  }

  return (
    <div className='Searcher wrapper'>
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className='Searcher'
        >
          <Search
            aligned='right'
            input={{ fluid: true }}
            showNoResults={false}
            onSearchChange={handleSearch}
            placeholder='Encuentra a tu Pokemón favorito'
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
