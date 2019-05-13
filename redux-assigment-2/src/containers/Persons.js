import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddUser} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeleteUser(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.person.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (name, age) => dispatch({type: actionTypes.ADD_USER, payLoad: {name:name, age:age} }),
        onDeleteUser: (id) => dispatch({type: actionTypes.DELETE_USER, id:id}),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);