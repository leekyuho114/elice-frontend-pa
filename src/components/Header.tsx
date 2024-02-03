import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <div>엘아카데미</div>
      <div>홈</div>
      <div>전체 강의</div>
      <div>🌏플루럴사이트</div>
      <div>클라우드</div>
      <input placeholder="검색" />
      <button>내 대시보드</button>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
`;
