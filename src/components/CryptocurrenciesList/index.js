import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyData = await response.json()
    const updatedData = currencyData.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      currencyLogo: eachCurrency.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="list-border-container">
          <div className="list-currency-container">
            <p className="coin-type">Coin Type</p>
            <div className="currency">
              <p className="units">USD</p>
              <p className="units">EURO</p>
            </div>
          </div>
          <ul className="item-container">
            {currencyList.map(eachList => (
              <CryptocurrencyItem key={eachList.id} currencyData={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrencyList
