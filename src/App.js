import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  function handleClickBtn(e) {
    let value = e.target.name;
    setData(data.concat(value));
  }

  function handleBackSpace() {
    let out = data.slice(0, data.length - 1);
    setData(out);
  }

  function handleClearBtn() {
    setData('');
  }

  function handleShowResult() {
    try {
      setData(eval(data).toString());
    }
    catch (err) { setData('Error') }
  }

  return (
    <>
      <div className='parent'>
        <div className='calc'>

          <div className='display item'>
            <p>{data}</p>
          </div>

          <button name='7' onClick={handleClickBtn} className='box operand'>7</button>
          <button name='8' onClick={handleClickBtn} className='box operand'>8</button>
          <button name='9' onClick={handleClickBtn} className='box operand'>9</button>
          <button name='/' onClick={handleClickBtn} className='box operator'>/</button>
          <button name='4' onClick={handleClickBtn} className='box operand'>4</button>
          <button name='5' onClick={handleClickBtn} className='box operand'>5</button>
          <button name='6' onClick={handleClickBtn} className='box operand'>6</button>
          <button name='*' onClick={handleClickBtn} className='box operator'>x</button>
          <button name='1' onClick={handleClickBtn} className='box operand'>1</button>
          <button name='2' onClick={handleClickBtn} className='box operand'>2</button>
          <button name='3' onClick={handleClickBtn} className='box operand'>3</button>
          <button name='+' onClick={handleClickBtn} className='box operator'>+</button>
          <button name='.' onClick={handleClickBtn} className='box operand'>.</button>
          <button name='0' onClick={handleClickBtn} className='box operand'>0</button>
          <button name='=' onClick={handleShowResult} className='box operand'>=</button>
          <button name='-' onClick={handleClickBtn} className='box operator'>-</button>
          <button onClick={handleClearBtn} className='clear'>clear</button>
          <button name='=' onClick={handleBackSpace} className='box operator backSpace'>C</button>

        </div>
      </div>
    </>
  );
}

export default App;
