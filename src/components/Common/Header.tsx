import styled from 'styled-components';
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
export const Header = () => {
  return (
    <Container>
      <img
        src="https://cdn-api.elice.io/api/file/58c7f7253d0c45b384e757953c1dcd55/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5_kr%404x.png?se=2100-12-31T00%3A00%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=ambqFbUklwfxNCv8ohIXBGpyBwmE7AdZH9rKKTBg150%3D"
        alt="엘리스 아카데미"
        className="header-icon"
      />
      <div className="header-options">
        <nav className="header-nav">
          <div className="header-nav-element text-header-nav">홈</div>
          <div className="header-nav-element text-header-nav">전체 강의</div>
          <div className="header-nav-element text-header-nav">
            🌏플루럴사이트
          </div>
          <div className="header-nav-element text-header-nav">클라우드</div>
        </nav>
        <div className="header-user-options">
          <button className="header-dashboard">내 대시보드</button>
          <div className="header-alert">
            <BellIcon
              width={'1.25rem'}
              height={'1.25rem'}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <GoogleProfile />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 1.5rem;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  background-color: rgb(255, 255, 255);
  position: sticky;
  top: 0px;
  z-index: 900;
  .header-icon {
    width: auto;
    height: 100%;
    max-height: 2rem;
  }
  .header-options {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .header-nav {
    display: flex;
    gap: 8px;
  }
  .header-nav-element {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.15s ease;
    &:hover {
      background-color: #f6f6f7;
    }
    cursor: pointer;
    border-radius: 0.5rem;
  }
  .header-user-options {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .header-dashboard {
    color: rgb(255, 255, 255);
    background-color: #6947df;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    line-height: 1.5rem;
    border-radius: 8px;
    min-width: 64px;
    transition: filter 0.15s ease;
    &:hover {
      filter: brightness(0.9);
    }
    cursor: pointer;
  }
  .header-alert {
    padding: 0.25rem;
    border-radius: 100%;
    transition: background-color 0.15s ease;
    &:hover {
      background-color: #f6f6f7;
    }
  }
`;
const GoogleProfile = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: #0187d0;
  cursor: pointer;
`;
