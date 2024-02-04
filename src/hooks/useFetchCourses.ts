import { getCourses } from 'api/courses';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { pageState } from 'utils/atom';
import { DEFAULT_COUNT } from 'utils/constant';
import { courseInfo } from 'utils/type';

export const useFetchCourses = () => {
  const [courses, setCourses] = useState<courseInfo[]>([]);
  const [course_count, setCourse_count] = useState<number>(0);
  const [status, setStatus] = useState<string>('loading');
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useRecoilState(pageState);
  const offset = (page - 1) * DEFAULT_COUNT;

  useEffect(() => {
    const title = searchParams.get('keyword');
    const isFree = searchParams.getAll('price');

    getCourses({ title: title, isFree: isFree }, offset)
      .then((res) => {
        const { courses, course_count, _result } = res?.data;
        setStatus(_result.status);
        setCourses(courses);
        setCourse_count(course_count);
      })
      .catch((error) => {
        setStatus('error');
        console.error(error);
      });
  }, [offset, searchParams]);

  useEffect(() => {
    setPage(1);
  }, [searchParams]);
  return { courses, course_count, status };
};
