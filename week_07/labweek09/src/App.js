import logo from './logo.svg';
import './App.css';

function App() {
  const studentInfo = {
    name: 'Your Name',
    studentId: '101234567',
    college: 'George Brown College',
    course: 'COMP 3123 - Full Stack Development'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p><strong>{studentInfo.studentId}</strong></p>
        <p><strong>{studentInfo.name}</strong></p>
        <p>{studentInfo.college}</p>
        <p>{studentInfo.course}</p>
      </header>
    </div>
  );
}

export default App;
