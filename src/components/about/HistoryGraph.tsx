// src/components/about/HistoryGraph.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 1990, rugs: 50, milestone: "Company founded" },
  { year: 2000, rugs: 300, milestone: "Expanded to international markets" },
  { year: 2010, rugs: 800, milestone: "Collaboration with global designers" },
  { year: 2020, rugs: 1500, milestone: "Featured in 5-star hotels" },
  { year: 2025, rugs: 2000, milestone: "Sustainable materials expansion" },
];

const HistoryGraph: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-10">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Company Growth Timeline
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value, name, props) => [`${value} rugs`, props.payload.milestone]} />
          <Line type="monotone" dataKey="rugs" stroke="#14b8a6" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoryGraph;
