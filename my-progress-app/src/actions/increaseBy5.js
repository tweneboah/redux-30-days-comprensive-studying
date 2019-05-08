const increaseBy5 = (value) =>{
    return {
        type:'INCREASE_BY_5',
        payload: {
            increaseBy5: value,
            Editor: 'Emmanuel'
        }
    }
}

export default increaseBy5;