export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Anderson",
    role: "Fashion Enthusiast",
    content:
      "Absolutely love the variety! The quality exceeded my expectations and the checkout process was seamless. Already planning my next purchase.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=40&h=40&fit=crop",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Tech Reviewer",
    content:
      "Impressive collection of electronics with competitive pricing. The detailed specifications helped me make the right choice without any hassle.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=40&h=40&fit=crop",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "Home Decorator",
    content:
      "Found exactly what I was looking for! The search filters are intuitive and the product photos are incredibly detailed. Highly recommend!",
    rating: 4,
    avatar:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=40&h=40&fit=crop",
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Sports Enthusiast",
    content:
      "Best shopping experience I've had online. Great deals, fast delivery, and their customer support team is super responsive and helpful.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=40&h=40&fit=crop",
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "Beauty Expert",
    content:
      "The beauty section is amazing with authentic products only. Love the detailed reviews from other customers, really helps with decision making.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=40&h=40&fit=crop",
  },
  {
    id: "6",
    name: "David Thompson",
    role: "Frequent Shopper",
    content:
      "Consistent quality across all categories. The loyalty program is fantastic and I appreciate the personalized recommendations based on my preferences.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=40&h=40&fit=crop",
  },
];
