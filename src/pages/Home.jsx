import { useNavigate } from 'react-router-dom'

const HOW_IT_WORKS = [
  {
    title: 'Enter your details',
    body: 'Add your height and weight, in metric or imperial units.',
  },
  {
    title: 'We do the maths',
    body: 'Weight in kilograms divided by height in metres, squared.',
  },
  {
    title: 'See your category',
    body: 'Get your BMI value alongside the standard WHO health category.',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="page page--home">
      <p className="page__eyebrow">Body Mass Index</p>
      <h1 className="page__title">
        A quick way to check how your weight and height relate.
      </h1>
      <p className="page__lede">
        BMI won&apos;t tell you everything about your health, but it&apos;s a fast,
        widely used starting point. Enter your numbers and get a clear read in
        a few seconds.
      </p>

      <button className="button button--primary" onClick={() => navigate('/bmi')}>
        Check your BMI
      </button>

      <ol className="how-it-works">
        {HOW_IT_WORKS.map((item, index) => (
          <li key={item.title} className="how-it-works__item">
            <span className="how-it-works__number">{index + 1}</span>
            <div>
              <h2 className="how-it-works__title">{item.title}</h2>
              <p className="how-it-works__body">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
