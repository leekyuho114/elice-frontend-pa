import { Card } from 'components/Common/Card';
import { useFetchCourses } from 'hooks/useFetchCourses';
import styled from 'styled-components';
import { CoursesPagination } from './CoursesPagination';
import { useRecoilValue } from 'recoil';
import { pageState } from 'utils/atom';
import { DEFAULT_COUNT } from 'utils/constant';

export const CoursesList = () => {
  const page = useRecoilValue(pageState);
  const offset = (page - 1) * DEFAULT_COUNT;
  const { courses, course_count, status } = useFetchCourses(offset);

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
      {<CoursesPagination maxPageNumber={calculateTotalPages(course_count)} />}
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
