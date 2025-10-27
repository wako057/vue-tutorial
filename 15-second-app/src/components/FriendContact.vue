<template>
    <li>
        <h2>{{ friend.name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    </li>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
</template>

<script>
export default {
    props: [
        'friend',
    ],
    data() {
        return {
            detailsAreVisible: false,
            isFavorite: this.friend.isFavorite,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.isFavorite = !this.isFavorite;
        }
    }
}
</script>