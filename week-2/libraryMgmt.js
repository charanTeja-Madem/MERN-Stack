class Library{
    title;
    author;
    pages;
    isavailable=true;
    constructor(title,author,pages){
        this.title=title;
        this.pages=pages;
        this.author=author;
    }
    getBookDetails(){
        console.log(this.title,"by",this.author,"(",this.pages,")");
    }
    issueBook(){
        if(this.isavailable){
            this.isavailable=false;
            console.log("You have issued",this.title);
        }
        else{
            console.log(this.title,"is currently not available");
        }
    }
    returnBook(){
        this.isavailable=true;
        console.log("You have returned",this.title);
    }
    isLong(){
        return this.pages > 300;
    }
}
let books=[new Library("The Alchemist","Paulo Coelho",208),
new Library("War and Peace","Leo Tolstoy",1225),
new Library("1984","George Orwell",328)];
for(let book of books){
    book.getBookDetails();
    console.log("Is long book:",book.isLong());
    book.issueBook();
    book.issueBook();
    book.returnBook();
    book.issueBook();
    console.log("-----");
}   
