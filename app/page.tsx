"use client";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import inputData from "./inputData.json";
export default function Home() {
  interface DataItem {
    time?: number;
    percentile5?: number;
    percentile95?: number;
    percentile50?: number;
    percentile75?: number;
    percentile25?: number;
    percentileMin?: number;
    percentileMax?: number;
  }
  const subtractIfDefined = (
    a: number | undefined,
    b: number | undefined
  ): number | undefined => {
    return a !== undefined && b !== undefined ? a - b : undefined;
  };
  const data: DataItem[] = inputData.agpProfileGraph.values;
  const Newdata: DataItem[] = data.map((item, idx) => ({
    time: (idx * 24) / (data.length - 1),
    percentile5: item.percentile5,
    percentile95: subtractIfDefined(item.percentile95, item.percentile75),
    percentile50: item.percentile50,
    percentile75: subtractIfDefined(item.percentile75, item.percentile25),
    percentile25: subtractIfDefined(item.percentile25, item.percentile5),
    percentileMin: 70,
    percentileMax: 180,
  }));

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <ResponsiveContainer width="90%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={Newdata}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            type="number"
            ticks={[0, 3, 6, 9, 12, 15, 18, 21, 24]}
            tickFormatter={(time) =>
              time === 0 || time === 24
                ? "12am"
                : time === 12
                ? "12pm"
                : time < 12
                ? time + "am"
                : time - 12 + "pm"
            }
            domain={["dataMin", "dataMin"]}
            style={{ fontSize: 12, fontWeight: "bold" }}
          />
          <YAxis unit="mg/dL" style={{ fontSize: 15, fontWeight: "bold" }} />
          <Area
            type="monotone"
            stackId="1"
            dataKey="percentile5"
            stroke="#bfc3c5"
            fill="#ffffff"
          />
          <Area
            type="monotone"
            dataKey="percentile25"
            stackId="1"
            stroke="#e0e5ec"
            fill="#e0e5ec"
          />
          <Area
            type="monotone"
            dataKey="percentile75"
            stackId="1"
            stroke="#a6b6d3"
            fill="#a6b6d3"
          />
          <Area
            type="monotone"
            dataKey="percentile95"
            stackId="1"
            strokeDasharray="6 6"
            stroke="#bfc3c5"
            fill="#e0e5ec"
          />
          <Line
            type="monotone"
            dataKey="percentile50"
            stroke="#2e5481"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            stroke="#65a467"
            dataKey="percentileMax"
            dot={false}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="percentileMin"
            stroke="#65a467"
            dot={false}
            strokeWidth={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <ResponsiveContainer
        width="10%"
        height={400}
        className="flex items-center"
      >
        <div className="flex flex-col justify-center">
          <div className="flex my-1">
            <div className="w-10 h-5 border rounded-md mr-3 percent95-color"></div>
            <div className="text-sm text-center items-center text-gray-500">
              75-95%
            </div>
          </div>
          <div className="flex my-1">
            <div className="w-10 h-5 border rounded-md mr-3 percent75-color"></div>
            <div className="text-sm text-center items-center text-gray-500">
              50-75%
            </div>
          </div>
          <div className="flex items-center  my-1">
            <div className="w-8 h-1 border rounded-md ml-1 mr-3 percent50-color"></div>
            <div className="text-sm ml-3 text-center items-center text-gray-500">
              50%
            </div>
          </div>
          <div className="flex my-1">
            <div className="w-10 h-5 border rounded-md mr-3 percent75-color"></div>
            <div className="text-sm text-center items-center text-gray-500">
              25-50%
            </div>
          </div>

          <div className="flex my-1">
            <div className="w-10 h-5 border rounded-md mr-3 percent25-color"></div>
            <div className="text-sm text-center items-center text-gray-500">
              5-25%
            </div>
          </div>
          <div className="flex items-center  my-5">
            <div className="w-10 h-2 border rounded-md mr-1 target-range-color"></div>
            <div className="text-sm ml-1 text-center items-center text-gray-500">
              Target Range<br></br> 70-180 mg/dL
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
