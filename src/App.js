import React from "react";
import axios from "axios";
// import store from './redux/store'
import { useDispatch } from 'react-redux';


import {Header} from "./Components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
           dispatch(setPizzas(data))
        });
    }, [])
    return(
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    )
}

export default App;

// export default connect( (state) => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters,
//     };
// }, (dispatch) =>  {
//     return {
//         setPizzas: (items) => dispatch(setPizzas(items))
//     }
// })(App);
