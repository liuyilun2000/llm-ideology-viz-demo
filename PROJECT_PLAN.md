# Ideological Neural Manifold Visualization: Project Plan

## Overview
This project visualizes two frameworks for inspecting ideological neural manifolds in large language models (LLMs):
- **Corpus-based Framework**
- **Reference-based Framework**

The demo will be an interactive, step-by-step Three.js HTML application.

---

## 1. Landing Page (Framework Selection)

**Purpose:**
Introduce the project and let users choose which framework to explore.

**Elements:**
- Project Title & Subtitle
- Short project description
- Interactive figure/diagram showing both frameworks
- Buttons: "Explore Corpus-based Framework", "Explore Reference-based Framework"
- Author names, paper link, code link

**Layout & Animation:**
- Title and subtitle fade in
- Figure/diagram animates in (lines/boxes draw in sequence)
- Buttons slide or fade in below the figure
- Hovering over each framework highlights its path in the diagram

---

## 2. Corpus-based Framework Page

**Purpose:**
Step-by-step interactive visualization of the corpus-based process.

**Elements:**
- Step-by-step panels (one per process step):
    1. Corpus & Attention/FFN extraction
    2. Activations visualization
    3. LDA training
    4. Projection on LDA axes
    5. Manifold visualization
- Navigation: "Next" and "Back" buttons, progress indicator
- Animated visuals for each step
- Explanatory text for each step

**Layout & Animation:**
- Panels centered, visuals and text side-by-side
- Animations highlight transitions between steps
- Option to replay animation for each step

---

## 3. Reference-based Framework Page

**Purpose:**
Step-by-step interactive visualization of the reference-based process.

**Elements:**
- Step-by-step panels (one per process step):
    1. Ideology set & reference text generation
    2. Attention/FFN extraction
    3. Reference activation space
    4. Distribution projection
    5. Manifold visualization
- Navigation: "Next" and "Back" buttons, progress indicator
- Animated visuals for each step
- Explanatory text for each step

**Layout & Animation:**
- Consistent with corpus-based page
- Animations emphasize differences in process (reference points, projection arrows)

---

## 4. Shared/Reusable Elements

- Header: Project title, navigation back to landing page
- Footer: Links to paper, code, credits
- Responsive design for desktop and mobile
- Accessibility: high-contrast colors, keyboard navigation

---

## 5. Animation Suggestions

- Smooth transitions (fade, slide, morph) between steps
- Animate arrows and points to show data flow
- Use color to distinguish frameworks and steps
- Optional: tooltips or info popups for technical terms

---

## 6. Next Steps

1. Design wireframes for each page
2. Break down each step into code components (e.g., FrameworkSelector, StepPanel, AnimatedDiagram)
3. Implement the landing page with framework selection and animated diagram
4. Build step-by-step pages for each framework, reusing animation and layout components 