import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/transactionActions';

function TransactionForm(props) {
    // var initialData = {
    //     bankAccountNo: '',
    //     ifsc: '',
    //     bName: '',
    //     amount: '' 
    // }
    const [data, setData] = useState({
        ...returnStateObject()
    });

    const handleInputChanges = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setData({...returnStateObject()})
    //     props.onAddOrEdit(data);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.currentIndex === -1)
            props.insertTransaction(data);
        else
            props.updateTransaction(data);
    }

    useEffect(() => {
        setData({...returnStateObject()})
        console.log(data)
    }, [props.currentIndex, props.list]);

    function returnStateObject(){
        if(props.currentIndex === -1){
            return {
                bankAccountNo: '',
                ifsc: '',
                bName: '',
                amount: ''
            }
        }else{
            return props.list[props.currentIndex];
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="bankAccountNo" placeholder="A/C No." value={data.bankAccountNo} onChange={handleInputChanges}></input>
                </div>
                <br/>
                <div>
                    <input name="ifsc" placeholder="IFSC" value={data.ifsc} onChange={handleInputChanges}></input>
                </div>
                <br/>
                <div>
                    <input name="bName" placeholder="Bank Name" value={data.bName} onChange={handleInputChanges}></input>
                </div>
                <br/>
                <div>
                    <input name="amount" placeholder="Amount" value={data.amount} onChange={handleInputChanges}></input>
                </div>
                <br/>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

const mapStateProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch);
}


export default connect(mapStateProps, mapDispatchProps)(TransactionForm)
