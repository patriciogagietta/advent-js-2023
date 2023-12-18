function optimizeIntervals(intervals) {
    const intervalosOrdenados = []

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        let length = intervalosOrdenados.length - 1

        if (intervalosOrdenados.length === 0 || intervals[i][0] > intervalosOrdenados[length][1]) {
            intervalosOrdenados.push(intervals[i]);
        } else {
            intervalosOrdenados[length][1] = Math.max(intervalosOrdenados[length][1], intervals[i][1]);
        }
    }
    
    return intervalosOrdenados
}