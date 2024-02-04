import { Card } from 'components/Common/Card';
import { useFetchCourses } from 'hooks/useFetchCourses';
import styled from 'styled-components';
import { CoursesPagination } from './CoursesPagination';
import { DEFAULT_COUNT } from 'utils/constant';
import { ReactComponent as Search } from 'assets/icons/search.svg';
export const CoursesList = () => {
  const { courses, course_count, status } = useFetchCourses();
  const calculateTotalPages = (totalItems: number): number => {
    return Math.ceil(totalItems / DEFAULT_COUNT);
  };
  if (status === 'loading') {
    return null;
  } else if (status === 'ok') {
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
          <div className="list-none-container">
            <Search
              fill="#999"
              width={'2.75rem'}
              height={'2.75rem'}
              style={{
                marginTop: '7rem',
                marginBottom: '2rem',
                marginRight: '1.25rem',
              }}
            />
            <div className="text-default">검색 결과가 없습니다.</div>
          </div>
        )}
        {course_count > 20 ? (
          <CoursesPagination
            maxPageNumber={calculateTotalPages(course_count)}
          />
        ) : null}
      </Container>
    );
  } else {
    return <>error</>;
  }
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
  .list-none-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
