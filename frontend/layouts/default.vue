<template>
    <div class="content-wrapper">
        <div class="content">
            <header class="header">
                <nuxt-link to="/" class="header__logo">Katka</nuxt-link>
                <div class="header__navbar">
                    <!-- <NuxtLink to="/fortnight">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_36_139" transform="scale(0.0104167)"/>
                                </pattern>
                                <image id="image0_36_139" xlink:href="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                        <p>Fortnight</p>
                    </NuxtLink> -->
                    <div class="dropdown">
                        <div class="dropdown__hover-space">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_36_139" transform="scale(0.0104167)"/>
                                    </pattern>
                                    <image id="image0_36_139" xlink:href="data:image/png;base64,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"/>
                                </defs>
                            </svg>
                            <p>Xbox</p>
                        </div>
                        <div class="dropdown__content">
                            <router-link to="/xbox/games">Xbox игры</router-link>
                            <router-link to="/xbox/subscriptions">Xbox подписки</router-link>
                        </div>
                    </div>

                    <div class="dropdown">
                        <div class="dropdown__hover-space">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect fill="url(#pattern1)"/>
                                <defs>
                                    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_36_140" transform="scale(0.0104167)"/>
                                    </pattern>
                                    <image id="image0_36_140" width="96" height="96" xlink:href="data:image/png;base64,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"/>
                                </defs>
                            </svg>
                            <p>PlayStation</p>
                        </div>
                        <div class="dropdown__content playstation">
                            <router-link to="/playstation/games">PlayStation игры</router-link>
                            <router-link to="/playstation/subscriptions">PlayStation подписки</router-link>
                        </div>
                    </div>
                    <!-- <NuxtLink to="/playstation">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect fill="url(#pattern1)"/>
                            <defs>
                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_36_140" transform="scale(0.0104167)"/>
                                </pattern>
                                <image id="image0_36_140" width="96" height="96" xlink:href="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                        <p>PlayStation</p>
                    </NuxtLink>
                    <NuxtLink to="/pc">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect fill="url(#pattern2)"/>
                            <defs>
                                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_36_141" transform="scale(0.0104167)"/>
                                </pattern>
                                <image id="image0_36_141" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAthJREFUeF7tnUtu1EAURe8LEhkEhS0wJiDWQCIGsA2QQBEC8VlHEoQCDMI6GPBZA4MwZw0JTJCSQpYs1Om4Xd2US9dJn55arls+x9eyJ69D/KwEwppOuBBgvgkQgAAzAXM8DUCAmYA5ngaMXUBK6bakR5K2JN2QtGbe89jjf0v6KemLpIOIOOzb8MwGpJRWJe1KeixpZexXPdL9nUr6IOlFRPzp2mOngBb+J0l3R3phF21b3yTd75IwS8B7SU8u2lWOfL/7EfF0eo/nBLTP/O88dgbXeSLpTkT8mFy5S8AbSc8Gj2fBhsBuRLzMCWgM3YRXFQKHEdG8Vf77dTXgWNK1KvEsehwR6zkBqfe9NYKPtx5AKaWF+HU1YKEFuKnPEkCA+Y5AAALMBMzxNAABZgLmeBqAADMBczwNQICZgDmeBiDATMAcTwMQYCZgjqcBCDATMMfTAASYCZjjaQACzATM8TQAAWYC5ngagAAzAXM8DUCAmYA5ngYgwEzAHE8DEGAmYI6nAQgwEzDH0wAEmAmY42kAAswEzPE0AAFmAuZ4GoAAMwFzPA1AgJmAOZ4GIMBMwBxPAxBgJmCOpwGXQAADm+pJPIqI65PLd80LYmRZPQFzjSzbk/S83h6WeuWdiHiVa8AtSc3YyitLjWr4i59vbGWTm1Lal7Q9/B6WesW3EXFuHOisyblXJTWjizeXGtlwF/9V0oO5Rxe3LWgk7LQjjHkc/Z+M5rHzTtLrhYZ3T2allDYkPZR0rx1fz0zRfhm/2vH1nyV9nB5VPH3q6GeA5r4sczdmjHzOKQJyBisfR0BlwLnlEZAjVPk4AioDzi2PgByhyscRUBlwbnkE5AhVPm4XUPqeX8rH/Z2AAPOHGgIQ0P+XH6WPmNz5PIIy/7mSA1h6HAEIKL2Hys7nLaiMX/HZCChGyAIlBOyvoSWbvwznIsBsEQEIMBMwx9MABJgJmONpgFnAX6HAHn9vAI3kAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <p>PC</p>
                    </NuxtLink> -->
                </div>
                <div class="footer-cart">
                    <nuxt-link to="/korzina">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path d="M6.6 17.6C5.39 17.6 4.411 18.59 4.411 19.8C4.411 21.01 5.39 22 6.6 22C7.81 22 8.8 21.01 8.8 19.8C8.8 18.59 7.81 17.6 6.6 17.6ZM0 0V2.2H2.2L6.16 10.549L4.675 13.244C4.499 13.552 4.4 13.915 4.4 14.3C4.4 15.51 5.39 16.5 6.6 16.5H19.8V14.3H7.062C6.908 14.3 6.787 14.179 6.787 14.025L6.82 13.893L7.81 12.1H16.005C16.83 12.1 17.556 11.649 17.93 10.967L21.868 3.828C21.956 3.674 22 3.487 22 3.3C22 2.695 21.505 2.2 20.9 2.2H4.631L3.597 0H0ZM17.6 17.6C16.39 17.6 15.411 18.59 15.411 19.8C15.411 21.01 16.39 22 17.6 22C18.81 22 19.8 21.01 19.8 19.8C19.8 18.59 18.81 17.6 17.6 17.6Z"/>
                        </svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M9 24C7.35 24 6.015 25.35 6.015 27C6.015 28.65 7.35 30 9 30C10.65 30 12 28.65 12 27C12 25.35 10.65 24 9 24ZM0 0V3H3L8.4 14.385L6.375 18.06C6.135 18.48 6 18.975 6 19.5C6 21.15 7.35 22.5 9 22.5H27V19.5H9.63C9.42 19.5 9.255 19.335 9.255 19.125L9.3 18.945L10.65 16.5H21.825C22.95 16.5 23.94 15.885 24.45 14.955L29.82 5.22C29.94 5.01 30 4.755 30 4.5C30 3.675 29.325 3 28.5 3H6.315L4.905 0H0ZM24 24C22.35 24 21.015 25.35 21.015 27C21.015 28.65 22.35 30 24 30C25.65 30 27 28.65 27 27C27 25.35 25.65 24 24 24Z" fill="#282828"/>
                        </svg>
                        <!-- <div v-if="productsInCart" class="cart__items-label">{{ productsInCart.length }}</div> -->
                    </nuxt-link>
                </div>
            </header>
            <slot />
        </div>

        <footer class="footer">
            <router-link to="/" class="footer__column">Logo</router-link>

            <div class="footer__column">
                <div class="footer__column-item">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_36_139" transform="scale(0.0104167)"/>
                            </pattern>
                            <image id="image0_36_139" xlink:href="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                    <p>Xbox</p>
                </div>
                <router-link to="/xbox/games">Xbox игры</router-link>
                <router-link to="/xbox/subscriptions">Xbox подписки</router-link>
            </div>
            
            <div class="footer__column">
                <div class="footer__column-item">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect fill="url(#pattern1)"/>
                        <defs>
                            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_36_140" transform="scale(0.0104167)"/>
                            </pattern>
                            <image id="image0_36_140" width="96" height="96" xlink:href="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                    <p>Playstation</p>
                </div>
                <router-link to="/xbox/games">Playstation игры</router-link>
                <router-link to="/xbox/subscriptions">Playstation подписки</router-link>
            </div>
            
            <div class="footer__column">4</div>
            <div class="footer__column">5</div>

            <div class="footer__column">
                <div class="cart">
                    <nuxt-link to="/korzina">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path d="M6.6 17.6C5.39 17.6 4.411 18.59 4.411 19.8C4.411 21.01 5.39 22 6.6 22C7.81 22 8.8 21.01 8.8 19.8C8.8 18.59 7.81 17.6 6.6 17.6ZM0 0V2.2H2.2L6.16 10.549L4.675 13.244C4.499 13.552 4.4 13.915 4.4 14.3C4.4 15.51 5.39 16.5 6.6 16.5H19.8V14.3H7.062C6.908 14.3 6.787 14.179 6.787 14.025L6.82 13.893L7.81 12.1H16.005C16.83 12.1 17.556 11.649 17.93 10.967L21.868 3.828C21.956 3.674 22 3.487 22 3.3C22 2.695 21.505 2.2 20.9 2.2H4.631L3.597 0H0ZM17.6 17.6C16.39 17.6 15.411 18.59 15.411 19.8C15.411 21.01 16.39 22 17.6 22C18.81 22 19.8 21.01 19.8 19.8C19.8 18.59 18.81 17.6 17.6 17.6Z"/>
                        </svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M9 24C7.35 24 6.015 25.35 6.015 27C6.015 28.65 7.35 30 9 30C10.65 30 12 28.65 12 27C12 25.35 10.65 24 9 24ZM0 0V3H3L8.4 14.385L6.375 18.06C6.135 18.48 6 18.975 6 19.5C6 21.15 7.35 22.5 9 22.5H27V19.5H9.63C9.42 19.5 9.255 19.335 9.255 19.125L9.3 18.945L10.65 16.5H21.825C22.95 16.5 23.94 15.885 24.45 14.955L29.82 5.22C29.94 5.01 30 4.755 30 4.5C30 3.675 29.325 3 28.5 3H6.315L4.905 0H0ZM24 24C22.35 24 21.015 25.35 21.015 27C21.015 28.65 22.35 30 24 30C25.65 30 27 28.65 27 27C27 25.35 25.65 24 24 24Z" fill="#ffffff"/>
                        </svg>
                        <!-- <div v-if="productsInCart" class="cart__items-label">{{ productsInCart.length }}</div> -->
                    </nuxt-link>
                    <br>
                    <nuxt-link to="/cabinet">Для админа</nuxt-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
