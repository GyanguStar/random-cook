import {useEffect} from 'react'
import Header from './component/Header'
import SearchForm from './component/SearchForm'
import FoodTable from './component/FoodTable'
import { openMealDB } from './util/indexDB'

import './App.css'

function App() {
    useEffect(() => {
        openMealDB();
    }, []);

    return (
        <div className="App">
            <Header />
            <SearchForm />
            <FoodTable />
        </div>
    )
}

export default App
