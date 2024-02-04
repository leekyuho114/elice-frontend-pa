import { FilterTag } from 'components/Common/FilterTag';
import { useFilter } from 'hooks/useFilter';

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
    <>
      <input
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
      ></input>
      <FilterTag text="무료" onClick={handleFreeClick} />{' '}
      <FilterTag text="유료" onClick={handlePaidClick} />
    </>
  );
};
