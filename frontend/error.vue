<template>
    <div class="error-page">
        <div class="error-page__container">
            <div class="error-page__title">Ошибка 404!</div>
            <p >К сожалению, страница не найдена</p>
            <nuxt-link to="/">
                <ColouredButton>Вернуться на главную</ColouredButton>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false,
});

defineProps(['error']);
</script>

<style lang="scss">
.error-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
        width: 400px;
    }

    &__title {
        font-size: 50px;
        font-weight: 600;
        margin-bottom: 10px;
        text-align: center;
    }

    p {
        font-size: 21px;
        color: $colorGray;
        margin-bottom: 30px;
        text-align: center;
    }
}
</style>