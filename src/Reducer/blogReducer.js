export const initialState={
	category:"",
	title:"",
	content:"",
	loading: false,
	error: null,
	}

	export function blogReducer(state, action){
		switch(action.type){
			case "SET_FIELD":
				return {
					...state,
					[action.field]: action.value,
				}
				case "SET_LOADING":
					return {
						...state, loading: action.payload
					}
				case "SET_ERROR":
					return {
						...state, error: action.payload
					}
				case "RESET":
					return initialState;
				
				default:
					return state;
		}
	}