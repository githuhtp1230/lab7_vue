export class Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  size: number;
  image: string;

  constructor(
    id: number,
    name: string,
    description: string,
    category: string,
    price: number,
    size: number,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.size = size;
    this.image = image;
  }
}
