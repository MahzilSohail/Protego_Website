"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockWarning, setStockWarning] = useState(true);

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-semibold">Settings</h1>

      {/* General Settings */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">General</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">Store Name</label>
            <Input placeholder="Protego Store" className="mt-2" />
          </div>

          <div>
            <label className="text-sm font-medium">Admin Email</label>
            <Input placeholder="admin@protego.com" className="mt-2" />
          </div>
        </div>

        <Button className="mt-4">Save Changes</Button>
      </div>

      {/* Appearance Settings */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Appearance</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-gray-600">Enable dark theme for admin panel.</p>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>

        <Button className="mt-4">Save</Button>
      </div>

      {/* Notifications Settings */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Notifications</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Low Stock Alerts</p>
            <p className="text-sm text-gray-600">Notify when a product goes below minimum stock.</p>
          </div>
          <Switch checked={stockWarning} onCheckedChange={setStockWarning} />
        </div>

        <div>
          <label className="text-sm font-medium">Stock Alert Threshold</label>
          <Input placeholder="5" className="mt-2 w-32" />
        </div>

        <Button className="mt-4">Save</Button>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Security</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">Old Password</label>
            <Input type="password" placeholder="********" className="mt-2" />
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <Input type="password" placeholder="********" className="mt-2" />
          </div>
        </div>

        <Button className="mt-4 bg-red-600 hover:bg-red-700">Update Password</Button>
      </div>

    </div>
  );
}
