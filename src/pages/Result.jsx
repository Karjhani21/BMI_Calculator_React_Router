import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { calculateBmi, getBmiCategory } from '../utils/bmi.js'

export default function Result() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const heightCm = Number(searchParams.get('height'))
  const weightKg = Number(searchParams.get('weight'))
  const hasValidInput = heightCm > 0 && weightKg > 0

  if (!hasValidInput) {
    return (
      <section className="page page--result">
        <p className="page__eyebrow">Your result</p>
        <h1 className="page__title">We don&apos;t have your details yet.</h1>
        <p className="page__lede">
          Head back to the form and enter your height and weight first.
        </p>
        <Link className="button button--primary" to="/bmi">
          Go to the form
        </Link>
      </section>
    )
  }

  const bmi = calculateBmi(weightKg, heightCm)
  const category = getBmiCategory(bmi)

  return (
    <section className="page page--result">
      <p className="page__eyebrow">Your result</p>

      <div className="result-card">
        <div className="result-card__number-row">
          <span className="result-card__number">{bmi}</span>
          <span
            className="result-card__tag"
            style={{ '--tag-color': category.color }}
          >
            {category.label}
          </span>
        </div>
        <p className="result-card__note">{category.note}</p>
        <p className="result-card__inputs">
          Based on {heightCm.toFixed(1)} cm and {weightKg.toFixed(1)} kg.
        </p>
      </div>

      <div className="result-actions">
        <button className="button button--primary" onClick={() => navigate('/bmi')}>
          Calculate again
        </button>
        <button className="button button--ghost" onClick={() => navigate('/')}>
          Back to start
        </button>
      </div>
    </section>
  )
}
