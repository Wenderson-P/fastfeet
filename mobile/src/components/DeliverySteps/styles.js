import styled from 'styled-components/native';

export const Container = styled.View`
  width: 50px;
  width: 100%;
  align-self: center;
`;

export const StepRow = styled.View`
  padding: 0px 10px 2px 15px;
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Step = styled.View`
  background: ${props => (props.activeStep ? '#7d40e7' : '#FFFFFF')};
  border: 1px #7d40e7;
  border-radius: 25px;
  height: 9px;
  width: 9px;
`;

export const Line = styled.View`
  background: #7d40e7;
  height: 2px;
  width: 110px;
`;

export const StepLabel = styled.Text`
  font-size: 8px;
  color: #999999;
  text-align: center;
`;
