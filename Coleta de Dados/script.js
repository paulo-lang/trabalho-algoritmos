//Calcula desvio padrão
desvioPadrao = (lista) => {
    var media = 0;
    var varianca = 0;

    for (var i = 0; i < lista.length; i++) {
        media += lista[i]
    }

    media = media/lista.length

    for (i = 0; i < lista.length; i++) {
        varianca += Math.pow(media - lista[i], 2);
    }
    varianca = varianca / lista.length;

    return ([Math.sqrt(varianca), media])
}


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
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let insertionCres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let insertionDecres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }

    let selectionRan = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let selectionCres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let selectionDecres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }

    let heapRan = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let heapCres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let heapDecres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }

    let mergeRan = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let mergeCres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let mergeDecres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }

    let quickRan = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let quickCres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }
    let quickDecres = {
        medComparacoes: 0,
        desComparacoes: 0,
        medTrocas: 0,
        desTrocas: 0,
        medTempo: 0,
        desTempo: 0
    }

    let array800 = []
        array800.push(
        insertionCres,
        insertionDecres,
        insertionRan,
        selectionCres,
        selectionDecres,
        selectionRan,
        heapCres,
        heapDecres,
        heapRan,
        mergeCres,
        mergeDecres,
        mergeRan,
        quickCres,
        quickDecres,
        quickRan
        )

    let array2000 = []
        array2000.push(
        insertionCres,
        insertionDecres,
        insertionRan,
        selectionCres,
        selectionDecres,
        selectionRan,
        heapCres,
        heapDecres,
        heapRan,
        mergeCres,
        mergeDecres,
        mergeRan,
        quickCres,
        quickDecres,
        quickRan
        )

    let array16000 = []
        array16000.push(
        insertionCres,
        insertionDecres,
        insertionRan,
        selectionCres,
        selectionDecres,
        selectionRan,
        heapCres,
        heapDecres,
        heapRan,
        mergeCres,
        mergeDecres,
        mergeRan,
        quickCres,
        quickDecres,
        quickRan
        )

    let array42000 = []
        array42000.push(
        insertionCres,
        insertionDecres,
        insertionRan,
        selectionCres,
        selectionDecres,
        selectionRan,
        heapCres,
        heapDecres,
        heapRan,
        mergeCres,
        mergeDecres,
        mergeRan,
        quickCres,
        quickDecres,
        quickRan
        )

    let array58000 = []
        array58000.push(insertionCres,
        insertionDecres,
        insertionRan,
        selectionCres,
        selectionDecres,
        selectionRan,
        heapCres,
        heapDecres,
        heapRan,
        mergeCres,
        mergeDecres,
        mergeRan,
        quickCres,
        quickDecres,
        quickRan)
        

    let arrayRan1 = [];
    let arrayRan12 = [];
    let arrayRan13 = [];
    let arrayRan14 = [];
    let arrayRan15 = [];

    let arrayRan2 = [];
    let arrayRan22 = [];
    let arrayRan23 = [];
    let arrayRan24 = [];
    let arrayRan25 = [];

    let arrayRan3 = [];
    let arrayRan32 = [];
    let arrayRan33 = [];
    let arrayRan34 = [];
    let arrayRan35 = [];

    let arrayRan4 = [];
    let arrayRan42 = [];
    let arrayRan43 = [];
    let arrayRan44 = [];
    let arrayRan45 = [];

    let arrayRan5 = [];
    let arrayRan52 = [];
    let arrayRan53 = [];
    let arrayRan54 = [];
    let arrayRan55 = [];


    let arrayCres1 = [];
    let arrayCres12 = [];
    let arrayCres13 = [];
    let arrayCres14 = [];
    let arrayCres15 = [];

    let arrayCres2 = [];
    let arrayCres22 = [];
    let arrayCres23 = [];
    let arrayCres24 = [];
    let arrayCres25 = [];

    let arrayCres3 = [];
    let arrayCres32 = [];
    let arrayCres33 = [];
    let arrayCres34 = [];
    let arrayCres35 = [];

    let arrayCres4 = [];
    let arrayCres42 = [];
    let arrayCres43 = [];
    let arrayCres44 = [];
    let arrayCres45 = [];

    let arrayCres5 = [];
    let arrayCres52 = [];
    let arrayCres53 = [];
    let arrayCres54 = [];
    let arrayCres55 = [];


    let arrayDecres1 = [];
    let arrayDecres12 = [];
    let arrayDecres13 = [];
    let arrayDecres14 = [];
    let arrayDecres15 = [];

    let arrayDecres2 = [];
    let arrayDecres22 = [];
    let arrayDecres23 = [];
    let arrayDecres24 = [];
    let arrayDecres25 = [];

    let arrayDecres3 = [];
    let arrayDecres32 = [];
    let arrayDecres33 = [];
    let arrayDecres34 = [];
    let arrayDecres35 = [];

    let arrayDecres4 = [];
    let arrayDecres42 = [];
    let arrayDecres43 = [];
    let arrayDecres44 = [];
    let arrayDecres45 = [];

    let arrayDecres5 = [];
    let arrayDecres52 = [];
    let arrayDecres53 = [];
    let arrayDecres54 = [];
    let arrayDecres55 = [];

    let comparResults = []
    let trocaResults = []
    let tempoResults = []

    for (let i = 0; i < 800; i++) {
        arrayRan1.push(getRandom(0, 9999));
        arrayRan12.push(getRandom(0, 9999));
        arrayRan13.push(getRandom(0, 9999));
        arrayRan14.push(getRandom(0, 9999));
        arrayRan15.push(getRandom(0, 9999));

        arrayCres1.push(getRandom(0, 9999));
        arrayCres12.push(getRandom(0, 9999));
        arrayCres13.push(getRandom(0, 9999));
        arrayCres14.push(getRandom(0, 9999));
        arrayCres15.push(getRandom(0, 9999));

        arrayDecres1.push(getRandom(0, 9999));
        arrayDecres12.push(getRandom(0, 9999));
        arrayDecres13.push(getRandom(0, 9999));
        arrayDecres14.push(getRandom(0, 9999));
        arrayDecres15.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 2000; i++) {
        arrayRan2.push(getRandom(0, 9999));
        arrayRan22.push(getRandom(0, 9999));
        arrayRan23.push(getRandom(0, 9999));
        arrayRan24.push(getRandom(0, 9999));
        arrayRan25.push(getRandom(0, 9999));

        arrayCres2.push(getRandom(0, 9999));
        arrayCres22.push(getRandom(0, 9999));
        arrayCres23.push(getRandom(0, 9999));
        arrayCres24.push(getRandom(0, 9999));
        arrayCres25.push(getRandom(0, 9999));

        arrayDecres2.push(getRandom(0, 9999));
        arrayDecres22.push(getRandom(0, 9999));
        arrayDecres23.push(getRandom(0, 9999));
        arrayDecres24.push(getRandom(0, 9999));
        arrayDecres25.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 16000; i++) {
        arrayRan3.push(getRandom(0, 9999));
        arrayRan32.push(getRandom(0, 9999));
        arrayRan33.push(getRandom(0, 9999));
        arrayRan34.push(getRandom(0, 9999));
        arrayRan35.push(getRandom(0, 9999));

        arrayCres3.push(getRandom(0, 9999));
        arrayCres32.push(getRandom(0, 9999));
        arrayCres33.push(getRandom(0, 9999));
        arrayCres34.push(getRandom(0, 9999));
        arrayCres35.push(getRandom(0, 9999));

        arrayDecres3.push(getRandom(0, 9999));
        arrayDecres32.push(getRandom(0, 9999));
        arrayDecres33.push(getRandom(0, 9999));
        arrayDecres34.push(getRandom(0, 9999));
        arrayDecres35.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 42000; i++) {
        arrayRan4.push(getRandom(0, 9999));
        arrayRan42.push(getRandom(0, 9999));
        arrayRan43.push(getRandom(0, 9999));
        arrayRan44.push(getRandom(0, 9999));
        arrayRan45.push(getRandom(0, 9999));

        arrayCres4.push(getRandom(0, 9999));
        arrayCres42.push(getRandom(0, 9999));
        arrayCres43.push(getRandom(0, 9999));
        arrayCres44.push(getRandom(0, 9999));
        arrayCres45.push(getRandom(0, 9999));

        arrayDecres4.push(getRandom(0, 9999));
        arrayDecres42.push(getRandom(0, 9999));
        arrayDecres43.push(getRandom(0, 9999));
        arrayDecres44.push(getRandom(0, 9999));
        arrayDecres45.push(getRandom(0, 9999));
    }

    for (let i = 0; i < 58000; i++) {
        arrayRan5.push(getRandom(0, 9999));
        arrayRan52.push(getRandom(0, 9999));
        arrayRan53.push(getRandom(0, 9999));
        arrayRan54.push(getRandom(0, 9999));
        arrayRan55.push(getRandom(0, 9999));

        arrayCres5.push(getRandom(0, 9999));
        arrayCres52.push(getRandom(0, 9999));
        arrayCres53.push(getRandom(0, 9999));
        arrayCres54.push(getRandom(0, 9999));
        arrayCres55.push(getRandom(0, 9999));

        arrayDecres5.push(getRandom(0, 9999));
        arrayDecres52.push(getRandom(0, 9999));
        arrayDecres53.push(getRandom(0, 9999));
        arrayDecres54.push(getRandom(0, 9999));
        arrayDecres55.push(getRandom(0, 9999));
    }

    function ordena(array, op) {
        if (op == 1){
            array.sort(function (a, b){
                return a - b;
            })
        }else{
            array.sort(function (a, b){
                return b - a;
            })
        }
        
    }

    ordena(arrayCres1, 1)
    ordena(arrayCres12, 1)
    ordena(arrayCres13, 1)
    ordena(arrayCres14, 1)
    ordena(arrayCres15, 1)

    ordena(arrayCres2, 1)
    ordena(arrayCres22, 1)
    ordena(arrayCres23, 1)
    ordena(arrayCres24, 1)
    ordena(arrayCres25, 1)

    ordena(arrayCres3, 1)
    ordena(arrayCres32, 1)
    ordena(arrayCres33, 1)
    ordena(arrayCres34, 1)
    ordena(arrayCres35, 1)

    ordena(arrayCres4, 1)
    ordena(arrayCres42, 1)
    ordena(arrayCres43, 1)
    ordena(arrayCres44, 1)
    ordena(arrayCres45, 1)

    ordena(arrayCres5, 1)
    ordena(arrayCres52, 1)
    ordena(arrayCres53, 1)
    ordena(arrayCres54, 1)
    ordena(arrayCres55, 1)


    ordena(arrayDecres1, 0)
    ordena(arrayDecres12, 0)
    ordena(arrayDecres13, 0)
    ordena(arrayDecres14, 0)
    ordena(arrayDecres15, 0)

    ordena(arrayDecres2, 0)
    ordena(arrayDecres22, 0)
    ordena(arrayDecres23, 0)
    ordena(arrayDecres24, 0)
    ordena(arrayDecres25, 0)

    ordena(arrayDecres3, 0)
    ordena(arrayDecres32, 0)
    ordena(arrayDecres33, 0)
    ordena(arrayDecres34, 0)
    ordena(arrayDecres35, 0)

    ordena(arrayDecres4, 0)
    ordena(arrayDecres42, 0)
    ordena(arrayDecres43, 0)
    ordena(arrayDecres44, 0)
    ordena(arrayDecres45, 0)

    ordena(arrayDecres5, 0)
    ordena(arrayDecres52, 0)
    ordena(arrayDecres53, 0)
    ordena(arrayDecres54, 0)
    ordena(arrayDecres55, 0)

    function calcula(array, metodo, objeto){
        var resultado = []
        let estatisticas = []

        switch (metodo){
            case 0:
                resultado.push(insertionSort(array[0]), insertionSort(array[1]), insertionSort(array[2]), insertionSort(array[3]), insertionSort(array[4])) 
                estatisticas = desvioPadrao([resultado[0][0], resultado[1][0], resultado[2][0], resultado[3][0], resultado[4][0]])
                objeto.desComparacoes = estatisticas[0]
                objeto.medComparacoes = estatisticas[1]

                estatisticas = desvioPadrao([resultado[0][1], resultado[1][1], resultado[2][1], resultado[3][1], resultado[4][1]])
                objeto.desTrocas = estatisticas[0]
                objeto.medTrocas = estatisticas[1]
            
                estatisticas = desvioPadrao([resultado[0][3], resultado[1][3], resultado[2][3], resultado[3][3], resultado[4][3]])
                objeto.desTempo = estatisticas[0]
                objeto.medTempo = estatisticas[1]
                break
            
            case 1:
                resultado.push(selectionSort(array[0]), selectionSort(array[1]), selectionSort(array[2]), selectionSort(array[3]), insertionSort(array[4])) 
                estatisticas = desvioPadrao([resultado[0][0], resultado[1][0], resultado[2][0], resultado[3][0], resultado[4][0]])
                objeto.desComparacoes = estatisticas[0]
                objeto.medComparacoes = estatisticas[1]

                estatisticas = desvioPadrao([resultado[0][1], resultado[1][1], resultado[2][1], resultado[3][1], resultado[4][1]])
                objeto.desTrocas = estatisticas[0]
                objeto.medTrocas = estatisticas[1]
            
                estatisticas = desvioPadrao([resultado[0][3], resultado[1][3], resultado[2][3], resultado[3][3], resultado[4][3]])
                objeto.desTempo = estatisticas[0]
                objeto.medTempo = estatisticas[1]
                break    

            case 2:
                resultado.push(heapSort(array[0]), heapSort(array[1]), heapSort(array[2]), heapSort(array[3]), heapSort(array[4])) 
                estatisticas = desvioPadrao([resultado[0][0], resultado[1][0], resultado[2][0], resultado[3][0], resultado[4][0]])
                objeto.desComparacoes = estatisticas[0]
                objeto.medComparacoes = estatisticas[1]

                estatisticas = desvioPadrao([resultado[0][1], resultado[1][1], resultado[2][1], resultado[3][1], resultado[4][1]])
                objeto.desTrocas = estatisticas[0]
                objeto.medTrocas = estatisticas[1]
            
                estatisticas = desvioPadrao([resultado[0][3], resultado[1][3], resultado[2][3], resultado[3][3], resultado[4][3]])
                objeto.desTempo = estatisticas[0]
                objeto.medTempo = estatisticas[1]
                break
            
            case 3:
                resultado.push(mergeSort(array[0]), mergeSort(array[1]), mergeSort(array[2]), mergeSort(array[3]), mergeSort(array[4])) 
                estatisticas = desvioPadrao([resultado[0][0], resultado[1][0], resultado[2][0], resultado[3][0], resultado[4][0]])
                objeto.desComparacoes = estatisticas[0]
                objeto.medComparacoes = estatisticas[1]

                estatisticas = desvioPadrao([resultado[0][1], resultado[1][1], resultado[2][1], resultado[3][1], resultado[4][1]])
                objeto.desTrocas = estatisticas[0]
                objeto.medTrocas = estatisticas[1]
            
                estatisticas = desvioPadrao([resultado[0][3], resultado[1][3], resultado[2][3], resultado[3][3], resultado[4][3]])
                objeto.desTempo = estatisticas[0]
                objeto.medTempo = estatisticas[1]
                break
            
            case 4:
                resultado.push(quickSort(array[0]), quickSort(array[1]), quickSort(array[2]), quickSort(array[3]), quickSort(array[4])) 
                estatisticas = desvioPadrao([resultado[0][0], resultado[1][0], resultado[2][0], resultado[3][0], resultado[4][0]])
                objeto.desComparacoes = estatisticas[0]
                objeto.medComparacoes = estatisticas[1]

                estatisticas = desvioPadrao([resultado[0][1], resultado[1][1], resultado[2][1], resultado[3][1], resultado[4][1]])
                objeto.desTrocas = estatisticas[0]
                objeto.medTrocas = estatisticas[1]
            
                estatisticas = desvioPadrao([resultado[0][3], resultado[1][3], resultado[2][3], resultado[3][3], resultado[4][3]])
                objeto.desTempo = estatisticas[0]
                objeto.medTempo = estatisticas[1]
                break
            }
    }

    var arrayRan = []
    var arrayCres = []
    var arrayDecres = []


    //insertion Sort
    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan1, arrayRan12, arrayRan13, arrayRan14, arrayRan15)
    arrayCres.push(arrayCres1, arrayCres12, arrayCres13, arrayCres14, arrayCres15)
    arrayDecres.push(arrayDecres1, arrayDecres12, arrayDecres13, arrayDecres14, arrayDecres15)

    calcula(arrayRan, 0, array800[0])
    calcula(arrayCres, 0, array800[1])
    calcula(arrayDecres, 0, array800[2])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan2, arrayRan22, arrayRan23, arrayRan24, arrayRan25)
    arrayCres.push(arrayCres2, arrayCres22, arrayCres23, arrayCres24, arrayCres25)
    arrayDecres.push(arrayDecres2, arrayDecres22, arrayDecres23, arrayDecres24, arrayDecres25)

    calcula(arrayRan, 0, array2000[0])
    calcula(arrayCres, 0, array2000[1])
    calcula(arrayDecres, 0, array2000[2])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan3, arrayRan32, arrayRan33, arrayRan34, arrayRan35)
    arrayCres.push(arrayCres3, arrayCres32, arrayCres33, arrayCres34, arrayCres35)
    arrayDecres.push(arrayDecres3, arrayDecres32, arrayDecres33, arrayDecres34, arrayDecres35)

    calcula(arrayRan, 0, array16000[0])
    calcula(arrayCres, 0, array16000[1])
    calcula(arrayDecres, 0, array16000[2])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan4, arrayRan42, arrayRan43, arrayRan44, arrayRan45)
    arrayCres.push(arrayCres4, arrayCres42, arrayCres43, arrayCres44, arrayCres45)
    arrayDecres.push(arrayDecres4, arrayDecres42, arrayDecres43, arrayDecres44, arrayDecres45)

    calcula(arrayRan, 0, array42000[0])
    calcula(arrayCres, 0, array42000[1])
    calcula(arrayDecres, 0, array42000[2])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan5, arrayRan52, arrayRan53, arrayRan54, arrayRan55)
    arrayCres.push(arrayCres5, arrayCres52, arrayCres53, arrayCres54, arrayCres55)
    arrayDecres.push(arrayDecres5, arrayDecres52, arrayDecres53, arrayDecres54, arrayDecres55)

    calcula(arrayRan, 0, array58000[0])
    calcula(arrayCres, 0, array58000[1])
    calcula(arrayDecres, 0, array58000[2])


    //selection Sort
    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan1, arrayRan12, arrayRan13, arrayRan14, arrayRan15)
    arrayCres.push(arrayCres1, arrayCres12, arrayCres13, arrayCres14, arrayCres15)
    arrayDecres.push(arrayDecres1, arrayDecres12, arrayDecres13, arrayDecres14, arrayDecres15)

    calcula(arrayRan, 1, array800[3])
    calcula(arrayCres, 1, array800[4])
    calcula(arrayDecres, 1, array800[5])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan2, arrayRan22, arrayRan23, arrayRan24, arrayRan25)
    arrayCres.push(arrayCres2, arrayCres22, arrayCres23, arrayCres24, arrayCres25)
    arrayDecres.push(arrayDecres2, arrayDecres22, arrayDecres23, arrayDecres24, arrayDecres25)

    calcula(arrayRan, 1, array2000[3])
    calcula(arrayCres, 1, array2000[4])
    calcula(arrayDecres, 1, array2000[5])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan3, arrayRan32, arrayRan33, arrayRan34, arrayRan35)
    arrayCres.push(arrayCres3, arrayCres32, arrayCres33, arrayCres34, arrayCres35)
    arrayDecres.push(arrayDecres3, arrayDecres32, arrayDecres33, arrayDecres34, arrayDecres35)

    calcula(arrayRan, 1, array16000[3])
    calcula(arrayCres, 1, array16000[4])
    calcula(arrayDecres, 1, array16000[5])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan4, arrayRan42, arrayRan43, arrayRan44, arrayRan45)
    arrayCres.push(arrayCres4, arrayCres42, arrayCres43, arrayCres44, arrayCres45)
    arrayDecres.push(arrayDecres4, arrayDecres42, arrayDecres43, arrayDecres44, arrayDecres45)

    calcula(arrayRan, 1, array42000[3])
    calcula(arrayCres, 1, array42000[4])
    calcula(arrayDecres, 1, array42000[5])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan5, arrayRan52, arrayRan53, arrayRan54, arrayRan55)
    arrayCres.push(arrayCres5, arrayCres52, arrayCres53, arrayCres54, arrayCres55)
    arrayDecres.push(arrayDecres5, arrayDecres52, arrayDecres53, arrayDecres54, arrayDecres55)

    calcula(arrayRan, 1, array58000[3])
    calcula(arrayCres, 1, array58000[4])
    calcula(arrayDecres, 1, array58000[5])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan1, arrayRan12, arrayRan13, arrayRan14, arrayRan15)
    arrayCres.push(arrayCres1, arrayCres12, arrayCres13, arrayCres14, arrayCres15)
    arrayDecres.push(arrayDecres1, arrayDecres12, arrayDecres13, arrayDecres14, arrayDecres15)

    calcula(arrayRan, 2, array800[6])
    calcula(arrayCres, 2, array800[7])
    calcula(arrayDecres, 2, array800[8])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan2, arrayRan22, arrayRan23, arrayRan24, arrayRan25)
    arrayCres.push(arrayCres2, arrayCres22, arrayCres23, arrayCres24, arrayCres25)
    arrayDecres.push(arrayDecres2, arrayDecres22, arrayDecres23, arrayDecres24, arrayDecres25)

    calcula(arrayRan, 2, array2000[6])
    calcula(arrayCres, 2, array2000[7])
    calcula(arrayDecres, 2, array2000[8])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan3, arrayRan32, arrayRan33, arrayRan34, arrayRan35)
    arrayCres.push(arrayCres3, arrayCres32, arrayCres33, arrayCres34, arrayCres35)
    arrayDecres.push(arrayDecres3, arrayDecres32, arrayDecres33, arrayDecres34, arrayDecres35)

    calcula(arrayRan, 2, array16000[6])
    calcula(arrayCres, 2, array16000[7])
    calcula(arrayDecres, 2, array16000[8])



    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan4, arrayRan42, arrayRan43, arrayRan44, arrayRan45)
    arrayCres.push(arrayCres4, arrayCres42, arrayCres43, arrayCres44, arrayCres45)
    arrayDecres.push(arrayDecres4, arrayDecres42, arrayDecres43, arrayDecres44, arrayDecres45)

    calcula(arrayRan, 2, array42000[6])
    calcula(arrayCres, 2, array42000[7])
    calcula(arrayDecres, 2, array42000[8])



    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan5, arrayRan52, arrayRan53, arrayRan54, arrayRan55)
    arrayCres.push(arrayCres5, arrayCres52, arrayCres53, arrayCres54, arrayCres55)
    arrayDecres.push(arrayDecres5, arrayDecres52, arrayDecres53, arrayDecres54, arrayDecres55)

    calcula(arrayRan, 2, array58000[6])
    calcula(arrayCres, 2, array58000[7])
    calcula(arrayDecres, 2, array58000[8])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan1, arrayRan12, arrayRan13, arrayRan14, arrayRan15)
    arrayCres.push(arrayCres1, arrayCres12, arrayCres13, arrayCres14, arrayCres15)
    arrayDecres.push(arrayDecres1, arrayDecres12, arrayDecres13, arrayDecres14, arrayDecres15)

    calcula(arrayRan, 3, array800[9])
    calcula(arrayCres, 3, array800[10])
    calcula(arrayDecres, 3, array800[11])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan2, arrayRan22, arrayRan23, arrayRan24, arrayRan25)
    arrayCres.push(arrayCres2, arrayCres22, arrayCres23, arrayCres24, arrayCres25)
    arrayDecres.push(arrayDecres2, arrayDecres22, arrayDecres23, arrayDecres24, arrayDecres25)

    calcula(arrayRan, 3, array2000[9])
    calcula(arrayCres, 3, array2000[10])
    calcula(arrayDecres, 3, array2000[11])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan3, arrayRan32, arrayRan33, arrayRan34, arrayRan35)
    arrayCres.push(arrayCres3, arrayCres32, arrayCres33, arrayCres34, arrayCres35)
    arrayDecres.push(arrayDecres3, arrayDecres32, arrayDecres33, arrayDecres34, arrayDecres35)

    calcula(arrayRan, 3, array16000[9])
    calcula(arrayCres, 3, array16000[10])
    calcula(arrayDecres, 3, array16000[11])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan4, arrayRan42, arrayRan43, arrayRan44, arrayRan45)
    arrayCres.push(arrayCres4, arrayCres42, arrayCres43, arrayCres44, arrayCres45)
    arrayDecres.push(arrayDecres4, arrayDecres42, arrayDecres43, arrayDecres44, arrayDecres45)

    calcula(arrayRan, 3, array42000[9])
    calcula(arrayCres, 3, array42000[10])
    calcula(arrayDecres, 3, array42000[11])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan5, arrayRan52, arrayRan53, arrayRan54, arrayRan55)
    arrayCres.push(arrayCres5, arrayCres52, arrayCres53, arrayCres54, arrayCres55)
    arrayDecres.push(arrayDecres5, arrayDecres52, arrayDecres53, arrayDecres54, arrayDecres55)

    calcula(arrayRan, 3, array58000[9])
    calcula(arrayCres, 3, array58000[10])
    calcula(arrayDecres, 3, array58000[11])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan1, arrayRan12, arrayRan13, arrayRan14, arrayRan15)
    arrayCres.push(arrayCres1, arrayCres12, arrayCres13, arrayCres14, arrayCres15)
    arrayDecres.push(arrayDecres1, arrayDecres12, arrayDecres13, arrayDecres14, arrayDecres15)

    calcula(arrayRan, 4, array800[12])
    calcula(arrayCres, 4, array800[13])
    calcula(arrayDecres, 4, array800[14])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan2, arrayRan22, arrayRan23, arrayRan24, arrayRan25)
    arrayCres.push(arrayCres2, arrayCres22, arrayCres23, arrayCres24, arrayCres25)
    arrayDecres.push(arrayDecres2, arrayDecres22, arrayDecres23, arrayDecres24, arrayDecres25)

    calcula(arrayRan, 4, array2000[12])
    calcula(arrayCres, 4, array2000[13])
    calcula(arrayDecres, 4, array2000[14])

    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan3, arrayRan32, arrayRan33, arrayRan34, arrayRan35)
    arrayCres.push(arrayCres3, arrayCres32, arrayCres33, arrayCres34, arrayCres35)
    arrayDecres.push(arrayDecres3, arrayDecres32, arrayDecres33, arrayDecres34, arrayDecres35)

    calcula(arrayRan, 4, array16000[12])
    calcula(arrayCres, 4, array16000[13])
    calcula(arrayDecres, 4, array16000[14])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan4, arrayRan42, arrayRan43, arrayRan44, arrayRan45)
    arrayCres.push(arrayCres4, arrayCres42, arrayCres43, arrayCres44, arrayCres45)
    arrayDecres.push(arrayDecres4, arrayDecres42, arrayDecres43, arrayDecres44, arrayDecres45)

    calcula(arrayRan, 4, array42000[12])
    calcula(arrayCres, 4, array42000[13])
    calcula(arrayDecres, 4, array42000[14])


    arrayRan = []
    arrayCres = []
    arrayDecres = []

    arrayRan.push(arrayRan5, arrayRan52, arrayRan53, arrayRan54, arrayRan55)
    arrayCres.push(arrayCres5, arrayCres52, arrayCres53, arrayCres54, arrayCres55)
    arrayDecres.push(arrayDecres5, arrayDecres52, arrayDecres53, arrayDecres54, arrayDecres55)

    calcula(arrayRan, 4, array58000[12])
    calcula(arrayCres, 4, array58000[13])
    calcula(arrayDecres, 4, array58000[14])

