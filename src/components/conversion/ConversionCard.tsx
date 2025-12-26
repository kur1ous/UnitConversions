'use client';

import { useState, useEffect } from 'react';
import { type Category, getUnits, convert } from '@/lib/conversions';
import { ArrowRightLeft, Copy, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConversionCardProps {
    category: Category;
}

export function ConversionCard({ category }: ConversionCardProps) {
    const units = getUnits(category);
    const [amount, setAmount] = useState<string>('');
    const [fromUnit, setFromUnit] = useState(units[0].id);
    const [toUnit, setToUnit] = useState(units[1]?.id || units[0].id);
    const [result, setResult] = useState<string>('');

    // Update units when category changes
    useEffect(() => {
        const newUnits = getUnits(category);
        setFromUnit(newUnits[0].id);
        setToUnit(newUnits[1]?.id || newUnits[0].id);
        setAmount('');
        setResult('');
    }, [category]);

    // Calculate conversion
    useEffect(() => {
        const val = parseFloat(amount);
        if (!isNaN(val)) {
            const res = convert(val, fromUnit, toUnit, category);
            // Format number nicely
            setResult(res.toLocaleString(undefined, { maximumFractionDigits: 6 }));
        } else {
            setResult('');
        }
    }, [amount, fromUnit, toUnit, category]);

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
        // Helper to swap input/result values too? 
        // Usually input is master, so we might set input to result's numeric value.
        // But for "Instant" it might be confusing. Let's just swap units.
    };

    const handleCopy = () => {
        if (result) navigator.clipboard.writeText(result);
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full max-w-3xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 p-3 rounded-2xl">
                    {/* Dynamic icon could go here, or just category name */}
                    <span className="text-2xl">⚖️</span>
                </div>
                <div>
                    <h2 className="text-2xl font-bold capitalize text-gray-800">{category} Converter</h2>
                    <p className="text-gray-500">Convert among different {category} units</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* From Section */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-600 ml-1">From</label>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter value"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="md:w-48 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none"
                        // Note: Use a custom chevron wrapper if needed, for now standard select
                        >
                            {units.map(u => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-2 relative z-10">
                    <button
                        onClick={handleSwap}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-blue-200 transition-all hover:scale-110 active:scale-95"
                    >
                        <ArrowRightLeft className="w-5 h-5" />
                    </button>
                </div>

                {/* To Section */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-600 ml-1">To</label>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            value={result}
                            readOnly
                            placeholder="Result"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg text-gray-800 font-medium focus:outline-none"
                        />
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className="md:w-48 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        >
                            {units.map(u => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end gap-2">
                <button onClick={() => setAmount('')} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <RotateCcw className="w-4 h-4" /> Reset
                </button>
            </div>
        </div>
    );
}
