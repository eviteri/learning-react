import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFive}  />
                <hr />
                <button onClick={ () => this.props.onStoreResult(this.props.ctr) }>Store Result</button>
                <ul>
                    {this.props.storedResults.map( strResult => (
                        <li key={strResult.id} onClick={ () => this.props.onDeleteResult(strResult.id) }>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

// will recieve the state 
const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter, //this will match the name given in index.js  
        storedResults: state.res.results //this will match the name given in index.js 
    };
};

//will receive the dispatch function 
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddFive: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtractFive: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);