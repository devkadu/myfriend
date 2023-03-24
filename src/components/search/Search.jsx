import { BsSearch } from 'react-icons/bs';
import React from 'react';
import { ContainerSearch } from './style';

function Search() {
  return (
    <ContainerSearch>
      <BsSearch
        size="1.3em"
      />
      <input type="text" placeholder="Busque, dividas, comprovantes..." />
    </ContainerSearch>
  );
}

export default Search;
