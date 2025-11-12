<template>
    <li>
        <h2>{{ name }} {{ favorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ favorite ? 'Hide' : 'Show' }} Details</button>
    </li>
    <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{ phone }}</li>
        <li><strong>Email:</strong> {{ email }}</li>
    </ul>
</template>

<script>
export default {
    // props: ['friend'],
    props: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        detailsAreVisible: {
            type: Boolean,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true,
            default: false,
            validator: function(value) {
                return value === '0' || value === '1';
            }
        }
    },
    data() {
        return {
            detailsVisible: this.detailsAreVisible,
            favorite: this.isFavorite,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavorite() {
            this.favorite = !this.favorite;
        }
    }
}
</script>