import { FilterConditions } from 'utils/type';
import { instance } from './instance';

const DEFAULT_OFFSET = 0;
const DEFAULT_COUNT = 20;

export interface GetCoursesProps {
  conditions: FilterConditions;
  offset: number;
  count: number;
}

export const getCourses = async (
  conditions: FilterConditions,
  offset: number = DEFAULT_OFFSET,
  count: number = DEFAULT_COUNT,
) => {
  try {
    const res = await instance.get('/org/academy/course/list/', {
      params: {
        filter_conditions: JSON.stringify({
          $and: [
            { title: '%c언어%' },
            {
              $or: [{ enroll_type: 0, is_free: true }],
            },
          ],
        }),
        offset: offset,
        count: count,
      },
    });
    return res;
  } catch (e) {
    alert(e);
  }
};
