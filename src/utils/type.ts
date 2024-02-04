export interface FilterConditions {
  title: string | null;
  isFree: string[];
}
//course information data type
export type courseInfo = {
  id: number;
  title: string;
  short_description: string;
  price: string;
  discounted_price: string;
  discount_rate: string | null;
};
