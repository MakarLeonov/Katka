<template>
    <div class="wrapper">
        <p class="title">Обновление записи</p>

        <VeeForm v-slot="{ validate }" class="xbox-games-create">
            <div class="xbox-games-create__input">
                <VeeField v-model.trim="fields.name" name="name" placeholder="Название продукта *"
                    :rules="{ required: true, max: 255 }" />
                <VeeErrorMessage name="name" class="errorMessage" />

                <Transition>
                    <div v-show="fields.name.length" @click="fields.name = ''" class="xbox-games-create__input-clear">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                </Transition>
            </div>

            <div class="xbox-games-create__input">
                <VeeField v-model.trim="fields.author" name="author" placeholder="Автор, выпустивший продукт *"
                    :rules="{ required: true, max: 255 }" />
                <VeeErrorMessage name="author" class="errorMessage" />

                <Transition>
                    <div v-show="fields.author.length" @click="fields.author = ''" class="xbox-games-create__input-clear">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                </Transition>
            </div>

            <div class="xbox-games-create__platforms-title">Платформы:</div>
            <div class="xbox-games-create__platforms">
                <div v-for="platform in platforms " :key="platform.id" class="xbox-games-create__platforms-agreement">
                    <input :id="platform.title" :value="platform.title" v-model="fields.platforms" type="checkbox" />

                    <label :for="platform.title">
                        <span class="xbox-games-create__platforms-agreement-checkbox"
                            :class="{ 'is-active': fields.platforms.includes(platform.title) }">
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L7.28033 13.2803C6.98744 13.5732 6.51256 13.5732 6.21967 13.2803L2.46967 9.53033C2.17678 9.23744 2.17678 8.76256 2.46967 8.46967C2.76256 8.17678 3.23744 8.17678 3.53033 8.46967L6.75 11.6893L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z" />
                            </svg>
                        </span>

                        {{ platform.title }}
                    </label>
                </div>
            </div>

            <div class="xbox-games-create__grid">
                <div class="xbox-games-create__input">
                    <VeeField v-model.trim="fields.price" name="price" placeholder="Цена *"
                        :rules="{ required: true, max: 10 }" />
                    <VeeErrorMessage name="price" class="errorMessage" />

                    <Transition>
                        <div v-show="fields.price.length" @click="fields.price = ''" class="xbox-games-create__input-clear">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                    </Transition>
                </div>

                <div class="xbox-games-create__input">
                    <VeeField v-model.trim="fields.genre" name="genre" placeholder="Жанр *"
                        :rules="{ required: true, max: 100 }" />
                    <VeeErrorMessage name="genre" class="errorMessage" />

                    <Transition>
                        <div v-show="fields.genre.length" @click="fields.genre = ''" class="xbox-games-create__input-clear">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                    </Transition>
                </div>

                <div class="xbox-games-create__input">
                    <VeeField v-model.trim="fields.memory" name="memory" placeholder="Память *"
                        :rules="{ required: true, max: 255 }" />
                    <VeeErrorMessage name="memory" class="errorMessage" />

                    <Transition>
                        <div v-show="fields.memory.length" @click="fields.memory = ''"
                            class="xbox-games-create__input-clear">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                    </Transition>
                </div>

                <div class="xbox-games-create__input">
                    <VeeField v-model.trim="fields.image" name="image" placeholder="Картинка *"
                        :rules="{ required: true, max: 255 }" />
                    <VeeErrorMessage name="image" class="errorMessage" />

                    <Transition>
                        <div v-show="fields.image.length" @click="fields.image = ''" class="xbox-games-create__input-clear">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                    </Transition>
                </div>
            </div>

            <div class="xbox-games-create__input">
                <textarea v-model="fields.description" placeholder="Описание"></textarea>

                <Transition>
                    <div v-show="fields.description.length" @click="fields.description = ''"
                        class="xbox-games-create__input-clear">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                </Transition>
            </div>

            <ColouredButton @click.prevent="sendForm(validate)">Добавить запись</ColouredButton>

            <Transition>
                <div v-show="isAnyDataInFrom" @click="clearFrom" class="xbox-games-create__clear-from">
                    <span class="material-symbols-outlined">close</span>
                </div>
            </Transition>
        </VeeForm>
    </div>
</template>

<script setup lang="ts">
import { defineRule, configure } from 'vee-validate';
import type { FormContext } from 'vee-validate';
import { required, max } from '@vee-validate/rules';

const { $toast } = useNuxtApp();
const router = useRouter()

const url = useDefineURL()
const id = useRoute().params.id

const { data: game } = await useFetch<Game>(`${url}/xbox/games/${id}`)

const { data: platforms } = await useFetch<Platform[]>(`${url}/platforms`)

definePageMeta({ layout: 'cabinet' })

