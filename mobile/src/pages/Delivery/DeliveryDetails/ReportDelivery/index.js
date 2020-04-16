import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { Container, TextField, SubmitButton } from './styles';

import api from '~/services/api';

export default function ReportDelivery({ route }) {
  const { deliveryId } = route.params;
  const [report, setReport] = useState('');

  async function handleSubmit() {
    if (report !== '') {
      await api.post(`/delivery/${deliveryId}/problems`, {
        description: report,
      });
      setReport('');
      Alert.alert('Problema enviado');
    }
  }

  return (
    <Container>
      <TextField
        placeholder="Inclua aqui o problema que ocorreu na entrega."
        onChangeText={setReport}
        value={report}
      />
      <SubmitButton returnKeyType="send" onPress={() => handleSubmit()}>
        Enviar
      </SubmitButton>
    </Container>
  );
}
