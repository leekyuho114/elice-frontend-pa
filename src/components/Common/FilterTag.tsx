import { MouseEventHandler } from 'react';
import styled from 'styled-components';
interface FilterTagProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const FilterTag = ({ text, onClick }: FilterTagProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};
const Button = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  border: 1px solid rgb(240, 241, 243);
  font-weight: normal;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  padding: 4px 12px;
  min-width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  color: rgb(21, 22, 24);
  background: rgb(240, 241, 243);
`;
