import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDebounce from './useDebounce';
const DEFAULT_DELAY = 300;
export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>('');
  const [price, setPrice] = useState<string[]>([]);
  const searchDebounce = useDebounce((input: string) => {
    if (input.trim() !== '') {
      searchParams.set('keyword', input);
    } else {
      searchParams.delete('keyword');
    }
    setSearchParams(searchParams);
  }, DEFAULT_DELAY);

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    searchDebounce(e.target.value);
  };

  useEffect(() => {
    const savedKeyword = searchParams.get('keyword');
    setKeyword(savedKeyword || '');
    setPrice(searchParams.getAll('price'));
  }, []);
  return {
    keyword,
    price,
    setPrice,
    searchParams,
    setSearchParams,
    handleKeywordChange,
  };
};
