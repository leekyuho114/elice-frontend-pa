import { FilterConditions } from 'utils/type';
import { instance } from './instance';
import { DEFAULT_COUNT, DEFAULT_OFFSET } from 'utils/constant';

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
            { title: `%${conditions.title || ''}%` },
            {
              $or: conditions.isFree.map((value) => ({
                enroll_type: 0,
                is_free: value === 'free',
              })),
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
