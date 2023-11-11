import CountriesList from "../components/CountriesList";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <div>
      <SearchForm/>
      <CountriesList />
    </div>
  );
}

export default Home;
