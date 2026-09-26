// function App() {
//   // return 'hello guys'
//   return <h1>hello i am aditya using react!!!</h1>
  
// }

// export default App

// app.jsx is a child of main.jsx and inde.html is grandparent of app.jsx

// yekbar may yek function yek hi chesss return karta hay.
const App = () => {
  return (
    // this i called a empty tag where we can return any kind of elements at once and it doesnot giuve any error and it basicallly used to contain the various element.
 <> 
   <div id="parent1">
      <h1 id="child1">App</h1>
       <h3 id="child2">Hello</h3>
    </div>
    <div id="parent2">
      <h1>app2</h1>
      <h3>hello2</h3>
    </div>
  </>
  )
}

export default App