import React from "react";
import MenuItem from "../components/menu-item";

export default function PackagePage() {
  return (
    <ul className="space-y-2">
      <li>
        <MenuItem href="/dashboard/Packages/Platinum">Platinum</MenuItem>
      </li>
      <li>
        <MenuItem href="/dashboard/Packages/Gold">Gold</MenuItem>
      </li>
      <li>
        <MenuItem href="/dashboard/Packages/Silver">Silver</MenuItem>
      </li>
    </ul>
  );
}
