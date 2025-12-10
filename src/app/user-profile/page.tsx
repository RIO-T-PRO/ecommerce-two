"use client";

import { User, Heart, Package, Settings, Edit, Eye } from "lucide-react";

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-background-dark p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-card-bg rounded-xl border border-border-light p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSsVT5mCATwHHNyRoRW_VGsQhu0Jv02XdQdp3VHpbRrvVvBcSJQaRKPcQGSPhs_K9VgSy1TLVeyhRJSAyQnLRu1z3gxrP4C2un4lzbdnZUrwSf1vNjpsnY0jqv1Y-fSDTM88UkG9wvj1dHqvqGIKG5toBFhQHcA2FXfuC17Q6NbFgHvckrRDJn_oZY_miNV47hOrwts0W_IlD45AGIdkvdnV3oAU_Jd06PiYg-mIstNIbvCEa2cPApmW7EmQmoUhs2MqwDfSP4j30"
              alt="Eleanor Vance"
              className="rounded-xl h-24 w-24 object-cover border-2 border-text-blue/20"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-text-light text-2xl font-bold">
                Eleanor Vance
              </h1>
              <p className="text-text-muted mt-1">eleanor.vance@example.com</p>
              <div className="flex gap-2 justify-center md:justify-start mt-3">
                <button className="px-4 py-2 bg-white/10 text-text-light text-sm rounded-lg hover:bg-white/20">
                  <Edit className="inline w-4 h-4 mr-2" />
                  Edit
                </button>
                <button className="px-4 py-2 bg-text-blue text-text-light text-sm rounded-lg hover:bg-text-blue/90">
                  <Eye className="inline w-4 h-4 mr-2" />
                  View Public
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex border-b border-border-light mb-6 overflow-x-auto">
          {[
            { icon: User, label: "Profile", active: true },
            { icon: Heart, label: "Wishlist" },
            { icon: Package, label: "Orders" },
            { icon: Settings, label: "Settings" },
          ].map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap ${
                item.active
                  ? "text-text-light border-b-2 border-text-blue"
                  : "text-text-muted hover:text-text-light"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="bg-card-bg rounded-xl border border-border-light p-6">
          <h2 className="text-text-light text-xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="text-text-light text-sm block mb-2">
                First Name
              </label>
              <input
                value="Eleanor"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div>
              <label className="text-text-light text-sm block mb-2">
                Last Name
              </label>
              <input
                value="Vance"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-text-light text-sm block mb-2">
                Email
              </label>
              <input
                value="eleanor.vance@example.com"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div>
              <label className="text-text-light text-sm block mb-2">
                Phone
              </label>
              <input
                placeholder="Add phone"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
          </div>

          <h2 className="text-text-light text-xl font-bold mb-6">
            Shipping Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="md:col-span-2">
              <label className="text-text-light text-sm block mb-2">
                Address
              </label>
              <input
                value="456 Oak Avenue"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div>
              <label className="text-text-light text-sm block mb-2">City</label>
              <input
                value="Springfield"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div>
              <label className="text-text-light text-sm block mb-2">
                State
              </label>
              <input
                value="Illinois"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div>
              <label className="text-text-light text-sm block mb-2">
                Zip Code
              </label>
              <input
                value="62704"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
            <div>
              <label className="text-text-light text-sm block mb-2">
                Country
              </label>
              <input
                value="United States"
                className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-6 py-3 bg-white/10 text-text-light rounded-lg hover:bg-white/20">
              Cancel
            </button>
            <button className="px-6 py-3 bg-text-blue text-text-light rounded-lg hover:bg-text-blue/90">
              Save Changes
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-card-bg rounded-xl border border-border-light p-4">
            <div className="flex items-center gap-2 mb-2">
              <Package className="text-text-blue w-5 h-5" />
              <span className="text-text-light font-medium">Orders</span>
            </div>
            <p className="text-text-light text-2xl font-bold">24</p>
          </div>
          <div className="bg-card-bg rounded-xl border border-border-light p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="text-text-blue w-5 h-5" />
              <span className="text-text-light font-medium">Wishlist</span>
            </div>
            <p className="text-text-light text-2xl font-bold">12</p>
          </div>
          <div className="bg-card-bg rounded-xl border border-border-light p-4">
            <div className="flex items-center gap-2 mb-2">
              <User className="text-text-blue w-5 h-5" />
              <span className="text-text-light font-medium">Years</span>
            </div>
            <p className="text-text-light text-2xl font-bold">3+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
