import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  feetInchesToCm,
  lbToKg,
  validateMetric,
  validateImperial,
} from '../utils/bmi.js'

export default function BmiForm() {
  const navigate = useNavigate()
  const [unit, setUnit] = useState('metric')
  const [errors, setErrors] = useState({})

  const [heightCm, setHeightCm] = useState('')
  const [weightKg, setWeightKg] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')
  const [lb, setLb] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    let finalHeightCm
    let finalWeightKg

    if (unit === 'metric') {
      const validation = validateMetric({ heightCm, weightKg })
      if (Object.keys(validation).length) {
        setErrors(validation)
        return
      }
      finalHeightCm = Number(heightCm)
      finalWeightKg = Number(weightKg)
    } else {
      const validation = validateImperial({ feet, inches: inches || 0, lb })
      if (Object.keys(validation).length) {
        setErrors(validation)
        return
      }
      finalHeightCm = feetInchesToCm(feet, inches || 0)
      finalWeightKg = lbToKg(lb)
    }

    setErrors({})
    const params = new URLSearchParams({
      height: finalHeightCm.toFixed(1),
      weight: finalWeightKg.toFixed(1),
    })
    navigate(`/result?${params.toString()}`)
  }

  return (
    <section className="page page--form">
      <p className="page__eyebrow">Your details</p>
      <h1 className="page__title">Tell us your height and weight.</h1>

      <div className="unit-toggle" role="tablist" aria-label="Unit system">
        <button
          type="button"
          role="tab"
          aria-selected={unit === 'metric'}
          className={`unit-toggle__option ${unit === 'metric' ? 'is-active' : ''}`}
          onClick={() => {
            setUnit('metric')
            setErrors({})
          }}
        >
          Metric (cm, kg)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={unit === 'imperial'}
          className={`unit-toggle__option ${unit === 'imperial' ? 'is-active' : ''}`}
          onClick={() => {
            setUnit('imperial')
            setErrors({})
          }}
        >
          Imperial (ft/in, lb)
        </button>
      </div>

      <form className="bmi-form" onSubmit={handleSubmit} noValidate>
        {unit === 'metric' ? (
          <>
            <label className="field">
              <span className="field__label">Height (cm)</span>
              <input
                type="number"
                inputMode="decimal"
                placeholder="e.g. 170"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
              />
              {errors.height && <span className="field__error">{errors.height}</span>}
            </label>

            <label className="field">
              <span className="field__label">Weight (kg)</span>
              <input
                type="number"
                inputMode="decimal"
                placeholder="e.g. 65"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
              />
              {errors.weight && <span className="field__error">{errors.weight}</span>}
            </label>
          </>
        ) : (
          <>
            <div className="field">
              <span className="field__label">Height</span>
              <div className="field__row">
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="ft"
                  aria-label="Feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                />
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="in"
                  aria-label="Inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                />
              </div>
              {errors.height && <span className="field__error">{errors.height}</span>}
            </div>

            <label className="field">
              <span className="field__label">Weight (lb)</span>
              <input
                type="number"
                inputMode="decimal"
                placeholder="e.g. 150"
                value={lb}
                onChange={(e) => setLb(e.target.value)}
              />
              {errors.weight && <span className="field__error">{errors.weight}</span>}
            </label>
          </>
        )}

        <button type="submit" className="button button--primary">
          Calculate my BMI
        </button>
      </form>
    </section>
  )
}
