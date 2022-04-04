import { Action, Reducer } from 'redux';
// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface ProductsInfo {
    name: string,
    description: string,
    price: number,
    family: string
}
export interface ProductsList {
    product: ProductsInfo[];
}


let ProductState: object = {};

function setState(val: object) {
    ProductState = val;
}
export async function getproducts() {
    console.log("updating...");
    await fetch("https://localhost:44367/products/getlist").then(response => response.json()).then(function (result) { setState(result) });
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detec    tion that works even after serialization/deserialization.

export interface RefreshAction { type: 'REFRESH' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = RefreshAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    refresh: () => ({ type: 'REFRESH' } as RefreshAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export const reducer = (state = ProductState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    if (state != undefined) {
        switch (action.type) {
            case 'REFRESH':
                getproducts();
                return { product: ProductState };
            default:
                return { product: ProductState };
        }
    }
    return state;
}