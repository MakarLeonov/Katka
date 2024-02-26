<template>
    <div class="wrapper">
        <p class="title">Корзина</p>

        <div v-if="products != null && products.length != 0" class="korzina">
            <div class="korzina__product-list">
                <div v-for="product in products" :key="product.id" class="korzina__product-list-card">
                    <img :src="product.image" :alt="product.name">
                    <div class="korzina__product-list-card-info">
                        <div class="korzina__product-list-card-info-head">
                            <div> {{ product.name }}</div>
                            <div>{{ product.price }}$</div>
                        </div>
                        <div class="korzina__product-list-card-info-body">
                            <div v-if="product.author" class="korzina__product-list-card-info-body-author">{{ product.author }} · {{ product.genre }}</div>
                            <!-- <div v-else class="korzina__product-list-card-info-body-author">{{ product.genre }}</div> -->
                            <!-- <ProductCounter v-if="product.author" :count="product.amount" /> -->
                        </div>
                        <div class="korzina__product-list-card-info-body">
                            <EmptyButton @click="useSetLocalstorage(product), deleteProduct(product)">Удалить из корзины</EmptyButton>
                        </div>
                    </div>
                </div>
            </div>

            <div class="korzina__details">
                <div class="korzina__details-title">В корзине:</div>

                <div class="korzina__details-total-products">
                    <div>Всего продуктов:</div>
                    <div>{{ products.length }} шт</div>
                </div>

                <div class="korzina__details-product-list">
                    <div v-for="product in products" :key="product.id" class="korzina__details-product-list-item">
                        <div>- {{ product.name }} 
                            <!-- (2) -->
                        </div>
                        <div>{{ product.price }}$</div>
                    </div>
                </div>

                <div class="korzina__details-total-cost">
                    <div>Итого:</div>
                    <div v-if="products != null"> {{ products.reduce((sum, item) => sum + item.price * item.amount, 0) }}$</div>
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
let products = ref(JSON.parse(localStorage.getItem('korzina')));

function deleteProduct(product) {
    products.value.splice(products.value.findIndex(item => item.id === product.id), 1)
}

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

            &:last-child {
                border-bottom: none;
            }

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

                    &-author {
                        color: $colorGray;
                        font-size: 16px;
                        font-weight: 500;
                        padding: 0 0 15px;
                    }
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