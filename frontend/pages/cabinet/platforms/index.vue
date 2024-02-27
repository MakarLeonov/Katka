<template>
    <div class="wrapper">
        <div class="title">Таблица "Платформы"</div>

        <div class="cabinet-platforms">
            <div class="cabinet-platforms__actions">
                <div class="search-input">
                    <input v-model="searchValue" placeholder="Искать по имени...">
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

            <div v-if="filteredPlatforms?.length" class="table">
                <div class="thead">
                    <div class="tr">
                        <div class="th id">№</div> <span>|</span>
                        <div class="th">Имя платформы</div> <span>|</span>
                        <div class="th">Опции</div>
                    </div>
                </div>

                <div class="tbody">
                    <div v-for="(platform, index) in filteredPlatforms" :key="index" class="tr">
                        <div data-label="id" class="td id">{{ index + 1 }}</div> <span>|</span>
                        <div data-label="Платформа" class="td">{{ platform.title }}</div> <span>|</span>
                        <div data-label="Опции" class="td options">
                            <nuxt-link :to="`/cabinet/platforms/update/${platform.id}`">
                                <span class="material-symbols-outlined edit">
                                    edit
                                </span>
                            </nuxt-link>
                            <span @click="deleteEntry(platform.id)" class="material-symbols-outlined delete">delete</span>
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

// Может лучше сделать через запрос по нажатию на кнопку?
const searchValue = ref('')

const filteredPlatforms = computed(() => {
    if (platforms.value) {
        return platforms.value.filter((p: Platform) => p.title.toUpperCase().includes(searchValue.value.toUpperCase()))
    } else {
        return []
    }
})

const { data: platforms } = await useFetch<Platform[]>(`${url}/platforms`)

async function deleteEntry(id: number): Promise<void> {
    await $fetch(`${url}/platforms/${id}`, { method: 'DELETE' })
        .then(async () => {
            const { data: data } = await useFetch<Platform[]>(`${url}/platforms`)
            platforms.value = data.value
            $toast.success('Запись успешно удалена');
        })
        .catch(() => {
            $toast.error(`Не получилось удалить эту запись`);
        });
}
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