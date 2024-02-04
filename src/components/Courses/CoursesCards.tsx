import { Card } from 'components/Common/Card';
import { useFetchCourses } from 'hooks/useFetchCourses';
import { useState } from 'react';
import styled from 'styled-components';

export const CoursesCards = () => {
  const [page, setPage] = useState<number>(0);
  const { courses, course_count, status } = useFetchCourses(0);
  return (
    <Container>
      {course_count > 0 ? (
        <>
          {courses?.map((value) => {
            return <Card key={value.id} course={value} />;
          })}
        </>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
