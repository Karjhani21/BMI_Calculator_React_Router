// All calculations are done in metric (cm, kg) internally.
// Imperial inputs are converted up front so the rest of the app
// only ever has to reason about one unit system.

export const CM_PER_INCH = 2.54
export const KG_PER_LB = 0.45359237

export function feetInchesToCm(feet, inches) {
  const totalInches = Number(feet) * 12 + Number(inches)
  return totalInches * CM_PER_INCH
}

export function lbToKg(lb) {
  return Number(lb) * KG_PER_LB
}

export function calculateBmi(weightKg, heightCm) {
  const heightM = heightCm / 100
  const bmi = weightKg / (heightM * heightM)
  return Math.round(bmi * 10) / 10
}

// Category boundaries follow the standard WHO adult BMI ranges.
export const BMI_CATEGORIES = [
  {
    key: 'underweight',
    label: 'Underweight',
    max: 18.5,
    color: '#3F7CAC',
    note: 'Below the typical range — extra energy intake may help.',
  },
  {
    key: 'normal',
    label: 'Normal',
    max: 25,
    color: '#2F6F62',
    note: 'Within the typical range for most adults.',
  },
  {
    key: 'overweight',
    label: 'Overweight',
    max: 30,
    color: '#C97C1F',
    note: 'Above the typical range — small, steady changes help most.',
  },
  {
    key: 'obese',
    label: 'Obese',
    max: Infinity,
    color: '#C1442D',
    note: 'Well above the typical range — a clinician can suggest next steps.',
  },
]

export function getBmiCategory(bmi) {
  return BMI_CATEGORIES.find((category) => bmi < category.max) ?? BMI_CATEGORIES[BMI_CATEGORIES.length - 1]
}

// Validation shared by the form. Returns an errors object; a valid
// submission produces an empty object.
export function validateMetric({ heightCm, weightKg }) {
  const errors = {}
  const h = Number(heightCm)
  const w = Number(weightKg)

  if (!heightCm || Number.isNaN(h)) errors.height = 'Enter your height.'
  else if (h < 50 || h > 250) errors.height = 'Height should be between 50 and 250 cm.'

  if (!weightKg || Number.isNaN(w)) errors.weight = 'Enter your weight.'
  else if (w < 2 || w > 300) errors.weight = 'Weight should be between 2 and 300 kg.'

  return errors
}

export function validateImperial({ feet, inches, lb }) {
  const errors = {}
  const ft = Number(feet)
  const inch = Number(inches)
  const w = Number(lb)

  if (feet === '' || Number.isNaN(ft)) errors.height = 'Enter your height.'
  else if (ft < 1 || ft > 8 || inch < 0 || inch > 11 || Number.isNaN(inch)) {
    errors.height = 'Enter a realistic feet + inches value.'
  }

  if (!lb || Number.isNaN(w)) errors.weight = 'Enter your weight.'
  else if (w < 4 || w > 660) errors.weight = 'Weight should be between 4 and 660 lb.'

  return errors
}
