import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  //hooks to read/write from store
  const income = useSelector((store) => store.EXPENSE.income); //default value
  //to update the store value use dispatch
  const dispatch = useDispatch();
  //set this function to onChange
  function setIncome(e) {
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={setIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
