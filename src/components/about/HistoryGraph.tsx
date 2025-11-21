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
  { year: 2016, rugs: 50, milestone: "Company founded in Lalitpur" },
  { year: 2018, rugs: 300, milestone: "Expanded artisan team & local recognition" },
  { year: 2020, rugs: 700, milestone: "Collaborations with international designers" },
  { year: 2023, rugs: 1200, milestone: "Global exports to USA, Europe & Australia" },
  { year: 2025, rugs: 1800, milestone: "Sustainability & handmade excellence spotlight" },
];

const HistoryGraph: React.FC = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl p-6 mt-10 mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          MND Nepal Growth Timeline
        </h3>
        <ResponsiveContainer width="100%" height={580}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              formatter={(value, name, props) => [
                `${value} rugs`,
                props.payload.milestone,
              ]}
            />
            <Line
              type="monotone"
              dataKey="rugs"
              stroke="#14b8a6"
              strokeWidth={3}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
        MND Nepal employs over 150 skilled artisans and staff, many of whom have spent decades
        mastering their craft. Their dedication transforms every rug into a living piece of Nepal’s
        cultural legacy.
      </p> */}
    </>
  );
};

export default HistoryGraph;
