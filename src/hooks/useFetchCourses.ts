import { getCourses } from 'api/courses';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { courseInfo } from 'utils/type';

export const useFetchCourses = (offset: number) => {
  const [courses, setCourses] = useState<courseInfo[]>([]);
  const [course_count, setCourse_count] = useState<number>(0);
  const [status, setStatus] = useState<string>('loading');
  const [searchParams, setSearchParams] = useSearchParams();
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

  return { courses, course_count, status };
};
