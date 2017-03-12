var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };
const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

function* createQuoteFetcher(){
    const response = yield fetch(url, myInit);/*.then(function(d){
        var json = d.json;
        //return json;
        return d;
    });*/
    //const quote = yield response.json();
    const quote = yield response.json;
    return '${quote.quoteText} -${quote.quoteAuthor}';
}

const quoteFetcher = createQuoteFetcher();
quoteFetcher.next()
    .then(res => quoteFetcher.next(res))
    //.then(res => quoteFetcher.next(res).value)
    .then(res => quoteFetcher.next(res).json)
    .then(quote => console.log(quote))
    .catch(err => console.log(err));