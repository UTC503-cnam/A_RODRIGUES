let authors = [{ name: 'Franquin', country:'be' }, { name: 'Uderzo', country:'fr' }, { name: 'Hergé', country:'be' }];

// Instructions de boucle interdites.
// console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']


// version avec fonction simple puis utilisation d'un assemblage de fonction (code réutilisable)

// filtre sur le pays
let country_filter= x => n=> n.country == x;
// Mise en forme
let form_authors= x => n => n.name=(x+n.name);

let belgian_authors = (authors.filter(country_filter('be'))).map(form_authors('M '));
let French_authors = (authors.filter(country_filter('fr'))).map(form_authors('M '));


console.log(belgian_authors);
console.log(French_authors);



//version en 1 seule fonction code à modifier


authors = [{ name: 'Franquin', country:'be' }, { name: 'Uderzo', country:'fr' }, { name: 'Hergé', country:'be' }];

let belgian_authors2 = (authors.filter(n => n.country=='be')).map(n => n.name=('M '+ n.name));
console.log(belgian_authors2);






