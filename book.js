document.getElementById("button1").addEventListener('click' , bookSearch, false);

function bookSearch() {
    
     var search = document.getElementById("search").value;
    console.log(search);
    

var request = new XMLHttpRequest();

request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q='+ search , true)
request.onload = function(data) {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (request.status >= 200 && request.status < 400) {
    
    document.getElementById("results").innerHTML = " ";
    for (var i = 0; i < 5; i++) {
        var item = data.items[i];
      
       document.getElementById("results").innerHTML += "<br>" + "<b>" + item.volumeInfo.title + "</b>" + "<br>"+ "\tBy:\t" + item.volumeInfo.authors + "<br>" + "Page Count:\t" + item.volumeInfo.pageCount + "<br>";
       if(item.saleInfo.saleability=="FOR_SALE")
       { 
        document.getElementById("results").innerHTML += "Price:" + item.saleInfo.retailPrice.amount + "\tINR" + "<br>";
       }
       document.getElementById("results").innerHTML += '<img src="'+ item.volumeInfo.imageLinks.smallThumbnail+'" />' + "<br>" + "<br>";
      // document.getElementById("results").innerHTML+='<button href="' + item.volumeInfo.previewLink + '">Preview link</button>';
      }
    }
   else {
    console.log('error')
  }
}

request.send()

}