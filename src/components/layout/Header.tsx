export function Header() {
    return (
        <div className="text-center py-12 md:py-16 px-4">
            <div className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 relative">
                <span className="relative z-10">• Fast & Accurate Conversions</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                Convert Units <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Instantly</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed">
                Lightning-fast unit conversions for ALL UNITS. Get precise calculations in real-time.
            </p>
        </div>
    );
}