// const productsInCart = JSON.parse(localStorage.getItem('korzina'))
</script>

<style lang="scss">

.content-wrapper {
  height: 100%;
}
.content {
    box-sizing: border-box;
    // min-height: 100%;
    height: fit-content;
    // padding-bottom: 90px;

    .header {
        display: flex;
        height: 70px;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        padding: 0 percent(75, 1440);

        &__logo {
            font-size: 35px;
        }

        &__navbar {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;

            height: 70px;
            padding: 0 70px;
            color: #fff;
            background: $colorBlack;
            border-radius: 0px 0px 35px 35px;

            .dropdown {
                position: relative;
                display: inline-block;
                cursor: pointer;

                &:hover {
                    .dropdown__content {
                        display: block;
                    }
                }

                &__hover-space {
                    display: flex;
                    align-items: center;
                    margin: 0 30px 0 0;

                    svg {
                        margin-right: 5px;
                        width: 24px;
                        height: 24px;
                        fill: none;

                        rect {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }

                &__content {
                    display: none;
                    position: absolute;
                    background: $colorBlack;
                    padding: 15px;
                    border-radius: 5px;
                    min-width: 180px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;

                    a {
                        display: block;
                        padding: 10px 10px 7px;

                        &:hover {
                            background: rgba( #fff,  0.07);
                        }
                    }
                }

                &__content.playstation {
                    width: 230px;
                }
            }
        }
    }

    .cart,
    .footer-cart {
        position: relative;

        &__items-label {
            position: absolute;
            top: -10px;
            right: -9px;
            background: $colorBlack;
            background: orange;

            font-size: 13px;
            min-height: 25px;
            min-width: 25px;
            border-radius: 15px;
            color: #fff;
            color: #000;
            border: 2px solid #fff;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 4px;
        }
    }
    
    .footer-cart {
        
    }
}

.footer {
    padding: 115px percent(75, 1440) 30px;
    width: 100%;
    height: 500px;
    background: $colorBlack;
    color: #fff;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px;

    &__column:first-child {
        color: #FFF;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    &__column {
        // background: red;

        &-item {
            display: flex;
            align-items: center;
            margin: 8px 30px 20px 0;
            font-size: 18px;
            font-weight: 500;

            svg {
                margin-right: 5px;
                width: 40px;
                height: 40px;
                fill: none;

                rect {
                    width: 24px;
                    height: 24px;
                }
            }
        }

        a {
            padding: 0 0 0 5px;
            display: block;
            margin: 0 0 10px;
            color: $colorGrayLight;

            &:hover {
                color: $colorOrange;
            }
        }
    }
}
</style>