import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyData

  return (
    <li className="currency-item-container">
      <div className="currency-logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-euro-value">{usdValue}</p>
        <p className="usd-euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
