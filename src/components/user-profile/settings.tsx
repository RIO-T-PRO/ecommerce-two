"use client";

import {
  Bell,
  CreditCard,
  Globe,
  Shield,
  Lock,
  Smartphone,
  EyeOff,
  Moon,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const SettingsTab = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    marketing: false,
    orderUpdates: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    searchVisibility: true,
    dataSharing: false,
  });

  const toggleNotification = (key: keyof typeof notificationSettings) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const togglePrivacy = (key: keyof typeof privacySettings) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-card-bg rounded-xl border border-border-light p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Bell className="w-5 h-5 text-text-blue" />
          </div>
          <div>
            <h3 className="text-text-light font-semibold">Notifications</h3>
            <p className="text-text-muted text-sm">
              Manage your notification preferences
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              key: "email",
              label: "Email Notifications",
              desc: "Receive updates via email",
            },
            {
              key: "push",
              label: "Push Notifications",
              desc: "Get push notifications on your device",
            },
            {
              key: "marketing",
              label: "Marketing Emails",
              desc: "Receive promotional offers and updates",
            },
            {
              key: "orderUpdates",
              label: "Order Updates",
              desc: "Get notified about order status changes",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between py-3 border-b border-border-light/50 last:border-0"
            >
              <div>
                <p className="text-text-light text-sm font-medium">
                  {item.label}
                </p>
                <p className="text-text-muted text-xs mt-1">{item.desc}</p>
              </div>
              <button
                onClick={() =>
                  toggleNotification(
                    item.key as keyof typeof notificationSettings
                  )
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notificationSettings[
                    item.key as keyof typeof notificationSettings
                  ]
                    ? "bg-text-blue"
                    : "bg-section-bg"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationSettings[
                      item.key as keyof typeof notificationSettings
                    ]
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card-bg rounded-xl border border-border-light p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-text-light font-semibold">Security</h3>
            <p className="text-text-muted text-sm">Protect your account</p>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 bg-section-bg/50 rounded-lg hover:bg-section-bg transition-colors">
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-text-muted" />
              <span className="text-text-light text-sm">Change Password</span>
            </div>
            <span className="text-text-muted text-sm">••••••••</span>
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-section-bg/50 rounded-lg hover:bg-section-bg transition-colors">
            <div className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-text-muted" />
              <span className="text-text-light text-sm">
                Two-Factor Authentication
              </span>
            </div>
            <span className="text-text-muted text-sm">Disabled</span>
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-section-bg/50 rounded-lg hover:bg-section-bg transition-colors">
            <div className="flex items-center gap-3">
              <EyeOff className="w-4 h-4 text-text-muted" />
              <span className="text-text-light text-sm">Login History</span>
            </div>
            <span className="text-text-muted text-sm">View all</span>
          </button>
        </div>
      </div>

      <div className="bg-card-bg rounded-xl border border-border-light p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <Globe className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-text-light font-semibold">Privacy</h3>
            <p className="text-text-muted text-sm">
              Control your data and visibility
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-text-light text-sm">
              Profile Visibility
            </label>
            <select className="w-full bg-section-bg border border-border-light rounded-lg px-3 py-2 text-text-light text-sm outline-none">
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border-light/50">
            <div>
              <p className="text-text-light text-sm">
                Search Engine Visibility
              </p>
              <p className="text-text-muted text-xs mt-1">
                Allow search engines to index your profile
              </p>
            </div>
            <button
              onClick={() => togglePrivacy("searchVisibility")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacySettings.searchVisibility
                  ? "bg-text-blue"
                  : "bg-section-bg"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  privacySettings.searchVisibility
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-text-light text-sm">Data Sharing</p>
              <p className="text-text-muted text-xs mt-1">
                Share anonymized data for improvement
              </p>
            </div>
            <button
              onClick={() => togglePrivacy("dataSharing")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacySettings.dataSharing ? "bg-text-blue" : "bg-section-bg"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  privacySettings.dataSharing
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card-bg rounded-xl border border-border-light p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-amber-500/10 rounded-lg">
            <Moon className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-text-light font-semibold">Preferences</h3>
            <p className="text-text-muted text-sm">Customize your experience</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-section-bg/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-text-muted" />
              <span className="text-text-light text-sm">Language</span>
            </div>
            <span className="text-text-muted text-sm">English</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-section-bg/50 rounded-lg">
            <div className="flex items-center gap-3">
              <CreditCard className="w-4 h-4 text-text-muted" />
              <span className="text-text-light text-sm">Currency</span>
            </div>
            <span className="text-text-muted text-sm">USD ($)</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-section-bg/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Moon className="w-4 h-4 text-text-muted" />
              <span className="text-text-light text-sm">Theme</span>
            </div>
            <select className="bg-transparent text-text-light text-sm outline-none">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-card-bg rounded-xl border border-red-500/30 p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-red-500/10 rounded-lg">
            <Trash2 className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-text-light font-semibold">Danger Zone</h3>
            <p className="text-text-muted text-sm">Irreversible actions</p>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full p-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm">
            Delete Account
          </button>
          <button className="w-full p-3 bg-section-bg text-text-muted rounded-lg hover:bg-section-bg/80 transition-colors text-sm">
            Request Data Export
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-3 bg-text-blue text-text-light rounded-lg hover:bg-text-blue/90 transition-colors font-medium">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsTab;
