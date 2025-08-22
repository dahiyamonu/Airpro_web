import React from "react";
import MenuItem from "../components/menu-item";

export default function ProductsPage() {
  return (
    <ul className="space-y-2">
      <li>
        <MenuItem href="/dashboard/Products/DataSheet">Data Sheet</MenuItem>
      </li>
      <li>
        <MenuItem href="/dashboard/Products/E-mailer">E-mailer</MenuItem>
      </li>
      <li>
        <MenuItem href="/dashboard/Products/E-brochure">E-brochure</MenuItem>
      </li>
    </ul>
  );
}
