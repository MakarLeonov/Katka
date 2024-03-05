<template>
    <div class="wrapper">
        <div class="title">Таблица "Xbox Игры"</div>

        <div class="cabinet-xbox-games">

            <div class="cabinet-xbox-games__actions">
                <div class="search-input">
                    <input v-model="searchValue" placeholder="Искать по имени...">
                    <ColouredButton class="search-input__button">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </ColouredButton>
                </div>
                <nuxt-link to="/cabinet/xbox/games/create">
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
                    <div v-for="(game, index) in filteredGames" :key="game.id" class="tr">
                        <div data-label="id" class="td id">{{ index + 1 }}</div> <span>|</span>
                        <div data-label="Название игры" class="td">{{ game.name }}</div> <span>|</span>
                        <div data-label="Разработчик" class="td">{{ game.author }}</div> <span>|</span>
                        <div data-label="Платформы" class="td">{{ game.platforms.join(', ') }}</div> <span>|</span>

                        <div data-label="Стоимость" class="td center">
                            {{ game.price }}
                            {{ game.currency === 'USD' ? ' $' : 'Р' }}
                        </div>
                        <span>|</span>
                        <div data-label="В наличии" class="td center">yes</div> <span>|</span>
                        <div data-label="Опции" class="td options">
                            <nuxt-link :to="`/cabinet/xbox/games/update/${game.id}`">
                                <span class="material-symbols-outlined edit">edit</span>
                            </nuxt-link>
                            <span @click="deleteEntry(game.id)" class="material-symbols-outlined delete">delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'cabinet' })

const { $toast } = useNuxtApp();

const url = useDefineURL()

const { data: games } = await useFetch<Game[]>(`${url}/xbox/games`)

const searchValue = ref<string>('')

const filteredGames = computed(() => {
    if (games.value) {
        return games.value.filter((g: Game) => g.name.toUpperCase().includes(searchValue.value.toUpperCase()))
    } else {
        return []
    }
})

async function deleteEntry(id: number): Promise<void> {
    await $fetch(`${url}/xbox/games/${id}`, { method: 'DELETE' })
        .then(async () => {
            const { data: data } = await useFetch<Game[]>(`${url}/xbox/games`)
            games.value = data.value
            $toast.success('Запись успешно удалена');
        })
        .catch(() => {
            $toast.error(`Не получилось удалить эту запись`);
        });
}
</script>

<style lang="scss" scoped>
.cabinet-xbox-games {
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