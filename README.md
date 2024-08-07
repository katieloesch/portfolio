# Portfolio Project

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

I started the development of this portfolio project after completion of the General Assemlby Software Engineering Immersive Course in order to showcase the projects I had built and the skills I had gained during the course.

## <a name="deployment-link"></a> 2. Deployment link

http://katieloesch.co.uk

## <a name="installation"></a> 3. Installation

- package manager used: npm - v9.5.0
  - https://www.npmjs.com/package/npm
- to install dependencies, run:

```zsh
npm install
```

- to start the application, run:

```zsh
npm start
```

<br>

## <a name="technologies"></a> 4. Technologies Used

- This application is based in ReactJS (v18.2.0), JavaScript, JSX and SCSS.
  - it was created using the 'create-react-app' command
  - https://create-react-app.dev/

```zsh
npx create-react-app portfolio
```

### Dependencies

- intersection-observer - https://www.npmjs.com/package/intersection-observer
- node-sass (v7.0.3)
  - https://www.npmjs.com/package/node-sass
- react-icons (v4.9.0)
  - https://www.npmjs.com/package/react-icons
- routing:
  - react-router (v6.12.1)
    - https://www.npmjs.com/package/react-router
  - react-router-dom (v6.12.1)
    - https://www.npmjs.com/package/react-router-dom
- contact form
  - emailjs (v4.0.2)
    - https://www.npmjs.com/package/emailjs
  - emailjs-com (v3.2.0)
    - https://www.npmjs.com/package/emailjs-com
  - @emailjs/browser (v3.11.0)
    - https://www.npmjs.com/package/@emailjs/browser
- animations + effects
  - framer-motion (v10.12.16)
    - https://www.npmjs.com/package/framer-motion
  - react-tsparticles (v2.10.1)
    - https://www.npmjs.com/package/react-tsparticles
  - react-vertical-timeline-component (v3.6.0) by [Stéphane Monnot](https://github.com/stephane-monnot/react-vertical-timeline/commits?author=stephane-monnot)
    - https://www.npmjs.com/package/react-vertical-timeline-component
    - https://github.com/stephane-monnot/react-vertical-timeline

### UI

- fonts:
  - 'Nulshock' designed by Typodermic Fonts
    - https://www.cufonfonts.com/font/nulshock#google_vignette
  - 'VT323' Designed by Peter Hull
    - https://fonts.google.com/specimen/VT323
  - .woff files: assets/fonts directory
- icons:
  - React Icons
    - https://react-icons.github.io/react-icons/
    - https://www.npmjs.com/package/react-icons
  - iconify
    - https://icon-sets.iconify.design/
  - fontawesome
    - https://fontawesome.com/
  - timeline (Experience Section):
    - react-vertical-timeline-component (library for responsive timelines in React applications)
      - https://www.npmjs.com/package/react-vertical-timeline-component
      - https://github.com/stephane-monnot/react-vertical-timeline
      - source: [Stéphane Monnot](https://github.com/stephane-monnot/react-vertical-timeline/commits?author=stephane-monnot)

### Additional tools used:

- Git / GitHub
  - used for version control
  - https://git-scm.com/
  - https://github.com/
- Visual Studio Code (VSCode)
  - code editor used for writing CSS, JSX, JavaScript and ruby.
- Google Chrome browser
  - used for launching the website and displaying the application Google Chrome
- Google Chrome Developer Tools: For troubleshooting and debugging
  - https://www.google.com/intl/en_uk/chrome/
- chatGTP
  - https://chat.openai.com/
  - used for debugging
- Hostinger: provider used to host portfolio website
  - https://www.hostinger.co.uk

### Resources and tutorials

- initial portfolio structure & navigation dots: [Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2023](https://www.youtube.com/watch?v=3HNyXCPDQ7Q&list=PL5TCQHRtvHGmk69zb9GYb62MQMAmVQStF&index=3) by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)

- responsive navigation menu: [Animated Portfolio Website with React & Framer Motion | React Project for Beginners](https://www.youtube.com/watch?v=CHGHuF24Cjw&list=PL5TCQHRtvHGkuR2YZDf_2lDFuc9m5OUlO&index=3) by [Lama Dev](https://www.youtube.com/@LamaDev)

- timeline (experience section): [Simple Timeline for your Portfolio Website | React Tutorial](https://www.youtube.com/watch?v=-rnkToU2_lw) by [Aleks Popovic](https://www.youtube.com/@AleksPopovic)

- card hover effect (work section): [How To Create An Image Hover Effect With CSS](https://www.youtube.com/watch?v=tF3RE5CGt9U&list=PL5TCQHRtvHGn_xv-dWP9P_rDofoxMUQHQ) by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)

- image carousel (work section): [Build a Slider with React.js](https://www.youtube.com/watch?v=og3wCO98HkQ) by [The Web School.](https://www.youtube.com/@TheWebSchool)

- button fill effect: [Button Ripple Hover Effects using CSS & Javascript](https://www.youtube.com/watch?v=WOSaNbpHNqU) by [Online Tutorials | Md Irshad Ansari](https://www.youtube.com/@OnlineTutorialsYT)

## <a name="deliverables"></a> 5. Deliverables

### MVP

- make a website that showcases
  - easy-to-find contact information - email, GitHub, Linkedin and other relevant links
    - include a contact form
  - about you section
    - brand statement + background
    - info about industry interests (Meetups, online resources, podcasts, coding online courses etc)
    - What do you do outside of work? What are your interests?
    - Blogs
  - experience + education
  - skills & methodologies
  - transferrable previous experience
  - projects including:
    - project name
    - description
    - timeframe
    - Solo vs Group
    - Links to GitHub ReadMe & deployed project
    - A visual
- make the website mobile responsive
- deploy portfolio website online

### Stretch Goals

- animations
- effects

## <a name="planning"></a>6. Planning / Build Process

### User Stories

- As a user I should be able to easily find contact information including email, linkedIn and GitHub accounts.
- As a user I should be able to send a message via contact form.
- As a user I should be able to easily find relevant experience, education and skills.
- As a user I should be able to easily find information on previous projects.
- As a user I should be able to navigate the website from any device.

I started the building process for this project on 13/06/2023.
Initial deployment on gh-pages: 26/06/2023.
Deployment to [custom domain](katieloesch.co.uk) obtained from [Hostinger](https://www.hostinger.co.uk) on 29/06/2023.

## 7. <a name="challenges"></a> Challenges

- depending on how much text is provided to the modal showing details on each project, the container overflows but by default you can't scroll down on a modal
- In order to scoll on overlay text the scroll on the body needs to be disabled first which took me a while to figure out.

## 8. <a name="wins"></a> Wins

- fully responsive design
- implementation of animations + effects
- I'm glad I decided to use React.js for my portfolio as I definitely learned a lot doing this project and feel more confident using this framework.

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements

- include information about my industry interests
- include blogs + podcasts I'm interested in
