<template>
    <div class="coloured-button">
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.coloured-button {
    padding: 17px 25px;
    background: $colorBlack;
    border: 1.5px solid $colorBlack;
    border-radius: 16px;

    color: #fff;
    line-height: 1;
    font-size: 18px;
    cursor: pointer;

    transition: background 0.25s $easeInOutCirc,
                color 0.25s $easeInOutCirc;

    &:hover {
        background: transparent;
        color: $colorBlack;
    }
}
</style>