import {useCallback, useState} from 'react'
import { BASE_URL, API_KEY } from "../configs/constants";

export const CurrencyHandler = () => {
    const [rates, setRates] = useState(null)
    const [isLoading, setIsLoading] = useState(false) 
    const [isError, setIsError] = useState(false)

    const getRates = useCallback(async () => {
        setIsLoading(true)

        let currencyRates = {
          isError: false,
          data: [],
        };
    
        try {
            const request = await fetch(
              `${BASE_URL}/latest?apikey=${API_KEY}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`
            );
            const response = await request.json();
            if (request.status === 200) {
              Object.entries(response?.rates).forEach(([key, value]) => {
                const rate = parseFloat(value)
                const currencyRate = {
                  currency: key,
                  normalRate: rate,
                  sellRate: rate - (rate * 0.05),
                  buyRate: rate + (rate * 0.05),
                };
        
                currencyRates.data.push(currencyRate);
              });
            }
          
        } catch (error) {
          console.log(error);
          setIsLoading(false)
          setIsError(true)
        } finally {
          setRates(currencyRates.data);
          setIsLoading(false)
        }
      }, []);
    
    return {
        rates,
        isLoading,
        isError,
        getRates,
    }
}