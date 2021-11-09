import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/postMessage'
import { Grid, List, ListItem, ListItemText, Paper, Typography, withStyles, Divider, Button } from '@material-ui/core';
import PostMessageForm from './postMessageForm';
import ButterToast, { Cinnamon } from 'butter-toast'
import { DeleteSweep } from "@material-ui/icons"

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDev: {
        textAlign: 'center'
    }
})

function PostMessages({classes, ...props}) {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllPostMessages()
    }, [])

    const onDelete = (id) => {
        const onSuccess = () => {ButterToast.raise({
            content: <Cinnamon.Crisp 
                        title="Post Box" 
                        content="Deleted Successfully!" 
                        scheme={Cinnamon.Crisp.SCHEME_PURPLE} 
                        icon={<DeleteSweep />}
                        />
        })
    }
        if(window.confirm("Are You Sure ?")){
            props.deletePostMessage(id, onSuccess)
        }
    }
    return (
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <PostMessageForm {...{currentId, setCurrentId}}/>
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <Paper className={classes.paper}>
                   <List>
                       {
                           props.postMessageList.map((post, index) => {
                               return (
                                   <Fragment key={index}>
                                       <ListItem>
                                           <ListItemText>
                                               <Typography variant="h5">
                                                    {post.title}
                                               </Typography>
                                               <div>
                                                   {post.message}
                                               </div>
                                               <div className={classes.actionDev}>
                                                   <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => setCurrentId(post._id)}
                                                   >
                                                       Edit
                                                   </Button>
                                                   <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => onDelete(post._id)}
                                                   >
                                                       Delete 
                                                   </Button>
                                               </div>
                                           </ListItemText>
                                       </ListItem>
                                       <Divider component="li" />
                                   </Fragment>
                               )
                           })
                       }
                   </List>
                </Paper>    
            </Grid>
        </Grid>
    )
}

const mapStateProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionProps = {
    fetchAllPostMessages : actions.fetchAll,
    deletePostMessage: actions.Delete
}
//props.fetchAllPostMessages

export default connect(mapStateProps, mapActionProps)(withStyles(styles)(PostMessages));
