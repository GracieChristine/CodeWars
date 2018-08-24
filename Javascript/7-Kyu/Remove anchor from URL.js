// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples:
//
//  returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
//
//  returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

let removeUrlAnchor = (url) => {
  return url.split('#')[0];
}

function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}

function removeUrlAnchor(url) {
  var index = url.indexOf("#");
  return index == -1 ? url : url.substring(0, url.indexOf("#"));
}
