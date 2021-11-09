import React, {useState, useEffect} from 'react'
import TransactionForm from './TransactionForm'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/transactionActions';

function TransactionList(props) {
    // const [list, setList] = useState(returnList);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    
    //  function returnList() {
    //     if(localStorage.getItem('transaction') == null){
    //         localStorage.setItem('transaction', JSON.stringify([]));
    //     }
    //     return JSON.parse(localStorage.getItem('transaction'));
    // }

    // const onAddOrEdit = (data) => {
    //     var list = returnList();
    //     if(currentIndex == -1)
    //         list.push(data);
    //     else
    //         list[currentIndex] = data
    //     localStorage.setItem('transaction', JSON.stringify(list));
    //     setList(list);
    //     setCurrentIndex(-1);
    // }

    // const handleEditEvent = (index) => {
    //     console.log(index)
    //     setCurrentIndex(index);
    // }

    const handleEditEvent = (index) => {
        props.updateTransactionIndex(index);
    }

    // const handleDeleteEvent = (index) => {
    //     console.log(index);
    //     var newList = [...list]
    //     newList.splice(index, 1);
    //     localStorage.setItem('transaction', JSON.stringify(newList));
    //     setList([...newList])
    //     setCurrentIndex(-1);
    // }

    const handleDeleteEvent = (index) => {
       props.deleteTransaction(index);
    }

    useEffect(() => {
        //setList(props.list);
        localStorage.setItem('transaction', JSON.stringify(props.list));
    }, [props.list])

    return (
        <div>
            {/* <TransactionForm 
                onAddOrEdit={onAddOrEdit}
                currentIndex={currentIndex} 
                list={list}
            /> */}
            <TransactionForm />
            <hr />
            <table>
                <tbody>
                    {
                        props.list.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.bankAccountNo}</td>
                                    <td>{item.ifsc}</td>
                                    <td>{item.bName}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <button onClick={() => {handleEditEvent(index)}}>
                                            Edit
                                        </button>
                                        <button onClick={() => {handleDeleteEvent(index)}}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateProps = state => {
    return {
        list: state.list
    }
}

const mapDispatchProps = dispatch => {
    return bindActionCreators({
        deleteTransaction: actions.Delete,
        updateTransactionIndex: actions.updateIndex
    }, dispatch);
}

export default connect(mapStateProps, mapDispatchProps)(TransactionList)
