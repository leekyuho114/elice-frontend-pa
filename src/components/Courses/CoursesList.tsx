import { Card } from 'components/Common/Card';
import { useFetchCourses } from 'hooks/useFetchCourses';
import { useState } from 'react';
import styled from 'styled-components';

export const CoursesList = () => {
  const [page, setPage] = useState<number>(0);
  const { courses, course_count, status } = useFetchCourses(0);
  return (
    <Container>
      {course_count > 0 ? (
        <>
          <div className="text-total-count">전체 {course_count}개</div>
          <div className="card-container">
            {courses?.map((value) => {
              return <Card key={value.id} course={value} />;
            })}
          </div>
        </>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </Container>
  );
};
const Container = styled.div`
  .card-container {
    display: flex;
    margin: -12px;
    flex-wrap: wrap;
    align-items: center;
  }
`;
