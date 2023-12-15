<template>
    <div class="empty-button">
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.empty-button {
    padding: 15px;
    background: transparent;
    border: 1.5px solid $colorBlack;
    border-radius: 16px;

    color: $colorBlack;
    line-height: 1;
    font-size: 18px;
    cursor: pointer;

    display: flex;
    align-items: center;

    transition: background 0.25s $easeInOutCirc,
                color 0.25s $easeInOutCirc;

    svg path {
        fill: #fff;
    }

    &:hover {
        background: $colorBlack;
        color: #fff;

        svg path {
            fill: #fff;
        }
    }

    -ms-user-select: none; 
    -moz-user-select: none; 
    -webkit-user-select: none; 
    user-select: none; 
}
</style>