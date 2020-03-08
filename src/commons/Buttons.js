import styled from 'styled-components';

const border = (width='2px', color) => {
  return `border: solid ${widh} ${color}`
}

export const Button = styled.button`
  font-size: 14px;
  color: var(--primary-color);
  ${border}
`;


export const ButtonDanger = styled(Button)`
  background: var(--danger-color);
`;
