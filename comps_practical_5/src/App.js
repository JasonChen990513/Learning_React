import Dropdown from "./components/dropdown";

function App(){
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Red', value: 'red'},
        {label: 'Red', value: 'red'},
    ]

    return <Dropdown options={options}/>
}


export default App;