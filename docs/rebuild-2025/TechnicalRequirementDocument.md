# Technical Requirement Document


## Goals

•	Rebuild the existing website in Next.js
•	Host the static export on GitHub Pages
•	Automate builds and deployments via GitHub Actions
•	Ensure responsiveness and accessibility
•	Improve SEO and performance (Lighthouse scores)


## Website Features
•	Homepage with intro, services, and contact CTA
•	Links to youtube, github, and any other relevant accounts
•	Responsive design for mobile, tablet, desktop
•	SEO meta tags and Open Graph tags
•	Feature local community


## Workflow Steps

.	On Push to main:
•	Lint and type check
•	Run tests
•	Build static site via next export
•	Deploy to gh-pages branch


## CI/CD Pipeline (GitHub Actions)

Workflow Steps
.	On Push to main:
•	Lint and type check
•	Run tests
•	Build static site via next export
•	Deploy to gh-pages branch

