import './App.css';

const Exercise = (props) => {
  return(
    <>
      <h2>{props.name}</h2>
      <h3>{props.bodyPart}</h3>
    </>
  )


}

const App = () => {
  const name = "Daniel"
  const isName = true
  return (
    <div className="App">
     <h1>Hello, {isName ? name : 'User'}!</h1>
     <Exercise name={'Pullups'} bodyPart={'Back'} />
     <Exercise name="Face Pull (Cable)" bodyPart = "Shoulders"/>
    </div>
  );
}

export default App;
