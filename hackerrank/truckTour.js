function truckTour(petrolpumps){
    let run = 0;
    return petrolpumps.reduce((start, pump, position) => {
        run += pump[0] - pump[1];
        if (run < 0) {
            run = 0;
            start = position + 1;
        }
        return start;
    }, 0);
}

console.log(truckTour([[1,5],[10,3],[3,4]]))