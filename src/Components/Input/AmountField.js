import "./AmountField.css";
const AmountField = (props) => {
  const validate = (evt) => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      key = evt.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };
  return (
    <div className="amountfield">
      <label>{props.label}</label>
      <br></br>
      <div className="amountfield-inner">
        <div className="inputbox">
          <input
            onKeyPress={validate}
            type={props.type}
            onChange={props.onChange}
            // placeholder={props.placeholder}
            required
          ></input>
          <span className="place-mobile">Amount</span>
        </div>
        <div className="ngn">
          <p>NGN</p>
        </div>
      </div>
    </div>
  );
};

export default AmountField;
