# Angular PostHog Freeze MRE

This repository exists so that we can diagnose an issue where our website freezes indefinitely with the PostHog snippet enabled, but does not freeze with the snippet disabled.

(NB: There are other ways to fix the freeze, including code refactors.)

## Environment

- Node.js v18.16.0 (e.g. through NVM)
- PNPM v7.33.7
- Chrome 130.0.6723.117 (without any adblocker extensions)
- MacOS Sonoma v14.5

## Steps to reproduce

1. Clone the repo
1. `pnpm i`
1. `ng serve --open`

The website should open in your browser, and immediately freeze, becoming unresponsive. You can verify this by right-clicking anywhere on the page, or clicking the "Hello World" button.

If you go to `main.ts` and comment out the call to `posthog.init`, the issue goes away.

## Additional information

Adblockers may cause the issue to not show up.

The issue also goes away if you take out the Angular Material popup menu from the source code. We hypothesise that somehow the two are not playing together well.
