"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Home() {
  const data = [
    {
      name: "page 1",
      percentile5: 91.175,
      percentile95: 132.5666666666667,
      percentile50: 106.16666666666667,
      percentile75: 115.75,
      percentile25: 100.54166666666667,
    },
    {
      name: "page 2",
      percentile5: 86.72500000000001,
      percentile95: 124.68333333333332,
      percentile50: 107.16666666666667,
      percentile75: 114.5,
      percentile25: 102.33333333333333,
    },
    {
      name: "page 3",
      percentile5: 96.60000000000001,
      percentile95: 124.7,
      percentile50: 109.25,
      percentile75: 115.25,
      percentile25: 104.875,
    },
    {
      name: "page 4",
      percentile5: 95.51666666666667,
      percentile95: 124.01666666666665,
      percentile50: 112,
      percentile75: 116.33333333333333,
      percentile25: 106.83333333333333,
    },
    {
      name: "page 5",
      percentile5: 92.26666666666667,
      percentile95: 125.7,
      percentile50: 112.41666666666667,
      percentile75: 116.625,
      percentile25: 107.83333333333333,
    },
    {
      name: "page 6",
      percentile5: 97.90833333333335,
      percentile95: 125.59166666666665,
      percentile50: 110.5,
      percentile75: 118.625,
      percentile25: 107.5,
    },
    {
      name: "page 7",
      percentile5: 98.5,
      percentile95: 126.925,
      percentile50: 109.83333333333333,
      percentile75: 119.625,
      percentile25: 105.66666666666667,
    },
    {
      name: "page 8",
      // percentile5: 98.48333333333333,
      // percentile95: 128.70000000000002,
      // percentile50: 109.41666666666667,
      // percentile75: 119.45833333333333,
      // percentile25: 105.5,
    },
    {
      name: "page 9",
      percentile5: 97.10000000000001,
      percentile95: 130.42499999999998,
      percentile50: 109.5,
      percentile75: 118.08333333333333,
      percentile25: 103.83333333333333,
    },
    {
      name: "page 10",
      percentile5: 94.64999999999999,
      percentile95: 130.75833333333333,
      percentile50: 105.75,
      percentile75: 116.5,
      percentile25: 100.5,
    },
    // {
    //   name: "page 11",
    //   percentile5: 88.575,
    //   percentile95: 132.03333333333333,
    //   percentile50: 102.75,
    //   percentile75: 115.625,
    //   percentile25: 96.70833333333333,
    // },
    // {
    //   name: "page 12",
    //   percentile5: 86.8,
    //   percentile95: 129.64166666666665,
    //   percentile50: 108,
    //   percentile75: 118.83333333333333,
    //   percentile25: 97.83333333333333,
    // },
    // {
    //   name: "page 13",
    //   percentile5: 85.39166666666667,
    //   percentile95: 133.38333333333333,
    //   percentile50: 106.58333333333333,
    //   percentile75: 116.58333333333333,
    //   percentile25: 95.875,
    // },
    // {
    //   name: "page 14",
    //   percentile5: 89.15833333333335,
    //   percentile95: 145.28333333333333,
    //   percentile50: 108.58333333333333,
    //   percentile75: 120.33333333333333,
    //   percentile25: 99.33333333333333,
    // },
    // {
    //   name: "page 15",
    //   percentile5: 95.71666666666665,
    //   percentile95: 162.18333333333334,
    //   percentile50: 121.83333333333333,
    //   percentile75: 130.875,
    //   percentile25: 113.16666666666667,
    // },
    // {
    //   name: "page 16",
    //   percentile5: 99.63333333333334,
    //   percentile95: 160.10833333333332,
    //   percentile50: 122.58333333333333,
    //   percentile75: 132.125,
    //   percentile25: 114.16666666666667,
    // },
    // {
    //   name: "page 17",
    //   percentile5: 87.95,
    //   percentile95: 144.0583333333333,
    //   percentile50: 114.5,
    //   percentile75: 121.41666666666667,
    //   percentile25: 107.70833333333333,
    // },
    // {
    //   name: "page 18",
    //   percentile5: 77.175,
    //   percentile95: 123.0333333333333,
    //   percentile50: 107.16666666666667,
    //   percentile75: 111.625,
    //   percentile25: 99.33333333333333,
    // },
    // {
    //   name: "page 19",
    //   percentile5: 69.39166666666667,
    //   percentile95: 114.24999999999999,
    //   percentile50: 101.66666666666667,
    //   percentile75: 106.95833333333333,
    //   percentile25: 92.04166666666667,
    // },
    // {
    //   name: "page 20",
    //   percentile5: 75.45,
    //   percentile95: 126.76666666666665,
    //   percentile50: 99.83333333333333,
    //   percentile75: 108,
    //   percentile25: 89.375,
    // },
    // {
    //   name: "page 21",
    //   percentile5: 75.675,
    //   percentile95: 185.6,
    //   percentile50: 104.33333333333333,
    //   percentile75: 115.16666666666667,
    //   percentile25: 91.83333333333333,
    // },
    // {
    //   name: "page 22",
    //   percentile5: 80.48333333333333,
    //   percentile95: 192.14999999999998,
    //   percentile50: 114.5,
    //   percentile75: 124,
    //   percentile25: 101.875,
    // },
    // {
    //   name: "page 23",
    //   percentile5: 88.90833333333335,
    //   percentile95: 163.10833333333332,
    //   percentile50: 110.16666666666667,
    //   percentile75: 121.29166666666667,
    //   percentile25: 102.33333333333333,
    // },
    // {
    //   name: "page 24",
    //   percentile5: 95.11666666666667,
    //   percentile95: 148.13333333333333,
    //   percentile50: 106.5,
    //   percentile75: 123.66666666666667,
    //   percentile25: 101,
    // },
    // {
    //   name: "page 25",
    //   percentile5: 91.175,
    //   percentile95: 132.5666666666667,
    //   percentile50: 106.16666666666667,
    //   percentile75: 115.75,
    //   percentile25: 100.54166666666667,
    // },
    // {
    //   name: "page 26",
    //   percentile5: 86.72500000000001,
    //   percentile95: 124.68333333333332,
    //   percentile50: 107.16666666666667,
    //   percentile75: 114.5,
    //   percentile25: 102.33333333333333,
    // },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            stackId="1"
            dataKey="percentile5"
            stroke="#8884d8"
            fill="#ffffff"
          />
          <Area
            type="monotone"
            dataKey="percentile25"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="percentile75"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="percentile95"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <Line
            type="monotone"
            dataKey="percentile50"
            stroke="#000000"
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
