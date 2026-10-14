# Deployment handoff

The implementation is complete locally and configured for Vercel. No GitHub repository was created and no Vercel deployment was completed. The local Git history is preserved in the source deliverable.

## Observed blockers

The connected GitHub account is `wcorn76`. Its available tools can read and write existing repositories but do not expose repository creation. The browser route to `github.com/new` redirected to sign-in. Credentials were not requested while the user was away. There were no GitHub or Vercel credentials in the execution environment.

Vercel’s new-project page was accessible, but no authenticated account or completed deployment was verified. No claim of a live deployment is made.

## Finish after access is available

1. Create a public repository named `clio-history` or another available name under `wcorn76`. Do not overwrite one of the existing Pantheon repositories.
2. Push the source directory’s `main` branch, including its MIT license, tests, and review. If using the bundle, `git clone clio-history.git.bundle clio-history` restores the history.
3. Import that GitHub repository into Vercel. Framework: Other. Build command: `npm run build`. Output directory: `dist`. No environment variables are needed.
4. Confirm the deployment’s reported URL and successful status. Inspect the deployed home page and several tasks at desktop and phone widths.
5. Validate all five input formats, feedback, refresh persistence, storage disabled, keyboard focus, export, reset cancellation, and mobile text sizing. Check that the deployed CSP permits local assets and that there are no console errors.
6. Add the observed GitHub and production URLs to README and About. Do not invent a URL before it exists.

Only original app code, original tasks, and local assets belong in the public repository. Do not upload the source curriculum folder or raw student data.

## Readiness distinction

Automated tests and a successful static build are complete. Real-browser rendering and deployment smoke tests remain outstanding. A student usability check also remains outstanding; the simulated student evaluation is not a substitute for one.
