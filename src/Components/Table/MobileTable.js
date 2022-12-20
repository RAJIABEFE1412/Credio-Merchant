import "./MobileTable.css";
const MobileTable = () => {
    return ( 
        <div className="mobiletable">
            <div className="mobiletable-inner">
                <div className="mobile-image">
                    <img src='https://source.unsplash.com/random/?people'></img>
                </div>
                <div className="mobile-transaction">
                    <p className="mobile-tran-name">Bola</p>
                    <p className="mobile-tran-status">N 20 langoiing transaction</p>
                </div>
            </div>
        </div>
     );
}
 
export default MobileTable;