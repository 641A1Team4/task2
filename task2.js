//Task 2-Massivin elementləri arasından minimum olanını tapan proqram tərtib etməlisiniz.
function maxElement(array) {

    let min = array[0];
    
    for(let i=0; i<array.length; i++) {
    if(array[i]<min) {
     min =array[i];
    }
     }
    return min;
    }
    const sample_array = [1,2,4,6,71,2,4,9,100];
    console.log(minElement(sample_array));