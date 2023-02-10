interface Author {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  url: string;
}

interface Rating {
  count: string;
  votes: number;
}

interface Publisher {
  id: number;
  slug: string;
  title: string;
}

interface Category {
  id: number;
  slug: string;
  title: string;
  url: string;
}

export interface IBook {
  id: number;
  title: string;
  authors: Author[];
  coauthors: any[];
  description: string;
  picture: string;
  price: number;
  oldPrice: number;
  bestseller: boolean;
  discount: string;
  preOrderDate: Date;
  rating: Rating;
  publisher: Publisher;
  pages: string;
  binding: string;
  category: Category;
}