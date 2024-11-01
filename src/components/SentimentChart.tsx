import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', positive: 4000, negative: 2400, neutral: 2400 },
  { date: 'Feb', positive: 3000, negative: 1398, neutral: 2210 },
  { date: 'Mar', positive: 2000, negative: 9800, neutral: 2290 },
  { date: 'Apr', positive: 2780, negative: 3908, neutral: 2000 },
  { date: 'May', positive: 1890, negative: 4800, neutral: 2181 },
  { date: 'Jun', positive: 2390, negative: 3800, neutral: 2500 },
  { date: 'Jul', positive: 3490, negative: 4300, neutral: 2100 },
];

export const SentimentChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="positive"
            stackId="1"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="negative"
            stackId="1"
            stroke="#EF4444"
            fill="#EF4444"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="neutral"
            stackId="1"
            stroke="#6B7280"
            fill="#6B7280"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};