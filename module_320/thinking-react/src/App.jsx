import './App.css'
import products from './data/products'
import FilterableProductTable from './component/FilterProductTabel'

function App() {
  return (
    <FilterableProductTable products={products} />
  );
}

export default App
