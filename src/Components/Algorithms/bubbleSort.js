export const bblSort = (state) => {
    let arr = state.map((obj) => obj)
    let history = []

    history.push((arr.map((a) => {
        return { ...a }
    })))

    for (let i = 0; i < arr.length; i++) {
        // Last i elements are already in place
        for (let j = 0; j < (arr.length - i - 1); j++) {

            arr[j].color = 'white'
            arr[j + 1].color = 'white'

            history.push((arr.map((a) => {
                return { ...a }
            })))

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j].value > arr[j + 1].value) {

                arr[j].color = '#DC143C'
                arr[j + 1].color = '#DC143C'

                history.push((arr.map((a) => {
                    return { ...a }
                })))

                // If the condition is true then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            else {
                arr[j].color = '#32CD32'
                arr[j + 1].color = '#32CD32'

                history.push((arr.map((a) => {
                    return { ...a }
                })))
            }

            arr[j].color = '#293451'
            arr[j + 1].color = '#293451'


            history.push((arr.map((a) => {
                return { ...a }
            })))

        }
    }

    history.push((arr.map((a) => {
        return { ...a, color: '#32CD32' }
    })))

    history.push((arr.map((a) => {
        return { ...a }
    })))


    return history;
}


