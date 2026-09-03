"use client";

import { useMemo, useState } from "react";

const DEFAULTS = {
  years: 2,
  tuition: 7500,
  rent: 850,
  blocked: 11904,
  flights: 900,
  visa: 75,
};

export function CostCalculator() {
  const [years, setYears] = useState(DEFAULTS.years);
  const [rent, setRent] = useState(DEFAULTS.rent);

  const result = useMemo(() => {
    const onlineTuition = DEFAULTS.tuition * years;
    const relocateTuition = DEFAULTS.tuition * years;
    const housing = rent * 12 * years;
    const blocked = DEFAULTS.blocked * years;
    const extras = DEFAULTS.flights * years + DEFAULTS.visa;
    const relocateTotal = relocateTuition + housing + extras;
    const onlineTotal = onlineTuition;
    return { onlineTuition, relocateTuition, housing, blocked, extras, relocateTotal, onlineTotal, save: relocateTotal - onlineTotal };
  }, [years, rent]);

  return (
    <div className="rounded-[15px] bg-paper p-6 md:p-8">
      <h3 className="font-blinker text-2xl font-semibold text-navy">India cost comparison</h3>
      <p className="mt-2 text-sm text-gray-600">
        Illustrative only. Tuition matches published German UDS fees. Relocation figures are typical
        student-living estimates, not an official quote.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-gray-600">
          Programme length
          <select
            className="mt-1 w-full rounded-md border-0 bg-white px-3 py-2 text-navy ring-1 ring-navy/10"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          >
            <option value={1}>1-year MBA</option>
            <option value={2}>2-year Master&apos;s</option>
          </select>
        </label>
        <label className="text-sm text-gray-600">
          Estimated monthly rent in Germany (€)
          <input
            type="range"
            min={500}
            max={1400}
            step={50}
            value={rent}
            onChange={(e) => setRent(Number(e.target.value))}
            className="mt-3 w-full accent-[#fd9800]"
          />
          <span className="font-semibold text-navy">€{rent} / month</span>
        </label>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#f18800]">Study from India</p>
          <p className="mt-1 font-blinker text-3xl font-semibold text-navy">€{result.onlineTotal.toLocaleString("en-IN")}</p>
          <p className="mt-2 text-sm text-gray-600">Tuition only. Live at home. No blocked account, visa or German rent.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">If you relocated</p>
          <p className="mt-1 font-blinker text-3xl font-semibold text-navy">€{result.relocateTotal.toLocaleString("en-IN")}</p>
          <p className="mt-2 text-sm text-gray-600">
            Tuition + rent (€{result.housing.toLocaleString("en-IN")}) + flights/visa (€{result.extras.toLocaleString("en-IN")}).
            Blocked-account proof of funds would add about €{result.blocked.toLocaleString("en-IN")} on top.
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold text-navy">
        Illustrative housing and travel saving: about €{result.save.toLocaleString("en-IN")} over {years} year{years > 1 ? "s" : ""}.
      </p>
    </div>
  );
}
