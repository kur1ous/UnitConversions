/**
 * Conversion Engine
 * Handle the core logic for converting between units.
 */

// If running in Node.js, require the unit registry.
// If in browser, assume 'units' is available globally or imported via ES modules.
let unitRegistry = [];
if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    unitRegistry = require('./units');
} else if (typeof units !== 'undefined') {
    unitRegistry = units;
}

/**
 * Finds a unit by its ID.
 * @param {string} unitId 
 * @returns {object|null} The unit object or null if not found.
 */
function getUnit(unitId) {
    return unitRegistry.find(u => u.id === unitId) || null;
}

/**
 * Converts a value from one unit to another.
 * @param {number} value - The value to convert.
 * @param {string} fromUnitId - The ID of the source unit.
 * @param {string} toUnitId - The ID of the target unit.
 * @returns {number} The converted value.
 * @throws {Error} If units are invalid or incompatible.
 */
function convert(value, fromUnitId, toUnitId) {
    // 1. Validate Input Value
    const numValue = Number(value);
    if (isNaN(numValue)) {
        throw new Error("Invalid input: Value must be a number");
    }

    // 2. Find Units
    const fromUnit = getUnit(fromUnitId);
    const toUnit = getUnit(toUnitId);

    if (!fromUnit) {
        throw new Error(`Invalid source unit ID: ${fromUnitId}`);
    }
    if (!toUnit) {
        throw new Error(`Invalid target unit ID: ${toUnitId}`);
    }

    // 3. Verify Compatibility
    if (fromUnit.category !== toUnit.category) {
        throw new Error(`Incompatible units: Cannot convert from ${fromUnit.category} to ${toUnit.category}`);
    }

    // 4. Perform Conversion
    // Optimization: if units are the same, return value
    if (fromUnitId === toUnitId) {
        return numValue;
    }

    // Convert to base unit then to target unit
    const baseValue = fromUnit.toBase(numValue);
    const targetValue = toUnit.fromBase(baseValue);

    return targetValue;
}

/**
 * Formats a number with specified precision, handling scientific notation for very large/small numbers.
 * @param {number} value 
 * @param {number} decimals - Max decimal places
 * @returns {string}
 */
function formatResult(value, decimals = 6) {
    if (Math.abs(value) < 1e-6 || Math.abs(value) > 1e12) {
        return value.toExponential(decimals);
    }
    // Remove trailing zeros
    return parseFloat(value.toFixed(decimals)).toString();
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        convert,
        getUnit,
        formatResult
    };
}
