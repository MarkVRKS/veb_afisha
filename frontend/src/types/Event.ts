export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string; 
  price?: number;
  category?: string;
}
