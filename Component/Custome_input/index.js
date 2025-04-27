import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import {useEffect , useState} from 'react';



function Custome_index() {
const [testData, setTestData] = useState([1,2,3,4,5,6])
useEffect(() =>{
  console.log(testData.indexOf(10));
  console.log(testData.forEach((item)=>console.logitem))
  console.log(testData.sort((a,b) => a< b ? 1 : -1))


const array1 = [ 1,2,3,4,5]
console.log(array1.fill(0,2,5));
console.log(array1.fill(5));

const words = ['limits','alphabets', 'language','low','high','length'];
const result = words.filter(index => index < 2);
console.log(result);

},[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('YYYY-MM-DD')

          }

        </p>
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('YYYY/MM/DD')

          }

        </p>
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('YYYY.MM.DD')

          }

        </p>
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('DD/MM/YYYY')

          }

        </p>
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('DD/Mon/YY')

          }

        </p>
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('YY/Mon/DD')

          }

        </p>
        <p>
          {/* Edit <code>src/App.js</code>  */}
          {
            moment(Date()).format('YY/day')

          }

        </p>
        <p>This is React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <article>
        <h2>Google Chrome</h2>
        <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
        </article>  
        <b>this is bold text</b>
        <ol>
        <li>mongodb</li>
        <li>express</li>
        <li>React</li>
        <li>Nodejs</li>
        </ol>

        <ul>
        
        </ul>
        <center>
          This is The center text
        </center>


      </header>
    </div>
  );
}

export default Custome_index;
