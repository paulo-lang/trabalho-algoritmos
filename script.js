let bars = [];
let vector = [];

$(function () {
    defineBarras();
});

$("#customRange").on("input", defineBarras);

async function defineBarras() {
    let valorInput = $("#customRange").val();
    let barras = parseInt(valorInput < 10 ? "10" : valorInput);
    if (bars.length == parseInt(barras)) return;
    $("#customRangeValue").text(`Tamanho do array: ${barras}`);
    adicionaBarras(parseInt(barras));
}

async function adicionaBarras(barras) {
    bars = [];
    vector = [];
    for (var i = 0; i < barras; i++) {
        let num = Math.floor(2 + Math.random() * 98);
        bars.push(`<div class="bar" style="height: ${num}%" id="bar-${i}"></div>`);
        vector.push(num);
    }
    $("#espacoBarras").html(bars);
}

function geraVetor() {
    let arrayDez = [];
    let arrayCem = [];
    let arrayMil = [];
    for (let i = 0; i < 10; i++) {
        arrayDez.push(Math.floor(2 + Math.random() * 98));
    }
    for (let i = 0; i < 100; i++) {
        arrayCem.push(Math.floor(2 + Math.random() * 98));
    }
    for (let i = 0; i < 1000; i++) {
        arrayMil.push(Math.floor(2 + Math.random() * 98));
    }
    return { arrayDez, arrayCem, arrayMil };
}



//Insertion Sort

insertionSort = (array, pos) => {
    let vetor = [...array];
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let tempoExecucao = 0;
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
    $(`#numeroTrocasInsertion${pos}`).val(numeroTrocas);
    $(`#numeroComparaçõesInsertion${pos}`).val(numeroComparacoes);
}



//Selection Sort

selectionSort = (array, pos) => {
    let vetor = [...array];
    let n = vetor.length;
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let tempoExecucao = 0;
   //console.log(vetor)

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
    $(`#numeroTrocasSelection${pos}`).val(numeroTrocas);
    $(`#numeroComparaçõesSelection${pos}`).val(numeroComparacoes);
   
    return vetor;
}



//Merge Sort

mergeSort = (array, pos) => {
    let vetor = [...array];
    let numeroTrocas = 0;
    let numeroComparacoes = 0;

    if (vetor.length < 2) {
        return vetor
    }
    numeroComparacoes++
    const mid = Math.floor(vetor.length / 2)
    const smallOne = vetor.slice(0, mid)
    const smallTwo = vetor.slice(mid)

    return sort(mergeSort(smallOne), mergeSort(smallTwo), numeroTrocas, numeroComparacoes, pos)
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

    $(`#numeroTrocasMerge${pos}`).val(trocas);
    $(`#numeroComparaçõesMerge${pos}`).val(comparacoes);
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
    $(`#numeroTrocasHeap${pos}`).val(numeroTrocas);
    $(`#numeroComparaçõesHeap${pos}`).val(numeroComparacoes);

    return vetor;
}



//Quick Sort
quickSort = (array, pos) => {
    let vetor = [...array];
    let numeroTrocas = 0
    let numeroComparacoes = 0

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
    
    $(`#numeroTrocasQuick${pos}`).val(numeroTrocas);
    $(`#numeroComparaçõesQuick${pos}`).val(numeroComparacoes);

    return output
  }

function Sort() {
    let vector = geraVetor()
    const arrayCem = vector.arrayCem
    const arrayDez = vector.arrayDez
    const arrayMil = vector.arrayMil
    
    $('#tempoExecucaoInsertion1').val(tempoDecorrido(insertionSort, arrayDez, 1));
    $('#tempoExecucaoInsertion2').val(tempoDecorrido(insertionSort, arrayCem, 2));
    $('#tempoExecucaoInsertion3').val(tempoDecorrido(insertionSort, arrayMil, 3));

    
    $('#tempoExecucaoSelection1').val(tempoDecorrido(selectionSort, arrayDez, 1));
    $('#tempoExecucaoSelection2').val(tempoDecorrido(selectionSort, arrayCem, 2));
    $('#tempoExecucaoSelection3').val(tempoDecorrido(selectionSort, arrayMil, 3));

    $('#tempoExecucaoMerge1').val(tempoDecorrido(mergeSort, arrayDez, 1));
    $('#tempoExecucaoMerge2').val(tempoDecorrido(mergeSort, arrayCem, 2));
    $('#tempoExecucaoMerge3').val(tempoDecorrido(mergeSort, arrayMil, 3));

    $('#tempoExecucaoHeap1').val(tempoDecorrido(heapSort, arrayDez, 1));
    $('#tempoExecucaoHeap2').val(tempoDecorrido(heapSort, arrayCem, 2));
    $('#tempoExecucaoHeap3').val(tempoDecorrido(heapSort, arrayMil, 3));

    $('#tempoExecucaoQuick1').val(tempoDecorrido(quickSort, arrayDez, 1));
    $('#tempoExecucaoQuick2').val(tempoDecorrido(quickSort, arrayCem, 2));
    $('#tempoExecucaoQuick3').val(tempoDecorrido(quickSort, arrayMil, 3));


}

function tempoDecorrido(funcao) {
    // pega os argumentos a serem repassados
    var args = Array.prototype.slice.call(arguments, 1);

    // logo antes da execução
    var inicio = performance.now();

    // executa a função passada, passando os argumentos se for o caso
    funcao.apply(null, args);

    // logo após a execução
    return performance.now() - inicio;
}

// Faz um loop de x a x+9
function minhaFuncao(x) {
    for(var i=x; i<x+10; i++) console.log(i);
}

// Testando
