function elvenInArr(a, arr) {
    let elven = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            elven += i + ",";
        }
    }
    if (elven.length == 0) {
        return false;
    } else {
        return elven;
    }
}