defineRule('required', required);
defineRule('max', max);

configure({
    generateMessage: ctx => {
        if (ctx.rule) {
            if (ctx.rule.name === 'required') {
                return 'Поле обязательно для заполнения';
            }

            if (ctx.rule.name === 'max' && Array.isArray(ctx.rule.params) && typeof ctx.rule.params?.[0] === 'number') {
                return (
                    'Превышен лимит знаков (' + ctx.rule.params?.[0] + ')'
                );
            }
        }

        return 'Поле заполнено некорректно';
    },
});

const fields = ref({
    name: game.value ? game.value.name : '',
    author: game.value ? game.value.author : '',
    price: game.value ? game.value.price : '',
    genre: game.value ? game.value.genre : '',
    memory: game.value ? game.value.memory : '',
    image: game.value ? game.value.image : '',
    platforms: game.value ? game.value.platforms : [],
    description: game.value ? game.value.description : '',
})

const isFormSended = ref(false);
const isFormSuccess = ref(false);

const sendForm = async (validate: FormContext['validate']) => {

    const { valid } = await validate();

    if (valid) {
        isFormSended.value = true;

        await $fetch(`${url}/xbox/games/${id}`, {
            method: 'PUT',
            body: fields.value
        })
            .then(() => {
                isFormSuccess.value = true;
                $toast.success('Запись успешно Обновлена');
                router.back()
            })
            .catch(() => {
                isFormSended.value = false;
                $toast.error('Введенные данные содержат ошибки');
            });
    } else {
        $toast.error('Введенные данные содержат ошибки');
    }
};

const isAnyDataInFrom = ref(true)

watch(
    () => fields, (newValue: any, oldValue) => {

        for (let key in newValue.value) {
            if (newValue.value[key].length > 0) {
                isAnyDataInFrom.value = true
                return true;
            }
        }

        isAnyDataInFrom.value = false
    },
    { deep: true }
)

function clearFrom() {
    isAnyDataInFrom.value = false

    fields.value.name = ''
    fields.value.author = ''
    fields.value.price = ''
    fields.value.genre = ''
    fields.value.memory = ''
    fields.value.image = ''
    fields.value.platforms = []
    fields.value.description = ''
}
</script>

<style lang="scss" scoped>
.xbox-games-create {
    position: relative;
    padding: 0 0 50px;
    max-width: 500px;
    margin: 0 auto;

    &__input {
        position: relative;

        &-clear {
            position: absolute;
            cursor: pointer;

            height: 30px;
            width: 30px;
            top: 24px;
            right: 10px;
            padding: 2px;

            &>span {
                font-size: 30px;
                color: $colorGrayMedium;
                transition: color .15s $easeInOutCirc;
            }

            &:hover {
                &>span {
                    color: $colorGray;
                }
            }
        }
    }

    input,
    textarea {
        border: 1px solid $colorBlack;
        border-radius: 16px;
        height: 50px;
        padding: 13px 35px 13px 15px;

        font-size: 16px;
        margin: 16px 0 0;
    }

    textarea {
        height: 165px;

        margin: 16px 0;
    }

    &__platforms {
        padding: 0 5px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px 20px;

        &-title {
            font-size: 20px;
            padding: 16px 0 0;
        }

        &-agreement {
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;

            padding: 10px 0 0;

            >input {
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                pointer-events: none;
                visibility: hidden;
            }

            >label {
                position: relative;
                display: block;
                padding: 0 0 0 29px;
                font-size: 14px;
                color: $colorBlack;
                cursor: pointer;

                &:hover {
                    span {
                        background: $colorGrayLight;
                    }
                }

                span {
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    border: 1px solid $colorBlack;
                    border-radius: 4px;
                    transition:
                        border-color 0.25s $easeInOutCirc,
                        background 0.25s $easeInOutCirc;
                    margin: 0 8px 0 0;

                    svg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 18px;
                        height: 18px;
                        opacity: 0;
                        fill: #fff;
                        transition: opacity 0.25s $easeInOutCirc;
                    }

                    &.is-active {
                        border-color: $colorBlack;
                        background: $colorBlack;

                        svg {
                            opacity: 1;
                        }
                    }
                }

                a {
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 16px;
    }

    &__clear-from {
        position: absolute;
        cursor: pointer;

        height: 50px;
        width: 50px;
        top: 16px;
        right: -50px;
        padding: 2px;

        &>span {
            font-size: 46px;
            color: $colorGrayMedium;
            transition: color .15s $easeInOutCirc;
        }

        &:hover {
            &>span {
                color: $colorGray;
            }
        }
    }
}

.errorMessage {
    display: block;
    padding: 7px 0 0 5px;
}

.v-enter-active,
.v-leave-active {
    transition: opacity .25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>