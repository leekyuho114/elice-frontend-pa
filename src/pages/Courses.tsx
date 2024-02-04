import { CoursesCards, CoursesFilter } from 'components/Courses';
import styled from 'styled-components';

export const Courses = () => {
  return (
    <Container>
      <CoursesFilter />
      <CoursesCards />
    </Container>
  );
};

const Container = styled.main``;
