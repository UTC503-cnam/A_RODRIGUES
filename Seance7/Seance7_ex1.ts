// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
function format_message(from, to, message){
    return "From: " + from + ", To: " + to + " Msg: " + message;
}
let message=format_message("tonio","agnes","hello")
console.log(message)

let format_message2 = from => to => message => console.log("From: " + from + " ; To: " + to + " Msg; " + message);
console.log(format_message2("Tonio")("Agnes")("Hello word"))
