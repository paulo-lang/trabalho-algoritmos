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

insertionSort = (array) => {
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let tempoExecucao = 0;
    for (outer = 1; outer < array.length; outer++) {
        for (inner = 0; inner < outer; inner++) {
            numeroComparacoes++;
            
            if (array[outer] < array[inner]) {
                
                numeroTrocas++;
                const [element] = array.splice(outer, 1);
                const [barrinha] = bars.splice(outer, 1);
                array.splice(inner, 0, element);
                bars.splice(inner, 0, barrinha);
                setTimeout(function () {
                    $("#espacoBarras").html(bars);
                }, (1000));
            }
        }
    }
    $("#numeroTrocasInsertion").val(numeroTrocas);
    $("#numeroComparaçõesInsertion").val(numeroComparacoes);
    return array;
}

selectionSort = (array) => {
    let n = array.length;
    let numeroTrocas = 0;
    let numeroComparacoes = 0;
    let tempoExecucao = 0;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            numeroTrocas++
            if (array[j] < array[min]) {
                numeroComparacoes++
                min = j;
            }
        }
        if (min != i) {
            numeroComparacoes++
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    $("#numeroTrocasSelection").val(numeroTrocas);
    $("#numeroComparaçõesSelection").val(numeroComparacoes);
    return array;
}

divide = (array) => {
    if (array.length < 2) {
      return array
    }
    const mid = Math.floor(array.length/2)
    const smallOne = array.slice(0, mid)
    const smallTwo = array.slice(mid)
    return sort(divide(smallOne), divide(smallTwo))
  }
  
  sort = (smallOne, smallTwo) => {
    const sorted = []
    while(smallOne.length && smallTwo.length) {
      if (smallOne[0] <= smallTwo[0]) {
        sorted.push(smallOne.shift())
      } else {
        sorted.push(smallTwo.shift())
      }
    }
    const output = [...sorted, ...smallOne, ...smallTwo]
    console.log(output)
    return output
  }
  
  const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
  console.log(divide(numbers))



function Sort() {
    insertionSort(vector);
    selectionSort(vector);
    mergeSort(vector);
}