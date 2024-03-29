import { CoursesFilter, CoursesList } from 'components/Courses';
import styled from 'styled-components';

export const Courses = () => {
  return (
    <Container>
      <div className="courses-page-layout">
        <CoursesFilter />
        <CoursesList />
      </div>
    </Container>
  );
};

const Container = styled.main`
  overflow-x: hidden;
  .courses-page-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5rem 1.5rem 4rem;
    max-width: 77rem;
    width: 100%;
  }
`;
