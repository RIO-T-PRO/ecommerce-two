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
  shipping: {
    cost: number;
    estimatedDays: number;
    freeThreshold: number;
  };
  returns: {
    daysAllowed: number;
    condition: string;
  };
  store: {
    name: string;
    rating: number;
    reviews: number;
  };
}

export const products: ProductsData[] = [
  // WOMEN - 5 products
  {
    id: "1",
    name: "Color-blocked Puffer Jacket",
    price: 300,
    discount: 15,
    rating: 4.2,
    reviews: 100,
    category: "Women",
    color: "Blue",
    size: "M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIedGwwA-O7w3LX5ilh-g2cqyOInCPeAGCbOFNR1xMIO2JF2X06f7QcbfS6ssO2xP0w13lAnJ-TVzHjPCMhn-uOsAGMnG8JCPCM7Xbvmuuld0L61VLvqJHt0s_zGhaCpFPgqiTMZ_idgWCvf1DEylnBShscZmLr3JdlQ3Z6nqV4DvGWimAFc8vMSLpG1b5d7QEzWf72puWLsm0qpqPyFYADb55nqkOvor4yLTWvdXUyx5YzPsOx51C4qs9ovHhfFqeVVaZa9gsKh4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVVSstcdx9uVIueoxiHWSLHZ8h2_1DWJ-XB87P6eALd-Xuc1iqx6CAKaXqoKY0InlpcQw75tm0XlQpp1Qeqc9Da4mNqaS6kx0Ji83XZXVL5UMnpOucLvF9HXkHMK40UnabApV9oVXcnwN5ODZ7yJga_pkpSR-084cGB5tBtGwT6bB6SVdKkJSrKHbD549ecxzFGKBsAMg_eAgRbxKsCp2gaFExSn2EP_tnMyktGoQiz46VuyEazoBqTHzbk7Ki_XgTQ-bUKnOJGqU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJCVaUVWn1_nRbiVLX2wkT5kQsFYHBUoc0gMXeyf6G5gJJ96pZLYbjiF1_sN3XJt4ymQsYYQSEmqTFG5h8IKohWoMIwSCGNxbPXKm45Uf5IxgC7Zb8SRPKs6D31_PuAG3vhtVAVhj9EQIk9CH5fUqfywpROfJiszoArbTEChYe8KviRw5TVSsSK8-7FNVf4VTh6r6Nf0agrxSHQc83isv1Mos-g1ktavRHUxu0_dDNH3cN9lUbTizfNg92ftWp0NJpVVJc2_MCE4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqLKd-hoU95M_38--rEYuprYJwCbZgv9R8DKcDtuCW8JdFRL3ROoM3R5yHbvw-F7WP5vkyhgGWPg_GrOn-Oyp5k_1BEcIUtX3FgA8mr8Fff7xg3BC9TaR2Z_atuc1vMBAAG5oDWbq3qXy7xhypjB0O_EGPbC8gVgwvAQoZUkWSrencEXfbUj_yn6QW2_8JoSLLhqYqPeeeMYlsgbgF-sfBylaX07okqzvNDAHnuCfk6lfH_0rJw_q14OjQQQppu5iSh-dU06DsN3s",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6SmULFzEWi_asbM5Rnrj7QNYIv8OswHHm0EJwDam7Defs4i8GhwCwn-3HaVSf1tUYwYmoh6lb0mhT50M1ON0DVSNP9lnNard2bqgCGr83-QQhy5Cv6p9k9Xnbf4oN3VcJr2aiKkHGOpg5wI4abK--h7lbt4eqTI_t3n-w6l3ekU59aoJZhFstqDGKUmVMeZklk2BMRyVD-2_ppFpWD9L3BrXrX8IC2-Wcbvsl_gP6uqsTyHIqfuXxqNKHT8paxsFXX7ATuKTmW9s",
    ],
    description:
      "Stay warm and stylish with this vibrant color-blocked puffer jacket. Features premium insulation, water-resistant outer shell, and a modern silhouette perfect for casual winter outings.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Fashion Hub",
      rating: 4.5,
      reviews: 2341,
    },
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
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1544259741-2ea3ebf61fa3?w=500",
    ],
    description:
      "Eye-catching metallic windbreaker with shimmer finish. Lightweight and packable for easy carrying. Wind-resistant fabric with contemporary style.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Urban Fashion",
      rating: 4.6,
      reviews: 1890,
    },
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
      "https://images.unsplash.com/photo-1541099810657-40d6b3f06e98?w=500",
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
      "https://images.unsplash.com/photo-1591047990555-c2e1e0861a5e?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
    ],
    description:
      "Elegant red crop jacket perfect for any season. Short silhouette flatters most body types. Quality fabric ensures durability and comfort.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Trendy Closet",
      rating: 4.7,
      reviews: 2156,
    },
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
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1544259741-2ea3ebf61fa3?w=500",
    ],
    description:
      "Indie-inspired down jacket with unique color blocking. Premium down insulation provides exceptional warmth. Stylish and functional for cold weather.",
    shipping: {
      cost: 12,
      estimatedDays: 6,
      freeThreshold: 75,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn or lightly worn",
    },
    store: {
      name: "Indie Vibes",
      rating: 4.5,
      reviews: 3987,
    },
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
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1544259741-2ea3ebf61fa3?w=500",
    ],
    description:
      "Adventure-ready parka with modern urban style. Multiple pockets for storage and reinforced seams. Perfect for city exploration and outdoor adventures.",
    shipping: {
      cost: 15,
      estimatedDays: 7,
      freeThreshold: 100,
    },
    returns: {
      daysAllowed: 60,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Adventure Gear Co",
      rating: 4.4,
      reviews: 3421,
    },
  },

  // MEN - 5 products
  {
    id: "6",
    name: "Classic Puffer Jacket",
    price: 280,
    discount: 14,
    rating: 4.4,
    reviews: 156,
    category: "Men",
    color: "Black",
    size: "L",
    images: [
      "https://images.unsplash.com/photo-1543163521-9145f931371e?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1544259741-2ea3ebf61fa3?w=500",
    ],
    description:
      "Timeless black puffer jacket for men. Classic design with modern comfort features. Perfect for all seasons and casual styling.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Urban Fashion",
      rating: 4.6,
      reviews: 1890,
    },
  },
  {
    id: "7",
    name: "Urban Windbreaker",
    price: 165,
    discount: 11,
    rating: 4.5,
    reviews: 98,
    category: "Men",
    color: "Blue",
    size: "M",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1543163521-9145f931371e?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
    ],
    description:
      "Urban-style windbreaker in navy blue. Lightweight and packable for easy carrying. Wind-resistant fabric protects from harsh weather.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Street Style Hub",
      rating: 4.5,
      reviews: 2234,
    },
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
      "https://images.unsplash.com/photo-1543163521-9145f931371e?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
    ],
    description:
      "Classic white denim jacket perfect for casual wear. Durable denim fabric with comfortable fit. Timeless piece that works with any outfit.",
    shipping: {
      cost: 9,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Denim Store Pro",
      rating: 4.6,
      reviews: 3456,
    },
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
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1543163521-9145f931371e?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
    ],
    description:
      "High-tech windbreaker with advanced fabric technology. Water and wind-resistant properties. Perfect for all-weather adventures.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn with tags",
    },
    store: {
      name: "Tech Fashion Pro",
      rating: 4.7,
      reviews: 2876,
    },
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
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1543163521-9145f931371e?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551532586-40db08ba0167?w=500",
    ],
    description:
      "Sleek green bomber jacket for modern men. Slim fit with contemporary details. Perfect for casual to smart casual occasions.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Urban Fashion",
      rating: 4.6,
      reviews: 1890,
    },
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
      "https://images.unsplash.com/photo-1503454537706-cfda28265531?w=500",
      "https://images.unsplash.com/photo-1519457031506-fd23057b741d?w=500",
      "https://images.unsplash.com/photo-1503521321318-6c8da08a78e4?w=500",
      "https://images.unsplash.com/photo-1503227192033-470f6a06e9b0?w=500",
      "https://images.unsplash.com/photo-1516563318029-38ce2c064e79?w=500",
    ],
    description:
      "Vibrant purple puffer jacket for kids. Fun and colorful design kids love. Warm insulation perfect for winter play and outdoor adventures.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Kids Fashion Co",
      rating: 4.6,
      reviews: 2345,
    },
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
      "https://images.unsplash.com/photo-1503227192033-470f6a06e9b0?w=500",
      "https://images.unsplash.com/photo-1519457031506-fd23057b741d?w=500",
      "https://images.unsplash.com/photo-1503454537706-cfda28265531?w=500",
      "https://images.unsplash.com/photo-1503521321318-6c8da08a78e4?w=500",
      "https://images.unsplash.com/photo-1516563318029-38ce2c064e79?w=500",
    ],
    description:
      "Explorer-inspired green jacket for active kids. Durable construction with fun design. Perfect for outdoor adventures and school activities.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Adventure Kids",
      rating: 4.5,
      reviews: 1876,
    },
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
      "https://images.unsplash.com/photo-1516563318029-38ce2c064e79?w=500",
      "https://images.unsplash.com/photo-1503454537706-cfda28265531?w=500",
      "https://images.unsplash.com/photo-1519457031506-fd23057b741d?w=500",
      "https://images.unsplash.com/photo-1503521321318-6c8da08a78e4?w=500",
      "https://images.unsplash.com/photo-1503227192033-470f6a06e9b0?w=500",
    ],
    description:
      "Cozy blue winter puffer jacket for kids. Soft lining and premium insulation. Keep your child warm and comfortable all winter long.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Kids Fashion Co",
      rating: 4.6,
      reviews: 2345,
    },
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
      "https://images.unsplash.com/photo-1503521321318-6c8da08a78e4?w=500",
      "https://images.unsplash.com/photo-1516563318029-38ce2c064e79?w=500",
      "https://images.unsplash.com/photo-1503454537706-cfda28265531?w=500",
      "https://images.unsplash.com/photo-1519457031506-fd23057b741d?w=500",
      "https://images.unsplash.com/photo-1503227192033-470f6a06e9b0?w=500",
    ],
    description:
      "Red sport track jacket for active kids. Lightweight and breathable fabric. Perfect for sports, gym, and recreational activities.",
    shipping: {
      cost: 7,
      estimatedDays: 3,
      freeThreshold: 35,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags",
    },
    store: {
      name: "Active Kids Store",
      rating: 4.4,
      reviews: 1567,
    },
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
      "https://images.unsplash.com/photo-1503227192033-470f6a06e9b0?w=500",
      "https://images.unsplash.com/photo-1503521321318-6c8da08a78e4?w=500",
      "https://images.unsplash.com/photo-1516563318029-38ce2c064e79?w=500",
      "https://images.unsplash.com/photo-1503454537706-cfda28265531?w=500",
      "https://images.unsplash.com/photo-1519457031506-fd23057b741d?w=500",
    ],
    description:
      "White jacket with fun and colorful prints kids absolutely love. Quality construction and comfortable fit. Great for everyday wear and special occasions.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Kids Fashion Co",
      rating: 4.6,
      reviews: 2345,
    },
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
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1505631346881-b72b27e84530?w=500",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
    ],
    description:
      "Timeless black baseball cap perfect for any occasion. Adjustable fit for comfort. Premium quality fabric that lasts. Great for sun protection and casual style.",
    shipping: {
      cost: 5,
      estimatedDays: 3,
      freeThreshold: 30,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags",
    },
    store: {
      name: "Accessories Hub",
      rating: 4.5,
      reviews: 1234,
    },
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
      "https://images.unsplash.com/photo-1529049362936-a3fbf92ab2d3?w=500",
      "https://images.unsplash.com/photo-1552374196-1ab2748d3d4d?w=500",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500",
    ],
    description:
      "Cozy blue wool beanie for winter warmth. Soft and comfortable material. Perfect for cold weather and outdoor activities. Machine washable for easy care.",
    shipping: {
      cost: 5,
      estimatedDays: 3,
      freeThreshold: 30,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags",
    },
    store: {
      name: "Winter Accessories Co",
      rating: 4.6,
      reviews: 2123,
    },
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
      "https://images.unsplash.com/photo-1556821552-5ae0d262e845?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1505631346881-b72b27e84530?w=500",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500",
    ],
    description:
      "Premium black leather gloves for style and warmth. Genuine leather construction ensures durability. Perfect for winter fashion and cold weather protection.",
    shipping: {
      cost: 6,
      estimatedDays: 3,
      freeThreshold: 35,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn with tags",
    },
    store: {
      name: "Leather Goods Store",
      rating: 4.7,
      reviews: 3421,
    },
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
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1505631346881-b72b27e84530?w=500",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500",
    ],
    description:
      "Durable green canvas backpack perfect for travel and daily use. Multiple compartments for organization. Comfortable straps and sturdy construction.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Bag & Pack Store",
      rating: 4.5,
      reviews: 2876,
    },
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
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
      "https://images.unsplash.com/photo-1579365080519-e21cc028cb29?w=500",
      "https://images.unsplash.com/photo-1505056399318-f67bfe5c9b84?w=500",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    ],
    description:
      "Stylish red casual watch for everyday wear. Reliable quartz movement and water-resistant design. Perfect gift for watch enthusiasts.",
    shipping: {
      cost: 8,
      estimatedDays: 4,
      freeThreshold: 40,
    },
    returns: {
      daysAllowed: 60,
      condition: "Unworn with tags",
    },
    store: {
      name: "Time Pieces Co",
      rating: 4.8,
      reviews: 4567,
    },
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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
      "https://images.unsplash.com/photo-1523869635100-9f4c4e86b553?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
    ],
    description:
      "Timeless white classic sneakers perfect for everyday wear. Comfortable sole and durable construction. Versatile style that pairs with any outfit.",
    shipping: {
      cost: 10,
      estimatedDays: 5,
      freeThreshold: 50,
    },
    returns: {
      daysAllowed: 30,
      condition: "Unworn with tags attached",
    },
    store: {
      name: "Shoe Paradise",
      rating: 4.7,
      reviews: 4234,
    },
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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
      "https://images.unsplash.com/photo-1523869635100-9f4c4e86b553?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1551999514-3b4c78695a36?w=500",
    ],
    description:
      "Professional running shoes with advanced cushioning technology. Lightweight design for speed and comfort. Perfect for marathon training and daily runs.",
    shipping: {
      cost: 12,
      estimatedDays: 6,
      freeThreshold: 75,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn with tags",
    },
    store: {
      name: "Running Gear Store",
      rating: 4.8,
      reviews: 5123,
    },
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
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1523869635100-9f4c4e86b553?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
    ],
    description:
      "Premium brown leather oxfords for formal occasions. Classic design with premium craftsmanship. Perfect for business and elegant events.",
    shipping: {
      cost: 15,
      estimatedDays: 7,
      freeThreshold: 100,
    },
    returns: {
      daysAllowed: 60,
      condition: "Unworn with tags",
    },
    store: {
      name: "Formal Shoes Co",
      rating: 4.9,
      reviews: 3876,
    },
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
      "https://images.unsplash.com/photo-1523869635100-9f4c4e86b553?w=500",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
    ],
    description:
      "Bold red high-top basketball shoes with ankle support. Professional-grade cushioning and grip. Designed for court performance and street style.",
    shipping: {
      cost: 12,
      estimatedDays: 6,
      freeThreshold: 75,
    },
    returns: {
      daysAllowed: 45,
      condition: "Unworn with tags",
    },
    store: {
      name: "Sports Shoes Hub",
      rating: 4.7,
      reviews: 2987,
    },
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
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
      "https://images.unsplash.com/photo-1523869635100-9f4c4e86b553?w=500",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500",
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500",
    ],
    description:
      "Durable blue waterproof boots for hiking and outdoor adventures. Rugged sole for tough terrain. Keeps feet dry and protected in wet conditions.",
    shipping: {
      cost: 15,
      estimatedDays: 7,
      freeThreshold: 100,
    },
    returns: {
      daysAllowed: 60,
      condition: "Unworn or gently used",
    },
    store: {
      name: "Adventure Boots Store",
      rating: 4.6,
      reviews: 3421,
    },
  },
];
