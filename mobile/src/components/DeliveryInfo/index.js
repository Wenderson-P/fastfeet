import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import DeliverySteps from '~/components/DeliverySteps';
import {
  FlatList,
  Item,
  Header,
  DeliveryId,
  Name,
  Footer,
  Field,
  FieldLabel,
  FieldData,
  DetailsButton,
  DetailsText,
} from './styles';
import api from '~/services/api';

export default function DeliveryInfo({ navigation, userId, filter }) {
  const [deliveries, setDeliveries] = useState([]);
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `/deliveryman/${userId}/deliveries?q=${filter}`
      );

      const data = response.data.map(delivery => {
        let activeStep = 1;
        let situation = 'Pendente';
        if (delivery.start_date) {
          const startDate = format(parseISO(delivery.start_date), 'dd/MM/yyyy');
          delivery.startDate = startDate;
          activeStep = 2;
          situation = 'Retirado';
        }
        if (delivery.end_date) {
          const endDate = format(parseISO(delivery.end_date), 'dd/MM/yyyy');
          delivery.endDate = endDate;
          activeStep = 3;
          situation = 'Entregue';
        }
        return {
          ...delivery,
          activeStep,
          situation,
        };
      });
      setDeliveries(data);
    }
    loadDeliveries();
  }, [filter]);
  return (
    <FlatList
      data={deliveries}
      keyExtractor={item => `item-${item.id}`}
      renderItem={({ item }) => (
        <Item>
          <Header>
            <DeliveryId>
              <Icon name="local-shipping" size={24} color="#7D40E7" />
              <Name>Encomenda {item.id}</Name>
            </DeliveryId>
          </Header>
          <DeliverySteps activeStep={item.activeStep} />
          <Footer>
            <Field>
              <FieldLabel>Data</FieldLabel>
              <FieldData>
                {item.startDate ? item.startDate : '--/--/----'}
              </FieldData>
            </Field>
            <Field>
              <FieldLabel>Cidade</FieldLabel>
              <FieldData>{item.recipient.city}</FieldData>
            </Field>
            <DetailsButton
              onPress={() =>
                navigation.navigate('DeliveryDetails', { delivery: item })
              }
            >
              <DetailsText>Ver detalhes</DetailsText>
            </DetailsButton>
          </Footer>
        </Item>
      )}
    />
  );
}

DeliveryInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
