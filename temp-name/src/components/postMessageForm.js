import { Button, TextField, withStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import UseForm from './useForm'
import { connect } from 'react-redux'
import * as actions from '../actions/postMessage'
import ButterToast, { Cinnamon } from 'butter-toast'
import { AssignmentTurnedIn } from "@material-ui/icons"

const initializeValues = {
    title: '',
    message: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    form: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    postBtn: {
        width: '50%'
    }
})

function PostMessageForm({ classes, ...props }) {

    useEffect(() => {
        if(props.currentId != 0){
            setvalues({
                ...props.postMessageList.find(x => x._id == props.currentId)
            });
            seterrors({})
        }
    }, [props.currentId])

    const validate = () => {
        let temp = {...errors};
        temp.title = values.title ? "" : "This field is required";
        temp.message = values.message ? "" : "This field is required";
        seterrors({
            ...temp
        })
        return Object.values(temp).every(x => x==""); //check if all error fields are empty so its validate 
    }

    const { 
            values, 
            setvalues, 
            errors, 
            seterrors, 
            handleInputChange, 
            resetForm
        } = UseForm(initializeValues, props.setCurrentId);

    const handleSubmit = (e) => {
        e.preventDefault();
        const onSuccess = () => {ButterToast.raise({
            content: <Cinnamon.Crisp 
                        title="Post Box" 
                        content="Submitted Successfully!" 
                        scheme={Cinnamon.Crisp.SCHEME_PURPLE} 
                        icon={<AssignmentTurnedIn />}
                        />
        })
        resetForm();
    }
        if(validate()){
            if(props.currentId == 0)
                props.createPostMessage(values, onSuccess);
            else
                props.updatePostMessage(props.currentId, values, onSuccess)
        }
    }


    return (
       <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>   
           <TextField 
                name="title"
                variant="outlined"
                label="title"
                fullWidth
                value={values.title}
                {...(errors.title && {error: true, helperText: errors.title})}
                onChange={(e) => handleInputChange(e)}
                />
           <TextField 
                name="message"
                variant="outlined"
                label="message"
                fullWidth
                value={values.message}
                multiline
                rows={4}
                {...(errors.message && {error: true, helperText: errors.message})}
                onChange={(e) => handleInputChange(e)}
           />
           <Button 
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                className={classes.postBtn}
           >Submit</Button>
       </form>
    )
}

const mapStateProp = state => ({
    postMessageList: state.postMessage.list
})
const mapActionProps = {
    createPostMessage: actions.create,
    updatePostMessage: actions.update
}

export default connect(mapStateProp, mapActionProps)(withStyles(styles)(PostMessageForm))
