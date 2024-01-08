<template>
    <div class="wrapper">
        <div class="reviews-slider">
            <div class="title">Отзывы наших покупателей</div>

            <div class="reviews-slider__prewrapper">
                <div ref="wrapperNode" class="reviews-slider__wrapper">
                    <div ref="slideListNode" class="reviews-slider__slide-list">
                        <div
                            v-for="slide in requests"
                            :key="slide.id"
                            ref="slideItems"
                            class="reviews-slider__slide-wrapper"
                        >
                            <div class="reviews-slider__slide">
                                <div class="reviews-slider__slide-head">
                                    <img src="/public/img/user_icons/man.png" alt="man">
                                    <div>
                                        <div class="reviews-slider__slide-head-name">{{ slide.name }}</div>
                                        <div class="reviews-slider__slide-head-stars">⭐⭐⭐⭐⭐</div>
                                    </div>
                                </div>
                                <p class="reviews-slider__slide-comment">{{ slide.comment }}</p>
                                <p class="reviews-slider__slide-date">{{ slide.date }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="reviews-slider__pins">
                <p class="reviews-slider__left-pin" @click="handlePrevPage">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L3.70711 7.29289C3.31658 7.68342 3.31658 8.31658 3.70711 8.70711L10 15" />
                    </svg>
                </p>
                <p class="reviews-slider__right-pin" @click="handleNextPage">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L12.2929 7.29289C12.6834 7.68342 12.6834 8.31658 12.2929 8.70711L6 15" />
                    </svg>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useWindowSize, executeTransition, TransitionPresets } from '@vueuse/core';

const { width: windowWidth } = useWindowSize();

const slideListNode = ref<HTMLDivElement>();
const slideItems = ref<HTMLDivElement[]>();
const currentPage = ref(0);
const wrapperNode = ref<HTMLDivElement>();
const newPosition = ref(0);

const requests = ref([
    {
        id: 1,
        name: 'Игорь Катка!',
        male: 'm',
        rating: '5',
        comment: 'Игра обалденская, всё вообще супер, сайт тоже, программист от бога, я атеист',
        date: '22.03.2023'
    },
    {
        id: 2,
        name: 'Виталий Катка!',
        male: 'm',
        rating: '5',
        comment: 'Игра обалденская, всё вообще супер, сайт тоже, программист от бога, я атеист',
        date: '22.03.2023'
    },
    {
        id: 3,
        name: 'Настя Катка!',
        male: 'f',
        rating: '5',
        comment: 'Игра обалденская, всё вообще супер, сайт тоже, программист от бога, я атеист',
        date: '22.03.2023'
    },
    {
        id: 4,
        name: 'Денис Катка!',
        male: 'm',
        rating: '5',
        comment: 'Игра обалденская, всё вообще супер, сайт тоже, программист от бога, я атеист',
        date: '22.03.2023'
    },
    {
        id: 5,
        name: 'Глебоба Катка!',
        male: 'm',
        rating: '5',
        comment: 'Игра обалденская, всё вообще супер, сайт тоже, программист от бога, я атеист',
        date: '22.03.2023'
    },
]);

const visibleCountOfSlides = computed(() => {
    if (windowWidth.value >= 1024) {
        return 3;
    }

    return 1;
});

// пролистывание заявок по кнопке "вперед"
const handleNextPage = () => {
    if (wrapperNode.value && slideItems.value && slideItems.value.length > 0) {
        currentPage.value += 1;

        // если пролистали все заявки, перекидываем на самый первый
        if (currentPage.value > slideItems.value.length - visibleCountOfSlides.value) {
            currentPage.value = 0;
        }

        const current = slideItems.value?.[currentPage.value];
        if (current) {
            newPosition.value = current.offsetLeft - parseFloat(window.getComputedStyle(wrapperNode.value).paddingLeft);
        }

        changeSlide();
    }
};

// пролистывание заявок по кнопке "назад"
const handlePrevPage = () => {
    if (wrapperNode.value && slideItems.value && slideItems.value.length > 0) {
        currentPage.value -= 1;

        // если пролистали все заявки, перекидываем на самый последний
        if (currentPage.value < 0) {
            currentPage.value = slideItems.value.length - visibleCountOfSlides.value;
        }

        const current = slideItems.value?.[currentPage.value];
        if (current) {
            newPosition.value = current.offsetLeft - parseFloat(window.getComputedStyle(wrapperNode.value).paddingLeft);
        }

        changeSlide();
    }
};

// все, что связано со скроллом
const changeSlide = async () => {
    if (wrapperNode.value) {
        // анимация скролла
        await executeTransition(newPosition, wrapperNode.value.scrollLeft, newPosition, {
            duration: 500,
            transition: TransitionPresets.easeInOutCirc,
        });
    }
};

watch(newPosition, () => {
    if (wrapperNode.value) {
        wrapperNode.value.scrollLeft = newPosition.value;
    }
});
</script>

<style lang="scss">
.reviews-slider {
padding: 0 60px;
    h2 {
        font-size: 40px;
        text-align: center;
        color: $colorBlack;
        margin: 0 0 24px;

        @include mq(767) {
            font-size: 26px;
        }

        span {
            color: $colorGray;
        }
    }

    &__prewrapper {
        margin: 0 0 10px;
        overflow: hidden;

        @include mq(1023) {
            margin: 0 0 20px;
        }
    }

    &__wrapper {
        position: relative;
        padding: 0 percent(40, 1440) 20px;
        font-size: 0;
        white-space: nowrap;
        margin: 0 -20px -20px;
        overflow: auto hidden;
    }

    &__slide-wrapper {
        display: inline-block;
        vertical-align: top;
        width: percent(433, 1360);
        white-space: normal !important;
        margin: 0 percent(30, 1360) 0 0;

        @include mq(1023) {
            width: 100%;
        }

        &:last-child {
            margin: 0 percent(43, 1440) 0 0;
        }
    }

    &__slide {
        padding: 24px 24px 20px;
        font-size: 16px;
        border: 1px solid color-lighten($colorGray, 70%);
        border-radius: 24px;

        @include mq(424) {
            padding: 20px percent(86, 1360);
        }
    }

    &__slide-head{
        display: flex;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            margin: 0 6px 0 0;
        }

        &-name {
            color: $colorBlack;
            font-size: 18px;
        }
    }

    &__slide-tag {
        display: inline-block;
        padding: 5px 14px 3px;
        font-size: 12px;
        font-weight: 500;
        border: 2px solid $colorOrange;
        border-radius: 32px;
        margin: 0 0 18px;
    }

    &__slide-title {
        font-weight: 700;
        margin: 0 0 8px;
    }

    &__slide-comment {
        display: -webkit-box;
        font-weight: 500;
        color: $colorGray;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }

    &__slide-date,
    &__slide-pay-type {
        display: inline-block;
        font-size: 12px;
        font-weight: 500;
    }

    &__pins {
        text-align: center;

        @include mq(1023) {
            display: none;
        }

        svg {
            display: block;
            width: 16px;
            height: 16px;
            stroke: $colorOrange;
            stroke-linecap: round;
            stroke-width: 2;
            fill: none;
            transition: stroke 0.25s $easeInOutCirc;
        }

        p {
            display: inline-block;
            padding: 10px;
            border: 1px solid $colorOrange;
            border-radius: 50%;
            transition: background 0.25s $easeInOutCirc;
            cursor: pointer;

            &:hover {
                background: $colorOrange;

                svg {
                    stroke: #fff;
                }
            }

            &:last-child {
                margin: 0 0 0 coef(30, 1440) * 100vw;
            }
        }
    }
}
</style>
