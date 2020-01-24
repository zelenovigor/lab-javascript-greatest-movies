/* eslint no-restricted-globals: 'off' */

// map, reduce, filter, sort methods

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

    function orderByYear(arr) {
        let newArr = [...arr];
        return newArr.sort((a,b) => (a.year > b.year ) ? 1 : -1 );
        return newArr;
    }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

    function howManyMovies(arrofMovies) {
        return arrofMovies.filter(movie => {
            return movie.genre.includes('Drama') && movie.director === 'Stephen Spielberg';
        }).length;
    }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let titleArr = [...arr];
    let finalArr = [];
    titleArr.sort((a,b) => a.title > b.title ? 1 : -1);
    let twentyArr = titleArr.slice(0, 20);
    twentyArr.forEach(element => {
        finalArr.push(element.title);
    });
    return finalArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrOfMovies) {
    let averageRate = 0;
    let newArr = arrOfMovies.filter(obj => Object.keys(obj).includes('rate'))
    if(arrOfMovies.length === 0) return averageRate;
    newArr.forEach(movie => averageRate += movie.rate);
    return Math.round(100*averageRate/arrOfMovies.length)/100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
