<template>
    <div class="wrapper">
        <div class="title">Log in</div>
        <form>
            <p>Логин</p>
            <input type="text">

            <p>Пароль</p>
            <input type="password">

            <ColouredButton>Войти</ColouredButton>
        </form>

        <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<style lang="scss" scoped>

.wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
}

form {
    width: 400px;
    padding: 0 0 20px;

    p {
        font-size: 18px;
        color: $colorGray;
        padding: 0 0 10px;
    }

    input {
        margin: 0 0 25px;
    }
}

a {
    &:hover {
        color: $colorOrange;
    }
}
</style>