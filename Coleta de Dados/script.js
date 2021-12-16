//Insertion Sort

insertionSort = (array, pos) => {
    let vetor = [...array];
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let tempoExecucao = 0;
    let result = []
    let timestamp = Date.now()

    for (outer = 1; outer < vetor.length; outer++) {

        for (inner = 0; inner < outer; inner++) {

            if (vetor[outer] < vetor[inner]) {

                numeroTrocas++;
                const [element] = vetor.splice(outer, 1);
                vetor.splice(inner, 0, element);
            }
            numeroComparacoes++;
        }
    }
    let timestampEnd = Date.now()

    result.push(numeroComparacoes, numeroTrocas, vetor, timestampEnd - timestamp)
    return result
}



//Selection Sort

selectionSort = (array, pos) => {
    let vetor = [...array];
    let n = vetor.length;
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let tempoExecucao = 0;
    //console.log(vetor)
    let result = []
    let timestamp = Date.now()

    for (let i = 0; i < n; i++) {
        let min = i;


        for (let j = i + 1; j < n; j++) {

            if (vetor[j] < vetor[min]) {
                min = j;
            }
            numeroComparacoes++
        }
        if (min != i) {
            //  console.log(vetor)
            let tmp = vetor[i];
            vetor[i] = vetor[min];
            vetor[min] = tmp;
            numeroTrocas++
            // console.log("chegou")      //    console.log(vetor)

        }

        numeroComparacoes++
    }
    let timestampEnd = Date.now()

    result.push(numeroComparacoes, numeroTrocas, vetor, timestampEnd - timestamp)
    return result
}



//Merge Sort

mergeSort = (array, pos) => {
    let vetor = [...array];
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let result = []
    let timestamp = Date.now()

    if (vetor.length < 2) {
        return vetor
    }
    numeroComparacoes++
    const mid = Math.floor(vetor.length / 2)
    const smallOne = vetor.slice(0, mid)
    const smallTwo = vetor.slice(mid)

    sort(mergeSort(smallOne), mergeSort(smallTwo), numeroTrocas, numeroComparacoes, pos)

    let timestampEnd = Date.now()

    result.push(numeroComparacoes, numeroTrocas, vetor, timestampEnd - timestamp)
    return result
}

sort = (smallOne, smallTwo, trocas, comparacoes, pos) => {
    const sorted = []
    while (smallOne.length && smallTwo.length) {
        trocas++
        if (smallOne[0] <= smallTwo[0]) {
            sorted.push(smallOne.shift())

        } else {
            sorted.push(smallTwo.shift())
        }
        comparacoes += 2
    }
    const output = [...sorted, ...smallOne, ...smallTwo]

    return output
}



//Heap Sort
const buildMaxHeap = (arr) => {
    let i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
        heapify(arr, i, arr.length);
        i -= 1;
    }
}

const heapify = (heap, i, max) => {
    let index;
    let leftChild;
    let rightChild;

    while (i < max) {
        index = i;
        leftChild = 2 * i + 1;

        rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        if (index === i) {
            return;
        }

        swap(heap, i, index);

        i = index;
    }
}

const swap = (arr, firstItemIndex, lastItemIndex) => {

    const temp = arr[firstItemIndex];

    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
}

const heapSort = (array, pos) => {
    let vetor = [...array];
    let numeroComparacoes = 0
    let numeroTrocas = 0
    let result = []
    let timestamp = Date.now()

    buildMaxHeap(vetor);
    numeroComparacoes++

    lastElement = vetor.length - 1;

    while (lastElement > 0) {
        numeroComparacoes++
        swap(vetor, 0, lastElement);
        numeroTrocas++
        heapify(vetor, 0, lastElement);
        numeroTrocas++
        numeroComparacoes += 4
        lastElement -= 1;
    }
    let timestampEnd = Date.now()

    result.push(numeroComparacoes, numeroTrocas, vetor, timestampEnd - timestamp)
    return result
}



//Quick Sort
quickSort = (array, pos) => {
    let vetor = [...array];
    let numeroTrocas = 0
    let numeroComparacoes = 0
    let result = []
    let timestamp = Date.now()

    if (vetor.length < 2) {
        return vetor
    }
    numeroComparacoes++
    const chosenIndex = vetor.length - 1
    const chosen = vetor[chosenIndex]
    const a = []
    const b = []
    for (let i = 0; i < chosenIndex; i++) {
        numeroTrocas++
        const temp = vetor[i]
        temp < chosen ? a.push(temp) : b.push(temp)
        numeroComparacoes++
    }

    const output = [...quickSort(a), chosen, ...quickSort(b)]

    let timestampEnd = Date.now()

    result.push(numeroComparacoes, numeroTrocas, vetor, timestampEnd - timestamp)
    return result
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function Sort() {
    let vector = [2, 3, 5, 6, 6123, 13123, 51324, 56234, 213121, 21312, 1231221]
    
    let arrayRan1 = [];
    let arrayRan2 = [];
    let arrayRan3 = [];
    let arrayRan4 = [];
    let arrayRan5 = [];

    let arrayCres1 = [];
    let arrayCres2 = [];
    let arrayCres3 = [];
    let arrayCres4 = [];
    let arrayCres5 = [];

    let arrayDecres1 = [];
    let arrayDecres2 = [];
    let arrayDecres3 = [];
    let arrayDecres4 = [];
    let arrayDecres5 = [];

    for (let i = 0 ; i < 800 ; i++){
        arrayRan1.push(getRandom(0,9999));
        arrayCres1.push(getRandom(0,9999));
        arrayDecres1.push(getRandom(0,9999));
    }

    for (let i = 0 ; i < 5600 ; i++){
        arrayRan2.push(getRandom(0,9999));
        arrayCres2.push(getRandom(0,9999));
        arrayDecres2.push(getRandom(0,9999));
    }

    for (let i = 0 ; i < 14800 ; i++){
        arrayRan3.push(getRandom(0,9999));
        arrayCres3.push(getRandom(0,9999));
        arrayDecres3.push(getRandom(0,9999));
    }

    for (let i = 0 ; i < 56800 ; i++){
        arrayRan4.push(getRandom(0,9999));
        arrayCres4.push(getRandom(0,9999));
        arrayDecres4.push(getRandom(0,9999));
    }

    for (let i = 0 ; i < 186000 ; i++){
        arrayRan5.push(getRandom(0,9999));
        arrayCres5.push(getRandom(0,9999));
        arrayDecres5.push(getRandom(0,9999));
    }

    console.log("Insertion Sort:\n")
    console.log(insertionSort(arrayRan2))
    console.log("Selection Sort:\n")
    console.log(selectionSort(arrayRan2))
    console.log("Heap Sort:\n")
    console.log(heapSort(arrayRan2))
    console.log("Merge Sort:\n")
    console.log(mergeSort(arrayRan2))
    console.log("Quick Sort:\n")
    console.log(quickSort(arrayRan2))
}

Sort()