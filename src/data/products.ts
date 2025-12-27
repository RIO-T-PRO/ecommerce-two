export interface ProductsData {
  id: string;
  name: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  category: string;
  color: string;
  size: string;
  images: string[];
  description: string;
}

export const products: ProductsData[] = [
  // WOMEN - 5 products
  {
    id: "1",
    name: "Puffer Jacket",
    price: 300,
    discount: 15,
    rating: 4.2,
    reviews: 100,
    category: "Women",
    color: "Blue",
    size: "M",
    images: [
      "https://plus.unsplash.com/premium_photo-1663040286675-8dc3d0d563e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663045460745-8d8eb7b6ff85?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664302082764-4a7c9a0c79bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663021829256-93d05e3f620d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Stay warm and stylish with this vibrant color-blocked puffer jacket. Features premium insulation, water-resistant outer shell, and a modern silhouette perfect for casual winter outings.",
  },
  {
    id: "2",
    name: "Metallic Windbreaker",
    price: 245,
    discount: 12,
    rating: 4.6,
    reviews: 198,
    category: "Women",
    color: "Purple",
    size: "S",
    images: [
      "https://images.unsplash.com/photo-1588128266732-d279f0be2c66?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1606766415156-d8ac2e87683c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Eye-catching metallic windbreaker with shimmer finish. Lightweight and packable for easy carrying. Wind-resistant fabric with contemporary style.",
  },
  {
    id: "3",
    name: "Womens Crop Jacket",
    price: 253.44,
    discount: 25,
    rating: 4.5,
    reviews: 200,
    category: "Women",
    color: "Red",
    size: "XS",
    images: [
      "https://plus.unsplash.com/premium_photo-1663011069200-43ca559dac75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663013650885-aad6a128dc68?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681492161731-b7d45751dcd3?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Elegant red crop jacket perfect for any season. Short silhouette flatters most body types. Quality fabric ensures durability and comfort.",
  },
  {
    id: "4",
    name: "Indie Down Jacket",
    price: 609.36,
    discount: 18,
    rating: 4.0,
    reviews: 120,
    category: "Women",
    color: "Black",
    size: "M",
    images: [
      "https://plus.unsplash.com/premium_photo-1765304738892-a65badbc61a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1765304738988-b5e2a18d3c18?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1765304739001-a4905eea78a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Indie-inspired down jacket with unique color blocking. Premium down insulation provides exceptional warmth. Stylish and functional for cold weather.",
  },
  {
    id: "5",
    name: "Urban Parka",
    price: 345,
    discount: 20,
    rating: 4.6,
    reviews: 289,
    category: "Women",
    color: "Green",
    size: "L",
    images: [
      "https://plus.unsplash.com/premium_photo-1765304738892-a65badbc61a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1765304738988-b5e2a18d3c18?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1765304739001-a4905eea78a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Adventure-ready parka with modern urban style. Multiple pockets for storage and reinforced seams. Perfect for city exploration and outdoor adventures.",
  },

  // MEN - 5 products
  {
    id: "6",
    name: "Classic suit",
    price: 280,
    discount: 14,
    rating: 4.4,
    reviews: 156,
    category: "Men",
    color: "Black",
    size: "L",
    images: [
      "https://plus.unsplash.com/premium_photo-1658506833628-e758f73bb413?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1658506859713-fbb7c55df199?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Timeless black puffer jacket for men. Classic design with modern comfort features. Perfect for all seasons and casual styling.",
  },
  {
    id: "7",
    name: "Fitness",
    price: 165,
    discount: 11,
    rating: 4.5,
    reviews: 98,
    category: "Men",
    color: "Blue",
    size: "M",
    images: [
      "https://plus.unsplash.com/premium_photo-1663039834222-28537554794f?q=80&w=837&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663047666505-a4b4d0d1f09f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663050682504-c69ccfb33d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "Urban-style windbreaker in navy blue. Lightweight and packable for easy carrying. Wind-resistant fabric protects from harsh weather.",
  },
  {
    id: "8",
    name: "Casual Denim Jacket",
    price: 185,
    discount: 13,
    rating: 4.4,
    reviews: 210,
    category: "Men",
    color: "White",
    size: "L",
    images: [
      "https://plus.unsplash.com/premium_photo-1732489905695-00bcc105c6b0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1732489901328-b3d1d48d2761?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Classic white denim jacket perfect for casual wear. Durable denim fabric with comfortable fit. Timeless piece that works with any outfit.",
  },
  {
    id: "9",
    name: "Tech Windbreaker",
    price: 212,
    discount: 19,
    rating: 4.3,
    reviews: 145,
    category: "Men",
    color: "Red",
    size: "M",
    images: [
      "https://plus.unsplash.com/premium_photo-1670088465712-2da547587a15?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670090780135-452a04772504?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "High-tech windbreaker with advanced fabric technology. Water and wind-resistant properties. Perfect for all-weather adventures.",
  },
  {
    id: "10",
    name: "Sleek Bomber Jacket",
    price: 220,
    discount: 10,
    rating: 4.2,
    reviews: 156,
    category: "Men",
    color: "Green",
    size: "L",
    images: [
      "https://plus.unsplash.com/premium_photo-1711508491462-5567bb2f1e33?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1711508493809-61917c6679f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "Sleek green bomber jacket for modern men. Slim fit with contemporary details. Perfect for casual to smart casual occasions.",
  },

  // KIDS - 5 products
  {
    id: "11",
    name: "Colorful Kid Puffer",
    price: 125,
    discount: 15,
    rating: 4.5,
    reviews: 134,
    category: "Kids",
    color: "Purple",
    size: "M",
    images: [
      "https://plus.unsplash.com/premium_photo-1707816501018-91c16faf4dc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1707816501340-60df66800f43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1707816501018-91c16faf4dc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Vibrant purple puffer jacket for kids. Fun and colorful design kids love. Warm insulation perfect for winter play and outdoor adventures.",
  },
  {
    id: "12",
    name: "Adventure Jacket",
    price: 142,
    discount: 12,
    rating: 4.4,
    reviews: 156,
    category: "Kids",
    color: "Green",
    size: "S",
    images: [
      "https://plus.unsplash.com/premium_photo-1663091756524-2d0d6b0ca67a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663091760302-bd788e3b11c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663075949007-e1b00f0b8cb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Explorer-inspired green jacket for active kids. Durable construction with fun design. Perfect for outdoor adventures and school activities.",
  },
  {
    id: "13",
    name: "Winter Puffer Kid",
    price: 155,
    discount: 8,
    rating: 4.7,
    reviews: 267,
    category: "Kids",
    color: "Blue",
    size: "M",
    images: [
      "https://plus.unsplash.com/premium_photo-1661266872517-46546fa30f86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661266887795-05138135797b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664303409807-175aac296c7a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Cozy blue winter puffer jacket for kids. Soft lining and premium insulation. Keep your child warm and comfortable all winter long.",
  },
  {
    id: "14",
    name: "Sport Track Jacket",
    price: 115,
    discount: 22,
    rating: 4.4,
    reviews: 167,
    category: "Kids",
    color: "Red",
    size: "S",
    images: [
      "https://plus.unsplash.com/premium_photo-1681998563640-93b1a7a99e1a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661480123709-08f4faea84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "Red sport track jacket for active kids. Lightweight and breathable fabric. Perfect for sports, gym, and recreational activities.",
  },
  {
    id: "15",
    name: "Fun Print Jacket",
    price: 135,
    discount: 18,
    rating: 4.5,
    reviews: 178,
    category: "Kids",
    color: "White",
    size: "L",
    images: [
      "https://plus.unsplash.com/premium_photo-1661715333527-975b00219c52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661715312966-c0f9e4f268c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661715276689-619fb1c79d6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "White jacket with fun and colorful prints kids absolutely love. Quality construction and comfortable fit. Great for everyday wear and special occasions.",
  },

  // ACCESSORIES - 5 products
  {
    id: "16",
    name: "Classic Baseball Cap",
    price: 55,
    discount: 10,
    rating: 4.4,
    reviews: 89,
    category: "Accessories",
    color: "Black",
    size: "One",
    images: [
      "https://images.unsplash.com/photo-1678721938524-1a3ee398de2a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1678721938524-1a3ee398de2a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Timeless black baseball cap perfect for any occasion. Adjustable fit for comfort. Premium quality fabric that lasts. Great for sun protection and casual style.",
  },
  {
    id: "17",
    name: "Wool Beanie",
    price: 62,
    discount: 20,
    rating: 4.5,
    reviews: 156,
    category: "Accessories",
    color: "Blue",
    size: "One",
    images: [
      "https://plus.unsplash.com/premium_photo-1734680723308-03678b60a0ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1734117604369-e01978082c42?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Cozy blue wool beanie for winter warmth. Soft and comfortable material. Perfect for cold weather and outdoor activities. Machine washable for easy care.",
  },
  {
    id: "18",
    name: "Leather Gloves",
    price: 85,
    discount: 15,
    rating: 4.6,
    reviews: 178,
    category: "Accessories",
    color: "Black",
    size: "M",
    images: [
      "https://images.unsplash.com/photo-1579455134319-042f718340a4?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579455134319-042f718340a4?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Premium black leather gloves for style and warmth. Genuine leather construction ensures durability. Perfect for winter fashion and cold weather protection.",
  },
  {
    id: "19",
    name: "Canvas Backpack",
    price: 125,
    discount: 17,
    rating: 4.4,
    reviews: 201,
    category: "Accessories",
    color: "Green",
    size: "One",
    images: [
      "https://plus.unsplash.com/premium_photo-1663127741355-81a7d7265983?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663127728967-61012882dd97?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663127672979-6ae935da0878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "Durable green canvas backpack perfect for travel and daily use. Multiple compartments for organization. Comfortable straps and sturdy construction.",
  },
  {
    id: "20",
    name: "Casual Watch",
    price: 195,
    discount: 12,
    rating: 4.6,
    reviews: 312,
    category: "Accessories",
    color: "Red",
    size: "One",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553926835-e75b15338ffb?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Stylish red casual watch for everyday wear. Reliable quartz movement and water-resistant design. Perfect gift for watch enthusiasts.",
  },

  // SHOES - 5 products
  {
    id: "21",
    name: "Classic Sneakers",
    price: 145,
    discount: 14,
    rating: 4.6,
    reviews: 345,
    category: "Shoes",
    color: "White",
    size: "42",
    images: [
      "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600686436197-074b5f921604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    ],
    description:
      "Timeless white classic sneakers perfect for everyday wear. Comfortable sole and durable construction. Versatile style that pairs with any outfit.",
  },
  {
    id: "22",
    name: "Running Shoes Pro",
    price: 195,
    discount: 16,
    rating: 4.7,
    reviews: 412,
    category: "Shoes",
    color: "Black",
    size: "43",
    images: [
      "https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Professional running shoes with advanced cushioning technology. Lightweight design for speed and comfort. Perfect for marathon training and daily runs.",
  },
  {
    id: "23",
    name: "Leather Oxford",
    price: 225,
    discount: 9,
    rating: 4.8,
    reviews: 267,
    category: "Shoes",
    color: "Brown",
    size: "44",
    images: [
      "https://images.unsplash.com/photo-1673201183171-0884d985b81d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1673201183171-0884d985b81d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Premium brown leather oxfords for formal occasions. Classic design with premium craftsmanship. Perfect for business and elegant events.",
  },
  {
    id: "24",
    name: "High Top Basketball",
    price: 210,
    discount: 21,
    rating: 4.6,
    reviews: 289,
    category: "Shoes",
    color: "Red",
    size: "43",
    images: [
      "https://images.unsplash.com/photo-1675625500524-432cad136b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1675625500632-2d276bd51920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "Bold red high-top basketball shoes with ankle support. Professional-grade cushioning and grip. Designed for court performance and street style.",
  },
  {
    id: "25",
    name: "Waterproof Boots",
    price: 245,
    discount: 18,
    rating: 4.7,
    reviews: 334,
    category: "Shoes",
    color: "Blue",
    size: "44",
    images: [
      "https://images.unsplash.com/photo-1749220781913-d820a977e985?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1730057687407-f9cded29c7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    ],
    description:
      "Durable blue waterproof boots for hiking and outdoor adventures. Rugged sole for tough terrain. Keeps feet dry and protected in wet conditions.",
  },
];
