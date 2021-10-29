# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   A functional component is a function that takes in some properties and returns a React element based on those properties, this means that these components don't have lifecycle methods like componentDidMount or ComponentDidUpdate, and these components use callback functions to change state. Functional components have a render method, but their output is a react component that will be rendered within some type of parent component. Stateful components: have a render method that returns JSX, have functions that live on the component that can change state or implement logic and have access to the react lifecycle methods.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   The componentWillMount function will be called before the components inital render and before the component mounts. The componentWillUpdate function will be called right before a component recieves new props or state.

3. Define stateful logic.
   Stateful logic is any type of "logic", function, program, or code that changes or updates state.

4. What are the three step of creating a successful test? What is done in each phase?
   Arrange, Act, Assert; these are the three steps to creating a successful test. Arrange means to set up the virtual dom in the state you want to begin your test. If I wanted to check that a properly filled out and submitted form creates a new element in the dom, I would first need to render that form in the virtual dom. The Act step means to perform the action that you want to test on the arranged virtual dom. If I wanted to fill out a form and submit it, I would do that in this step. The final step, the Assert step, either confirms or denies your expectation after the acting step. If I wanted to check whether or not a new element was in the dom after submitting the form, this step is where I would do that.
