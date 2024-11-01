import React, { useState } from 'react';
import {
  BarChart3,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Users,
  MessageCircle,
  TrendingUp,
  Search,
} from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { SentimentChart } from './components/SentimentChart';
import { DemographicChart } from './components/DemographicChart';
import { PlatformTabs } from './components/PlatformTabs';
import { PlatformStats } from './components/PlatformStats';

function App() {
  const [hashtag, setHashtag] = useState('tech');
  const [activeTab, setActiveTab] = useState('instagram');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
              <h1 className="text-xl font-semibold text-gray-900">Social Sentiment Dashboard</h1>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter hashtag..."
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Mentions"
            value="24,532"
            icon={<MessageCircle className="h-5 w-5" />}
            trend={12}
          />
          <DashboardCard
            title="Sentiment Score"
            value="7.8"
            icon={<TrendingUp className="h-5 w-5" />}
            trend={5}
          />
          <DashboardCard
            title="Active Users"
            value="12,345"
            icon={<Users className="h-5 w-5" />}
            trend={-2}
          />
          <DashboardCard
            title="Engagement Rate"
            value="5.2%"
            icon={<BarChart3 className="h-5 w-5" />}
            trend={8}
          />
        </div>

        {/* Overall Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Overall Sentiment Trends</h2>
            <SentimentChart />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Demographics</h2>
            <DemographicChart />
          </div>
        </div>

        {/* Platform-specific Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Platform Analytics</h2>
          <PlatformTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="mt-6">
            <PlatformStats platform={activeTab as any} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;