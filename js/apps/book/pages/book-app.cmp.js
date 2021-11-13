import { bookService } from '../../book/service/book-service.js';
import bookList from '../../book/cmps/book-list.cmp.js';
import bookFilter from '../../book/cmps/book-filter.cmp.js'
// import bookDetails from './book-details.cmp.js';
// import bookEdit from './book-edit.cmp.js';
import bookAdd from '../../book/cmps/book-add.cmp.js';

export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter" />
            <book-add @addBook = "addBookToBooks"/>
           
            <book-list :books="booksToShow" />
            <!-- <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook" /> -->
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails" /> -->
            <!-- <book-edit /> -->
        </section>
    `,
    data() {
        return {
            // books: bookService.query(),
            // selectedBook: null,
            books: null,
            filterBy: null
        };
    },
    created() {
        this.loadBooks();
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => {
                    console.log(books);
                    this.books = books
                }
                );
        },

        // removeBook(id) {
        //     bookService.remove(id);
        // },

        // selectBook(book) {
        //     this.selectedBook = book;
        // },

        // closeDetails() {
        //     this.selectedBook = null;
        // },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        addBookToBooks(book) {
            // bookService.addGoogleBook(book);
            //loadBooks() - solution1
            //push book to books
            this.books.push(book);
        }
    },
    computed: {
        booksToShow() {
            // if (!this.filterBy) return this.books;
            // // const { title, fromPrice, toPrice } = this.filterBy;
            // const searchStr = this.filterBy.byName.toLowerCase();
            // const searchFromPrice = this.filterBy.fromPrice;
            // const searchToPrice = this.filterBy.toPrice;
            // var booksToShow = this.books.filter(book => {
            //     return book.title.toLowerCase().includes(searchStr);
            // });
            // booksToShow = booksToShow.filter(book => {
            //     return (book.listPrice.amount >= searchFromPrice) && (book.listPrice.amount <= searchToPrice)
            // });
            // return booksToShow;


            if (!this.filterBy) return this.books;

            const searchStr = this.filterBy.byName.toLowerCase();
            const fromPrice = (this.filterBy.fromPrice) ? this.filterBy.fromPrice : 0;
            const toPrice = (this.filterBy.toPrice) ? this.filterBy.toPrice : Infinity;

            const booksToShow = this.books.filter(book => {
                return (book.title.toLowerCase().includes(searchStr)) && (book.listPrice.amount >= fromPrice && book.listPrice.amount <= toPrice);
            })

            // const filterBook = sortBy.filter(book => {
            //     return (book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice)
            // });
            return booksToShow;
        }
    },
    components: {
        bookList,
        bookFilter,
        bookAdd
        // bookDetails,
        // bookEdit
    }
};