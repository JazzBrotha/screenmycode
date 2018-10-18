# Roadmap
This document identifies the project's vision, its current status, and how to reach the project’s end goal. It helps contributors keep track of the overall status of the project and recognize where their help is most needed. Please note that the roadmap is subject to change, and that contributions are also wecome to the document.

## Project Mission
Create a web application as an accessibility tool for developers to help them understand the basic mechanics of a screen reader.

## Project Summary
This web application aims to help developers learn the fundamentals of how screen readers work through the medium that they understand the best: code. The application allows the user to drop a piece of code into a sandbox, and, as the user navigates the through the code, the part of the code that the screen reader reads is highlighted.

## Milestones
Down below are a list of milestones that represent the overall goals of the project. Preferably, they are to be done in sequential order.

### Short term
- [ ] **Create the sandbox**
> Figure out how to make a code sandbox that supports modern web technologies. Research how similar existing tools work: CodePen, jsFiddle, etc.
- [ ] **Fetch code from sandbox in back end**
> Connect the textarea in the sanbox to submit the code as a POST request to back end. Set up route in back end to catch that code.
- [ ] **Integrate a screen reader into the application**
> Find an open source screen reader who's behavior somewhat represents the most used screen readers. Pick one where it is possible to extract the spoken text, and that can be integrated into a web application.
- [ ] **Log the part of the code that the screen reader extracts**
>  Understand why the screen reader only extracts certain parts of the code in the sandbox. Output the information that the screen reader extracts, i.e. into the terminal.

### Medium term
- [ ] **Launch screen reader from web application UI**
> Be able to launch the screen reader from a user interaction, i.e a click event.
- [ ] **Visualize the extracted code in the UI**
> Make the extracted code update live in the UI.
- [ ] **Create the highlighting effect**
> Pick an appropriate way to highlight the extracted code in the UI so that it is clear to the user which parts that the screen reader extracts.
- [ ] **Allow editing of the code**
> Enable the user to edit the code in the sandbox and re-run it.

### Long term
Long term milestones are to be added shortly.

### Completed
- [x] **Pick a tech stack**
> Pick a tech stack that best can serve the web application's purpose. Also think about what technologies that are well represented in the web community in order to increase the possible amount of open source participants.
