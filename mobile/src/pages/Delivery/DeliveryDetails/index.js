import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import DeliveryInfoCard from '~/components/DeliveryInfoCard';
import DeliverySituationCard from '~/components/DeliverySituationCard';
import DeliveryActionButton from '~/components/DeliveryActionButton';

import api from '~/services/api';

import {
  Container,
  Buttons,
  Line,
  PickUpDeliveryButton,
  PickUpDeliveryText,
} from './styles';

export default function DeliveryDetails({ navigation, route }) {
  const { delivery } = route.params;
  const auth = useSelector(state => state.auth);

  function handleConfirmDelivery() {
    if (delivery.end_date !== null) {
      Alert.alert('A encomenda já foi entregue');
    } else {
      navigation.navigate('ConfirmDelivery', { deliveryId: delivery.id });
    }
  }

  async function handlePickUpDelivery() {
    try {
      await api.put(`/deliveryman/${auth.id}/deliveries?q=${delivery.id}`);
      Alert.alert('Encomenda retirada com sucesso');
      navigation.navigate('Delivery');
    } catch (error) {
      Alert.alert('Erro ao retirar entrega');
    }
  }

  return (
    <Container>
      <DeliveryInfoCard delivery={delivery} />
      <DeliverySituationCard delivery={delivery} />
      {delivery.start_date ? (
        <Buttons>
          <DeliveryActionButton
            iconName="highlight-off"
            iconColor="#E74040"
            iconSize={24}
            title="Informar Problema"
            onPress={() =>
              navigation.navigate('ReportDelivery', { deliveryId: delivery.id })
            }
          />
          <Line />
          <DeliveryActionButton
            iconName="info-outline"
            iconColor="#E7BA40"
            iconSize={24}
            title="Visualizar Problemas"
            onPress={() =>
              navigation.navigate('DeliveryProblems', {
                deliveryId: delivery.id,
              })
            }
          />
          <Line />
          <DeliveryActionButton
            iconName="check-circle"
            iconColor="#7D40E7"
            iconSize={24}
            title="Confirmar Entrega"
            onPress={() => handleConfirmDelivery()}
          />
        </Buttons>
      ) : (
          <PickUpDeliveryButton onPress={() => handlePickUpDelivery()}>
            <Icon name="local-shipping" size={30} color="#7D40E7" />
            <PickUpDeliveryText> Retirar entrega</PickUpDeliveryText>
          </PickUpDeliveryButton>
        )}
    </Container>
  );
}
