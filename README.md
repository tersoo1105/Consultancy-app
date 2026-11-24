# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Enable the home-page email form

The home-page contact form uses Formspree. To enable email delivery:

1. Create a form in your Formspree account, set the recipient email, and verify it.
2. Copy the form endpoint into a local `.env.local` file:

   ```text
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mgakrvwr
   ```

3. Restart the Vite development server. For deployment, add the same variable to your hosting provider’s environment settings and rebuild the site.

The endpoint format is shown in `.env.example`. Until a valid endpoint is configured, the form stays disabled and the site displays a setup notice.
