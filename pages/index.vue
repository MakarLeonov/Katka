<template>
    <div class="wrapper">
        <p class="title">Fortnight</p>

        <div class="asdfgh">
            <div class="asdfgh__filters">
                <div class="asdfgh__filters-title">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="25" height="25" fill="url(#pattern3)"/>
                        <defs>
                            <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_41_25" transform="scale(0.0104167)"/>
                            </pattern>
                            <image id="image0_41_25" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAA05JREFUeF7tmjuO1EAQhquDCXmIGLKRxsFIpJyAjRGIu+wl4CA8LgAxMZl7xIQbI7GklowsQbBe2L9b1eUq7H/TbldVf5/b9mxXEv65Ekiu2ZlcKMD5JqAACnAm4JyeO4ACnAk4p+cOoIDbBI7H45NhGN6KyHMRuTeb8VNEPo/jeHk6nU7O/NTpw+2A3/C/isgjsLrvwzA8PZ/PV2oKjgHCCei67r2IvCxhklJ61/f965K5UedEFHD9l8fOv/hd55wfRIVbUldEAWNJ4X/m5JzDraGm/nDFd11HATUGW8+lgNZEK+NRwAxYLZBK3urp6B3gXT+qD74DvBeADKEFeteP6qMAZFg5TgGVX1VK3rcupwAKaH1P3YyH7jC+A2z5CwUYA0bhVy8AAWg9XvvIQAJa19c6HvwMbZ0QxaMARMh4nAKMAaPwFIAIGY93XVdzIPMj5/zQuCTT8BHfAR9F5EXhqj/knF8Vzg05LZyAw+FwSCl9KTmUTyk96/v+W0iyhUWFEzDVvd/vH+92uzfjOF6IyP3ZWqZH1KeU0uX/Dn9aV0gBhTfPKqZRgLNGCqAAZwLO6TexAyL3mq5eQPRe09ULiN5rugUBNf/aWLzXdAsCQrc6UsDsK2jpAx4KoADbD/Ho5wtwB9QuwBanfXT0CKrlgeJRQOUjiAKMNwG6YymAAowJOIfnDqCAmwRqn3nO/NTpuQPUCHUBwgnQLcf/6todjAS0XhH8HdA64dLxKGBp4rN8FEABdxLYwiOo5kBm8V7TLQgI3Wu6egHRe01XL2B6AEfuNd2EAOfvgG2/hCPDn2rjDnA2RAFrEBC599KZL0yv3gHRey8hAecJagHRey+d+cL0LQTU/NRfvPcSEnCe0EJA6N5LZ74wPQVARLYTKMCWL4xOARCR7QQooPZECZWLzlxb50P1WI+j9VKAsQEKMAaMwlMAImQ8TgHGgFF4CkCEjMcpwBgwCk8BiJDxuFoAqq/2ux0VhPKtbRz+DkALpgBE6O5xCtDxU19NAWqEugAtBNQcyCzee6nDY391CwGhey/tEeoyqAVE773U4bG/Wi1gKjFy76U9Ql2GJgJ0JWz7agpw9k8BFOBMwDk9dwAFOBNwTs8dQAHOBJzT/wJ7ftdwrejbowAAAABJRU5ErkJggg=="/>
                        </defs>
                    </svg>
                    Фильтрация товаров
                </div>
            </div>
            <div class="asdfgh__product-list">
                <ProductCard v-for="(item, index) in 13" :key="index" class="asdfgh__product-list-card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .title {
        margin: 60px 0 30px;
        text-align: center;
        font-size: 55px;
        font-weight: 600;
    }

    .asdfgh {
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
        }

        &__product-list {
            display: flex;
            flex-wrap: wrap;

            &-card:nth-child(4n) {
                margin:0 0 35px;
            }
        }
    }
</style>