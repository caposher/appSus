import bookPreview from '../../book/cmps/book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-preview-container" >
            <!-- <router-link :to="'/book/'+book.id"> <book-preview :book="book" />  -->
                <book-preview :book = "book" @click.native = "openBookDetails(book.id)"/>
        </router-link>
                <!-- <div class="actions"> -->
                    <!-- <button @click="remove(car.id)" >X</button> -->
                    <!-- <button @click="select(book)" >Details</button> -->
                    <!-- <router-link :to="'/car/'+car.id" >Details</router-link>
                    <router-link :to="'/car/edit/'+car.id" >Edit</router-link> -->
                <!-- </div> -->
            </li>
        </ul>
    `,
    methods: {
        // remove(carId) {
        //     this.$emit('remove', carId);
        // },
        // select(book) {
        //     this.$emit('selected', book);
        // },
        openBookDetails(bookId) {
            this.$router.push('/book/' + bookId);
        }
    },
    components: {
        bookPreview
    }
};