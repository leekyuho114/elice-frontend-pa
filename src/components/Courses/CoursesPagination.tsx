import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Purple } from 'styles/color';
import { pageState } from 'utils/atom';
import { ReactComponent as Left } from 'assets/icons/arrow-left.svg';
import { ReactComponent as Right } from 'assets/icons/arrow-right.svg';
interface CoursesPaginationProps {
  maxPageNumber: number;
}
export const CoursesPagination = ({
  maxPageNumber,
}: CoursesPaginationProps) => {
  const [page, setPage] = useRecoilState(pageState);
  //5보다 작은 경우 maxPageNumber로 생성
  const pageNumberArray = Array.from({ length: maxPageNumber });

  const toggleNumberFocus = (value: number) => {
    if (page < 3) {
      if (page === 1) {
        return value === -2;
      } else if (page === 2) {
        return value === -1;
      } else {
        return false;
      }
    } else if (maxPageNumber - 2 < page) {
      if (page === maxPageNumber) {
        return value === 2;
      } else if (page === maxPageNumber - 1) {
        return value === 1;
      } else {
        return false;
      }
    } else {
      return value === 0;
    }
  };
  const calculateCenterPage = () => {
    if (page < 3) {
      return 3;
    } else if (maxPageNumber - 2 < page) {
      return maxPageNumber - 2;
    } else {
      return page;
    }
  };
  const handleLeftNavClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleRigthNavClick = () => {
    if (page < maxPageNumber) {
      setPage(page + 1);
    }
  };
  return (
    <Container>
      <LeftNav onClick={handleLeftNavClick} disabled={page === 1} />
      {pageNumberArray.length >= 5 ? (
        <>
          {[-2, -1, 0, 1, 2].map((value) => {
            //중앙값 계산
            const pageNumber = calculateCenterPage() + value;
            return (
              <NumberBox
                isFocus={toggleNumberFocus(value)}
                onClick={() => {
                  setPage(pageNumber);
                }}
              >
                {pageNumber}
              </NumberBox>
            );
          })}
        </>
      ) : (
        <>
          {pageNumberArray.map((_, index) => {
            const value = index + 1;
            return (
              <NumberBox
                isFocus={value === page}
                onClick={() => {
                  setPage(value);
                }}
              >
                {value}
              </NumberBox>
            );
          })}
        </>
      )}
      <RightNav
        onClick={handleRigthNavClick}
        disabled={page === maxPageNumber}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1.5rem;
`;

const NumberBox = styled.div<{ isFocus: boolean }>`
  border-radius: 0.25rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  width: 1.5rem;
  font-size: 0.875rem;
  margin: 0 0.375rem;
  background-color: ${(props) => (props.isFocus ? Purple : null)};
  color: ${(props) => (props.isFocus ? '#fff' : '#999')};
  transition: background-color 0.15s ease;
  &:hover {
    background-color: #efeff6;
    color: ${Purple};
    font-weight: 600;
  }
  cursor: pointer;
`;
const LeftNav = styled(Left)<{ disabled: boolean }>`
  width: 0.5rem;
  fill: ${(props) => (props.disabled ? '#ccc' : Purple)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RightNav = styled(Right)<{ disabled: boolean }>`
  width: 0.5rem;
  fill: ${(props) => (props.disabled ? '#ccc' : Purple)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
