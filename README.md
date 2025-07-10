<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 🌐 TechEager – Company Web App [ prototype ]

A polished React single-page application that features a slider, team section, about page, contact form, and navigation—showcasing your front-end development skills and real-API integrations.

---

## 📁 Project Structure

```
comp-proj/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   └── OurTeam.jsx
│   │   ├── SliderComp.jsx
│   │   ├── AboutUs.jsx
│   │   └── ContactUs.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   └── Func.jsx
│   ├── images/
│   │   ├── empowering.jpg
│   │   ├── creativity.jpg
│   │   ├── dev-group.jpg
│   │   └── fb.png, git.png, linkedin.png, insta.png, loc.png, imdb.png, in.png
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Features

* 🎡 **Image Slider** (`SliderComp`): Displays dynamic slides with captions using **react-slick**.
* 👥 **Team Section** (`OurTeam`): Fetches and showcases 5 random profiles from [RandomUser API](https://randomuser.me/).
* 💬 **About Us** (`AboutUs`): Brand statement and developer overview with a hero image.
* ✉️ **Contact Form** (`ContactUs`): Sends user input to JSONBin.io API and returns a bin URL.
* 🧭 **Navigation Bar** (`Nav`): Conditional rendering, route-aware highlighting, and links to sections/pages.
* 🛰 **Footer**: Company info, social links, and embedded Google Map.
* 🔄 **Routing**: Uses **react-router-dom** for navigation between Home and Func routes.
* 🎨 **Stylized UI**: Clean layout and design using modern CSS / Tailwind classes.

---

## 🧰 Tech Stack & Libraries

* **React** (v18+)
* **react-router-dom** – client-side routing
* **react-slick** + **slick-carousel** – slider functionality
* **RandomUser API** – live team data
* **JSONBin.io API** – backend simulation for form submission
* **CSS / Tailwind** for responsive, modular styling

---

## 📦 Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/comp-proj.git
   cd comp-proj
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npm run dev
   ```

   or for Create React App:

   ```bash
   npm start
   ```

4. **View it:**
   Visit `http://localhost:5173/` (Vite) or `http://localhost:3000/`

---

## 🧠 Usage

* **Home Page**: Navigate between slider, about us, our team, and contact sections.
* **Func Page**: Alternative page to demo a separate feature (e.g., anime library explorer).
* **Submit Form**: Input contact info and send—it saves to JSONBin and returns a URL in alert.

---

## 🛠️ Future Enhancements

* Add client-side form validation
* Implement pagination or lazy loading for Team section
* Enhance accessibility (ARIA roles & keyboard navigation)
* Improve animations and transitions
* Extract CSS into separate modules or styled components

---

## 🤝 Contribute & License

Contributions welcome! Feel free to open an issue or PR.

📄 Licensed under **MIT** — modify and use freely 💼

---

>>>>>>> 6a583d35d771cb668e76b12e9d6a56b70390baf1
