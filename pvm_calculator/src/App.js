import './App.css';
import { useState } from 'react';


const App = () => {

  const [perc, setPerc] = useState(21);
  const [sum, setSum] = useState(0);
  const [pvm, setPvm] = useState(0);
  const [total, setTotal] = useState(0);

  const selectPercentage = (percent) => {
    setPerc(percent);
    setPvm((sum / 100) * perc);
    setTotal(sum + ((+sum / 100) * perc));
  }

  const percent = (value) => {
    let kof = 0;

    if (perc === 21) {
      kof = 1.21;
    } else if (perc === 9) {
      kof = 1.09;
    } else {
      kof = 1.05;
    }

    setPvm(value - (value / kof));
    setTotal(value / kof);

  }

  const calculator = (props) => {

    if (props.name === 'suma') {
      setSum(+props.value);
      setPvm((+props.value / 100) * perc);
      setTotal(+props.value + ((+props.value / 100) * perc));
    }
    if (props.name === 'total') {
      setTotal(+props.value);
      percent(+props.value);
    }
  }

  return (
    <div className="container">
      <h4>PVM SKAIČIUOKLĖ</h4>
      <div className="calculator">
        <div className="percentage">
          <label>PVM tarifas</label>
          <select className="form-select" onClick={(e) => { selectPercentage(e.target.value) }}>
            <option value={21}>21%</option>
            <option value={9}>9%</option>
            <option value={5}>5%</option>
          </select>
        </div>
        <div className="sum">
          <label className="form-label">Suma (be PVM)</label>
          <input type="number" className="form-control" name="suma" value={sum} onChange={(e) => calculator(e.target)} />
        </div>
        <div className="sum_pvm">
          <label className="form-label">PVM suma</label>
          <input className="form-control" name="pvmSuma" disabled="disabled" value={pvm} />
        </div>
        <div className="sum_total">
          <label className="form-label">Bendra suma (su PVM)</label>
          <input type="number" className="form-control" name="bendraSuma" value={total} onChange={(e) => calculator(e.target)} />
        </div>
      </div>
      <div className="alert">
        <p className="align-middle">Įveskite sumą be PVM arba bendrą sumą (su PVM)</p>
      </div>
    </div>
  );
}

export default App;

