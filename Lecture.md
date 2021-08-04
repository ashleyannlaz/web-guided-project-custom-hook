Notes Custom Hooks

Advanced React
- understanding separation of concerns
- understanding stateful logic
- use custom hooks to add behaviors

how to understand a more professional type of program where you have larger components with larger teams.

Application Architecture 
- hooks only work in functional components, keep class based in your back pocket

What is stateful logic?
- stateful logic is built into a component through the use of functions
-- any code that uses state


Why is stateful logic?
- Separation of concerns. Readability and Re-useability…Because we want to use a hook in multiple places. We may need state in multiple components, and this is why we need stateful logic to accomplish the sharing. Or we might think of it as reusable code that keeps separation of concerns possible and DRY. We use it to make changes to components and re-render the DOM.

Each component should do ONE thing
- keeps code DRY and reusable
- make each piece easy to test

Modularizing our components
- subcomponents (presentation logic)
- services (data logic) what is the code that makes API calls
- custom hooks (staeful logic)