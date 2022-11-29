import "./App.css";
import loader from "./loader.gif";
import React, { useEffect } from "react";
import { CurrencyHandler } from "./hook/currency";

function App() {
  const { rates, isLoading, getRates } = CurrencyHandler();

  useEffect(() => {
    getRates();
  }, [getRates]);

  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="front header">
            <div className="details">
              <div className="flexbox">
                <div className="group" id="name">
                  <p className="label-header">Currency</p>
                </div>

                <div className="group" id="expiration">
                  <p className="label-header">We Buy</p>
                </div>

                <div className="group" id="expiration">
                  <p className="label-header">Exchange Rate</p>
                </div>

                <div className="group" id="expiration">
                  <p className="label-header">We Sell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="loader"><img src={loader}/></div>
        ) : (
          rates?.map((val, idx) => {
            return (
              <div className="card" id="card" key={idx}>
                <div className="front">
                  <div className="details">
                    <div className="flexbox">
                      <div className="group" id="name">
                        <p className="name">{val.currency}</p>
                      </div>

                      <div className="group" id="expiration">
                        <p className="expiration">{val.sellRate}</p>
                      </div>

                      <div className="group" id="expiration">
                        <p className="expiration">{val.normalRate}</p>
                      </div>

                      <div className="group" id="expiration">
                        <p className="expiration">{val.buyRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="notes">
        <i>
          Rates are based on 1 USD. This application uses API from
          https://currencyfreaks.com/
        </i>
      </div>
    </div>
  );
}

export default App;
