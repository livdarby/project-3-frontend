interface IReview {
  name: string;
  review: string;
  date: string;
  time: string;
}

export interface IProduct {
  image: string;
  title: string;
  description: string;
  price: number;
  unitsSold: number;
  _id: string;
  user: string;
  category: string;
  reviews: Array<IReview>;
}
