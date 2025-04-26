# Chai Code - React + TypeScript + Vite Project

Welcome to **Chai Code**, a modern web application built using **React**, **TypeScript**, and **Vite**. This project is designed for landing page of chai code website

---

## 🚀 Features

- **React + TypeScript**: Strongly typed components for better development experience.
- **Vite**: Lightning-fast development server and optimized builds.
- **Aceternity UI Libraries**: Leveraged for prebuilt, customizable UI components.
- **Responsive Design**: Fully responsive UI for all devices.
- **Dynamic Components**: Reusable and modular components like `BentoGrid`, `HoverBorderGradient`, and more.
- **Animations**: Smooth animations using `framer-motion`.
- **Accessibility**: ARIA roles and labels for improved accessibility.
- **Modern UI**: Styled with Tailwind CSS for a clean and modern look.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **UI Libraries**: Aceternity UI
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript rules

---

## 📂 Folder Structure

```
src/
├── assets/                # Static assets like images and SVGs
├── components/            # Reusable UI components
│   ├── ui/                # UI-specific components (e.g., BentoGrid, HoverBorderGradient)
├── layout/                # Layout components (e.g., Header, Footer)
├── sections/              # Page sections (e.g., HeroSection, CohortLiveClasses)
├── styles/                # Global styles
├── utils/                 # Utility functions
├── App.tsx                # Main app component
└── main.tsx               # Entry point
```

---

## 🖥️ Getting Started

### Prerequisites

Make sure you have the following installed:

- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chai-code.git
   cd chai-code
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Scripts

Here are the available scripts:

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run preview`**: Preview the production build.
- **`npm run lint`**: Run ESLint to check for code quality issues.



---

## 🌟 Sections

### Sections

1. **Hero Section**: The landing section with a welcoming message and call-to-action buttons.
2. **Cohort Live Classes**: Displays a dynamic grid of cohort courses using the `BentoGrid` component.
3. **Students Feedback**: A carousel of testimonials using the `AnimatedTestimonials` component.
4. **Companies**: Showcases logos of companies using the `AnimatedTooltip` component.
5. **Topics Cloud**: A visually appealing cloud of topics covered by the platform.
6. **Free API Section**: Highlights free APIs available for developers.
7. **Key Benefits**: Lists the key benefits of using the platform.
8. **Why Chai Code**: Explains why users should choose Chai Code.
9. **Join Community**: Encourages users to join the community with a call-to-action.


---

## 🧪 Testing

To run tests (if applicable):

```bash
npm run test
# or
yarn test
```

---

## 📖 ESLint Configuration

This project uses ESLint with TypeScript rules for code quality. To expand the configuration, you can add plugins like `eslint-plugin-react-x` and `eslint-plugin-react-dom`.

Example configuration:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Aceternity UI Documentation](https://aceternity-ui-docs.com)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌐 Social Media

Follow us on:

- [YouTube](https://youtube.com/yourchannel)
- [Instagram](https://instagram.com/yourprofile)
- [Discord](https://discord.gg/yourserver)
- [GitHub](https://github.com/your-username)

---

## 💡 Acknowledgments

Special thanks to the contributors, the open-source community, and the creators of **Aceternity UI** for their support.

---