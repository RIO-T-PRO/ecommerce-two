"use client";

import {
  Mail,
  Phone,
  Clock,
  ChevronDown,
  Home,
  ShoppingBag,
  Info,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <main className="px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs & Page Heading */}
          <div className="mb-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-text-light text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Get in Touch
              </h1>
              <p className="text-text-muted text-lg font-normal leading-normal max-w-2xl">
                We'd love to hear from you. Fill out the form below or find
                other ways to reach us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-2 flex flex-col gap-8 bg-card-bg p-8 rounded-2xl border border-border-light">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="text-text-blue text-2xl" />
                <h2 className="text-text-light text-2xl font-bold leading-tight">
                  Send us a Message
                </h2>
              </div>
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-text-light text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border-light bg-section-bg text-text-light placeholder:text-text-muted px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-blue/50 focus:border-text-blue"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-text-light text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-border-light bg-section-bg text-text-light placeholder:text-text-muted px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-blue/50 focus:border-text-blue"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-text-light text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-border-light bg-section-bg text-text-light placeholder:text-text-muted px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-blue/50 focus:border-text-blue resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-xl h-14 bg-text-blue text-text-light text-base font-bold tracking-wide hover:bg-text-blue/90 transition-all duration-300 hover:scale-105 w-full md:w-auto px-8"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right Column: Support & FAQ */}
            <div className="flex flex-col gap-8">
              {/* Support Info */}
              <div className="flex flex-col gap-8 bg-card-bg p-8 rounded-2xl border border-border-light">
                <h3 className="text-text-light text-xl font-bold leading-tight">
                  Other Ways to Reach Us
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-soft-blue-bg/20">
                      <Mail className="text-text-blue" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-text-light text-base font-medium">
                        Email
                      </p>
                      <a
                        href="mailto:support@ecommerce.com"
                        className="text-text-muted text-sm hover:text-text-blue transition-colors"
                      >
                        support@ecommerce.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-soft-blue-bg/20">
                      <Phone className="text-text-blue" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-text-light text-base font-medium">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-text-muted text-sm hover:text-text-blue transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-soft-blue-bg/20">
                      <Clock className="text-text-blue" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-text-light text-base font-medium">
                        Operating Hours
                      </p>
                      <p className="text-text-muted text-sm">
                        Mon-Fri: 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="flex flex-col gap-6 bg-card-bg p-8 rounded-2xl border border-border-light">
                <div className="flex items-center gap-3">
                  <Info className="text-text-blue text-2xl" />
                  <h2 className="text-text-light text-xl font-bold leading-tight">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <details className="group bg-section-bg p-4 rounded-xl border border-border-light cursor-pointer">
                    <summary className="flex items-center justify-between text-text-light font-medium list-none">
                      How do I track my order?
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="text-text-muted text-sm mt-3">
                      Once your order has shipped, you will receive a
                      confirmation email with a tracking number. You can use
                      this number on the carrier's website to track your
                      package.
                    </p>
                  </details>
                  <details className="group bg-section-bg p-4 rounded-xl border border-border-light cursor-pointer">
                    <summary className="flex items-center justify-between text-text-light font-medium list-none">
                      What is your return policy?
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="text-text-muted text-sm mt-3">
                      We offer a 30-day return policy for unused and unopened
                      items. Please visit our returns page for more detailed
                      information and to initiate a return.
                    </p>
                  </details>
                  <details className="group bg-section-bg p-4 rounded-xl border border-border-light cursor-pointer">
                    <summary className="flex items-center justify-between text-text-light font-medium list-none">
                      Do you ship internationally?
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="text-text-muted text-sm mt-3">
                      Yes, we ship to most countries worldwide. Shipping costs
                      and delivery times vary by destination. Please check our
                      shipping policy for more details.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-bg p-6 rounded-2xl border border-border-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-soft-blue-bg/20">
                  <ShoppingBag className="text-text-blue" />
                </div>
                <h3 className="text-text-light text-lg font-semibold">
                  Order Support
                </h3>
              </div>
              <p className="text-text-muted text-sm">
                Need help with an existing order? Our support team is here to
                assist you with any order-related questions.
              </p>
            </div>
            <div className="bg-card-bg p-6 rounded-2xl border border-border-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-soft-blue-bg/20">
                  <Info className="text-text-blue" />
                </div>
                <h3 className="text-text-light text-lg font-semibold">
                  General Inquiries
                </h3>
              </div>
              <p className="text-text-muted text-sm">
                Have questions about our products or services? We're happy to
                provide more information and guidance.
              </p>
            </div>
            <div className="bg-card-bg p-6 rounded-2xl border border-border-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-soft-blue-bg/20">
                  <MessageSquare className="text-text-blue" />
                </div>
                <h3 className="text-text-light text-lg font-semibold">
                  Business Inquiries
                </h3>
              </div>
              <p className="text-text-muted text-sm">
                Interested in partnerships or wholesale opportunities? Contact
                our business development team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
