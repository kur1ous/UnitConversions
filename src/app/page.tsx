'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ConversionCard } from '@/components/conversion/ConversionCard';
import { type Category } from '@/lib/conversions';
import { Zap, RefreshCcw } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('weight');

  return (
    <main className="min-h-screen pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Header />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-auto md:sticky md:top-8">
            <Sidebar
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 w-full space-y-8">
            <ConversionCard category={activeCategory} />

            {/* Feature Cards Grid (Footer area) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Instant Calculations</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Get real-time conversions as you type. Our converter uses precise formulas to ensure accuracy across all unit types.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bidirectional Conversion</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Convert in either direction seamlessly. Edit any field and see the results update instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
