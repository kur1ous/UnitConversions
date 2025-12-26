export type Category = 'length' | 'weight' | 'temperature' | 'volume' | 'area' | 'speed' | 'time' | 'energy' | 'pressure' | 'power' | 'data' | 'angle' | 'typography';

export interface Unit {
    id: string;
    name: string;
    factor: number; // Factor to convert TO base unit
    offset?: number; // For temperature
    type?: 'standard' | 'niche'; // Just for potential UI differentiation
}

export const CATEGORIES: { id: Category; name: string; icon: string }[] = [
    { id: 'length', name: 'Length', icon: 'Ruler' },
    { id: 'weight', name: 'Weight', icon: 'Scale' },
    { id: 'temperature', name: 'Temperature', icon: 'Thermometer' },
    { id: 'volume', name: 'Volume', icon: 'Beaker' },
    { id: 'area', name: 'Area', icon: 'Square' },
    { id: 'speed', name: 'Speed', icon: 'Zap' },
    { id: 'time', name: 'Time', icon: 'Clock' },
    { id: 'energy', name: 'Energy', icon: 'Battery' },
    { id: 'pressure', name: 'Pressure', icon: 'Gauge' },
    { id: 'power', name: 'Power', icon: 'Plug' },
    { id: 'data', name: 'Data', icon: 'Database' },
    { id: 'angle', name: 'Angle', icon: 'MoveDiagonal' }, // Using MoveDiagonal as proxy for angle/compass
    { id: 'typography', name: 'Typography', icon: 'Type' },
];

