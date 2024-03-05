<template>
    <div class="wrapper">
        <p class="title">Добавление платформы</p>
        <VeeForm v-slot="{ validate }" class="xbox-games-create">
            <div class="xbox-games-create__input">
                <VeeField v-model.trim="name" name="name" placeholder="Название платформы *"
                    :rules="{ required: true, max: 255 }" @keyup.enter.prevent="sendForm(validate)" />
                <VeeErrorMessage name="name" class="errorMessage" />

                <Transition>
                    <div v-show="name.length" @click="name = ''" class="xbox-games-create__input-clear">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                </Transition>
            </div>

            <ColouredButton @click.prevent="sendForm(validate)">Добавить запись</ColouredButton>
        </VeeForm>
    </div>
</template>

<script setup lang="ts">
import { defineRule, configure } from 'vee-validate';
import type { FormContext } from 'vee-validate';
import { required, max } from '@vee-validate/rules';
const { $toast } = useNuxtApp();
const router = useRouter();

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

const name = ref('')

const url = useDefineURL()

const isFormSended = ref(false);
const isFormSuccess = ref(false);

const sendForm = async (validate: FormContext['validate']) => {

    const { valid } = await validate();

    if (valid) {
        isFormSended.value = true;

        const todo = await $fetch(`${url}/platforms`, {
            method: 'POST',
            body: {
                title: name.value
            }
        })
            .then(() => {
                isFormSuccess.value = true;
                $toast.success('Запись успешно добавлена');
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

const conditions = ref(false)

watch(
    () => name, () => conditions.value = false
)

function clearFrom() {
    conditions.value = false

    name.value = ''
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
        margin: 0 0 16px;

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

    input {
        border: 1px solid $colorBlack;
        border-radius: 16px;
        height: 50px;
        padding: 13px 35px 13px 15px;

        font-size: 16px;
        margin: 16px 0 0;
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