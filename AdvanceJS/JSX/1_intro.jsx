// This is JSX!
const buildingSign = <h1>Welcome to the Building!</h1>;



//How to Add Dynamics (Magic Glue: {})
// A normal JavaScript variable
const userName = "Alex";
// We use curly braces {} inside the JSX to add the variable's value
const greeting = <h1>Hello, {userName}!</h1>;
// The webpage will show: Hello, Alex!



// You can even put math inside the braces:
const calculation = <p>The result is {5 + 5}</p>;
// The webpage will show: The result is 10



//  Two Important Rules (Strict Blueprints)
function MyHouseBlueprint() {
  return (
    // ❌ WRONG: Cannot return two separate things
    // <h1>Roof plan</h1>
    // <p>Window details</p>

    // ✅ RIGHT: Wrapped in one div
    <div>
      <h1>Roof plan</h1>
      <p>Window details</p>
    </div>
  );
}



// Close All the Tags
// ❌ WRONG in JSX: <img> <br>
// ✅ RIGHT in JSX: <img /> <br />



// Components: The Building Blocks
// A blueprint for a simple button component
function MyButton() {
  return (
    <button>Click Me!</button>
  );
}

// How to use it in your main design:
function App() {
  return (
    <div>
      <h1>My Page</h1>
      <MyButton /> {/* Using the blueprint once */}
      <MyButton /> {/* Using the blueprint again! */}
    </div>
  );
}



//  Props: The Customization Instructions

// The blueprint accepts a 'props' instruction sheet
function WelcomeHeader(props) {
  // We use props.name inside the curly braces {}
  return <h1>Welcome, {props.name}!</h1>;
}

// How to use it and customize it:
function App() {
  return (
    <div>
      <WelcomeHeader name="Alice" /> {/* Passes { name: "Alice" } */}
      <WelcomeHeader name="Bob" />   {/* Passes { name: "Bob" } */}
    </div>
  );
}



// Conditional Rendering: "If" Statements in your Blueprint
function LoginStatus({ isLoggedIn }) { // We can break props down directly too!
  return (
    <div>
      {isLoggedIn ? ( // Is this true?
        <button>Log Out</button> // Show this if true
      ) : (
        <button>Log In</button> // Show this if false
      )}
    </div>
  );
}




//  Lists: Showing Multiple Items (The Map Method)
function UserList() {
  const usernames = ["Ana", "Ben", "Charlie"];

  return (
    <ul> {/* Unordered list HTML tag */}
      {/* We use the map function inside the braces {} */}
      {usernames.map((name) => (
        // Map transforms each 'name' string into a List Item JSX element
        <li key={name}>{name}</li> // *key is a special prop React needs for lists*
      ))}
    </ul>
  );
}


//  class becomes className.
//  for becomes htmlFor.
// onclick becomes onClick.

// Browsers cannot read JSX directly; it must be transpiled into regular JavaScript using tools like Babel.

/* 

1. Core Syntax Rules
JSX has a few strict rules that differ from standard HTML:
Single Root Element: You must return exactly one outermost element. If you have multiple siblings, wrap them in a <div> or a React Fragment (<>...</>).
CamelCase for Attributes: Many standard HTML attributes use camelCase in JSX.
class becomes className.
for becomes htmlFor.
onclick becomes onClick.
Self-Closing Tags: All tags must be explicitly closed. Even traditionally unclosed tags like <img> or <br> must end with a slash: <img src="..." /> or <br />.
2. Embedding JavaScript
The real power of JSX is the ability to use JavaScript directly inside your markup by wrapping expressions in curly braces {}.
Variables: <h1>Hello, {userName}</h1>.
Calculations: <p>Total: {5 + 10}</p>.
Function Calls: <div>{formatDate(new Date())}</div>.
3. Conditional Rendering
JSX does not support if/else statements inside the tags. Instead, you use JavaScript operators:
Ternary Operator (? :): Useful for "either-or" scenarios.
{isLoggedIn ? <LogoutButton /> : <LoginButton />}.
Logical AND (&&): Useful for "if-true-then-show" scenarios.
{hasMessages && <NotificationDot />}.
4. Lists and Keys
To render a list of items, you typically use the .map() array method.
Requirement: Each element in a list must have a unique key prop to help React track which items changed.
javascript
const items = ['Apple', 'Banana'];
return (
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);
Use code with caution.

5. How It Works Under the Hood
Browsers cannot read JSX directly; it must be transpiled into regular JavaScript using tools like Babel.
Your JSX code: <h1>Hello</h1>
Becomes: React.createElement('h1', null, 'Hello').
6. Best Practices
Use Descriptive Names: Always start custom component names with a Capital Letter (e.g., <MyComponent />) while keeping standard HTML tags lowercase (<div>).
Keep It Clean: Move complex logic outside of the JSX return statement to keep the markup readable.
// Comments: Use {/* comment here */
//  to add comments inside JSX blocks.

