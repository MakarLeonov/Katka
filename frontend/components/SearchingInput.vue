<template>
    <div class="search-input">
        <input v-model="searchValue" @keyup.enter="getSearchedProducts" :placeholder="props.placeholder">
        <ColouredButton @click="getSearchedProducts" class="search-input__button">
            <span class="material-symbols-outlined">
                search
            </span>
        </ColouredButton>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['placeholder'])

const emit = defineEmits(['getSearchedProducts'])

const searchValue = ref('')

function getSearchedProducts(): void {
    if (searchValue.value) {
        emit('getSearchedProducts', searchValue.value)
    }
}

</script>

<style lang="scss" scoped>
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
</style>