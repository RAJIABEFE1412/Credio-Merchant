import './PinField.css';
import { useCallback } from 'react';
const PinField = () => {
    const emailInput = useCallback((inputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);
    return ( 
        <div className="pinfield">
            <input
                type="text"
                maxlength= "1"
                ref={emailInput}
            ></input>
        </div>
    );
}
 
export default PinField;