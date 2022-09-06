<template>
    <a href="#" class="button"> {{ text }}</a>
</template>

<script>

    export default{
        name: "Button",
        props: {
            text: String,
        }
    }
</script>