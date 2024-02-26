<template>
    <div class="card-wrapper">
        <div class="product-card">
            <div class="product-card__head">
                <div class="product-card__image">
                    <img :src="product.image" :alt="product.name">
                </div>
                <div class="product-card__head-info">
                    <div class="product-card__head-info-name">{{ product.name }}</div>
                    <div class="product-card__head-info-author">{{ product.author }} · {{ product.genre }}</div>
                    <div class="product-card__head-info-buttons">
                        <ColouredButton>Купить за {{ product.price }} ₽</ColouredButton>
                        <EmptyButton v-if="isProductInCart" @click="useSetLocalstorage(product), isProductInCart = !isProductInCart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M22 20.7708L2.68104 1.45183L1.93577 0.706555L1.22921 0L0 1.22921L4.24901 5.47822L6.38803 9.98856L5.08139 12.3599C4.92653 12.6309 4.83942 12.9503 4.83942 13.289C4.83942 14.3537 5.71051 15.2248 6.77519 15.2248H13.9956L15.3313 16.5605C14.8473 16.9089 14.5279 17.48 14.5279 18.1285C14.5279 19.1931 15.3894 20.0642 16.454 20.0642C17.1025 20.0642 17.6736 19.7448 18.022 19.2512L20.7708 22L22 20.7708ZM7.1817 13.289C7.04619 13.289 6.93973 13.1826 6.93973 13.0471L6.96876 12.9309L7.83986 11.3533H10.1241L12.0598 13.289H7.1817ZM15.0506 11.3533C15.7765 11.3533 16.4153 10.9564 16.7444 10.3564L20.2094 4.07479C20.2868 3.93929 20.3256 3.77475 20.3256 3.61021C20.3256 3.07787 19.89 2.64232 19.3577 2.64232H6.32996L15.0506 11.3533ZM6.77519 16.1927C5.71051 16.1927 4.8491 17.0638 4.8491 18.1285C4.8491 19.1931 5.71051 20.0642 6.77519 20.0642C7.83986 20.0642 8.71095 19.1931 8.71095 18.1285C8.71095 17.0638 7.83986 16.1927 6.77519 16.1927Z" fill="#282828"/>
                            </svg>
                        </EmptyButton>
                        <EmptyButton v-else @click="useSetLocalstorage(product), isProductInCart = !isProductInCart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <path d="M6.6 17.6C5.39 17.6 4.411 18.59 4.411 19.8C4.411 21.01 5.39 22 6.6 22C7.81 22 8.8 21.01 8.8 19.8C8.8 18.59 7.81 17.6 6.6 17.6ZM0 0V2.2H2.2L6.16 10.549L4.675 13.244C4.499 13.552 4.4 13.915 4.4 14.3C4.4 15.51 5.39 16.5 6.6 16.5H19.8V14.3H7.062C6.908 14.3 6.787 14.179 6.787 14.025L6.82 13.893L7.81 12.1H16.005C16.83 12.1 17.556 11.649 17.93 10.967L21.868 3.828C21.956 3.674 22 3.487 22 3.3C22 2.695 21.505 2.2 20.9 2.2H4.631L3.597 0H0ZM17.6 17.6C16.39 17.6 15.411 18.59 15.411 19.8C15.411 21.01 16.39 22 17.6 22C18.81 22 19.8 21.01 19.8 19.8C19.8 18.59 18.81 17.6 17.6 17.6Z"/>
                            </svg>
                        </EmptyButton>
                    </div>
                    <div class="product-card__head-info-counter"></div>
                </div>
            </div>
            <div class="product-card__body">
                <div class="product-card__body-title">Описание:</div>
                <div class="product-card__body-description">{{ product.description }}</div>

                <div class="product-card__body-title">Характеристики:</div>
                <div class="product-card__body-platforms">Платформы: 
                    <div v-for="platform in useSeporateString(product.platform.name)" 
                    :key="platform" 
                    class="product-card__body-platforms-item"
                    >
                        {{ platform }}
                    </div>
                </div>
                <div class="product-card__body-size">Вес игры: {{ product.memory }} GB</div>

                <!-- <div class="product-card__body-title">Системные требования:</div>
                <div class="product-card__body-requirements">
                    <div class="product-card__body-requirements-title"></div>
                    <div class="product-card__body-requirements-title">Минимальные требования</div>
                    <div class="product-card__body-requirements-title">Рекомендуемые требования</div>

                    <div class="product-card__body-requirements-title">Система:</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.min.system }}</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.recommended.system }}</div>

                    <div class="product-card__body-requirements-title">Процессор:</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.min.cpu }}</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.recommended.cpu }}</div>

                    <div class="product-card__body-requirements-title">Графика:</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.min.graphics }}</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.recommended.graphics }}</div>

                    <div class="product-card__body-requirements-title">ОЗУ:</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.min.ram }}</div>
                    <div class="product-card__body-requirements-cell">{{ fortnightProducts[0].requirements.recommended.ram }}</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
const url = useDefineURL()

const { id } = useRoute().params;

const { data } = await useFetch(`${url}/api/xbox/games/${id}`);
const product = data.value.data

const isProductInCart = ref(useCheckLocalstorage(product))

</script>

<style lang="scss" scoped>
.product-card {
    padding: 60px 0 40px;
    cursor: default;

    &__head {
        // background: gray;
        height: 415px;

        display: grid;
        grid-template-columns: 500px 1fr;

        &-info {
            padding: 172px 0 0;

            &-name {
                color: $colorBlack;
                font-size: 36px;
                font-weight: 600;
                padding: 0 0 15px;
            }

            &-author {
                color: $colorGray;
                font-size: 20px;
                font-weight: 500;
                padding: 0 0 15px;
            }

            &-buttons {
                display: flex;
                gap: 6px;
            }
        }
    }

    &__body {
        &-title {
            padding: 40px 0 15px;

            color: $colorBlack;
            font-size: 26px;
        }

        &-description,
        &-platforms,
        &-size {
            line-height: 1.4;
            color: $colorBlack;
            font-size: 17px;
        }

        &-platforms {
            display: flex;
            align-items: center;

            &-item {
                padding: 8px 13px;
                background: $colorGray;
                border-radius: 20px;
                font-size: 15px;
                line-height: 1;
                color: #fff;
                margin: 0 0 0 5px;
            }
        }

        &-requirements {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            &-title {
                color: $colorBlack;
                font-size: 17px;
                font-weight: 500;
                padding: 13px 0;
            }

            &-cell {
                color: $colorBlack;
                font-size: 17px;
                font-weight: 400;
                padding: 13px 0;
            }
        }
    }

    &__image {
        // display: flex;
        // justify-content: center;
        img {
            height: 415px;
            border-radius: 5px;
        }
    }
}
</style>