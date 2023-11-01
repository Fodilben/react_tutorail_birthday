import { useState } from "react";
import CartContainer from "./componant/CartContainer";
import data from "./data";
const App = () => {
  const [myData, setMydata] = useState(data);
  const ClearData = () => {
    setMydata([]);
  };

  return (
    <main>
      <div className="container">
        <h3 className="title">{myData.length} birthdays today</h3>
        {myData.length != 0 && (
          <>
            <CartContainer data={myData} />
            <button className="btn  btn-block " onClick={ClearData}>
              clear all
            </button>
          </>
        )}
      </div>
    </main>
  );
};
export default App;
