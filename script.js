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
            console.log(array.join(' '))
            console.log(`outer: ${outer} inner: ${inner}  valor: ${array[outer]}`);
            if (array[outer] < array[inner]) {
                numeroTrocas++;
                const [element] = array.splice(outer, 1);
                const [barrinha] = bars.splice(outer, 1);
                array.splice(inner, 0, element);
                bars.splice(inner, 0, barrinha);
                setTimeout(function() {
                    $("#espacoBarras").html(bars);
                }, (1000));
            }
        }
    }
    console.log(array.join(' '))
    $("#numeroTrocas").val(numeroTrocas);
    $("#numeroComparações").val(numeroComparacoes);
    return array;
}

function AcaoInsertionSort(){
    insertionSort(vector);
}