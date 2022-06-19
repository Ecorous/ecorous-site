<script lang="js">
export default {
    data() {
        return {
            header: "Hello!",
        };
    },
};
</script>

<template>
    <h1 id="main-header" class="main-header">
        {{ header }}
    </h1>
</template>

<style>
.main-header {
    color: white;
    font-size: 2em;
    font-family: monospace;
    text-align: center;
}
</style>