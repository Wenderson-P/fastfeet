import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CardHeader,
  HeaderLabel,
  Row,
  RowLabel,
  RowData,
  DateRow,
} from './styles';

export default function DeliverySituationCard({ delivery }) {
  return (
    <Container>
      <CardHeader>
        <Icon name="event" size={24} color="#7D40E7" />
        <HeaderLabel>Situação da entrega</HeaderLabel>
      </CardHeader>
      <Row>
        <RowLabel>Status</RowLabel>
        <RowData>{delivery.situation}</RowData>
      </Row>
      <DateRow>
        <Row>
          <RowLabel>Data de retirada</RowLabel>
          <RowData>{delivery.startDate}</RowData>
        </Row>
        <Row>
          <RowLabel>Data de entrega</RowLabel>
          <RowData>{delivery.endDate}</RowData>
        </Row>
      </DateRow>
    </Container>
  );
}
