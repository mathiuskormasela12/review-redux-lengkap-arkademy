export const handleChange = (value) => {
	return {
		type: 'CHANGE_NAME',
		payload: {
			nama: value
		}
	}
}