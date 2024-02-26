<template>
    <div class="product-card">
        <img :src="product.image" alt="rdr2">
        <div class="product-card__name">{{ product.name }}</div>
        <div class="product-card__cost">{{ product.price }}</div>

        <!-- {{ product }} -->

    </div>
</template>

<script setup>
const { product } = defineProps(['product']);

// const { product } = await useFetch(`https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${ id }&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp`)

</script>

<style lang="scss" scoped>
.product-card {
    width: 230px;
    margin:0 40px 35px 0;
    color: $colorBlack;
    transition: color 0.25s $easeInOutCirc;
    cursor: pointer;

    &:hover {
        color: $colorOrange;
    }

    img {
        width: 100%;
        margin: 0 0 7px;
        border-radius: 7px;
    }

    &__name {
        font-size: 18px;
        padding: 0 0 5px;
    }

    &__cost {
        font-size: 20px;
    }
}
</style>