<template>
    <div class="wrapper">
        <div class="title">Таблица "Платформы"</div>

        <div class="cabinet-platforms">

            <div class="cabinet-platforms__actions">
                <div class="search-input">
                    <input placeholder="Искать по имени...">
                    <ColouredButton class="search-input__button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
                <nuxt-link to="/cabinet/platforms/create">
                    <ColouredButton>Добавить запись</ColouredButton>
                </nuxt-link>
            </div>

            <div class="table">
                <div class="thead">
                    <div class="tr">
                        <div class="th id">№</div> <span>|</span>
                        <div class="th">Имя платформы</div> <span>|</span>
                        <div class="th">Опции</div>
                    </div>
                </div>

                <div class="tbody">
                    <div v-for="(item, index) in 5" :key="index" class="tr">
                        <div data-label="id" class="td id">123</div> <span>|</span>
                        <div data-label="Платформа" class="td">PlayStation IV</div> <span>|</span>
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
.cabinet-platforms {
    padding: 0 0 50px;

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