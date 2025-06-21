const countryContainer = document.querySelector('.countries-container')

fetch(
  'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population'
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country)
      const countryCard = document.createElement('a')
      countryCard.classList.add('country-card')

      const cardHTML = `
    <img src="${country.flags.svg}" alt="" />
    <div class="card-text">
        <h3>${country.name.common}</h3>
         <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
    </div>
`
      countryCard.innerHTML = cardHTML
      countryContainer.append(countryCard)
    })
  })
