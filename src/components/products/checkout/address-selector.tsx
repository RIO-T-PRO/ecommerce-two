"use client";

import { useState } from "react";

export interface Address {
  id: string;
  fullName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

interface AddressSelectorProps {
  addresses: Address[];
  selectedAddress: string;
  setSelectedAddress: (id: string) => void;
  setAddresses: (addresses: Address[]) => void;
}

const AddressSelector = ({
  addresses,
  selectedAddress,
  setSelectedAddress,
  setAddresses,
}: AddressSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [form, setForm] = useState<Address>({
    id: "",
    fullName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleOpenModal = (address?: Address) => {
    if (address) {
      setEditingAddress(address);
      setForm(address);
    } else {
      setEditingAddress(null);
      setForm({
        id: "",
        fullName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses(
        addresses.map((addr) => (addr.id === editingAddress.id ? form : addr))
      );
    } else {
      const newAddress = { ...form, id: Date.now().toString() };
      setAddresses([...addresses, newAddress]);
      setSelectedAddress(newAddress.id);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bg-card-bg p-6 rounded-xl flex flex-col gap-4">
      <h2 className="text-text-light font-bold text-lg border-b border-border-light pb-2">
        Shipping Address
      </h2>

      <div className="flex flex-col gap-3 mt-2">
        {addresses.map((address) => (
          <label
            key={address.id}
            className={`p-4 rounded-lg border ${
              selectedAddress === address.id
                ? "border-text-primary bg-background"
                : "border-border-light"
            } flex flex-col cursor-pointer`}
          >
            <input
              type="radio"
              name="address"
              value={address.id}
              checked={selectedAddress === address.id}
              onChange={() => setSelectedAddress(address.id)}
              className="hidden"
            />
            <span className="text-text-light font-medium">
              {address.fullName}
            </span>
            <span className="text-text-muted text-sm">
              {address.street}, {address.city}, {address.state} {address.zip}
            </span>
            <span className="text-text-muted text-sm">{address.phone}</span>
            <button
              type="button"
              onClick={() => handleOpenModal(address)}
              className="mt-1 text-sm text-text-primary underline cursor-pointer"
            >
              Edit
            </button>
          </label>
        ))}
        <button
          onClick={() => handleOpenModal()}
          className="cursor-pointer mt-2 w-full h-10 bg-text-primary text-text-light font-bold rounded-lg hover:bg-text-primary/80 transition-colors"
        >
          Add New Address
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-background-dark flex items-center justify-center z-50">
          <div className="bg-card-bg p-6 rounded-xl w-full max-w-md">
            <h2 className="text-text-light text-lg font-bold mb-4">
              {editingAddress ? "Edit Address" : "Add Address"}
            </h2>
            <div className="flex flex-col gap-3">
              {["fullName", "street", "city", "state", "zip", "phone"].map(
                (field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={(form as any)[field]}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-border-light bg-background text-text-light outline-none"
                  />
                )
              )}
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-border-light text-text-light hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAddress}
                  className="cursor-pointer px-4 py-2 rounded-lg bg-text-primary text-text-light font-bold hover:bg-text-primary/80 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressSelector;
