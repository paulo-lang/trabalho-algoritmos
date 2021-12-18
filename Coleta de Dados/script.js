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

mergeSort = (array) => {
    let vetor = [...array];
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let result = []
    let sortr

    let timestamp = Date.now()

    if (vetor.length < 2) {
        return vetor
    }
    numeroComparacoes++
    const mid = Math.floor(vetor.length / 2)
    const smallOne = vetor.slice(0, mid)
    const smallTwo = vetor.slice(mid)

    sortr = sort(mergeSort(smallOne), mergeSort(smallTwo), numeroTrocas, numeroComparacoes)

    let timestampEnd = Date.now()

    result.push(sortr[0], sortr[1], vetor, timestampEnd - timestamp)

    return result
}

sort = (smallOne, smallTwo, trocas, comparacoes) => {
    const sorted = []
    let result = []

    while (smallOne.length && smallTwo.length) {
        trocas++
        if (smallOne[0] <= smallTwo[0]) {
            sorted.push(smallOne.shift())

        } else {
            sorted.push(smallTwo.shift())
        }
        comparacoes += 2
    }

    result.push(comparacoes, trocas)
    const output = [...sorted, ...smallOne, ...smallTwo]

    return result
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
    const chosenIndex = Math.floor(vetor.length / 2)
    const chosen = vetor[chosenIndex]
    const a = []
    const b = []
    for (let i = 0; i < chosenIndex; i++) {
        numeroTrocas++
        const temp = vetor[i]
        temp < chosen ? a.push(temp) : b.push(temp)
        numeroComparacoes++
    }

    quickSort(a)
    quickSort(b)

    let timestampEnd = Date.now()

    result.push(numeroComparacoes, numeroTrocas, vetor, timestampEnd - timestamp)
    return result
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function Sort() {

    let insertionRan = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let insertionCres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let insertionDecres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }

    let selectionRan = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let selectionCres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let selectionDecres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }

    let heapRan = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let heapCres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let heapDecres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }

    let mergeRan = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let mergeCres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let mergeDecres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }

    let quickRan = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let quickCres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }
    let quickDecres = {
        medComparacoes: 0,
        medTrocas: 0,
        medTempo: 0
    }

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

    for (let i = 0; i < 800; i++) {
        arrayRan1.push(getRandom(0, 9999));
        arrayCres1.push(getRandom(0, 9999));
        arrayDecres1.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 2000; i++) {
        arrayRan2.push(getRandom(0, 9999));
        arrayCres2.push(getRandom(0, 9999));
        arrayDecres2.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 16000; i++) {
        arrayRan3.push(getRandom(0, 9999));
        arrayCres3.push(getRandom(0, 9999));
        arrayDecres3.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 42000; i++) {
        arrayRan4.push(getRandom(0, 9999));
        arrayCres4.push(getRandom(0, 9999));
        arrayDecres4.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 58000; i++) {
        arrayRan5.push(getRandom(0, 9999));
        arrayCres5.push(getRandom(0, 9999));
        arrayDecres5.push(getRandom(0, 9999));
    }

    arrayCres1.sort(function (a, b) {
        return a - b;
    })
    arrayCres2.sort(function (a, b) {
        return a - b;
    })
    arrayCres3.sort(function (a, b) {
        return a - b;
    })
    arrayCres4.sort(function (a, b) {
        return a - b;
    })
    arrayCres5.sort(function (a, b) {
        return a - b;
    })

    arrayDecres1.sort(function (a, b) {
        return b - a;
    })
    arrayDecres2.sort(function (a, b) {
        return b - a;
    })
    arrayDecres3.sort(function (a, b) {
        return b - a;
    })
    arrayDecres4.sort(function (a, b) {
        return b - a;
    })
    arrayDecres5.sort(function (a, b) {
        return b - a;
    })


    let rinsertion1 = insertionSort(arrayRan1)
    let rinsertion2 = insertionSort(arrayRan2)
    let rinsertion3 = insertionSort(arrayRan3)
    let rinsertion4 = insertionSort(arrayRan4)
    let rinsertion5 = insertionSort(arrayRan5)

    insertionRan.medComparacoes += (rinsertion1[0] + rinsertion2[0] + rinsertion3[0] + rinsertion4[0] + rinsertion5[0]) / 5
    insertionRan.medTrocas += (rinsertion1[1] + rinsertion2[1] + rinsertion3[1] + rinsertion4[1] + rinsertion5[1]) / 5
    insertionRan.medTempo += (rinsertion1[3] + rinsertion2[3] + rinsertion3[3] + rinsertion4[3] + rinsertion5[3]) / 5

    rinsertion1 = insertionSort(arrayCres1)
    rinsertion2 = insertionSort(arrayCres2)
    rinsertion3 = insertionSort(arrayCres3)
    rinsertion4 = insertionSort(arrayCres4)
    rinsertion5 = insertionSort(arrayCres5)

    insertionCres.medComparacoes += (rinsertion1[0] + rinsertion2[0] + rinsertion3[0] + rinsertion4[0] + rinsertion5[0]) / 5
    insertionCres.medTrocas += (rinsertion1[1] + rinsertion2[1] + rinsertion3[1] + rinsertion4[1] + rinsertion5[1]) / 5
    insertionCres.medTempo += (rinsertion1[3] + rinsertion2[3] + rinsertion3[3] + rinsertion4[3] + rinsertion5[3]) / 5

    rinsertion1 = insertionSort(arrayDecres1)
    rinsertion2 = insertionSort(arrayDecres2)
    rinsertion3 = insertionSort(arrayDecres3)
    rinsertion4 = insertionSort(arrayDecres4)
    rinsertion5 = insertionSort(arrayDecres5)

    insertionDecres.medComparacoes += (rinsertion1[0] + rinsertion2[0] + rinsertion3[0] + rinsertion4[0] + rinsertion5[0]) / 5
    insertionDecres.medTrocas += (rinsertion1[1] + rinsertion2[1] + rinsertion3[1] + rinsertion4[1] + rinsertion5[1]) / 5
    insertionDecres.medTempo += (rinsertion1[3] + rinsertion2[3] + rinsertion3[3] + rinsertion4[3] + rinsertion5[3]) / 5


    let rselection1 = selectionSort(arrayRan1)
    let rselection2 = selectionSort(arrayRan2)
    let rselection3 = selectionSort(arrayRan3)
    let rselection4 = selectionSort(arrayRan4)
    let rselection5 = selectionSort(arrayRan5)

    selectionRan.medComparacoes += (rselection1[0] + rselection2[0] + rselection3[0] + rselection4[0] + rselection5[0]) / 5
    selectionRan.medTrocas += (rselection1[1] + rselection2[1] + rselection3[1] + rselection4[1] + rselection5[1]) / 5
    selectionRan.medTempo += (rselection1[3] + rselection2[3] + rselection3[3] + rselection4[3] + rselection5[3]) / 5

    rselection1 = selectionSort(arrayCres1)
    rselection2 = selectionSort(arrayCres2)
    rselection3 = selectionSort(arrayCres3)
    rselection4 = selectionSort(arrayCres4)
    rselection5 = selectionSort(arrayCres5)

    selectionCres.medComparacoes += (rselection1[0] + rselection2[0] + rselection3[0] + rselection4[0] + rselection5[0]) / 5
    selectionCres.medTrocas += (rselection1[1] + rselection2[1] + rselection3[1] + rselection4[1] + rselection5[1]) / 5
    selectionCres.medTempo += (rselection1[3] + rselection2[3] + rselection3[3] + rselection4[3] + rselection5[3]) / 5

    rselection1 = selectionSort(arrayDecres1)
    rselection2 = selectionSort(arrayDecres2)
    rselection3 = selectionSort(arrayDecres3)
    rselection4 = selectionSort(arrayDecres4)
    rselection5 = selectionSort(arrayDecres5)

    selectionDecres.medComparacoes += (rselection1[0] + rselection2[0] + rselection3[0] + rselection4[0] + rselection5[0]) / 5
    selectionDecres.medTrocas += (rselection1[1] + rselection2[1] + rselection3[1] + rselection4[1] + rselection5[1]) / 5
    selectionDecres.medTempo += (rselection1[3] + rselection2[3] + rselection3[3] + rselection4[3] + rselection5[3]) / 5


    let rheap1 = heapSort(arrayRan1)
    let rheap2 = heapSort(arrayRan2)
    let rheap3 = heapSort(arrayRan3)
    let rheap4 = heapSort(arrayRan4)
    let rheap5 = heapSort(arrayRan5)

    heapRan.medComparacoes += (rheap1[0] + rheap2[0] + rheap3[0] + rheap4[0] + rheap5[0]) / 5
    heapRan.medTrocas += (rheap1[1] + rheap2[1] + rheap3[1] + rheap4[1] + rheap5[1]) / 5
    heapRan.medTempo += (rheap1[3] + rheap2[3] + rheap3[3] + rheap4[3] + rheap5[3]) / 5

    rheap1 = heapSort(arrayCres1)
    rheap2 = heapSort(arrayCres2)
    rheap3 = heapSort(arrayCres3)
    rheap4 = heapSort(arrayCres4)
    rheap5 = heapSort(arrayCres5)

    heapCres.medComparacoes += (rheap1[0] + rheap2[0] + rheap3[0] + rheap4[0] + rheap5[0]) / 5
    heapCres.medTrocas += (rheap1[1] + rheap2[1] + rheap3[1] + rheap4[1] + rheap5[1]) / 5
    heapCres.medTempo += (rheap1[3] + rheap2[3] + rheap3[3] + rheap4[3] + rheap5[3]) / 5

    rheap1 = heapSort(arrayDecres1)
    rheap2 = heapSort(arrayDecres2)
    rheap3 = heapSort(arrayDecres3)
    rheap4 = heapSort(arrayDecres4)
    rheap5 = heapSort(arrayDecres5)

    heapDecres.medComparacoes += (rheap1[0] + rheap2[0] + rheap3[0] + rheap4[0] + rheap5[0]) / 5
    heapDecres.medTrocas += (rheap1[1] + rheap2[1] + rheap3[1] + rheap4[1] + rheap5[1]) / 5
    heapDecres.medTempo += (rheap1[3] + rheap2[3] + rheap3[3] + rheap4[3] + rheap5[3]) / 5


    let rmerge1 = mergeSort(arrayRan1)
    let rmerge2 = mergeSort(arrayRan2)
    let rmerge3 = mergeSort(arrayRan3)
    let rmerge4 = mergeSort(arrayRan4)
    let rmerge5 = mergeSort(arrayRan5)

    mergeRan.medComparacoes += (rmerge1[0] + rmerge2[0] + rmerge3[0] + rmerge4[0] + rmerge5[0]) / 5
    mergeRan.medTrocas += (rmerge1[1] + rmerge2[1] + rmerge3[1] + rmerge4[1] + rmerge5[1]) / 5
    mergeRan.medTempo += (rmerge1[3] + rmerge2[3] + rmerge3[3] + rmerge4[3] + rmerge5[3]) / 5

    rmerge1 = mergeSort(arrayCres1)
    rmerge2 = mergeSort(arrayCres2)
    rmerge3 = mergeSort(arrayCres3)
    rmerge4 = mergeSort(arrayCres4)
    rmerge5 = mergeSort(arrayCres5)

    mergeCres.medComparacoes += (rmerge1[0] + rmerge2[0] + rmerge3[0] + rmerge4[0] + rmerge5[0]) / 5
    mergeCres.medTrocas += (rmerge1[1] + rmerge2[1] + rmerge3[1] + rmerge4[1] + rmerge5[1]) / 5
    mergeCres.medTempo += (rmerge1[3] + rmerge2[3] + rmerge3[3] + rmerge4[3] + rmerge5[3]) / 5

    rmerge1 = mergeSort(arrayDecres1)
    rmerge2 = mergeSort(arrayDecres2)
    rmerge3 = mergeSort(arrayDecres3)
    rmerge4 = mergeSort(arrayDecres4)
    rmerge5 = mergeSort(arrayDecres5)

    mergeDecres.medComparacoes += (rmerge1[0] + rmerge2[0] + rmerge3[0] + rmerge4[0] + rmerge5[0]) / 5
    mergeDecres.medTrocas += (rmerge1[1] + rmerge2[1] + rmerge3[1] + rmerge4[1] + rmerge5[1]) / 5
    mergeDecres.medTempo += (rmerge1[3] + rmerge2[3] + rmerge3[3] + rmerge4[3] + rmerge5[3]) / 5


    let rquick1 = quickSort(arrayRan1)
    let rquick2 = quickSort(arrayRan2)
    let rquick3 = quickSort(arrayRan3)
    let rquick4 = quickSort(arrayRan4)
    let rquick5 = quickSort(arrayRan5)

    quickRan.medComparacoes += (rquick1[0] + rquick2[0] + rquick3[0] + rquick4[0] + rquick5[0]) / 5
    quickRan.medTrocas += (rquick1[1] + rquick2[1] + rquick3[1] + rquick4[1] + rquick5[1]) / 5
    quickRan.medTempo += (rquick1[3] + rquick2[3] + rquick3[3] + rquick4[3] + rquick5[3]) / 5

    rquick1 = quickSort(arrayCres1)
    rquick2 = quickSort(arrayCres2)
    rquick3 = quickSort(arrayCres3)
    rquick4 = quickSort(arrayCres4)
    rquick5 = quickSort(arrayCres5)

    quickCres.medComparacoes += (rquick1[0] + rquick2[0] + rquick3[0] + rquick4[0] + rquick5[0]) / 5
    quickCres.medTrocas += (rquick1[1] + rquick2[1] + rquick3[1] + rquick4[1] + rquick5[1]) / 5
    quickCres.medTempo += (rquick1[3] + rquick2[3] + rquick3[3] + rquick4[3] + rquick5[3]) / 5

    rquick1 = quickSort(arrayDecres1)
    rquick2 = quickSort(arrayDecres2)
    rquick3 = quickSort(arrayDecres3)
    rquick4 = quickSort(arrayDecres4)
    rquick5 = quickSort(arrayDecres5)

    quickDecres.medComparacoes += (rquick1[0] + rquick2[0] + rquick3[0] + rquick4[0] + rquick5[0]) / 5
    quickDecres.medTrocas += (rquick1[1] + rquick2[1] + rquick3[1] + rquick4[1] + rquick5[1]) / 5
    quickDecres.medTempo += (rquick1[3] + rquick2[3] + rquick3[3] + rquick4[3] + rquick5[3]) / 5

    console.log("Insertion Sort:\n")
    console.log(insertionDecres)
    console.log(insertionCres)
    console.log(insertionRan)
    console.log("Selection Sort:\n")
    console.log(selectionDecres)
    console.log(selectionCres)
    console.log(selectionRan)
    console.log("Heap Sort:\n")
    console.log(heapDecres)
    console.log(heapCres)
    console.log(heapRan)
    console.log("Merge Sort:\n")
    console.log(mergeDecres)
    console.log(mergeCres)
    console.log(mergeRan)
    console.log("Quick Sort:\n")
    console.log(quickDecres)
    console.log(quickCres)
    console.log(quickRan)

}

Sort()