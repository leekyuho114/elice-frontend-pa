import { Card } from 'components/Common/Card';
import { useFetchCourses } from 'hooks/useFetchCourses';
import { useState } from 'react';
import styled from 'styled-components';

export const CoursesCards = () => {
  const [page, setPage] = useState<number>(0);
  const { courses, course_count, status } = useFetchCourses(0);
  return (
    <Container>
      {courses?.map((value) => {
        return <Card course={value} />;
      })}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 2rem;
`;
