import SideBar from "./components/sidebar";
import Route from "./components/route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";


function App(){
    return (    
    <div className=" container mx-auto grid grid-cols-6 gap-4 mt-4">
        <SideBar></SideBar>
        <div className="col-span-5">
            <Route path='/accordion'>
                <AccordionPage/>
            </Route>
            <Route path='/'>
                <DropdownPage />
            </Route>
            <Route path='/button'>
                <ButtonPage />
            </Route>
        </div>
    </div>
    );
}


export default App; 