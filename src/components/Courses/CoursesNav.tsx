import styled from 'styled-components';

export const CoursesNav = () => {
  return (
    <Container>
      <button>과목</button>
      <button>패스</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;
