const STEPS = [
  { label: 'Start' },
  { label: 'Your details' },
  { label: 'Your result' },
]

export default function SidePanel({ activeStep }) {
  return (
    <aside className="side-panel">
      <div className="side-panel__mark">
        <span className="side-panel__mark-index">BMI</span>
        <span className="side-panel__mark-name">Calculator</span>
      </div>

      <ol className="side-panel__steps">
        {STEPS.map((step, index) => {
          const state =
            index === activeStep ? 'current' : index < activeStep ? 'done' : 'upcoming'
          return (
            <li key={step.label} className={`side-panel__step side-panel__step--${state}`}>
              <span className="side-panel__step-dot" aria-hidden="true" />
              <span className="side-panel__step-label">{step.label}</span>
            </li>
          )
        })}
      </ol>

      <p className="side-panel__footnote">
        Body Mass Index is a screening measure, not a diagnosis.
      </p>
    </aside>
  )
}
