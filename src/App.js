import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [borderInput, setBorderInput] = useState({
    "border-top-left":10,
    "border-top-right":10,
    "border-bottom-right":10,
    "border-bottom-left":10
  });

  const [response, setResponse] = useState("");

  const changeBorder = (event) => {

  const { name, value }  = event.target

  setBorderInput((prev) => ({...prev, [name]: value}))

  console.log(borderInput)

  }

  useEffect((_) =>{

    let topLeft = borderInput["border-top-left"]
    let topRight = borderInput["border-top-right"]
    let bottomRight = borderInput["border-bottom-right"]
    let bottomLeft = borderInput["border-bottom-left"]

    setResponse(`
      border-top-left-radius: ${topLeft}px;
      border-top-right-radius: ${topRight}px;
      border-bottom-right-radius: ${bottomRight}px;
      border-bottom-left-radius: ${bottomLeft}px;
    `)

  },[borderInput])

  const inputStyle = { width:'4rem' }

  const style = { background: '#3d3d3d', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }
  return (
    <div style={style}>
    <div style={{display:'flex', width:'35rem', justifyContent:'space-between', paddingBottom:'10px' }}>
      <input type="number" onChange={changeBorder} value={borderInput["border-top-left"]} style={inputStyle} name="border-top-left"/>
      <input type="number" onChange={changeBorder} value={borderInput["border-top-right"]} style={inputStyle} name="border-top-right"/>
    </div>
    {/* style={{ width: '35rem' }} */}
      <Card style={{ width: '35rem', whiteSpace: "pre-line" }}>
          <Card.Body>
            <Card.Title>EXEMPLO DE BORDA</Card.Title>
            <Card.Text>
               {response}
            </Card.Text>
          </Card.Body>
      </Card>
      <div style={{display:'flex', width:'35rem', justifyContent:'space-between', paddingTop:'10px' }}>
      <input type="number" onChange={changeBorder} value={borderInput["border-bottom-right"]} style={inputStyle} name="border-bottom-right"/>
      <input type="number" onChange={changeBorder} value={borderInput["border-bottom-left"]} style={inputStyle} name="border-bottom-left"/>
      </div>

    </div>
  );
}

export default App;