---
id: 0001
title: Update plan for robotics-textbook feature
stage: plan
date: 2025-12-02
surface: agent
model: claude-sonnet-4-5-20250929
feature: robotics-textbook
branch: 001-robotics-textbook-website
user: user
command: /sp.plan
labels: ["planning", "docusaurus"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- null
tests:
- null
---

## Prompt

Update the plan to implement the robotics-textbook feature.
- **Framework**: Docusaurus (React Static Site Generator).
- **Deployment**: GitHub Pages.
- **Diagrams**: Mermaid.js (for node graphs).
- **Content**: Ensure each module corresponds to a folder in `docs/` and uses standard Markdown.
- **Search**: Enable the default Docusaurus local search.

## Response snapshot

## Architectural Plan for "robotics-textbook"

### 1. Scope and Dependencies:
- **In Scope**:
    - Development of a static website for the "Physical AI" robotics textbook.
    - Implementation using Docusaurus, a React-based static site generator.
    - Content organization into modules, each corresponding to a folder in `docs/` using standard Markdown.
    - Integration of Mermaid.js for rendering node graphs within the documentation.
    - Enabling the default Docusaurus local search functionality.
    - Deployment to GitHub Pages.
    - High-level structure: Homepage, Module 1 (ROS 2 Nervous System), Module 2 (Digital Twin - Gazebo), Module 3 (The Brain - Isaac Sim), Module 4 (VLA Models), Capstone (Autonomous Humanoid).

- **Out of Scope**:
    - Custom backend services or dynamic content generation beyond Docusaurus capabilities.
    - Advanced search functionalities requiring external services (e.g., Algolia).
    - User authentication or personalized content.
    - Complex interactive elements beyond what Docusaurus and Mermaid.js natively support.
    - CI/CD pipeline setup for automated deployment (initially manual deployment to GitHub Pages).

- **External Dependencies**:
    - **Docusaurus**: Primary framework for static site generation.
    - **React**: Underlying library for Docusaurus components.
    - **Mermaid.js**: For rendering diagrams.
    - **Node.js/npm (or yarn)**: For Docusaurus development and build processes.
    - **Git/GitHub**: Version control and deployment platform (GitHub Pages).

### 2. Key Decisions and Rationale:

- **Framework Selection: Docusaurus**
    - **Options Considered**: Jekyll, Hugo, Next.js (with static export).
    - **Trade-offs**:
        - *Docusaurus*: Excellent for documentation sites, strong Markdown support, built-in features like versioning, search (local), and theme customization. React-based for extensibility.
        - *Jekyll/Hugo*: Simpler for pure static sites, but less feature-rich for documentation-specific needs.
        - *Next.js*: More powerful for complex web applications, but potentially overkill and steeper learning curve for a documentation site.
    - **Rationale**: Docusaurus is specifically designed for documentation websites, offering a good balance of features, ease of use, and extensibility for the textbook. Its React foundation allows for custom components if needed.

- **Diagramming Tool: Mermaid.js**
    - **Options Considered**: PlantUML, ASCII art.
    - **Trade-offs**:
        - *Mermaid.js*: Renders professional-looking diagrams directly from Markdown-like text, widely supported, good for flowcharts, sequence diagrams, and node graphs.
        - *PlantUML*: Similar functionality, but Mermaid.js has better browser rendering capabilities and integrates well with Docusaurus.
        - *ASCII art*: Simple, but not visually appealing or easily maintainable for complex diagrams.
    - **Rationale**: Mermaid.js provides a straightforward way to embed diagrams directly within Markdown content, making it easy to create and maintain visual representations of concepts, especially node graphs for robotics systems.

- **Deployment Strategy: GitHub Pages**
    - **Options Considered**: Netlify, Vercel, AWS S3.
    - **Trade-offs**:
        - *GitHub Pages*: Free, simple to set up for static sites, integrates directly with GitHub repositories.
        - *Netlify/Vercel*: More advanced CI/CD features, but potentially adds complexity for a basic static site.
        - *AWS S3*: Requires more manual setup and configuration for hosting a static site.
    - **Rationale**: GitHub Pages is a cost-effective and straightforward solution for deploying a Docusaurus site, leveraging the existing Git repository for hosting.

- **Content Structure: `docs/` folder with Markdown files**
    - **Options Considered**: Custom content management system, separate content repository.
    - **Trade-offs**:
        - *`docs/` folder*: Standard Docusaurus approach, easy to manage with Markdown files, simple for contributors.
        - *Custom CMS*: Overkill for a static site, adds maintenance overhead.
        - *Separate repo*: Adds complexity for content synchronization.
    - **Rationale**: Adhering to the standard Docusaurus content structure simplifies development, maintenance, and allows for easy integration with Docusaurus's built-in features for navigation and linking.

### 3. Interfaces and API Contracts:

- **Public APIs**: Not applicable as this is a static website. The "interface" is the rendered HTML content and navigation provided by Docusaurus.
- **Versioning Strategy**: Docusaurus's built-in versioning feature will be used if future versions of the textbook are introduced. Initially, content will reside in a single, unversioned `docs` directory.
- **Idempotency, Timeouts, Retries**: Not applicable.
- **Error Taxonomy**: Not applicable for a static site; broken links will be handled by Docusaurus's build process and potentially a custom 404 page.

### 4. Non-Functional Requirements (NFRs) and Budgets:

- **Performance**:
    - p95 latency: Aim for under 500ms for page loads on typical broadband connections. Achieved through Docusaurus's static generation, optimized assets, and efficient browser rendering.
    - Throughput: Handled by GitHub Pages infrastructure, expected to scale for typical documentation site traffic.
    - Resource caps: Minimal server-side resources as it is a static site. Browser-side resources optimized by Docusaurus.

- **Reliability**:
    - SLOs: High availability provided by GitHub Pages. Outages are managed by GitHub.
    - Error budgets: Minimal, primarily related to content rendering issues (e.g., broken Mermaid diagrams, Markdown syntax errors). These will be caught during local development and build processes.
    - Degradation strategy: If Mermaid.js fails to render, the raw text will still be visible.

- **Security**:
    - AuthN/AuthZ: Not applicable for a public static site.
    - Data handling: No user data is collected or stored.
    - Secrets: No secrets involved in the static site deployment.
    - Auditing: Not applicable for a static site; GitHub provides repository audit logs.

- **Cost**:
    - Unit economics: Effectively zero, as GitHub Pages is free for public repositories. Docusaurus is open source and free to use.

### 5. Data Management and Migration:

- **Source of Truth**: Markdown files in the `docs/` directory within the Git repository.
- **Schema Evolution**: Markdown content adheres to standard Markdown and any Docusaurus-specific front matter. Changes to content structure will involve reorganizing Markdown files and updating Docusaurus sidebar configuration.
- **Migration and Rollback**: Version control (Git) provides full rollback capabilities for content. Docusaurus versioning can manage different content versions.
- **Data Retention**: Content is retained indefinitely in the Git repository.

### 6. Operational Readiness:

- **Observability**:
    - Logs: Build logs from Docusaurus will indicate content issues. GitHub Pages access logs are not directly accessible.
    - Metrics: Basic web analytics (e.g., Google Analytics, if added) can track page views.
    - Traces: Not applicable for a static site.

- **Alerting**: Not applicable beyond GitHub repository notifications.
- **Runbooks for common tasks**:
    - **Content Update**: Edit Markdown files in `docs/`, commit, push to GitHub. GitHub Pages will automatically redeploy (if configured).
    - **Local Development**: `npm start` (or `yarn start`) in the Docusaurus project root.
    - **Build for Deployment**: `npm run build` (or `yarn build`) to generate static assets.

- **Deployment and Rollback strategies**:
    - **Deployment**: Push built static assets to the `gh-pages` branch (or configured branch) of the GitHub repository. Docusaurus provides helper scripts for this.
    - **Rollback**: Revert to a previous commit on the `gh-pages` branch using Git.

- **Feature Flags and compatibility**: Not applicable for a static site.

### 7. Risk Analysis and Mitigation:

- **Top 3 Risks**:
    1. **Content Overload/Complexity**: As the textbook grows, managing a large number of Markdown files and maintaining consistent navigation could become challenging.
        - **Blast radius**: Difficulty for users to find information, slow content updates.
        - **Mitigation**: Implement clear folder structure and naming conventions, leverage Docusaurus's sidebar configuration and auto-generated navigation, regularly review content organization.
    2. **Mermaid.js Rendering Issues**: Complex diagrams or syntax errors in Mermaid.js could lead to broken visualizations.
        - **Blast radius**: Impaired understanding of visual concepts, degraded user experience.
        - **Mitigation**: Thoroughly test Mermaid diagrams during local development, provide fallback text descriptions for critical diagrams, use pre-commit hooks to validate Mermaid syntax if available.
    3. **GitHub Pages Deployment Issues**: Configuration errors or GitHub Pages service interruptions could prevent updates or make the site unavailable.
        - **Blast radius**: Stale content, inaccessible textbook.
        - **Mitigation**: Document deployment steps clearly, use Docusaurus's recommended deployment methods, monitor GitHub Pages status, have a backup plan for hosting if critical.

### 8. Evaluation and Validation:

- **Definition of Done (tests, scans)**:
    - All specified content modules are created as Markdown files within `docs/`.
    - Docusaurus builds successfully without errors.
    - Local server (`npm start`) runs without issues, and all pages are accessible.
    - Mermaid.js diagrams render correctly on all pages.
    - Default Docusaurus local search functions as expected.
    - Website deploys successfully to GitHub Pages and is publicly accessible.
    - All internal links are functional.
    - Responsive design for various screen sizes (inherent Docusaurus feature).

- **Output Validation for format/requirements/safety**:
    - Markdown content adheres to standard syntax and Docusaurus conventions.
    - No broken links in the generated site.
    - Mermaid.js diagrams conform to Mermaid syntax.

### 9. Architectural Decision Record (ADR):
- 📋 Architectural decision detected: Selection of Docusaurus as static site generator and GitHub Pages for deployment. Document reasoning and tradeoffs? Run `/sp.adr "Docusaurus and GitHub Pages Selection"`
- 📋 Architectural decision detected: Integration of Mermaid.js for diagramming. Document reasoning and tradeoffs? Run `/sp.adr "Mermaid.js Integration for Diagrams"`

### Critical Files for Implementation
- `C:/HackathonBook/robotics-textbook/docusaurus.config.js` - Core configuration for Docusaurus, including search, plugins, and theme
- `C:/HackathonBook/robotics-textbook/src/pages/index.js` - Homepage component for "Intro to Physical AI"
- `C:/HackathonBook/robotics-textbook/docs/` - Directory to create module folders and Markdown content for each module
- `C:/HackathonBook/robotics-textbook/package.json` - Manage Docusaurus dependencies and build scripts
- `C:/HackathonBook/robotics-textbook/sidebars.js` - Define the structure and order of documentation pages in the sidebar
