//Færdig

// Most of the javascript callbacks you will be using will be asynchronous, in contrary to map,
// filter and forEach which are synchronous (MAKE SURE you understand the difference)
//
// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
    const msgPrinter = function(msg,delay){
        setTimeout(() => console.log(msg),delay); //Observe an arrow-function
    };
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//Uden at køre koden, ville jeg forvente følgende rækkefølge:
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//eeeeeeeeee
//bbbbbbbbbb

//Dette skyldes delays. Som Lars har forklaret det, køres koden med delay, hvorefter printet ligges hen et andet sted,
// indtil timeren er løbet ud. Derefter ligges den klar til at blive printet.


// 2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
//Jeg kørte koden og fandt ud af, at jeg havde ret.