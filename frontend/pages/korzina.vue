<template>
    <div class="wrapper">
        <p class="title">Корзина</p>

        <div v-if="true" class="korzina">
            <div class="korzina__product-list">
                <div class="korzina__product-list-card" v-for="(item, inex) in 5" :key="index">
                    <img src="/img/products/rdr2.jpg" alt="rdr2">
                    <div class="korzina__product-list-card-info">
                        <div class="korzina__product-list-card-info-head">
                            <div>Red Dead Redemption 2</div>
                            <div>499$</div>
                        </div>
                        <div class="korzina__product-list-card-info-body">
                            <EmptyButton>Удалить из корзины</EmptyButton>
                            <ProductCounter />
                        </div>
                    </div>
                </div>
            </div>

            <div class="korzina__details">
                <div class="korzina__details-title">В корзине:</div>

                <div class="korzina__details-total-products">
                    <div>Всего продуктов:</div>
                    <div>5 шт</div>
                </div>

                <div class="korzina__details-product-list">
                    <div class="korzina__details-product-list-item">
                        <div>- Red Dead Redemption 2 (2)</div>
                        <div>499$</div>
                    </div>
                    <div class="korzina__details-product-list-item">
                        <div>- Red Dead Redemption 2 (2)</div>
                        <div>499$</div>
                    </div>
                    <div class="korzina__details-product-list-item">
                        <div>- Red Dead Redemption 2 (2)</div>
                        <div>499$</div>
                    </div>
                    <div class="korzina__details-product-list-item">
                        <div>- Red Dead Redemption 2 (2)</div>
                        <div>499$</div>
                    </div>
                </div>

                <div class="korzina__details-total-cost">
                    <div>Итого:</div>
                    <div>2487$</div>
                </div>

                <ColouredButton>Перейти к оплате</ColouredButton>
            </div>
        </div>

        <div v-else class="empty">
            <p>Корзина пуста, предлагаем ознакомиться с нашим каталогом:</p>

            <!-- здесь добавить компонент с ссылками на разделы каталога -->
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.korzina {
    display: flex;
    padding: 0 0 40px;

    &__product-list {
        flex-grow: 1;

        &-card {
            display: flex;
            padding-bottom: 20px;
            border-bottom: 1px solid $colorGrayLight;
            margin-bottom: 20px;

            img {
                width: 120px;
                border-radius: 16px;
                margin: 0 80px 0 0;
            }

            &-info {
                padding: 50px 20px 0 0;
                flex-grow: 1;

                &-head {
                    padding: 0 0 10px;
                    display: flex;
                    justify-content: space-between;
                    
                    color: $colorBlack;
                    font-size: 24px;
                    font-weight: 600;
                }

                &-body {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }

    &__details {
        position: sticky;
        top: 20px;
        width: 330px;
        height: fit-content;
        padding: 35px 22px 22px;
        margin: 0 0 0 35px;
        border-radius: 16px;
        background: #FFF;
        box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.15);

        &-title {
            color: $colorBlack;
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 14px;
        }

        &-total-products {
            display: flex;
            justify-content: space-between;
            margin: 0 0 10px;

            color: $colorGray;
            font-size: 20px;
            font-weight: 300;
        }

        &-product-list {
            padding: 0 0 15px 5px;

            &-item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin: 0 0 8px;

                color: $colorGray;
                font-size: 15px;
                font-weight: 300;
            }
        }

        &-total-cost {
            padding: 0 0 57px 0;
            color: $colorGray;
            font-weight: 500;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
        }
    }
}

.empty {
    padding: 0 0 40px;
    p {
        text-align: center;
        font-size: 20px;
    }
}
</style>