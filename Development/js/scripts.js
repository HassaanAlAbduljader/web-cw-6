let books = ["book1" , "book2" , "book3", "book4" ]

console.log( books )


let books = [
{
   name: "book1",
   ID:1,
},
{
    name: "book2",
    ID:2,
},

{
    name: "book3",
    ID:3,
},

{
    name: "book4",
    ID:4,
},
];

getbookbyID(books,7)

function getBookByID(books, ID){
   for ( i of books ) {
    if ( i. ID == ID)
    { console.log("متوفر");
    break;
    }
//    else{console.log("غير متوفر")
    }
// return console.log("متوفر")   
    }
