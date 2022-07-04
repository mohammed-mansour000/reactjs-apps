import React from "react";

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from "./api";

class App extends React.Component{
    state = {
        data: {},
        country: ''
    };
    //use async since fetchData() is async
    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log(fetchedData)
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        console.log(country)
        //fetch the data
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({ data: fetchedData, country: country });
    }
    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
               <Cards data={data}/>
               <CountryPicker  handleCountryChange={this.handleCountryChange}/>
               <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App;