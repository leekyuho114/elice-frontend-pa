import styled from 'styled-components';
import { courseInfo } from 'utils/type';
interface CardProps {
  course: courseInfo;
}
export const Card = ({ course }: CardProps) => {
  return (
    <Container>
      <div className="text-title">{course.title}</div>
      <div className="text-small">{course.short_description}</div>

      {course.price === '0' ? (
        <div>무료</div>
      ) : (
        <>
          <div>₩{parseInt(course.discounted_price, 10).toLocaleString()}</div>
          {course.discount_rate !== null ? (
            <>
              <div>{course.discount_rate}</div>
              <div>₩{parseInt(course.price, 10).toLocaleString()}</div>
            </>
          ) : null}
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  width: calc(25% - 24px);
  margin: 12px;
  height: 24rem;
  border-radius: 10px;
  border: 1px solid rgba(225, 226, 228, 0.75);
`;
