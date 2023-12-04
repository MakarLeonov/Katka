<template>
    <div class="content-wrapper">
        <div class="content">
            <header class="header">
                <div class="header__logo">Logo will be here</div>
                <div class="header__navbar">
                    <router-link to="/">
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
                    </router-link>
                    <router-link to="/xbox">
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
                    </router-link>
                    <router-link to="/playstation">
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
                    </router-link>
                    <router-link to="/pc">
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
                    </router-link>
                </div>
                <div></div>
            </header>
            <slot />
        </div>

        <footer>Подвал сайта</footer>
    </div>
</template>

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

            a {
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

                &:hover {
                    color: $colorOrange;
                    svg path  {
                        fill: $colorOrange;
                    }
                }
            }
        }
    }
}

footer {
    // position: absolute;
    // left: 0;
    // bottom: 0;
    width: 100%;
    height: 200px;
    background: $colorBlack;
}
</style>