/**
 * Unit Registry
 * Contains definitions for all supported units including standard and niche categories.
 * 
 * Structure:
 * {
 *   id: string (unique identifier),
 *   name: string (display name),
 *   symbol: string (abbrev),
 *   category: string,
 *   type: "standard" | "niche",
 *   toBase: (val) => val * factor, // function to convert TO the base unit of the category
 *   fromBase: (val) => val / factor, // function to convert FROM the base unit of the category
 *   description: string (optional)
 * }
 */

// Base units:
// Length: meter
// Weight: kilogram
// Temperature: Celsius
// Volume: liter
// Area: square meter
// Speed: meter per second (m/s)
// Time: second
// Energy: joule
// Power: watt
// Pressure: pascal
// Data: byte

const units = [
  // --- LENGTH (Base: meter) ---
  {
    id: "meter",
    name: "Meter",
    symbol: "m",
    category: "length",
    type: "standard",
    toBase: v => v,
    fromBase: v => v
  },
  {
    id: "kilometer",
    name: "Kilometer",
    symbol: "km",
    category: "length",
    type: "standard",
    toBase: v => v * 1000,
    fromBase: v => v / 1000
  },
  {
    id: "mile",
    name: "Mile",
    symbol: "mi",
    category: "length",
    type: "standard",
    toBase: v => v * 1609.344,
    fromBase: v => v / 1609.344
  },
  {
    id: "foot",
    name: "Foot",
    symbol: "ft",
    category: "length",
    type: "standard",
    toBase: v => v * 0.3048,
    fromBase: v => v / 0.3048
  },
  {
    id: "inch",
    name: "Inch",
    symbol: "in",
    category: "length",
    type: "standard",
    toBase: v => v * 0.0254,
    fromBase: v => v / 0.0254
  },
  // Niche Length
  {
    id: "smoot",
    name: "Smoot",
    symbol: "sm",
    category: "length",
    type: "niche",
    toBase: v => v * 1.7018,
    fromBase: v => v / 1.7018,
    description: "Based on Oliver R. Smoot's height during his fraternity pledge."
  },
  {
    id: "beard_second",
    name: "Beard-second",
    symbol: "beard-sec",
    category: "length",
    type: "niche",
    toBase: v => v * 5e-9,
    fromBase: v => v / 5e-9,
    description: "The length a beard grows in one second (~5nm)."
  },
  {
    id: "potrzebie",
    name: "Potrzebie",
    symbol: "potrzebie",
    category: "length",
    type: "niche",
    toBase: v => v * 0.0022633485,
    fromBase: v => v / 0.0022633485,
    description: "From MAD Magazine, thickness of issue 26."
  },
  {
    id: "sheppey",
    name: "Sheppey",
    symbol: "sheppey",
    category: "length",
    type: "niche",
    toBase: v => v * 1408.18, // 7/8 miles roughly
    fromBase: v => v / 1408.18,
    description: "Closest distance at which sheep remain picturesque."
  },

  // --- WEIGHT/MASS (Base: kilogram) ---
  {
    id: "kilogram",
    name: "Kilogram",
    symbol: "kg",
    category: "mass",
    type: "standard",
    toBase: v => v,
    fromBase: v => v
  },
  {
    id: "pound",
    name: "Pound",
    symbol: "lb",
    category: "mass",
    type: "standard",
    toBase: v => v * 0.45359237,
    fromBase: v => v / 0.45359237
  },
  {
    id: "ounce",
    name: "Ounce",
    symbol: "oz",
    category: "mass",
    type: "standard",
    toBase: v => v * 0.0283495,
    fromBase: v => v / 0.0283495
  },
    {
    id: "gram",
    name: "Gram",
    symbol: "g",
    category: "mass",
    type: "standard",
    toBase: v => v / 1000,
    fromBase: v => v * 1000
  },
  // Niche Mass
  {
    id: "slug",
    name: "Slug",
    symbol: "slug",
    category: "mass",
    type: "niche",
    toBase: v => v * 14.5939,
    fromBase: v => v / 14.5939
  },
  {
    id: "grain",
    name: "Grain",
    symbol: "gr",
    category: "mass",
    type: "niche",
    toBase: v => v * 0.00006479891,
    fromBase: v => v / 0.00006479891
  },

  // --- TEMPERATURE (Base: Celsius) ---
  {
    id: "celsius",
    name: "Celsius",
    symbol: "°C",
    category: "temperature",
    type: "standard",
    toBase: v => v,
    fromBase: v => v
  },
  {
    id: "fahrenheit",
    name: "Fahrenheit",
    symbol: "°F",
    category: "temperature",
    type: "standard",
    toBase: v => (v - 32) * 5/9,
    fromBase: v => (v * 9/5) + 32
  },
  {
    id: "kelvin",
    name: "Kelvin",
    symbol: "K",
    category: "temperature",
    type: "standard",
    toBase: v => v - 273.15,
    fromBase: v => v + 273.15
  },

  // --- VOLUME (Base: liter) ---
  {
    id: "liter",
    name: "Liter",
    symbol: "L",
    category: "volume",
    type: "standard",
    toBase: v => v,
    fromBase: v => v
  },
  {
    id: "gallon",
    name: "Gallon (US)",
    symbol: "gal",
    category: "volume",
    type: "standard",
    toBase: v => v * 3.78541,
    fromBase: v => v / 3.78541
  },
  // Niche Volume
  {
    id: "olympic_pool",
    name: "Olympic Swimming Pool",
    symbol: "pool",
    category: "volume",
    type: "niche",
    toBase: v => v * 2500000,
    fromBase: v => v / 2500000
  },
  {
    id: "firkin",
    name: "Firkin",
    symbol: "firkin",
    category: "volume",
    type: "niche",
    toBase: v => v * 40.9148,
    fromBase: v => v / 40.9148
  },
    {
    id: "hogshead",
    name: "Hogshead",
    symbol: "hogshead",
    category: "volume",
    type: "niche",
    toBase: v => v * 238.481,
    fromBase: v => v / 238.481
  },

  // --- TIME (Base: second) ---
  {
    id: "second",
    name: "Second",
    symbol: "s",
    category: "time",
    type: "standard",
    toBase: v => v,
    fromBase: v => v
  },
  {
    id: "minute",
    name: "Minute",
    symbol: "min",
    category: "time",
    type: "standard",
    toBase: v => v * 60,
    fromBase: v => v / 60
  },
    {
    id: "hour",
    name: "Hour",
    symbol: "hr",
    category: "time",
    type: "standard",
    toBase: v => v * 3600,
    fromBase: v => v / 3600
  },
   {
    id: "day",
    name: "Day",
    symbol: "d",
    category: "time",
    type: "standard",
    toBase: v => v * 86400,
    fromBase: v => v / 86400
  },
  // Niche Time
  {
    id: "fortnight",
    name: "Fortnight",
    symbol: "ftn",
    category: "time",
    type: "niche",
    toBase: v => v * 1209600,
    fromBase: v => v / 1209600
  },
  {
    id: "microcentury",
    name: "Microcentury",
    symbol: "µc",
    category: "time",
    type: "niche",
    toBase: v => v * 3155.76, // 52.596 minutes approx
    fromBase: v => v / 3155.76
  },
    {
    id: "svedberg",
    name: "Svedberg",
    symbol: "S",
    category: "time",
    type: "niche",
    toBase: v => v * 1e-13,
    fromBase: v => v / 1e-13
  },

  // --- SPEED (Base: m/s) ---
  {
    id: "mps",
    name: "Meters per Second",
    symbol: "m/s",
    category: "speed",
    type: "standard",
    toBase: v => v,
    fromBase: v => v
  },
  {
    id: "kmh",
    name: "Kilometers per Hour",
    symbol: "km/h",
    category: "speed",
    type: "standard",
    toBase: v => v / 3.6,
    fromBase: v => v * 3.6
  },
  {
    id: "mph",
    name: "Miles per Hour",
    symbol: "mph",
    category: "speed",
    type: "standard",
    toBase: v => v * 0.44704,
    fromBase: v => v / 0.44704
  },
  // FFF system speed
  {
    id: "furlong_per_fortnight",
    name: "Furlongs per Fortnight",
    symbol: "fur/ftn",
    category: "speed",
    type: "niche",
    toBase: v => v * 0.0001663095,
    fromBase: v => v / 0.0001663095
  },

  // --- ASTRONOMICAL (Length extension) ---
   {
    id: "lightyear",
    name: "Light-year",
    symbol: "ly",
    category: "length",
    type: "standard", // Listed as standard in spec despite being niche-ish
    toBase: v => v * 9.4607e15,
    fromBase: v => v / 9.4607e15
  },
  {
    id: "parsec",
    name: "Parsec",
    symbol: "pc",
    category: "length",
    type: "niche",
    toBase: v => v * 3.0857e16,
    fromBase: v => v / 3.0857e16
  }

];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = units;
}
