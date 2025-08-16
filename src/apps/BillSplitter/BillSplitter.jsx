import "./BillSplitter.css";

function BillSplitter() {
  return (
    <div className="container">
      <div className="main-content tip-calculator-app">
        <h1>BillSplitter</h1>
        <div className="tip-cal-card">
          <Bill />
          <Summary />
        </div>
      </div>
    </div>
  );
}

function Bill() {
  return (
    <div>
      <h2>Bill</h2>
      <div className="input-container">
        <span>₦</span>
        <input type="number" placeholder="0" />
      </div>
      <SelectTip />
      <NumberOfPeople />
    </div>
  );
}

function SelectTip() {
  return (
    <div>
      <h2>Select Tip %</h2>
      <div className="tips">
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="text" placeholder="Custom" />
      </div>
    </div>
  );
}

function NumberOfPeople() {
  return (
    <div>
      <h2>Number Of People</h2>
      <div className="input-container">
        <span>🧑‍🤝‍🧑</span>
        <input type="number" placeholder="1" />
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div>
      <h2>Summary</h2>
      <div className="summary-container">
        <div className="amount">
          <div className="amount-per-person">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="amount-total">
            <p>$0.00</p>
          </div>
        </div>
        <div className="amount">
          <div className="amount-per-person">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="amount-total">
            <p>$0.00</p>
          </div>
        </div>

        <div className="button-reset-container">
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default BillSplitter;