const UNITS: Record<Category, Unit[]> = {
    length: [
        { id: 'm', name: 'Meters', factor: 1 },
        { id: 'km', name: 'Kilometers', factor: 1000 },
        { id: 'cm', name: 'Centimeters', factor: 0.01 },
        { id: 'mm', name: 'Millimeters', factor: 0.001 },
        { id: 'mi', name: 'Miles', factor: 1609.34 },
        { id: 'ft', name: 'Feet', factor: 0.3048 },
        { id: 'in', name: 'Inches', factor: 0.0254 },
        { id: 'nmi', name: 'Nautical Miles', factor: 1852 },
        { id: 'ly', name: 'Light-years', factor: 9.4607e15 },
        { id: 'au', name: 'Astronomical Units', factor: 1.496e11 },
        { id: 'parsec', name: 'Parsecs', factor: 3.086e16 },
        // Niche
        { id: 'smoot', name: 'Smoots', factor: 1.7018, type: 'niche' },
        { id: 'beard-second', name: 'Beard-seconds', factor: 5e-9, type: 'niche' },
        { id: 'potrzebie', name: 'Potrzebies', factor: 0.00226335, type: 'niche' },
        { id: 'sheppey', name: 'Sheppeys', factor: 1408.17, type: 'niche' }, // ~7/8 mile
        { id: 'altuve', name: 'Altuves', factor: 1.6764, type: 'niche' },
        { id: 'hubble', name: 'Hubble Lengths', factor: 1.44e26, type: 'niche' },
    ],
    weight: [
        { id: 'g', name: 'Grams', factor: 1 },
        { id: 'kg', name: 'Kilograms', factor: 1000 },
        { id: 'mg', name: 'Milligrams', factor: 0.001 },
        { id: 'lb', name: 'Pounds', factor: 453.592 },
        { id: 'oz', name: 'Ounces', factor: 28.3495 },
        { id: 'stone', name: 'Stones', factor: 6350.29 },
        { id: 'tonne', name: 'Tonnes', factor: 1000000 },
        { id: 'carat', name: 'Carats', factor: 0.2 },
        // Niche
        { id: 'slug', name: 'Slugs', factor: 14593.9, type: 'niche' },
        { id: 'dalton', name: 'Daltons', factor: 1.6605e-24, type: 'niche' },
        { id: 'solar-mass', name: 'Solar Masses', factor: 1.989e33, type: 'niche' },
        { id: 'grain', name: 'Grains', factor: 0.0647989, type: 'niche' },
    ],
    temperature: [
        { id: 'c', name: 'Celsius', factor: 1, offset: 0 },
        { id: 'f', name: 'Fahrenheit', factor: 0.5555555556, offset: -32 },
        { id: 'k', name: 'Kelvin', factor: 1, offset: -273.15 },
        { id: 'r', name: 'Rankine', factor: 0.5555555556, offset: -491.67 },
    ],
    volume: [
        { id: 'l', name: 'Liters', factor: 1 },
        { id: 'ml', name: 'Milliliters', factor: 0.001 },
        { id: 'gal', name: 'Gallons (US)', factor: 3.78541 },
        { id: 'qt', name: 'Quarts', factor: 0.946353 },
        { id: 'pt', name: 'Pints', factor: 0.473176 },
        { id: 'cup', name: 'Cups', factor: 0.236588 },
        { id: 'floz', name: 'Fluid Ounces', factor: 0.0295735 },
        { id: 'm3', name: 'Cubic Meters', factor: 1000 },
        // Niche
        { id: 'olympic-pool', name: 'Olympic Swimming Pools', factor: 2500000, type: 'niche' },
        { id: 'firkin', name: 'Firkins', factor: 40.9148, type: 'niche' },
        { id: 'hogshead', name: 'Hogsheads', factor: 238.481, type: 'niche' },
        { id: 'butt', name: 'Butts/Pipes', factor: 476.962, type: 'niche' },
        // Culinary
        { id: 'pinch', name: 'Pinches', factor: 0.00031, type: 'niche' },
        { id: 'dash', name: 'Dashes', factor: 0.00062, type: 'niche' },
        { id: 'smidgen', name: 'Smidgens', factor: 0.00015, type: 'niche' },
        { id: 'jigger', name: 'Jiggers', factor: 0.04436, type: 'niche' },
        { id: 'gill', name: 'Gills', factor: 0.118294, type: 'niche' },
    ],
    area: [
        { id: 'm2', name: 'Square Meters', factor: 1 },
        { id: 'ft2', name: 'Square Feet', factor: 0.092903 },
        { id: 'acre', name: 'Acres', factor: 4046.86 },
        { id: 'ha', name: 'Hectares', factor: 10000 },
        { id: 'mi2', name: 'Square Miles', factor: 2.59e6 },
    ],
    speed: [
        { id: 'mps', name: 'Meters/Second', factor: 1 },
        { id: 'kph', name: 'Kilometers/Hour', factor: 0.277778 },
        { id: 'mph', name: 'Miles/Hour', factor: 0.44704 },
        { id: 'kn', name: 'Knots', factor: 0.514444 },
        { id: 'c', name: 'Speed of Light', factor: 299792458 },
    ],
    time: [
        { id: 's', name: 'Seconds', factor: 1 },
        { id: 'min', name: 'Minutes', factor: 60 },
        { id: 'h', name: 'Hours', factor: 3600 },
        { id: 'd', name: 'Days', factor: 86400 },
        { id: 'wk', name: 'Weeks', factor: 604800 },
        { id: 'yr', name: 'Years', factor: 31536000 }, // Approx
        // Niche
        { id: 'microcentury', name: 'Microcenturies', factor: 3155.76, type: 'niche' },
        { id: 'fortnight', name: 'Fortnights', factor: 1209600, type: 'niche' },
        { id: 'jiffy', name: 'Jiffies', factor: 0.0166667, type: 'niche' }, // 1/60th
        { id: 'svedberg', name: 'Svedbergs', factor: 1e-13, type: 'niche' },
    ],
    energy: [
        { id: 'j', name: 'Joules', factor: 1 },
        { id: 'kj', name: 'Kilojoules', factor: 1000 },
        { id: 'cal', name: 'Calories', factor: 4.184 },
        { id: 'kcal', name: 'Kilocalories', factor: 4184 },
        { id: 'kwh', name: 'Kilowatt-hours', factor: 3600000 },
        { id: 'btu', name: 'BTU', factor: 1055.06 },
        { id: 'ev', name: 'Electronvolts', factor: 1.6022e-19 },
    ],
    pressure: [
        { id: 'pa', name: 'Pascals', factor: 1 },
        { id: 'bar', name: 'Bar', factor: 100000 },
        { id: 'psi', name: 'PSI', factor: 6894.76 },
        { id: 'atm', name: 'Atmospheres', factor: 101325 },
        { id: 'torr', name: 'Torr', factor: 133.322 },
    ],
    power: [
        { id: 'w', name: 'Watts', factor: 1 },
        { id: 'kw', name: 'Kilowatts', factor: 1000 },
        { id: 'hp', name: 'Horsepower', factor: 745.7 },
    ],
    data: [
        { id: 'b', name: 'Bytes', factor: 1 },
        { id: 'kb', name: 'Kilobytes', factor: 1000 }, // Decimal (SI)
        { id: 'mb', name: 'Megabytes', factor: 1e6 },
        { id: 'gb', name: 'Gigabytes', factor: 1e9 },
        { id: 'tb', name: 'Terabytes', factor: 1e12 },
        { id: 'bit', name: 'Bits', factor: 0.125 },
        // Niche
        { id: 'nibble', name: 'Nibbles', factor: 0.5, type: 'niche' },
    ],
    angle: [
        { id: 'deg', name: 'Degrees', factor: 1 },
        { id: 'rad', name: 'Radians', factor: 57.2958 },
        { id: 'grad', name: 'Gradians', factor: 0.9 },
        { id: 'turn', name: 'Turns', factor: 360 },
        { id: 'arcmin', name: 'Arcminutes', factor: 0.0166667 },
    ],
    typography: [
        { id: 'pt', name: 'Points', factor: 0.352778 }, // Base is mm? No, if we want to share length we'd need to unify. But categories are separate. Let's make base unit "Point" or "MM".
        // Wait, typography usually isolated. Let's say base is MM for consistency if we wanted, or just Point.
        // Let's make base unit Millimeters for typography to relate? Or just Points.
        // Let's use Points as base since it's cleaner for this category.
        // Actually, users might want to convert points to mm.
        // But categories are siloed.
        // Let's stick to base = Point (PostScript point = 1/72 inch).
        { id: 'point', name: 'Points', factor: 1 },
        { id: 'pica', name: 'Picas', factor: 12 },
        { id: 'in', name: 'Inches', factor: 72 },
        { id: 'mm', name: 'Millimeters', factor: 2.83465 },
    ]
};

export function getUnits(category: Category) {
    return UNITS[category] || [];
}

export function convert(value: number, fromId: string, toId: string, category: Category): number {
    const units = UNITS[category];
    const fromUnit = units.find(u => u.id === fromId);
    const toUnit = units.find(u => u.id === toId);

    if (!fromUnit || !toUnit) return 0;

    // Temperature needs special handling for offsets
    if (category === 'temperature') {
        // Convert to Celsius (base)
        let celsius = value;
        if (fromId === 'f') celsius = (value - 32) * (5 / 9);
        else if (fromId === 'k') celsius = value - 273.15;
        else if (fromId === 'r') celsius = (value - 491.67) * (5 / 9);

        // Convert from Celsius to target
        if (toId === 'c') return celsius;
        if (toId === 'f') return (celsius * 9 / 5) + 32;
        if (toId === 'k') return celsius + 273.15;
        if (toId === 'r') return (celsius + 273.15) * 1.8;
        return celsius;
    }

    // Linear conversion
    const baseValue = value * fromUnit.factor;
    return baseValue / toUnit.factor;
}