/*
    let rsort1 = insertionSort(arrayRan1)
    let rsort12 = insertionSort(arrayRan12)
    let rsort13 = insertionSort(arrayRan13)
    let rsort14 = insertionSort(arrayRan14)
    let rsort15 = insertionSort(arrayRan15)

    let rsort2 = insertionSort(arrayRan2)
    let rsort22 = insertionSort(arrayRan22)
    let rsort23 = insertionSort(arrayRan23)
    let rsort24 = insertionSort(arrayRan24)
    let rsort25 = insertionSort(arrayRan25)

    let rsort3 = insertionSort(arrayRan3)
    let rsort32 = insertionSort(arrayRan32)
    let rsort33 = insertionSort(arrayRan33)
    let rsort34 = insertionSort(arrayRan34)
    let rsort35 = insertionSort(arrayRan35)

    let rsort4 = insertionSort(arrayRan4)
    let rsort42 = insertionSort(arrayRan42)
    let rsort43 = insertionSort(arrayRan43)
    let rsort44 = insertionSort(arrayRan44)
    let rsort45 = insertionSort(arrayRan45)

    let rsort5 = insertionSort(arrayRan5)
    let rsort52 = insertionSort(arrayRan52)
    let rsort53 = insertionSort(arrayRan53)
    let rsort54 = insertionSort(arrayRan54)
    let rsort55 = insertionSort(arrayRan55)

   

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desComparacoes = estatisticas[0]
    insertionRan.medComparacoes = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTrocas = estatisticas[0]
    insertionRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTempo = estatisticas[0]
    insertionRan.medTempo = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desComparacoes = estatisticas[0]
    insertionRan.medComparacoes = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTrocas = estatisticas[0]
    insertionRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTempo = estatisticas[0]
    insertionRan.medTempo = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desComparacoes = estatisticas[0]
    insertionRan.medComparacoes = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTrocas = estatisticas[0]
    insertionRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTempo = estatisticas[0]
    insertionRan.medTempo = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desComparacoes = estatisticas[0]
    insertionRan.medComparacoes = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTrocas = estatisticas[0]
    insertionRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTempo = estatisticas[0]
    insertionRan.medTempo = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    console.log(estatisticas)
    insertionRan.desComparacoes = estatisticas[0]
    insertionRan.medComparacoes = estatisticas[1]


    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTrocas = estatisticas[0]
    insertionRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionRan.desTempo = estatisticas[0]
    insertionRan.medTempo = estatisticas[1]


    rsort1 = insertionSort(arrayCres1)
    rsort2 = insertionSort(arrayCres2)
    rsort3 = insertionSort(arrayCres3)
    rsort4 = insertionSort(arrayCres4)
    rsort5 = insertionSort(arrayCres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    insertionCres.desComparacoes = estatisticas[0]
    insertionCres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionCres.desTrocas = estatisticas[0]
    insertionCres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionCres.desTempo = estatisticas[0]
    insertionCres.medTempo = estatisticas[1]


    rsort1 = insertionSort(arrayDecres1)
    rsort2 = insertionSort(arrayDecres2)
    rsort3 = insertionSort(arrayDecres3)
    rsort4 = insertionSort(arrayDecres4)
    rsort5 = insertionSort(arrayDecres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    insertionDecres.desComparacoes = estatisticas[0]
    insertionDecres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    insertionDecres.desTrocas = estatisticas[0]
    insertionDecres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    insertionDecres.desTempo = estatisticas[0]
    insertionDecres.medTempo = estatisticas[1]


    rsort1 = selectionSort(arrayRan1)
    rsort2 = selectionSort(arrayRan2)
    rsort3 = selectionSort(arrayRan3)
    rsort4 = selectionSort(arrayRan4)
    rsort5 = selectionSort(arrayRan5)


    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    selectionRan.desComparacoes = estatisticas[0]
    selectionRan.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    selectionRan.desTrocas = estatisticas[0]
    selectionRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    selectionRan.desTempo = estatisticas[0]
    selectionRan.medTempo = estatisticas[1]


    rsort1 = selectionSort(arrayCres1)
    rsort2 = selectionSort(arrayCres2)
    rsort3 = selectionSort(arrayCres3)
    rsort4 = selectionSort(arrayCres4)
    rsort5 = selectionSort(arrayCres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    selectionCres.desComparacoes = estatisticas[0]
    selectionCres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    selectionCres.desTrocas = estatisticas[0]
    selectionCres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    selectionCres.desTempo = estatisticas[0]
    selectionCres.medTempo = estatisticas[1]


    rsort1 = selectionSort(arrayDecres1)
    rsort2 = selectionSort(arrayDecres2)
    rsort3 = selectionSort(arrayDecres3)
    rsort4 = selectionSort(arrayDecres4)
    rsort5 = selectionSort(arrayDecres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    selectionDecres.desComparacoes = estatisticas[0]
    selectionDecres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    selectionDecres.desTrocas = estatisticas[0]
    selectionDecres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    selectionDecres.desTempo = estatisticas[0]
    selectionDecres.medTempo = estatisticas[1]

    rsort1 = heapSort(arrayRan1)
    rsort2 = heapSort(arrayRan2)
    rsort3 = heapSort(arrayRan3)
    rsort4 = heapSort(arrayRan4)
    rsort5 = heapSort(arrayRan5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    heapRan.desComparacoes = estatisticas[0]
    heapRan.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    heapRan.desTrocas = estatisticas[0]
    heapRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    heapRan.desTempo = estatisticas[0]
    heapRan.medTempo = estatisticas[1]


    rsort1 = heapSort(arrayCres1)
    rsort2 = heapSort(arrayCres2)
    rsort3 = heapSort(arrayCres3)
    rsort4 = heapSort(arrayCres4)
    rsort5 = heapSort(arrayCres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    heapCres.desComparacoes = estatisticas[0]
    heapCres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    heapCres.desTrocas = estatisticas[0]
    heapCres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    heapCres.desTempo = estatisticas[0]
    heapCres.medTempo = estatisticas[1]


    rsort1 = heapSort(arrayDecres1)
    rsort2 = heapSort(arrayDecres2)
    rsort3 = heapSort(arrayDecres3)
    rsort4 = heapSort(arrayDecres4)
    rsort5 = heapSort(arrayDecres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    heapDecres.desComparacoes = estatisticas[0]
    heapDecres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    heapDecres.desTrocas = estatisticas[0]
    heapDecres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    heapDecres.desTempo = estatisticas[0]
    heapDecres.medTempo = estatisticas[1]


    rsort1 = mergeSort(arrayRan1)
    rsort2 = mergeSort(arrayRan2)
    rsort3 = mergeSort(arrayRan3)
    rsort4 = mergeSort(arrayRan4)
    rsort5 = mergeSort(arrayRan5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    mergeRan.desComparacoes = estatisticas[0]
    mergeRan.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    mergeRan.desTrocas = estatisticas[0]
    mergeRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    mergeRan.desTempo = estatisticas[0]
    mergeRan.medTempo = estatisticas[1]


    rsort1 = mergeSort(arrayCres1)
    rsort2 = mergeSort(arrayCres2)
    rsort3 = mergeSort(arrayCres3)
    rsort4 = mergeSort(arrayCres4)
    rsort5 = mergeSort(arrayCres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    mergeCres.desComparacoes = estatisticas[0]
    mergeCres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    mergeCres.desTrocas = estatisticas[0]
    mergeCres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    mergeCres.desTempo = estatisticas[0]
    mergeCres.medTempo = estatisticas[1]


    rsort1 = mergeSort(arrayDecres1)
    rsort2 = mergeSort(arrayDecres2)
    rsort3 = mergeSort(arrayDecres3)
    rsort4 = mergeSort(arrayDecres4)
    rsort5 = mergeSort(arrayDecres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    mergeDecres.desComparacoes = estatisticas[0]
    mergeDecres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    mergeDecres.desTrocas = estatisticas[0]
    mergeDecres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    mergeDecres.desTempo = estatisticas[0]
    mergeDecres.medTempo = estatisticas[1]


    rsort1 = quickSort(arrayRan1)
    rsort2 = quickSort(arrayRan2)
    rsort3 = quickSort(arrayRan3)
    rsort4 = quickSort(arrayRan4)
    rsort5 = quickSort(arrayRan5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    quickRan.desComparacoes = estatisticas[0]
    quickRan.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    quickRan.desTrocas = estatisticas[0]
    quickRan.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    quickRan.desTempo = estatisticas[0]
    quickRan.medTempo = estatisticas[1]


    rsort1 = quickSort(arrayCres1)
    rsort2 = quickSort(arrayCres2)
    rsort3 = quickSort(arrayCres3)
    rsort4 = quickSort(arrayCres4)
    rsort5 = quickSort(arrayCres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    quickCres.desComparacoes = estatisticas[0]
    quickCres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    quickCres.desTrocas = estatisticas[0]
    quickCres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    quickCres.desTempo = estatisticas[0]
    quickCres.medTempo = estatisticas[1]


    rsort1 = quickSort(arrayDecres1)
    rsort2 = quickSort(arrayDecres2)
    rsort3 = quickSort(arrayDecres3)
    rsort4 = quickSort(arrayDecres4)
    rsort5 = quickSort(arrayDecres5)

    comparResults = []
    comparResults.push(rsort1[0], rsort2[0], rsort3[0], rsort4[0], rsort5[0])
    estatisticas = desvioPadrao(comparResults)
    quickDecres.desComparacoes = estatisticas[0]
    quickDecres.medComparacoes = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[1], rsort2[1], rsort3[1], rsort4[1], rsort5[1])
    estatisticas = desvioPadrao(comparResults)
    quickDecres.desTrocas = estatisticas[0]
    quickDecres.medTrocas = estatisticas[1]

    comparResults = []
    comparResults.push(rsort1[3], rsort2[3], rsort3[3], rsort4[3], rsort5[3])
    estatisticas = desvioPadrao(comparResults)
    quickDecres.desTempo = estatisticas[0]
    quickDecres.medTempo = estatisticas[1]
*/
    
    console.log("Array 800:\n")
    console.log(array800)
    console.log("Array 2000:\n")
    console.log(array2000)
    console.log("Array 16000:\n")
    console.log(array16000)
    console.log("Array 42000:\n")
    console.log(array42000)
    console.log("Array 58000:\n")
    console.log(array58000)

}

Sort()