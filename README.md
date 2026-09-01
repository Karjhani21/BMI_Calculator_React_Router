<<<<<<< HEAD
# BMI Calculator (React + React Router)

A small multi-page BMI calculator built with React and `react-router-dom`.
Enter your height and weight (metric or imperial), and it works out your
Body Mass Index and health category on a separate result screen.

## Run it in VS Code

1. Unzip this folder and open it in VS Code (`File > Open Folder…`).
2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL Vite prints (usually `http://localhost:5173`).

Other useful commands:
```bash
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
```

> This project uses **Vite** rather than `create-react-app` (which is no
> longer maintained) — the routing structure, form, and calculation logic
> follow the same design steps, install/run is just faster.

## Project structure

```
bmi-calculator-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # React Router setup (BrowserRouter)
    ├── App.jsx             # Route table + app shell
    ├── App.css / index.css # Styling
    ├── components/
    │   └── SidePanel.jsx   # Brand + step indicator
    ├── pages/
    │   ├── Home.jsx        # "/"       – intro
    │   ├── BmiForm.jsx     # "/bmi"    – height/weight form
    │   └── Result.jsx      # "/result" – BMI value + category
    └── utils/
        └── bmi.js          # BMI formula, categories, unit conversion, validation
```

---

## Ex06 BMI Calculator

### AIM

To develop a responsive and interactive Body Mass Index (BMI) Calculator
using React that allows users to input their height and weight, and
calculates their BMI to categorize their health status (Underweight,
Normal, Overweight, Obese).

### DESIGN STEPS

**Step 1 — Initialize the project**
Created with Vite (`npm create vite@latest`) and `react-router-dom` added
via `npm install react-router-dom`.

**Step 2 — Set up routing**
`src/App.jsx` defines three routes with `react-router-dom`:
- `/` — `Home.jsx`, intro and navigation
- `/bmi` — `BmiForm.jsx`, the input form
- `/result` — `Result.jsx`, the calculated result

**Step 3 — Design the BMI form page**
`BmiForm.jsx` collects height and weight (with a metric/imperial toggle).
On submit it converts everything to centimetres/kilograms and navigates to
`/result` with the values passed as URL query parameters, e.g.
`/result?height=170.0&weight=65.0`.

**Step 4 — Handle input validation**
`src/utils/bmi.js` (`validateMetric` / `validateImperial`) checks that both
fields are present, numeric, and within a realistic range before allowing
navigation. Invalid input shows an inline error message under the field
instead of submitting.

**Step 5 — Perform the BMI calculation**
`Result.jsx` reads `height` and `weight` from the URL with `useSearchParams`,
then `calculateBmi()` applies the standard formula:

```
BMI = weight (kg) / [height (m)]²
```

**Step 6 — Display the result**
The result page shows the BMI value as a large number next to a coloured
category tag (Underweight / Normal / Overweight / Obese), using the
standard WHO BMI ranges from `getBmiCategory()`.

**Step 7 — Navigation options**
The result page has "Calculate again" (back to `/bmi`) and "Back to start"
(back to `/`) buttons.

**Step 8 — Enhancements**
- Metric ⇄ imperial unit toggle (cm/kg or ft+in/lb).
- A three-step progress indicator in the side panel.
- Custom styling (no CSS framework) with a distinct type and colour system.

### PROGRAM

The full source is in the `src/` folder listed above:
- Routing & shell: `src/main.jsx`, `src/App.jsx`
- Form & validation: `src/pages/BmiForm.jsx`
- Calculation & result: `src/pages/Result.jsx`, `src/utils/bmi.js`
- Styling: `src/index.css`, `src/App.css`

### OUTPUT

- **Home (`/`)** — Short intro to BMI and a "Check your BMI" button.
- **Form (`/bmi`)** — Unit toggle plus height/weight inputs; invalid values
  show an inline error instead of navigating away.
- **Result (`/result`)** — Large BMI number, a coloured category tag
  (Underweight/Normal/Overweight/Obese), a one-line note, the inputs used,
  and buttons to recalculate or start over.

  <img width="1906" height="1101" alt="image" src="https://github.com/user-attachments/assets/0225b052-0b22-4a53-9479-d4608e57be5b" />


### RESULT

The BMI Calculator successfully takes user input for height and weight,
performs the BMI calculation using React state, event handling, and
`react-router-dom` navigation, and displays the BMI value along with the
corresponding health category.
=======

>>>>>>> ef43e1092651210df979bc82bfee2ed2687f14eb
