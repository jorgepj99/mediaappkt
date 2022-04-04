import { Action, Reducer } from 'redux';

export interface formdata {
    name: string | undefined,
    description: string | undefined,
    family: string | undefined,
    price: string | undefined
}
export interface productdata {
    name: string ,
    description: string,
    family: string,
    price: number
}
const initialState = { name: "",family:"",description:"",price:"" };

export interface AddAction { type: 'Add',value: any };
export type KnownAction = AddAction;
export const actionCreators = {
    addproduct: (product: formdata) => ({ type: 'Add',value:product } as AddAction)
};

export const reducer:Reducer<formdata> = (state=initialState, incomingAction: Action):formdata => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'Add':
            console.log(state);
            console.log(action.value);
            const url = "https://localhost:44367/products/add";
            const request = {
                method: 'POST',
                body: JSON.stringify(action.value),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            };
            fetch(url, request).then(response => response.json());
            location.href = "/product";
            return state;
        default:
            return state;
    }
}