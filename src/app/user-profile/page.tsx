"use client";

import { User, Heart, Package, Settings, Edit, Eye } from "lucide-react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import FavoritesTab from "@/components/user-profile/favorites-tab";
import OrdersTab from "@/components/user-profile/orders-tab";
import SettingsTab from "@/components/user-profile/settings";

type TabKey = "profile" | "wishlist" | "orders" | "settings";

interface TabItem {
  key: TabKey;
  icon: LucideIcon;
  label: string;
}

const UserProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState<TabKey>("profile");

  const tabs: TabItem[] = [
    { key: "profile", icon: User, label: "Profile" },
    { key: "wishlist", icon: Heart, label: "Wishlist" },
    { key: "orders", icon: Package, label: "Orders" },
    { key: "settings", icon: Settings, label: "Settings" },
  ];

  const formData = ["First Name", "Last Name", "Email", "Phone"];
  const formData2 = ["Address", "City", "State", "Zip Code", "Country"];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "profile":
        return (
          <>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex-1 bg-card-bg rounded-xl border border-border-light p-4">
                <h2 className="text-text-light text-lg font-bold mb-4">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formData.map((label, idx) => (
                    <div
                      key={label}
                      className={idx === 2 ? "sm:col-span-2" : ""}
                    >
                      <label className="text-text-light text-sm block mb-1">
                        {label}
                      </label>
                      <input
                        placeholder={label}
                        className="w-full bg-section-bg border border-border-light rounded px-3 py-2 text-base text-text-light placeholder:text-text-muted outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-card-bg rounded-xl border border-border-light p-4">
                <h2 className="text-text-light text-lg font-bold mb-4">
                  Shipping
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formData2.map((label, idx) => (
                    <div
                      key={label}
                      className={idx === 0 ? "sm:col-span-2" : ""}
                    >
                      <label className="text-text-light text-sm block mb-1">
                        {label}
                      </label>
                      <input
                        placeholder={label}
                        className="w-full bg-section-bg border border-border-light rounded px-3 py-2 text-base text-text-light placeholder:text-text-muted outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <button className="px-5 py-2 bg-white/10 text-text-light text-sm rounded-lg hover:bg-white/20">
                Cancel
              </button>
              <button className="px-5 py-2 bg-text-blue text-text-light text-sm rounded-lg hover:bg-text-blue/90">
                Save Changes
              </button>
            </div>
          </>
        );

      case "wishlist":
        return (
          <div className="bg-card-bg rounded-xl border border-border-light p-6">
            <h2 className="text-text-light text-lg font-bold mb-4">
              Your Wishlist
            </h2>
            <p className="text-text-muted">
              Your wishlist items will appear here.
            </p>
            <FavoritesTab />
          </div>
        );

      case "orders":
        return <OrdersTab />;

      case "settings":
        return <SettingsTab />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark p-4 md:px-8 pt-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-card-bg rounded-xl border border-border-light p-4 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSsVT5mCATwHHNyRoRW_VGsQhu0Jv02XdQdp3VHpbRrvVvBcSJQaRKPcQGSPhs_K9VgSy1TLVeyhRJSAyQnLRu1z3gxrP4C2un4lzbdnZUrwSf1vNjpsnY0jqv1Y-fSDTM88UkG9wvj1dHqvqGIKG5toBFhQHcA2FXfuC17Q6NbFgHvckrRDJn_oZY_miNV47hOrwts0W_IlD45AGIdkvdnV3oAU_Jd06PiYg-mIstNIbvCEa2cPApmW7EmQmoUhs2MqwDfSP4j30"
              alt="Eleanor Vance"
              className="rounded-xl h-16 w-16 object-cover border border-text-blue/20"
            />

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-text-light text-xl font-bold">
                Eleanor Vance
              </h1>
              <p className="text-text-muted text-sm mt-1">
                eleanor.vance@example.com
              </p>

              <div className="flex gap-2 justify-center sm:justify-start mt-3">
                <button className="px-3 py-1.5 bg-white/10 text-text-light text-sm rounded-lg hover:bg-white/20">
                  <Edit className="inline w-4 h-4 mr-1" />
                  Edit
                </button>
                <button className="px-3 py-1.5 bg-text-blue text-text-light text-sm rounded-lg hover:bg-text-blue/90">
                  <Eye className="inline w-4 h-4 mr-1" />
                  View Public
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-b border-border-light mb-4 overflow-x-auto">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => setSelectedTab(item.key)}
              className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-colors ${
                selectedTab === item.key
                  ? "text-text-light border-b-2 border-text-blue"
                  : "text-text-muted hover:text-text-light"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default UserProfilePage;
