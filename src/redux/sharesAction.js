import {fetchSharesPending, fetchSharesSuccess, fetchSharesError} from './action';

export function fetchShares() {
    return dispatch => {
        dispatch(fetchSharesPending());
        fetch('https://demo5329014.mockable.io/shares')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchSharesSuccess(res.shares));
            return res.shares;
        })
        .catch(error => {
            dispatch(fetchSharesError(error));
        })
    }
}