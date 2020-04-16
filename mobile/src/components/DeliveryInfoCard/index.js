import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CardHeader,
  HeaderLabel,
  Row,
  RowLabel,
  RowData,
} from './styles';

export default function DeliveryInfoCard({ delivery }) {
  return (
    <Container>
      <CardHeader>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <HeaderLabel>Informações da entrega </HeaderLabel>
      </CardHeader>
      <Row>
        <RowLabel>Destinatário</RowLabel>
        <RowData>{delivery.recipient.name}</RowData>
      </Row>
      <Row>
        <RowLabel>Endereço de entrega</RowLabel>
        <RowData>
          {delivery.recipient.street}, {delivery.recipient.number},{' '}
          {delivery.recipient.city} - {delivery.recipient.state},{' '}
          {delivery.recipient.cep}
        </RowData>
      </Row>
      <Row>
        <RowLabel>Produto</RowLabel>
        <RowData>{delivery.product}</RowData>
      </Row>
    </Container>
  );
}
