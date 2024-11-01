import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface PlatformData {
  instagram: typeof data;
  facebook: typeof data;
  twitter: typeof data;
  linkedin: typeof data;
}

const data = [
  { date: 'Jan', posts: 4000, engagement: 2400, reach: 2400 },
  { date: 'Feb', posts: 3000, engagement: 1398, reach: 2210 },
  { date: 'Mar', posts: 2000, engagement: 9800, reach: 2290 },
  { date: 'Apr', posts: 2780, engagement: 3908, reach: 2000 },
  { date: 'May', posts: 1890, engagement: 4800, reach: 2181 },
  { date: 'Jun', posts: 2390, engagement: 3800, reach: 2500 },
  { date: 'Jul', posts: 3490, engagement: 4300, reach: 2100 },
];

const platformData: PlatformData = {
  instagram: data,
  facebook: data.map(d => ({ ...d, posts: d.posts * 0.8, engagement: d.engagement * 0.9, reach: d.reach * 1.2 })),
  twitter: data.map(d => ({ ...d, posts: d.posts * 1.2, engagement: d.engagement * 0.7, reach: d.reach * 0.8 })),
  linkedin: data.map(d => ({ ...d, posts: d.posts * 0.6, engagement: d.engagement * 1.1, reach: d.reach * 0.9 })),
};

interface PlatformStatsProps {
  platform: keyof PlatformData;
}

const colors = {
  instagram: { primary: '#EC4899', secondary: '#F472B6' },
  facebook: { primary: '#3B82F6', secondary: '#60A5FA' },
  twitter: { primary: '#0EA5E9', secondary: '#38BDF8' },
  linkedin: { primary: '#6366F1', secondary: '#818CF8' },
};

export const PlatformStats: React.FC<PlatformStatsProps> = ({ platform }) => {
  const currentData = platformData[platform];
  const currentColors = colors[platform];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Engagement Overview</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke={currentColors.primary}
                fill={currentColors.primary}
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Posts vs Reach</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill={currentColors.primary} />
              <Bar dataKey="reach" fill={currentColors.secondary} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};