import { useFetch } from "../hooks/useFetch";

function CountriesList() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  return (
    <div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data &&
          data.map((country) => {
            const {
              name: { common },
              flags: { svg },
              population,
              region,
              capital

            } = country;
            console.log(country)
            return (
              <li key={common} className="card w-96 glass">
                <figure>
                  <img src={svg} alt="country's flag image"/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{common}</h2>
                  <div className="card-actions justify-end flex flex-col">
                  <p>Population: <span>{population}</span></p>
                  <p>Region: <span>{region}</span></p>
                  <p>Capital: <span>{capital}</span></p>
                  </div>
                </div>
              </li>

              // <li className="card w-96 bg-base-100 shadow-xl image-full">
              //   <figure>
              //     <img src={svg} alt="country's flag image" />
              //   </figure>
              //   <div className="card-body">
              //     <h2 className="card-title">{common}</h2>
              //     <p>If a dog chews shoes whose shoes does he choose?</p>
              //     <div className="card-actions justify-end"></div>
              //   </div>
              // </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CountriesList;
