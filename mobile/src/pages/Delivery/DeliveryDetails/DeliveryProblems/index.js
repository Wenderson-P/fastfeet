import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import { FlatList, ProblemsList, Problem, Date, View, Text } from './styles';

import api from '~/services/api';

export default function DeliveryProblems({ route }) {
  const { deliveryId } = route.params;
  const [problems, setProblems] = useState('');

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/delivery/${deliveryId}/problems`);
      const data = response.data.map(problem => {
        const date = format(parseISO(problem.created_at), 'dd/MM/yyyy');
        return {
          id: problem.problem_id,
          description: problem.description,
          date,
        };
      });
      setProblems(data);
    }
    loadProblems();
  }, []);

  return (
    <FlatList
      keyExtractor={item => `item-${item.id}`}
      data={problems}
      renderItem={({ item }) => (
        <ProblemsList>
          <Problem>{item.description}</Problem>
          <Date>{item.date}</Date>
        </ProblemsList>
      )}
      ListEmptyComponent={
        <View>
          <Text>Sem problemas registrados</Text>
        </View>
      }
    />
  );
}
