<template>
    <div class="product-card">
        <img src="/img/products/rdr2.jpg" alt="rdr2">
        <div class="product-card__name">{{ product.name }}</div>
        <div class="product-card__cost">{{ product.cost }}</div>
    </div>
    <!-- {{ product }} -->
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style lang="scss">
.product-card {
    margin:0 40px 35px 0;
    color: $colorBlack;
    transition: color 0.25s $easeInOutCirc;
    cursor: pointer;

    &:hover {
        color: $colorOrange;
    }

    img {
        margin: 0 0 5px;
    }

    &__name {
        font-size: 17px;
    }

    &__cost {
        font-size: 20px;
    }
}
</style>