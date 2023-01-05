import { ReferenceItem, UL, RefBook, Shelf } from "./classes";
import { Book, Librarian, Logger, Magazine } from "./interfaces";
import { purge, getAllBooks, printRefBook, getObjectProperty, createCustomer, logCategorySearch, getBooksByCategory, getBooksByCategoryPromise, logSearchResults } from './functions'
import type { Library } from "./classes/library";
import { Category } from "./enums";
import { BookRequiredFields, UpdateBook, СreateCustomerFunctionType } from "./types";
import { timeout } from "./decorators";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


















// ====================================
// Task 02.01

// console.log(getAllBooks())
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();


// Task 03.01

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID)

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;
// const a = typeof 'abc';
// console.log(idGenerator('Boris', 20))



// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');


// console.log(getBookTitlesByCategory())
// console.log(getBookTitlesByCategory(Category.CSS))

// logFirstAvailable()

// console.log(getBookById(1))


// console.log(checkoutBooks('Joe', ...[1, 3, 4]))

//Task 03.03
// console.log(getTitles(false))

//Task 03.04
// console.log(bookTitleTrasform('Learn TypeScript'))
// console.log(bookTitleTrasform(123))


// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Background, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`)
//     }
// }

// printBook(myBook)

// myBook.markDamaged('missing back cover')

//Task 04.02

// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`)

// logDamage('missing back cover')

//Task 04.03

// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'dddd@gmail.com',
//     numBooksPublished: 2
// }

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// }

//Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// }

// console.log(offer.magazine)
// console.log(offer.magazine?.getTitle())
// console.log(offer.book.getTitle?.())
// console.log(offer.book.author?.[10])


// Task 04.05

// console.log(getProperty(myBook, `title`))
// console.log(getProperty(myBook, `markDamaged`))
// console.log(getProperty(myBook, `isbn`))

// Task 05.01

// const ref = new ReferenceItem(1, 'Leat TypeScript', 2022);
// console.log(ref)
// ref.printItem()
// ref.publisher = 'abc group'
// console.log(ref.publisher)
// console.log(ref.getID())

// Task 05.02 05.03
// const refBook: RefBook = new RefBook(1, 'Leat TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook)
// refBook.printCitation()



// Task 05.04

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna'
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript')


// Task 05.05

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'fggg@gmail.com',
//     id: 1,
//     title: 'unknown'
// }

// const options: TOptions = { duration: 20 };
// const options2 = setDefaultConfig(options)
// console.log(options)
// console.log(options2)


// Task 06.03 06.04
// const refBook: RefBook = new RefBook(1, 'Leat TypeScript', 2022, 2);
// printRefBook(refBook)

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();

// printRefBook(favoriteLibrarian)

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0])

//             console.log(reader)
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'))
// }

// if (flag) {

//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0])

//     console.log(reader)
// }


// Task 06.06
// let library: Library = new Library()

// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna'
// }


// Task 07.01

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result1 = purge(inventory)
// console.log(result1)
// const result2 = purge([1, 2, 3])
// console.log(result2)

// Task 07.02 07.03

// const bookShelf = new Shelf<Book>()

// inventory.forEach(book => bookShelf.add(book))

// console.log(bookShelf.getFirst().title)

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag))
// // console.log(magazineShelf.getFirst().title)

// magazineShelf.printTitles()


// console.log(magazineShelf.find('Five Points'))



// console.log(getObjectProperty(magazines[0], 'title'))
// console.log(getObjectProperty(inventory[1], 'title'))

// Task 07.04

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// }

// const updateBook: UpdateBook = {
//     id: 1,
//     pages: 300
// }

// let params: Parameters<СreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv']

// createCustomer(...params)

// console.log()

// Task 08.01 08.02

// const favoriteLibrarian = new UL.UniversityLibrarian();


// console.log(favoriteLibrarian)


// Task 08.03

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian)
// favoriteLibrarian.assistFaculty = null
// favoriteLibrarian.teachCommunity = null

// Task 08.04

// const refBook: RefBook = new RefBook(1, 'Leat TypeScript', 2022, 2);
// refBook.printItem()

// Task 08.05

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian)
// favoriteLibrarian.name = 'Anna'
// favoriteLibrarian.assistCustomer('Boris', 'LearnType')

// Task 08.06

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna'
// console.log(favoriteLibrarian.name)
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript')

// Task 08.07

// const refBook: RefBook = new RefBook(1, 'Leat TypeScript', 2022, 2);
// refBook.copies = 10
// console.log(refBook.copies)


// Task 09.01
// console.log('Begin')
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End')



// Task 09.02
// console.log('Begin')
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return new Promise((resolve, reject) => {
//             resolve(titles.length + 100)
//         })
//     })
//     .catch(reason => console.log(reason))
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason))
// console.log('End')

// Task 09.03
console.log('Begin')

logSearchResults(Category.JavaScript)
logSearchResults(Category.Software)
console.log('End')
