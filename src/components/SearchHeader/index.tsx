import React from 'react';

import {SearchHeaderContainer, InputContainer, Input} from './styles';
import Icon from '../../../assets/images/icons/';

const SearchHeader: React.FC = () => {
  return (
    <SearchHeaderContainer>
      <InputContainer>
        <Icon.SearchIcon />
        <Input
          placeholder="Procurar por uma liga..."
          placeholderTextColor={'#A0A0B2'}
        />
      </InputContainer>
    </SearchHeaderContainer>
  );
};

export default SearchHeader;
