import ChildComponent from './rgb';


function App() {
  var rows = [];
  var i = 0;
  var j = 0; 
  var k = 0;
  var v = 1;
  while(k <= 255) {
    if (k%15 == 0){
      i++;
      j++;
      k++;
    }
    else if(k %3 == 0) {
      j++;
      k++;
    }
    else if(k % 5 == 0) {
      i++;
      k++;
    }
    k++;
    if (k < 255){
      rows.push(<ChildComponent r={i} g={j} b={k} />);
    }
    
  }

return <tbody>{rows}</tbody>;
}

export default App;
