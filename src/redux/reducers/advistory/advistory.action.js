import types from './advistory.types';

export const advistoryForm = (data) => (
    {
        type: types.ADVISTORY_FORM,
        payload: data
    }
)

export const chooseProduct = (data) => (
    {
        type: types.CHOOSE_PRODUCT,
        payload: data
    }
)
