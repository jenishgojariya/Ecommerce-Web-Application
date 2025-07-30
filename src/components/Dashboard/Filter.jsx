import { ArrowDownAZ, ArrowDownZA, Funnel } from "lucide-react";
import React from "react";

const Filter = ({ filterOption: fo, setFilterOption }) => {
  const Icon = fo === "" ? Funnel : fo === "h2l" ? ArrowDownZA : ArrowDownAZ;
  return (
    <div className="my-4 flex gap-1">
      <Icon />
      <select
        name="filter"
        id="filter"
        className="border-none focus:outline-none"
        value={fo}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option value="" disabled>
          Sort by Price
        </option>
        <option value="h2l">High to Low</option>
        <option value="l2h">Low to high</option>
      </select>
    </div>
  );
};

export default Filter;
