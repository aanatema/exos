//bubble sort

const unsortedArray = [8, -2, 2, 1, 0, 9, 6];

const bubbleSort = array => {
    let swapped;

    do {
        //false = no iteration if not needed
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                //we change their position according to their value
                const leftSideElement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = leftSideElement;

                swapped = true;
            }
        }

    } while (swapped) {
        return array;
    }
}

console.log(bubbleSort(unsortedArray));
