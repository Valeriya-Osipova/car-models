parsed_info = [];

models = document.querySelectorAll('ul.popular-brands li');

for (i=0; i<models.length; i++){
    let img = models[i].querySelector('img').src;
    let name = models[i].querySelector('span').innerHTML;
    let link = models[i].querySelector('a').href;
    parsed_info.push([img, name, link]);
}
console.log(parsed_info);
console.log(JSON.stringify(parsed_info));