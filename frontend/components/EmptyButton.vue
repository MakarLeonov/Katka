<template>
    <div class="empty-button">
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.empty-button {
    height: 54px;
    padding: 15px;
    background: transparent;
    border: 1.5px solid $colorBlack;
    border-radius: 16px;

    color: $colorBlack;
    line-height: normal;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
    cursor: pointer;

    // display: flex;
    // align-items: center;
    // text-align: center;
    

    transition: background 0.25s $easeInOutCirc,
                color 0.25s $easeInOutCirc;

    svg path {
        fill: #fff;
    }

    &:hover {
        background: $colorBlack;
        color: #fff;
        fill: none;
        stroke: #fff;
    }

    -ms-user-select: none; 
    -moz-user-select: none; 
    -webkit-user-select: none; 
    user-select: none; 
}
</style>