export interface MenuItem {
  id: string;
  name: string;
  jpName?: string;
  description: string;
  price: string;
  category: 'sushi-sashimi' | 'rice-meals' | 'appetizers-sides';
  tags: string[];
  isPopular?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

export type ActivePage = 'home' | 'menu' | 'location';
