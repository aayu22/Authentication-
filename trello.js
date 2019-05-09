document.getElementById("button").addEventListener('click' , trelloapi, false);

function trelloapi() {

    var Un = document.getElementById("username").value;
    console.log(Un);

// var request = new XMLHttpRequest()
// request.open('GET', 'https://api.trello.com/1/boards/bgeptyBs?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key=9a7663547e18814cdc8c44ddb0c6556d&token=25e449d829a0b318c1dc0ec9eb3962543018e76795cf6fe171bd43f2058263f8', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//   console.log(data.id);
//   var url = data.url;
//   console.log(url);
//     }
//    else {
//     console.log('error')
//   }
// }
// request.send()
var request = new XMLHttpRequest()

request.open('GET', 'https://api.trello.com/1/members/'+ Un +'/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=9a7663547e18814cdc8c44ddb0c6556d&token=25e449d829a0b318c1dc0ec9eb3962543018e76795cf6fe171bd43f2058263f8', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    
    
    var i;
    document.getElementById("root").innerHTML += " ";
    for( i=0; i<data.length ; i++)
    {
        var url = data[i].url;
        document.getElementById("root").innerHTML += "<br>" + '<a href="'+ url +'">' + data[i].name + "</a>"  ;
        //console.log(data[i].name);
        document.getElementById("root").innerHTML += "<br>" + "Right click to open board in a new tab and edit";
    }
    
    
//     var num=0;  
//    // var n =num.toString();
//     console.log(data.name);
// //   var url = data.url;
// //   console.log(url);
  }
   else {
    console.log('error')
  }
}

request.send()

}