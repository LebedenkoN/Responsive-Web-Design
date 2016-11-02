import { errorActionInstance } from 'common/utils';

export const SHOW_ACTION_ERROR = 'SHOW_ACTION_ERROR';
export const HIDE_ACTION_ERROR = 'HIDE_ACTION_ERROR';
export const SHOW_ACTION_PROGRESS = 'SHOW_ACTION_PROGRESS';
export const HIDE_ACTION_PROGRESS = 'HIDE_ACTION_PROGRESS';

export const showActionProgress = (progressComponent, message) => ({
    type: 'SHOW_ACTION_PROGRESS',
    payload: { progressComponent, message }
});
export const hideActionProgress = (progressComponent) => ({
    type: 'HIDE_ACTION_PROGRESS',
    payload: { progressComponent }
});
export const showActionError = (errorHandler, message) => ({
    type: 'SHOW_ACTION_ERROR',
    payload: errorActionInstance(errorHandler, message)
});

export const hideActionError = (errorHandler) => ({
    type: 'HIDE_ACTION_ERROR',
    payload: errorActionInstance(errorHandler)
});
