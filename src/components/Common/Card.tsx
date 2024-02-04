import styled from 'styled-components';
import { courseInfo } from 'utils/type';
interface CardProps {
  course: courseInfo;
}
export const Card = ({ course }: CardProps) => {
  return (
    <Container>
      <div>{course.title}</div>
      <div>{course.short_description}</div>
    </Container>
  );
};
const Container = styled.div`
  background-color: pink;
  height: 10rem;
  width: 40rem;
`;
