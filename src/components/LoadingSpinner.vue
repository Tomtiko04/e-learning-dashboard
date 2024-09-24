<template>
    <div class="spinner">
        <v-progress-circular
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
</template>

<style scoped>
.spinner{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
}
</style>