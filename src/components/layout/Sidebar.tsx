'use client';

import { Ruler, Scale, Thermometer, Beaker, Square, Zap, Clock, Battery, Gauge, Plug, Database, MoveDiagonal, Type } from 'lucide-react';
import { CATEGORIES, type Category } from '@/lib/conversions';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ICON_MAP = {
    length: Ruler,
    weight: Scale,
    temperature: Thermometer,
    volume: Beaker,
    area: Square,
    speed: Zap,
    time: Clock,
    energy: Battery,
    pressure: Gauge,
    power: Plug,
    data: Database,
    angle: MoveDiagonal,
    typography: Type,
};

interface SidebarProps {
    activeCategory: Category;
    onSelectCategory: (category: Category) => void;
    className?: string;
}

export function Sidebar({ activeCategory, onSelectCategory, className }: SidebarProps) {
    return (
        <div className={cn("bg-white rounded-2xl shadow-lg p-4 w-full md:w-64 h-fit", className)}>
            <h2 className="text-gray-500 text-sm font-bold uppercase mb-4 px-4">Categories</h2>
            <div className="space-y-2">
                {CATEGORIES.map((cat) => {
                    const Icon = ICON_MAP[cat.id as Category];
                    const isActive = activeCategory === cat.id;

                    if (!Icon) return null; // Safety check

                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelectCategory(cat.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-medium",
                                isActive
                                    ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md shadow-orange-100"
                                    : "text-gray-600 hover:bg-gray-50"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-400")} />
                            {cat.name}
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-orange-500 rounded-xl -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
