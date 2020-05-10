var authors = [{ name: 'Franquin', country: 'be' }, { name: 'Uderzo', country: 'fr' }, { name: 'Hergé', country: 'be' }];
// Instructions de boucle interdites.
// console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']
// version avec fonction simple puis utilisation d'un assemblage de fonction (code réutilisable)
// filtre sur le pays
var country_filter = function (x) { return function (n) { return n.country == x; }; };
// Mise en forme
var form_authors = function (x) { return function (n) { return n.name = (x + n.name); }; };
var belgian_authors = (authors.filter(country_filter('be'))).map(form_authors('M '));
var French_authors = (authors.filter(country_filter('fr'))).map(form_authors('M '));
console.log(belgian_authors);
console.log(French_authors);
//version en 1 seule fonction code à modifier
authors = [{ name: 'Franquin', country: 'be' }, { name: 'Uderzo', country: 'fr' }, { name: 'Hergé', country: 'be' }];
var belgian_authors2 = (authors.filter(function (n) { return n.country == 'be'; })).map(function (n) { return n.name = ('M ' + n.name); });
console.log(belgian_authors2);
