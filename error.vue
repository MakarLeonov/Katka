<template>
    <div class="error-page">
        <div class="container">
            <div class="error-page__title">Ошибка 404!</div>
            <p >К сожалению, страница не найдена</p>
            <nuxt-link to="/">Вернуться на главную</nuxt-link>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default',
});

defineProps(['error']);
</script>

<style lang="scss">
.error-page {
    display: flex;
    justify-content: center;

    &__title {
        font-size: 50px;
        font-weight: 600;
        text-align: center;
    }

    p {
        font-size: 20px;
        text-align: center;
        padding: 0 0 25px;
    }

    a {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 20px;
        border: 2px solid $colorOrange;
        border-radius: 16px;

        &:hover {
            background: $colorOrange;
            color: #fff;
        }
    }
}
</style>