import styled from 'styled-components';
import { Danger, Purple, Safe } from 'styles/color';
import { courseInfo } from 'utils/type';
interface CardProps {
  course: courseInfo;
}
export const Card = ({ course }: CardProps) => {
  return (
    <Container>
      <Thumbnail>
        <div className="text-thumbnail">Thumbnail</div>
      </Thumbnail>
      <div className="content-container">
        <div className="title-container">
          <div className="text-field">미설정</div>
          <div className="text-title">{course.title}</div>
          <div className="text-small">{course.short_description}</div>
        </div>
        <div className="price-container">
          <div className="price-content">
            {course.price === '0' ? (
              <div className="text-price" style={{ color: Safe }}>
                무료
              </div>
            ) : (
              <>
                <div className="text-price">
                  ₩{parseInt(course.discounted_price, 10).toLocaleString()}
                </div>
                {course.discount_rate !== null ? (
                  <>
                    <div className="text-small text-line-through">
                      ₩{parseInt(course.price, 10).toLocaleString()}
                    </div>
                    <div
                      className="text-discount-rate"
                      style={{ color: Danger }}
                    >
                      {parseFloat(course.discount_rate) * 100}%
                    </div>
                  </>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(24rem - 145px);
  }

  background-color: white;
  width: calc(25% - 24px);
  margin: 12px;
  height: 24rem;
  border-radius: 10px;
  border: 1px solid rgba(225, 226, 228, 0.75);

  .title-container {
    padding: 1.25rem;
  }

  .price-container {
    padding: 0px 1.25rem 1.25rem 1.25rem;
  }

  .price-content {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    border-top: 1px solid rgb(240, 241, 243);
    padding-top: 1rem;
  }
`;

const Thumbnail = styled.div`
  height: 145px;
  width: 100%;
  background-color: ${Purple};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
