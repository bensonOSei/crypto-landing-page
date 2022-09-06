<template>
    <a href="#"> {{text}}</a>
</template>

<script>

    export default {
        name: "Navlink",
        props: {
            text: String,
        }
    }
</script>