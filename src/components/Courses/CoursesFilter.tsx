import { FilterTag } from 'components/Common/FilterTag';
import { Input } from 'components/Common/Input';
import { useFilter } from 'hooks/useFilter';
import styled from 'styled-components';

export const CoursesFilter = () => {
  const {
    keyword,
    price,
    setPrice,
    searchParams,
    setSearchParams,
    handleKeywordChange,
  } = useFilter();

  const handlePriceClick = (selectedString: string) => {
    const updatedPrice = [...price];
    if (!price.includes(selectedString)) {
      updatedPrice.push(selectedString);
    } else {
      updatedPrice.splice(updatedPrice.indexOf(selectedString), 1);
    }

    searchParams.delete('price');
    updatedPrice.forEach((p) => searchParams.append('price', p));

    setPrice(updatedPrice);
    setSearchParams(searchParams);
  };

  const handleFreeClick = () => {
    handlePriceClick('free');
  };

  const handlePaidClick = () => {
    handlePriceClick('paid');
  };

  return (
    <Container>
      <Input
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
      ></Input>
      <div className="filter-container">
        <div className="filter-row">
          <div className="filter-entry">
            <div className="text-filter-entry">가격</div>
          </div>
          <div className="filter-tag-container">
            <FilterTag
              text="무료"
              isSelected={price.includes('free')}
              onClick={handleFreeClick}
            />{' '}
            <FilterTag
              text="유료"
              isSelected={price.includes('paid')}
              onClick={handlePaidClick}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .filter-container {
    border: 1px solid rgb(225, 226, 228);
  }
  .filter-row {
    display: flex;
    align-items: center;
    background-color: #f9fafc;
  }
  .filter-entry {
    min-width: 6rem;
    padding: 0.875rem 1rem;
    background-color: rgb(249, 250, 252);
    border-right: 1px solid rgb(225, 226, 228);
  }
  .filter-tag-container {
    display: flex;
  }
`;
