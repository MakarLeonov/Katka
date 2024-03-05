<template>
    <div class="wrapper">
        <p class="title">Xbox Игры</p>

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

                <div class="xbox-games__filters-range-slider">
                    <Slider v-model="rangeSliderValues" @change="(value: number[]) => setMinMaxValuesToRangerSLider(value)"
                        :format="rangeSliderFormat" />
                </div>

                <div class="xbox-games__filters-platforms">
                    <p>Платформы:</p>
                    <div v-for="platform in platforms " :key="platform.id" class="xbox-games__filters-platforms-agreement">
                        <input :id="platform.title" :value="platform.title" v-model="filteredPlatforms" type="checkbox" />

                        <label :for="platform.title">
                            <span class="xbox-games__filters-platforms-agreement-checkbox"
                                :class="{ 'is-active': filteredPlatforms.includes(platform.title) }">
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L7.28033 13.2803C6.98744 13.5732 6.51256 13.5732 6.21967 13.2803L2.46967 9.53033C2.17678 9.23744 2.17678 8.76256 2.46967 8.46967C2.76256 8.17678 3.23744 8.17678 3.53033 8.46967L6.75 11.6893L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z" />
                                </svg>
                            </span>

                            {{ platform.title }}
                        </label>
                    </div>
                </div>

                <div class="xbox-games__filters-search-input">
                    <input v-model="searchingValue" @keyup.enter="getSearchedProducts" placeholder="Искать по названию...">
                    <ColouredButton @click="getSearchedProducts" class="xbox-games__filters-search-input-button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
            </div>

            <div v-if="allProducts !== null && filteredByPriceProducts.length" class="xbox-games__product-list">
                <nuxt-link :to="`/xbox/games/${product.id}`" v-for=" product in filteredByPriceProducts" :key="product.id"
                    class="xbox-games__product-list-card">
                    <ProductCard :product="product" />
                </nuxt-link>
            </div>

            <div v-else class="empty-list">
                Игры с такими параметрами не найдены, измените фильтры
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: 'Xbox Games - Katka Market',
});
import Slider from '@vueform/slider'

const url = useDefineURL()

const { data: allProducts } = await useFetch<Game[]>(`${url}/xbox/games`)

const searchingValue = ref('');

watch(searchingValue, async () => {
    if (searchingValue.value === '') {
        const { data: products } = await useFetch<Game[]>(`${url}/xbox/games`)

        allProducts.value = products.value
    }
})

async function getSearchedProducts(): Promise<void> {
    const { data: products } = await useFetch<Game[]>(`${url}/xbox/games/search/${searchingValue.value}`)

    allProducts.value = products.value
}

const rangeSliderMin = ref(0);
const rangeSliderMax = ref(100);
const rangeSliderValues = ref([0, 100])
const rangeSliderFormat = (value: number) => `$${value}`;

function setMinMaxValuesToRangerSLider([min, max]: number[]): void {
    rangeSliderMin.value = min
    rangeSliderMax.value = max
}

const filteredByPriceProducts = computed(() => {
    if (allProducts.value) {
        return allProducts.value.filter((p: Game) => parseInt(p.price) >= rangeSliderMin.value && parseInt(p.price) <= rangeSliderMax.value)
    } else {
        return []
    }
})

// const filteredByPriceProductsAndPlatforms = computed(() => {
//     if (filteredByPriceProducts.value) {
//         return filteredByPriceProducts.value.filter((p) => filteredPlatforms.value.includes())
//     } else {
//         return []
//     }
// })

const filteredPlatforms = ref([])

const { data: platforms } = await useFetch<Platform[]>(`${url}/platforms`)

platforms.value?.forEach((p: Platform) => filteredPlatforms.value.push(p.title))

</script>

<style lang="scss" scoped>
.xbox-games {
    display: flex;
    margin: 0 0 50px;

    &__filters {
        position: sticky;
        top: 15px;
        padding: 20px 25px;
        min-width: 370px;
        max-width: 370px;
        height: fit-content;
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

        &-range-slider {
            padding: 40px 0 20px;
        }

        &-platforms {
            padding: 0 0 10px;

            p {
                font-size: 18px;
                padding: 0 0 10px;
            }

            &-agreement {
                -ms-user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                user-select: none;

                padding: 0 0 10px;

                >input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    pointer-events: none;
                    visibility: hidden;
                }

                >label {
                    position: relative;
                    display: block;
                    padding: 0 0 0 29px;
                    font-size: 16px;
                    color: $colorBlack;
                    cursor: pointer;

                    &:hover {
                        span {
                            background: $colorGrayLight;
                        }
                    }

                    span {
                        position: absolute;
                        top: -1px;
                        left: 0;
                        width: 20px;
                        height: 20px;
                        border: 1px solid $colorBlack;
                        border-radius: 4px;
                        transition:
                            border-color 0.25s $easeInOutCirc,
                            background 0.25s $easeInOutCirc;
                        margin: 0 8px 0 0;

                        svg {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 18px;
                            height: 18px;
                            opacity: 0;
                            fill: #fff;
                            transition: opacity 0.25s $easeInOutCirc;
                        }

                        &.is-active {
                            border-color: $colorBlack;
                            background: $colorBlack;

                            svg {
                                opacity: 1;
                            }
                        }
                    }

                    a {
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        &-search-input {
            display: flex;

            input {
                border: 1px solid $colorBlack;
                border-radius: 16px 0 0 16px;
                padding: 17px 25px 16px;
                font-size: 16px;
            }

            &-button {
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