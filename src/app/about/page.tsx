"use client";

import {
  Store,
  Heart,
  ShoppingCart,
  Globe,
  Smile,
  Package,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <main className="grow">
        <div className="max-w-7xl px-4 md:px-8 py-8">
          <div>
            <div className="relative overflow-hidden rounded-2xl min-h-[400px] shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALSbksltVvcXp6aJu6OqPBFc_XlVUsbgp1p8AMs-g5Hnb8mNwhgp0zzRc91BOaqDK3y5IF2N8O9a7FiUIvjyl7KtciP_qdFGy9nF533LOx48WfkLZoVkMovlVY2qhONaIKVh28_L8gDtTKi2wk_mhsudIsnbYiiJcnUWEUZIqARGofkXxT7_cACoe49AjFzEYPrP6F3SiV0pAqp7GMBK6AUePYBqbOr1iFTD2xVMX3IeBIAnaGOpPZKqOdDTXRNWogtA5-pDHvagM"
                  alt="High-quality image of a modern workshop with tools and materials neatly arranged."
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background-dark/90 via-background-dark/30 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-background-dark/60 to-transparent" />
              </div>

              <div className="relative h-full flex items-center">
                <div className="p-6 max-w-2xl">
                  <h1 className="text-text-light text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
                    About Us
                  </h1>
                  <p className="text-text-light/90 text-lg lg:text-xl font-medium">
                    Crafting exceptional experiences through quality and
                    innovation
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="p-6">
                  <h2 className="text-text-light text-3xl font-bold leading-tight tracking-tight">
                    Our Mission
                  </h2>
                  <p className="text-text-muted text-base leading-relaxed mt-4">
                    A concise, impactful statement summarizing the company's
                    purpose and values. We believe in quality, craftsmanship,
                    and delivering an exceptional experience to every customer
                    through meticulously designed products that blend form and
                    function.
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-border-light">
                  <h3 className="text-text-light text-xl font-semibold mb-4">
                    Core Values
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-text-muted">
                      <div className="w-2 h-2 bg-text-blue rounded-full mr-3"></div>
                      Quality craftsmanship in every product
                    </li>
                    <li className="flex items-center text-text-muted">
                      <div className="w-2 h-2 bg-text-blue rounded-full mr-3"></div>
                      Customer-centric innovation
                    </li>
                    <li className="flex items-center text-text-muted">
                      <div className="w-2 h-2 bg-text-blue rounded-full mr-3"></div>
                      Sustainable and ethical practices
                    </li>
                    <li className="flex items-center text-text-muted">
                      <div className="w-2 h-2 bg-text-blue rounded-full mr-3"></div>
                      Transparency and integrity
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 bg-section-bg rounded-2xl p-6">
              <h2 className="text-text-light text-3xl font-bold leading-tight tracking-tight">
                Our Story
              </h2>
              <p className="text-text-muted text-base leading-relaxed mt-4">
                Founded in a small garage with a big idea, our journey began
                with a passion for creating durable, beautiful goods. From
                humble beginnings, we've grown into a community-focused brand,
                always staying true to our core principles of innovation and
                integrity. Our team is a collective of designers, makers, and
                dreamers dedicated to bringing you products we're proud of.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-text-muted">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-text-blue rounded-full mr-2"></div>
                  Founded in 2010
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-text-blue rounded-full mr-2"></div>
                  Global shipping network
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-text-blue rounded-full mr-2"></div>
                  Award-winning designs
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <h2 className="text-text-light text-3xl font-bold leading-tight tracking-tight mb-8 lg:mb-12 text-center">
                Our Impact in Numbers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-card-bg rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-light">
                  <div className="mb-4 p-4 rounded-full bg-soft-blue-bg/20">
                    <Globe className="text-text-blue text-5xl" />
                  </div>
                  <p className="text-text-light text-5xl font-black mb-2">
                    75+
                  </p>
                  <p className="text-text-muted text-lg">
                    Countries Shipped To
                  </p>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-light">
                  <div className="mb-4 p-4 rounded-full bg-soft-blue-bg/20">
                    <Smile className="text-text-blue text-5xl" />
                  </div>
                  <p className="text-text-light text-5xl font-black mb-2">
                    100k+
                  </p>
                  <p className="text-text-muted text-lg">Happy Customers</p>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-light">
                  <div className="mb-4 p-4 rounded-full bg-soft-blue-bg/20">
                    <Package className="text-text-blue text-5xl" />
                  </div>
                  <p className="text-text-light text-5xl font-black mb-2">
                    5,000+
                  </p>
                  <p className="text-text-muted text-lg">Products Created</p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 flex justify-center">
              <Link href="/products">
                <button className="flex items-center justify-center rounded-xl h-14 bg-text-blue text-text-light gap-3 text-base font-bold tracking-wide px-8 hover:bg-text-blue/90">
                  Go to our products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
