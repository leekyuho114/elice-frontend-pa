import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Purple } from 'styles/color';
interface FilterTagProps {
  text: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const FilterTag = ({ text, isSelected, onClick }: FilterTagProps) => {
  return (
    <Button onClick={onClick} IsSelected={isSelected}>
      {text}
    </Button>
  );
};
const Button = styled.button<{ IsSelected: boolean }>`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0.5rem;
  border: 1px solid rgb(240, 241, 243);
  font-family: Pretendard;
  font-weight: normal;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  min-width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  color: ${(props) => (props.IsSelected ? '#ffffff' : '#5e5f61')};
  background: ${(props) => (props.IsSelected ? Purple : 'rgb(240, 241, 243)')};
  transition: filter 0.15s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;
