import { Card } from 'components/Common/Card';
import { useFetchCourses } from 'hooks/useFetchCourses';
import styled from 'styled-components';
import { CoursesPagination } from './CoursesPagination';
import { DEFAULT_COUNT } from 'utils/constant';

export const CoursesList = () => {
  const { courses, course_count, status } = useFetchCourses();
  const calculateTotalPages = (totalItems: number): number => {
    return Math.ceil(totalItems / DEFAULT_COUNT);
  };

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
      {course_count > 20 ? (
        <CoursesPagination maxPageNumber={calculateTotalPages(course_count)} />
      ) : null}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  .card-container {
    display: flex;
    margin: -12px;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    width: 100%;
  }
`;
