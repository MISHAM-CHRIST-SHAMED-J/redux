import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./action-creators";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, resetValue } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <div>
        <button onClick={() => depositMoney(1)}>+</button>
        <h1>{account}</h1>
        <button onClick={() => withdrawMoney(1)}>-</button>
        <button onClick={() => resetValue(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;