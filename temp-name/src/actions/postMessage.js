import api from "./api"

export const ACTION_TYPES = {
   CREATE : 'CREATE',
   UPDATE : 'UPDATE',
   DELETE: 'DELETE',
   FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {
    api.postMessage().fetchAll()
    .then((result) => {
        console.log(result)
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: result.data
        })
    }).catch((err) => {
        console.log(err)
    });
}

export const create = (data, onSuccess) => dispatch => {
    api.postMessage().create(data)
    .then((result) => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: result.data
        });
        onSuccess();
    }).catch((err) => {
        console.log(err)
    });
}

export const update = (id, data, onSuccess) => dispatch => {
    api.postMessage().update(data, id)
    .then((result) => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: result.data
        });
        onSuccess();
    }).catch((err) => {
        console.log(err)
    });
}

export const Delete = (id, onSuccess) => dispatch => {
    api.postMessage().delete(id)
    .then((result) => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        });
        onSuccess();
    }).catch((err) => {
        console.log(err)
    });
}