import React from 'react';
import { Container, Step, StepRow, Line, StepLabel, Row } from './styles';

export default function DeliverySteps({ activeStep }) {
  return (
    <Container>
      <StepRow>
        <Step activeStep={activeStep >= 1} />
        <Line />
        <Step activeStep={activeStep >= 2} />
        <Line />
        <Step activeStep={activeStep >= 3} />
      </StepRow>
      <Row>
        <StepLabel>Aguardando{'\n'}Retirada</StepLabel>
        <StepLabel>Retirada</StepLabel>
        <StepLabel>Entregue</StepLabel>
      </Row>
    </Container>
  );
}
