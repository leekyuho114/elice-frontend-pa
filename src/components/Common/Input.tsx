import { ChangeEventHandler, useState } from 'react';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import styled from 'styled-components';
import { Purple } from 'styles/color';
interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}
export const Input = ({ value, onChange, placeholder }: InputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <Container isFocus={isFocus}>
      <div className="input-icon-container">
        <SearchIcon isFocus={isFocus} />
      </div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        className="input-keyword"
      />
    </Container>
  );
};
const Container = styled.div<{ isFocus: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid
    ${(props) => (props.isFocus ? Purple : 'rgb(201, 202, 204)')};
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
  margin-bottom: 0.5rem;
  .input-icon-container {
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .input-keyword {
    flex: 1;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    height: 2.875rem;
    margin: 0 1rem;
  }
`;
const SearchIcon = styled(Search)<{ isFocus: boolean }>`
  height: 0.75rem;
  fill: ${(props) => (props.isFocus ? Purple : '#222')};
`;
