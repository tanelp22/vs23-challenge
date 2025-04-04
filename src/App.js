import Header from './components/Header.js'
import Meals from './components/Meals.js'
import { CartProvider } from './components/CartContext.js';

const App = () => {
 return (
    <>
    <CartProvider>
    <Header />
    <Meals />
     <h1>Food Order App</h1>
     </CartProvider>
    </>
  );
}

export default App;
