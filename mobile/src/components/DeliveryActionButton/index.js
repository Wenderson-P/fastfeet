import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Text } from './styles';

export default function DeliveryActionButton({
  iconName,
  iconColor,
  iconSize,
  title,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text>{title}</Text>
    </Container>
  );
}

DeliveryActionButton.propTypes = {
  title: PropTypes.string.isRequired,
};
