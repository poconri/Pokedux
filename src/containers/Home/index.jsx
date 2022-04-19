import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { fetchPokemonsWithDetails } from '../../actions';
import Loader from '../../components/Loader';
import './styles.css';


function Home() {
  const list = useSelector(state => state.list);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons= {list} />
    </div>
  );
}

Home.defaulProps = {
  pokemons: [],
};

export default Home;
