import { bookService } from "../../book/service/book-service.js";
// import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <main class="add-book">
            <div class="add-search">
            <!-- <label>Search</label> -->
                <input class="input-search-google" v-model = "bookToSearch" @change="searchBooks" type="text" placeholder="Search books from Google...">
                <!-- <input ref="search" type="text" placeholder="Search for a book from Google..."> -->
                <button class="search-book" @click="searchBooks"> <i class="fas fa-search"></i> </button>
            </div>
            <section>
                <ul>
                    <li class="google-book-list" v-for="book in googleBooks">
                        <h4> {{ book.volumeInfo.title }} </h4>
                        <button @click="addBook(book)">+</button>
                    </li>
                </ul>
            </section>
            </div>

        </main>
        `,
    data() {
        return {
            googleBooks: null,
            bookToSearch: null
        };
    },
    computed: {

    },
    methods: {
        searchBooks() {
            bookService.searchBookFromAPI(this.bookToSearch)
                .then(books => {
                    console.log(books);
                    this.googleBooks = books
                })
        },

        addBook(book) {
            bookService.addGoogleBook(book)
                .then(book => {
                    this.$emit('addBook', book)
                });
        }
    },

    components: {

    },
};