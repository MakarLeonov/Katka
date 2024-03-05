<template>
    <div class="wrapper">
        <p class="title">Xbox Games</p>

        <div class="xbox-games">
            <div class="xbox-games__filters">
                <div class="xbox-games__filters-title">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="25" height="25" fill="url(#pattern3)" />
                        <defs>
                            <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_41_25" transform="scale(0.0104167)" />
                            </pattern>
                            <image id="image0_41_25" width="96" height="96"
                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAA05JREFUeF7tmjuO1EAQhquDCXmIGLKRxsFIpJyAjRGIu+wl4CA8LgAxMZl7xIQbI7GklowsQbBe2L9b1eUq7H/TbldVf5/b9mxXEv65Ekiu2ZlcKMD5JqAACnAm4JyeO4ACnAk4p+cOoIDbBI7H45NhGN6KyHMRuTeb8VNEPo/jeHk6nU7O/NTpw+2A3/C/isgjsLrvwzA8PZ/PV2oKjgHCCei67r2IvCxhklJ61/f965K5UedEFHD9l8fOv/hd55wfRIVbUldEAWNJ4X/m5JzDraGm/nDFd11HATUGW8+lgNZEK+NRwAxYLZBK3urp6B3gXT+qD74DvBeADKEFeteP6qMAZFg5TgGVX1VK3rcupwAKaH1P3YyH7jC+A2z5CwUYA0bhVy8AAWg9XvvIQAJa19c6HvwMbZ0QxaMARMh4nAKMAaPwFIAIGY93XVdzIPMj5/zQuCTT8BHfAR9F5EXhqj/knF8Vzg05LZyAw+FwSCl9KTmUTyk96/v+W0iyhUWFEzDVvd/vH+92uzfjOF6IyP3ZWqZH1KeU0uX/Dn9aV0gBhTfPKqZRgLNGCqAAZwLO6TexAyL3mq5eQPRe09ULiN5rugUBNf/aWLzXdAsCQrc6UsDsK2jpAx4KoADbD/Ho5wtwB9QuwBanfXT0CKrlgeJRQOUjiAKMNwG6YymAAowJOIfnDqCAmwRqn3nO/NTpuQPUCHUBwgnQLcf/6todjAS0XhH8HdA64dLxKGBp4rN8FEABdxLYwiOo5kBm8V7TLQgI3Wu6egHRe01XL2B6AEfuNd2EAOfvgG2/hCPDn2rjDnA2RAFrEBC599KZL0yv3gHRey8hAecJagHRey+d+cL0LQTU/NRfvPcSEnCe0EJA6N5LZ74wPQVARLYTKMCWL4xOARCR7QQooPZECZWLzlxb50P1WI+j9VKAsQEKMAaMwlMAImQ8TgHGgFF4CkCEjMcpwBgwCk8BiJDxuFoAqq/2ux0VhPKtbRz+DkALpgBE6O5xCtDxU19NAWqEugAtBNQcyCzee6nDY391CwGhey/tEeoyqAVE773U4bG/Wi1gKjFy76U9Ql2GJgJ0JWz7agpw9k8BFOBMwDk9dwAFOBNwTs8dQAHOBJzT/wJ7ftdwrejbowAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>
                    Фильтрация товаров
                </div>

                <!-- <div class="xbox-games__filters-searching">
                    <div class="xbox-games__filters-searching-title">Искать игры:</div>
                    <input v-model="searchingValue" @keyup.enter="getSearchedProducts" type="text"
                        placeholder="Введите название продукта...">
                    <EmptyButton @click="getSearchedProducts">Искать {{ searchingValue }}</EmptyButton>
                </div> -->

                <div class="search-input">
                    <input v-model="searchingValue" @keyup.enter="getSearchedProducts" placeholder="Искать по названию...">
                    <ColouredButton @click="getSearchedProducts" class="search-input__button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
            </div>

            <div v-if="allProducts && !searchingFilterOn" class="xbox-games__product-list">
                <nuxt-link :to="`/xbox/games/${product.id}`" v-for="product in allProducts" :key="product.id"
                    class="xbox-games__product-list-card">
                    <ProductCard :product="product" />
                </nuxt-link>
            </div>

            <div v-else-if="searchedProducts && searchingFilterOn" class="xbox-games__product-list">
                <nuxt-link :to="`/xbox/games/${product.id}`" v-for="  product   in   searchedProducts  " :key="product.id"
                    class="xbox-games__product-list-card">
                    <ProductCard :product="product" />
                </nuxt-link>
            </div>

            <div v-else>
                no products
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const url = useDefineURL()

const { data: allProducts } = await useFetch(`${url}/xbox/games`)

const searchedProducts: any = ref({});
const searchingValue = ref('');
const searchingFilterOn = ref(false)

watch(searchingValue, async () => {
    if (searchingValue.value === '') {
        searchingFilterOn.value = false;
        // const { data: products } = await useFetch(`${url}/xbox/games`)

        // allProducts.value = products.value
    }
})

async function getSearchedProducts(): Promise<void> {
    searchingFilterOn.value = true;
    const { data: products } = await useFetch(`${url}/xbox/games/search/${searchingValue.value}`)

    searchedProducts.value = products.value
}

// async function getSearchedProducts(s: string): Promise<void> {
//     const { data: products } = await useFetch(`${url}/xbox/games/search/${s}`)

//     allProducts.value = products.value
// }

</script>

<style lang="scss" scoped>
.xbox-games {
    display: flex;

    &__filters {
        position: sticky;
        top: 15px;
        padding: 20px 25px;
        min-width: 370px;
        max-width: 370px;
        height: 300px;
        margin: 0 35px 0;
        border-radius: 16px;
        box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.15);

        &-title {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin: 0 0 24px;
            gap: 4px;
        }

        .search-input {
            display: flex;

            input {
                border: 1px solid $colorBlack;
                border-radius: 16px 0 0 16px;
                padding: 17px 25px 16px;
                font-size: 16px;
            }

            &__button {
                height: 54px;
                padding: 12px 15px;
                border-radius: 0 16px 16px 0;

                span {
                    font-size: 28px;
                }

                &:hover {
                    background: $colorBlack;
                    color: $colorOrange;
                }
            }

        }
    }

    &__product-list {
        display: flex;
        flex-wrap: wrap;

        &-card:nth-child(4n) {
            &>div {
                margin: 0;
            }
        }
    }
}
</style>