import logo from './logo.svg';
import './App.css';
function DemoComponent (props){

    const {name, title} = props;
  console.log({props});
    return <div >{title} {name}</div>;
}
function App() {
  return (
    <div className="App">
        <h1 >Menu</h1>
      <DemoComponent name="cola"/>
      <DemoComponent name="water"/>
      <DemoComponent name="bier"/>
      <DemoComponent name="wijn"/>
    </div>
  );
}

export default App;
