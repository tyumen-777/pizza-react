import React from "react";
import axios from "axios";
// import store from './redux/store'
import { connect } from 'react-redux';


import {Header} from "./Components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas} from "./redux/actions/pizzas";

// function App() {
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//     }, []);
//
//     return (
//         <div className="wrapper">
//
//             <Header/>
//             <div className="content">
//                 <Route exact path='/' render={() => <Home items={[]}/>}/>
//                 <Route exact path='/cart' component={Cart}/>
//             </div>
//         </div>
//     )
//
// }

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
           this.props.setPizzas(data.pizzas);
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
