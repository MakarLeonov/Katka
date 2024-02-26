<template>
    <div class="wrapper">
        <div class="title">Таблица "PlayStation Игры"</div>

        <div class="cabinet-playstation-games">

            <div class="cabinet-playstation-games__actions">
                <div class="search-input">
                    <input placeholder="Искать по имени...">
                    <ColouredButton class="search-input__button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
                <nuxt-link to="/cabinet/playstation/games/create">
                    <ColouredButton>Добавить запись</ColouredButton>
                </nuxt-link>
            </div>

            <div class="table">
                <div class="thead">
                    <div class="tr">
                        <div class="th id">№</div> <span>|</span>
                        <div class="th">Название игры</div> <span>|</span>
                        <div class="th">Разработчик</div> <span>|</span>
                        <div class="th">Платформы</div> <span>|</span>
                        <div class="th center">Стоимость</div> <span>|</span>
                        <div class="th center">В наличии</div> <span>|</span>
                        <div class="th center">Опции</div>
                    </div>
                </div>

                <div class="tbody">
                    <div v-for="(item, index) in 5" :key="index" class="tr">
                        <div data-label="id" class="td id">123</div> <span>|</span>
                        <div data-label="Название игры" class="td">Read Dead Redemtion 2</div> <span>|</span>
                        <div data-label="Разработчик" class="td">Rockstar</div> <span>|</span>
                        <div data-label="Платформы" class="td">PlayStation IV</div> <span>|</span>
                        <div data-label="Стоимость" class="td center">300$</div> <span>|</span>
                        <div data-label="В наличии" class="td center">52</div> <span>|</span>
                        <div data-label="Опции" class="td options">
                            <span class="material-symbols-outlined edit">edit</span>
                            <span class="material-symbols-outlined delete">delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'cabinet' })
</script>

<style lang="scss" scoped>
.cabinet-playstation-games {
    padding: 0 0 50px;

    .tr {
        grid-template-columns: 100px 3px 1.3fr 3px 1fr 3px 1fr 3px 170px 3px 150px 3px 150px;
    }

    &__actions {
        display: flex;
        justify-content: space-between;

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
}
</style>