"use client";

import {
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ShoppingBag,
  Info,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const faqs = [
    "How do I track my order?",
    "What is your return policy?",
    "Do you ship internationally?",
  ];

  const icons = [
    {
      icon: ShoppingBag,
      title: "Order Support",
      text: "Help with existing orders.",
    },
    {
      icon: Info,
      title: "General Inquiries",
      text: "Questions about products or services.",
    },
    {
      icon: MessageSquare,
      title: "Business Inquiries",
      text: "Partnerships & wholesale.",
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      <main className="px-6 lg:px-11 py-6">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-text-light text-2xl lg:text-3xl font-semibold">
              Get in Touch
            </h1>
            <p className="text-text-muted text-base max-w-2xl mt-2">
              We'd love to hear from you. Fill out the form below or find other
              ways to reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 ">
              <div className="bg-card-bg p-4 rounded-2xl border border-border-light">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="text-text-blue w-5 h-5" />
                  <h2 className="text-text-light text-lg font-bold">
                    Send us a Message
                  </h2>
                </div>

                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-text-light text-sm">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="rounded-lg border border-border-light bg-section-bg px-3 py-2 text-text-light placeholder:text-text-muted  outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-text-light text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="rounded-lg border border-border-light bg-section-bg px-3 py-2 text-text-light placeholder:text-text-muted  outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-text-light text-sm">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      className="rounded-lg border border-border-light bg-section-bg px-3 py-2 text-text-light placeholder:text-text-muted resize-none  outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-11 px-6 rounded-lg bg-text-blue text-text-light text-sm font-semibold hover:bg-text-blue/90 transition self-start"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-card-bg p-4 rounded-2xl border border-border-light">
                <h3 className="text-text-light text-lg font-bold mb-4">
                  Other Ways to Reach Us
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-full bg-soft-blue-bg/20">
                      <Mail className="text-text-blue w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-text-light text-sm font-medium">
                        Email
                      </p>
                      <p className="text-text-muted text-sm">
                        support@ecommerce.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 rounded-full bg-soft-blue-bg/20">
                      <Phone className="text-text-blue w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-text-light text-sm font-medium">
                        Phone
                      </p>
                      <p className="text-text-muted text-sm">
                        +1 (234) 567-890
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 rounded-full bg-soft-blue-bg/20">
                      <Clock className="text-text-blue w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-text-light text-sm font-medium">
                        Hours
                      </p>
                      <p className="text-text-muted text-sm">
                        Mon–Fri: 9am – 5pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card-bg p-4 rounded-2xl border border-border-light">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="text-text-blue w-5 h-5" />
                  <h2 className="text-text-light text-lg font-bold">FAQs</h2>
                </div>

                <div className="flex flex-col gap-3">
                  {faqs.map((q) => (
                    <details
                      key={q}
                      className="group bg-section-bg p-3 rounded-xl border border-border-light"
                    >
                      <summary className="flex justify-between items-center text-sm font-medium text-text-light cursor-pointer">
                        {q}
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
                      </summary>
                      <p className="text-text-muted text-sm mt-2">
                        Please check our help center for full details.
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {icons.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-card-bg p-4 rounded-2xl border border-border-light"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-soft-blue-bg/20">
                    <Icon className="text-text-blue w-4 h-4" />
                  </div>
                  <h3 className="text-text-light font-semibold">{title}</h3>
                </div>
                <p className="text-text-muted text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
