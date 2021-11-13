export default {
    props: ['book'],
    template: `
        <div class="book-preview">
            <img class="sale-img" v-if="book.listPrice.isOnSale" src="imgs/sale-stamp-4.png"/>
            <h3 class="book-title">{{book.title}}</h3>
            <!-- <p>Price : {{book.listPrice.amount}} {{formatCurrency}}</p> -->
            <p>Price : {{formatCurrency}}</p>
            <img :src="book.thumbnail"/>
        </div>
    `,
    computed: {
        // getCurrencyIcon() {
        //     var currencyCode = this.book.listPrice.currencyCode;
        //     if (currencyCode === 'ILS') {
        //         return '₪';
        //     }
        //     else if (currencyCode === 'USD') {
        //         return '$';
        //     }
        //     else {
        //         return '€';
        //     }
        // },

        formatCurrency() {
            return new Intl.NumberFormat(this.book.language, {
                style: 'currency',
                currency: this.book.listPrice.currencyCode,
            }).format(this.book.listPrice.amount);
        }
    }
}