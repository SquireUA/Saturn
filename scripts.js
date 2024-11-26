//document.addEventListener('DOMContentLoaded', init, false);

        //async function init(){
        //    let req = await fetch('https://icanhazdadjoke.com/', {
        //        headers: {
        //            'Accept':'application/json'
        //        }
        //    });
        //    let response = await req.json();
        //    console.log('response', response);
        //    document.querySelector('#joke').innerHTML = response.joke;
        //}









//Horoscope

//document.addEventListener('DOMContentLoaded', init, false);

//async function init(){
//const url = 'https://horoscope-api6.p.rapidapi.com/horoscopy-api?sign=gemini&frequency=daily&day=2024-05-28';
//const options = {
//	method: 'GET',
//	headers: {
//		'x-rapidapi-key': '2e6c69b4bfmsh55ffe2908e88cd9p1c947fjsn4c21a515a8d9',
//		'x-rapidapi-host': 'horoscope-api6.p.rapidapi.com'
//	}
//};
//
//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//	document.querySelector('#prediction').innerHTML = result;
//} catch (error) {
//	console.error(error);
//}
//}

//Tarot

//const url = 'https://oracle15.p.rapidapi.com/api/v1/draw-3-cards?greatArcana=true';
//const options = {
//	method: 'GET',
//	headers: {
//		'x-rapidapi-key': '2e6c69b4bfmsh55ffe2908e88cd9p1c947fjsn4c21a515a8d9',
//		'x-rapidapi-host': 'oracle15.p.rapidapi.com'
//	}
//};

//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}

//Joke

//const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/create?topics=Scorpius&max-length=1000';
//const options = {
//	method: 'GET',
//	headers: {
//		'x-rapidapi-key': '2e6c69b4bfmsh55ffe2908e88cd9p1c947fjsn4c21a515a8d9',
//		'x-rapidapi-host': 'humor-jokes-and-memes.p.rapidapi.com'
//	}
//};
//
//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}