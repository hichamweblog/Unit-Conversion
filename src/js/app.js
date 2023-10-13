import {
	METERS_TO_FEET,
	LITERS_TO_GALLONS,
	KILOS_TO_POUNDS,
} from './conversionConstants.js';
import {
	inputEl,
	btnEl,
	metersToFeetEl,
	feetToMetersEl,
	litersToGallonsEl,
	gallonsToLitersEl,
	kilosToPoundsEl,
	poundsToKilosEl,
} from './domSelectors.js';

import { convertUnits } from './unitConversion.js';

// Event Listener for Conversion
btnEl.addEventListener('click', handleConversion);

function handleConversion() {
	let inputValue = Number(inputEl.value);

	// Check if inputValue is a valid number
	if (!isNaN(inputValue)) {
		// Length conversion
		const metersToFeet = convertUnits(inputValue, METERS_TO_FEET);
		const feetToMeters = convertUnits(inputValue, 1 / METERS_TO_FEET);

		// Volume conversion
		const litersToGallons = convertUnits(inputValue, LITERS_TO_GALLONS);
		const gallonsToLiters = convertUnits(inputValue, 1 / LITERS_TO_GALLONS);

		// Mass conversion
		const kilosToPounds = convertUnits(inputValue, KILOS_TO_POUNDS);
		const poundsToKilos = convertUnits(inputValue, 1 / KILOS_TO_POUNDS);

		// Display results
		metersToFeetEl.innerHTML = `${inputValue} <span>meters</span> = ${metersToFeet} <span>feet</span> `;
		feetToMetersEl.innerHTML = `${inputValue} <span>feet</span> = ${feetToMeters} <span>meters</span>`;

		litersToGallonsEl.innerHTML = `${inputValue} <span>liters</span> = ${litersToGallons} <span>gallons</span> `;

		gallonsToLitersEl.innerHTML = `${inputValue} <span>gallons</span> = ${gallonsToLiters} <span>liters</span>`;
		kilosToPoundsEl.innerHTML = `${inputValue} <span>kilos</span> = ${kilosToPounds} <span>pounds</span> `;
		poundsToKilosEl.innerHTML = `${inputValue} <span>pounds</span>  = ${poundsToKilos} <span>kilos</span>`;
	}
}
