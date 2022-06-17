import React from "react";
import "./newArrival.css";

const NewArrival = () => {
  return (
    <>
      <h2>New Arrival</h2>
      <p className="newArrivalBtnDiv">
        {/* See All */}
        <button className="newArrivalBtn"> See All</button>
      </p>
      <div className="newArrival">
        {/* //card */}
        <div>
          <div className="card">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPALLEN-SOLLY-ADIT50996882FBF2D/1562779174843_0.jpg"
              alt="img"
            />
            <p>NICOLE BENISTI JASPER DOWN JACKET</p>
            <span className="strikethrough">$900</span>
            <span>From $439</span>
            <span>Save65%</span>
          </div>
          <div className="card">
            <img
              src="https://cdn-images.farfetch-contents.com/14/06/01/45/14060145_18349083_600.jpg"
              alt="img"
            />
            <p>GUCCI ACE INTERLOCKING G LEATHER SNEAKER</p>
            <span className="strikethrough">$950</span>
            <span>From $601</span>
            <span>Save45%</span>
          </div>
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="img"
            />
            <p>MACKAGE PATSY DOWN LEATHER-TRIM JACKET</p>
            <span className="strikethrough">$1200</span>
            <span>From $1345</span>
            <span>Save35%</span>
          </div>
          <div className="card">
            <img
              src="https://images.dsw.com/is/image/DSWShoes/512574_020_ss_03?impolicy=qlt-medium-high&imwidth=640&imdensity=1s"
              alt="img"
            />
            <p>STUART WEITZMAN KEELAN SUEDE TALL BOOT</p>
            <span className="strikethrough">$695</span>
            <span>From $354</span>
            <span>Save50%</span>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bNh9SRO2sSYXw0soMJdYM5bAnjOS1DmrGFkjxumdQ4VJTpB0qwMB4ik-v7av8HWcbkA&usqp=CAU"
              alt="img"
            />
            <p>NICOLE BENISTI JASPER DOWN JACKET</p>
            <span className="strikethrough">$900</span>
            <span>From $439</span>
            <span>Save65%</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NewArrival;
