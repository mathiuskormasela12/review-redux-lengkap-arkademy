const initialState = {
	nama: ''
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CHANGE_NAME': {
			return {
				...state,
				nama: action.payload.nama
			}
		}

		default: {
			return {
				...state
			}
		}
	}
}

export default userReducer;