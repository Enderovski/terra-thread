# 🌿 Terra Thread

I've always felt that State Management in the React ecosystem is fundamentally over-engineered. We've all seen projects where someone brings in Redux Toolkit, Context Providers, and Zustand just to toggle a UI dropdown. 

**Terra Thread** is my architectural experiment in moving in the complete opposite direction. I wanted to build a complex, multi-component interface where the state "thread" weaves natively through the DOM without relying on massive global stores.

### The Architecture Experiment

The core philosophy of this repo is **Composable UI**. 
I spent weeks analyzing how UI libraries like Radix and Headless UI work under the hood. For Terra Thread, I stripped away all the pre-styled component libraries and focused entirely on native accessibility (a11y) and localized component state.

- **Component Boundaries:** If a piece of state only affects a single card, it stays in that card. No prop drilling if it's not strictly necessary.
- **Speed above all:** I used **Vite** because the hot-module-reloading is unmatched. When you are tweaking animation physics for a dropdown, waiting 4 seconds for Webpack to compile ruins the flow state. Here, changes are instant.
- **Styling:** **Tailwind CSS** strictly used as a blueprint tool. 

### What's inside?
There is no backend hooked up here; it's purely a frontend structural exercise. It handles heavily nested layouts, dynamic routing concepts, and tricky z-index layering scenarios that normally break when scaling an application.

Feel free to fork it, clone it, and run it locally if you want to inspect how I handled the headless components:
```bash
npm install && npm run dev
```

If you see a better way to handle the local state patterns here, open a PR. I'm always looking to improve.
*— Ender*
