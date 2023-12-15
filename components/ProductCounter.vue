<template>
    <div class="product-counter">
        <div class="decrease" @click="decrease">-</div>
        <p>{{ count }}</p>
        <div class="increase" @click="increase">+</div>
    </div>
</template>

<script setup>
const count = ref(1)

let increase = function() {
    count.value++
}

let decrease = function() {
    if (count.value > 1) {
        count.value--
    }
}
</script>

<style lang="scss" scoped>
.product-counter {
    display: flex;
    align-items: center;
    gap: 5px;

    -ms-user-select: none; 
    -moz-user-select: none; 
    -webkit-user-select: none; 
    user-select: none; 

    div {
        display: flex;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;

        border-radius: 31px;
        border: 1px solid $colorBlack;
        background: #fff;

        color: $colorBlack;
        font-size: 20px;
        font-weight: 400;
        text-align: center;

        transition: background 0.25s $easeInOutCirc, 
                    color 0.25s $easeInOutCirc;
        cursor: pointer;

        &:hover {
            background: $colorBlack;
            color: #fff;
        }
    }

    p {
        color: $colorBlack;
        font-size: 17px;
        font-weight: 400;
    }
}


</style>