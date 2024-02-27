<template>
    <div class="wrapper">
        <div class="title">Таблица "Отзывы"</div>

        <div class="cabinet-reviews">

            <div class="cabinet-reviews__actions">
                <div class="search-input">
                    <input v-model="searchValue" placeholder="Искать по имени...">
                    <ColouredButton class="search-input__button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
            </div>

            <div v-if="filteredReviews?.length" class="table">
                <div class="thead">
                    <div class="tr">
                        <div class="th id">№</div> <span>|</span>
                        <div class="th">Автор</div> <span>|</span>
                        <div class="th">Гендер</div> <span>|</span>
                        <div class="th">Оценка</div> <span>|</span>
                        <div class="th">Комментарий</div> <span>|</span>
                        <div class="th center">Опции</div>
                    </div>
                </div>

                <div class="tbody">
                    <div v-for="(review, index) in filteredReviews" :key="review.id" class="tr">
                        <div data-label="id" class="td id">{{ index + 1 }}</div> <span>|</span>
                        <div data-label="Автор" class="td">{{ review.author }}</div> <span>|</span>
                        <div data-label="Гендер" class="td">{{ review.male === 'm' ? 'Мужчина' : 'Женщина' }}</div>
                        <span>|</span>
                        <div data-label="Оценка" class="td">
                            <span v-for="star in review.rating" :key="star"
                                class="material-symbols-outlined rating">star</span>
                        </div><span>|</span>
                        <div data-label="Комментарий" class="td">{{ review.comment }}</div> <span>|</span>
                        <div data-label="Опции" class="td options">
                            <span v-if="review.isPublished" @click="changePublishStatus(review.id, review.isPublished)"
                                class="material-symbols-outlined published">check_circle</span>
                            <span v-else @click="changePublishStatus(review.id, review.isPublished)"
                                class="material-symbols-outlined unpublished">unpublished</span>
                            <span @click="deleteEntry(review.id)" class="material-symbols-outlined delete">delete</span>
                        </div>
                    </div>
                </div>
            </div>



            <div v-else class="table empty">
                Ни одной записи не найдено, попробуйте сбросить фильтры или добавить новую
                <span></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'cabinet' })

const { $toast } = useNuxtApp();

const url = useDefineURL()

const { data: reviews } = await useFetch<Review[]>(`${url}/reviews`)

const searchValue = ref<string>('')

const filteredReviews = computed(() => {
    if (reviews.value) {
        return reviews.value.filter((r: Review) => r.author.toUpperCase().includes(searchValue.value.toUpperCase()))
    } else {
        return []
    }
})

async function deleteEntry(id: number): Promise<void> {
    await $fetch(`${url}/reviews/${id}`, { method: 'DELETE' })
        .then(async () => {
            const { data: data } = await useFetch<Review[]>(`${url}/reviews`)
            reviews.value = data.value
            $toast.success('Запись успешно удалена');
        })
        .catch(() => {
            $toast.error(`Не получилось удалить эту запись`);
        });
}

async function changePublishStatus(id: number, isPublished: number): Promise<void> {
    await $fetch(`${url}/reviews/${id}`, { method: 'PUT', body: { isPublished: !isPublished } })
        .then(async () => {
            const { data: data } = await useFetch<Review[]>(`${url}/reviews`)
            reviews.value = data.value
            if (!isPublished) {
                $toast.success('Отзыв опубликован');
            } else {
                $toast.success('Отзыв снят с публикации');
            }
        })
        .catch(() => {
            $toast.error(`Не получилось изменить статус публикации`);
        });
}

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

.rating {
    color: $colorOrange;
    fill: 1;
}
</style>