import styled from 'styled-components/native';
import {SvgUri} from 'react-native-svg';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const SearchHeader = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const InputContainer = styled.View`
  height: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 280px;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
`;
export const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 8px;
  padding-left: 16px;
`;

export const ListContainer = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
  padding: 16px;
`;
export const ListHeader = styled.View`
  margin-top: 32px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TextContainer = styled.View``;
export const OrderButton = styled.TouchableOpacity``;

export const ListItemContainer = styled.View`
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

export const ItemImage = styled(SvgUri)`
  margin-right: 24px;
`;
export const RigthContainer = styled.View`
  flex-direction: row;
`;

export const RigthIcon = styled.TouchableOpacity``;

export const Margin = styled.View`
  margin: 8px;
`;
