<template>
    <div class="card-wrapper">
        <div class="product-card">
            <div class="product-card__head">
                <div class="product-card__image">
                    <img :src="data.data.image" :alt="data.data.name">
                </div>
                <div class="product-card__head-info">
                    <div class="product-card__head-info-name">{{ data.data.name }}</div>
                    <div class="product-card__head-info-author">{{ data.data.author }} · {{ data.data.genre }}</div>
                    <div class="product-card__head-info-buttons">
                        <ColouredButton>Купить за {{ data.data.price }} ₽</ColouredButton>
                        <EmptyButton>
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
                <div class="product-card__body-description">{{ data.data.description }}</div>

                <div class="product-card__body-title">Характеристики:</div>
                <div class="product-card__body-description">Платформы: {{ data.data.platform.name }}</div>
                <div class="product-card__body-description">Вес игры: {{ data.data.memory }} GB</div>

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
import url from '@/url.js'

const { id } = useRoute().params;

const { data } = await useFetch(`${url}/api/xbox/games/${id}`);

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

        &-description {
            line-height: 1.4;
            color: $colorBlack;
            font-size: 17px;
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