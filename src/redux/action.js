export const FETCH_SHARES_PENDING = 'FETCH_SHARES_PENDING';
export const FETCH_SHARES_SUCCESS = 'FETCH_SHARES_SUCCESS';
export const FETCH_SHARES_ERROR = 'FETCH_SHARES_ERROR';

export function fetchSharesPending() {
    return {
        type: FETCH_SHARES_PENDING
    }
}

export function fetchSharesSuccess(shares) {
    return {
        type: FETCH_SHARES_SUCCESS,
        shares: shares
    }
}

export function fetchSharesError(error) {
    return {
        type: FETCH_SHARES_ERROR,
        error: error
    }
}