import ItemListContainer from "./Components/ItemListContainer";
import  Navbar  from "./Components/Navbar";
import CartWidget from "./Components/CartWidget";
import { ChakraProvider } from "@chakra-ui/react";


const App = () => {
  return (
    <ChakraProvider>
    <Navbar/>
    <itemListContainer greeting={"Bienvenidos a Iuris Help"}/>
    </ChakraProvider>
  );
};

export default App;




