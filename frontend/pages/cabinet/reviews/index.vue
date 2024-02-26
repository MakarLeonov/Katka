<template>
    <div class="wrapper">
        <div class="title">Таблица "Отзывы"</div>

        <div class="cabinet-reviews">

            <div class="cabinet-reviews__actions">
                <div class="search-input">
                    <input placeholder="Искать по имени...">
                    <ColouredButton class="search-input__button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
            </div>

            <div class="table">
                <div class="thead">
                    <div class="tr">
                        <div class="th id">№</div> <span>|</span>
                        <div class="th">Автор</div> <span>|</span>
                        <div class="th">Гендер</div> <span>|</span>
                        <div class="th center">Оценка</div> <span>|</span>
                        <div class="th">Комментарий</div> <span>|</span>
                        <div class="th center">Опции</div>
                    </div>
                </div>

                <div class="tbody">
                    <div v-for="(item, index) in 5" :key="index" class="tr">
                        <div data-label="id" class="td id">123</div> <span>|</span>
                        <div data-label="Автор" class="td">Пётр Семёнович</div> <span>|</span>
                        <div data-label="Гендер" class="td">Мужчина</div> <span>|</span>
                        <div data-label="Оценка" class="td center">⭐⭐⭐⭐⭐</div> <span>|</span>
                        <div data-label="Комментарий" class="td">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Impedit iusto commodi illum aut ex animi tenetur eum totam sapiente illo. Dignissimos ab
                            repellat doloremque quisquam laboriosam omnis magnam facere! Fugiat nesciunt accusamus, soluta
                            labore esse deserunt. Possimus id excepturi eveniet deleniti esse laborum facilis culpa,
                            sapiente, perferendis itaque eos assumenda impedit illo, vel expedita? Harum doloribus ad
                            voluptatum illum odit consequuntur consequatur quae, accusamus ducimus eveniet commodi debitis
                            dolorem alias sequi laboriosam deserunt sit nulla non nesciunt vero! Aut unde suscipit
                            repudiandae, doloremque quia nam consequuntur est nulla similique, mollitia asperiores quos
                            aliquid veniam saepe quasi laudantium! Deleniti, quisquam distinctio!</div> <span>|</span>
                        <div data-label="Опции" class="td options">
                            <span v-if="isPublished" @click="isPublished = !isPublished"
                                class="material-symbols-outlined published">check_circle</span>
                            <span v-else @click="isPublished = !isPublished"
                                class="material-symbols-outlined unpublished">unpublished</span>
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

const isPublished = ref(true)

</script>

<style lang="scss" scoped>
.cabinet-reviews {
    padding: 0 0 50px;

    .tr {
        grid-template-columns: 100px 3px 1fr 3px 1fr 3px 1fr 3px 3fr 3px 150px;
    }

    .published {
        color: aqua;
    }

    .unpublished {
        color: grey;
    }

    &__actions {
        display: flex;
        justify-content: flex-end;

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