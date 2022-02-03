import React, {useEffect, useState} from 'react';

import {
  Container,
  ListContainer,
  OrderButton,
  TextContainer,
  ListHeader,
  ListItemContainer,
  ItemImage,
  RigthContainer,
  RigthIcon,
  Margin,
} from './styles';
import {Text} from '../../components/Text';
import api from '../../services/api';
import ArrowRigth from '../../../assets/images/icons/ArrowRigth.svg';
import Order from '../../../assets/images/icons/Order.svg';
import SearchHeader from '../../components/SearchHeader';
export interface Countries {
  name: string;
  code: string;
  flag: string;
}

const Home: React.FC = () => {
  const [countries, setCountries] = useState([]);

  async function GetCountries() {
    try {
      const {data} = await api.get('countries');
      setCountries(data?.response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetCountries();
  }, []);

  return (
    <Container>
      <SearchHeader />
      <ListContainer>
        <ListHeader>
          <TextContainer>
            <Text lineHeight={24}>Procurar Liga</Text>
            <Text weight="Light" lineHeight={16} size={10} color="#A0A0B2">
              Escolha um país:
            </Text>
            <Margin />
            <Text size={10}>Países</Text>
          </TextContainer>
          <OrderButton>
            <Order />
          </OrderButton>
        </ListHeader>
        {countries.map((country: Countries) => (
          <ListItemContainer key={country?.name}>
            <RigthContainer>
              <ItemImage width="16px" height="16px" uri={country?.flag} />
              <Text size={14}>{country?.name}</Text>
            </RigthContainer>
            <RigthIcon>
              <ArrowRigth />
            </RigthIcon>
          </ListItemContainer>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Home;
