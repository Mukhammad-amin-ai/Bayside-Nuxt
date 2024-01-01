<template >
    <div id="plan_section">
        <div class="plan_section">
            <h2 class="plan_title">Генплан поселка</h2>
            <div class="plan_bg"></div>
            <div id="plan_wrapper">
                <div id="plan_left">
                    <div class="container_primary">
                        <h2 class="h2" style="text-align: center;">Генплан поселка</h2>
                    </div>
                </div>
                <div id="plan_right">
                    <div id="plan_block">
                        <div id="zoom_block">
                            <img id="zoom_in" src="~/assets/images/zoom_in.svg" alt="" />
                            <img id="zoom_out" src="~/assets/images/zoom_out.svg" alt="" />
                        </div>
                        <div id="swipe_block">
                            <img src="~assets/images/swipe.svg" alt="">
                        </div>
                        <div id="plan_wrap">
                            <div id="plan_pan" data-transform="1 0 0 1 0 0" ref="box">
                                <svg data-transform="1 0 0 1 0 0" id="block_plan" width="100%" height="100%"
                                    viewbox="0 0 1920 1082" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect id="img-map" width="1920" height="1082" rx="4" fill="url(#pattern0)"></rect>
                                    <Svg />
                                    <defs>
                                        <pattern id="pattern0" patterncontentunits="userSpaceOnUse" width="100%"
                                            height="100%">
                                            <image id="image0" width="100%" height="100%"
                                                xlink:href="~/assets/images/fon.jpg" x="0" y="0"></image>
                                        </pattern>
                                    </defs>
                                </svg>
                            </div>
                            <div id="t_1" ref="coordinates" class="info_block" :class="{ 'active': planStore.class }"
                                :style="{ top: planStore.top + 'px', left: planStore.left + 'px' }">
                                <div class="title">Участок {{ planStore.number }}</div>
                                <div class="text-grey">{{ planStore.size }} соток</div>
                                <div class="text-green" :style="{ color: planStore.color }">{{ planStore.status }}<br>
                                    <span :style="{ display: planStore.setPriceDisplay }">
                                        {{ planStore.price }} ₽
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="block_small_responsive" class="block_full_small" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="0" data-aos-anchor-placement="top-bottom">
                <div class="contact-block">
                    <div id="plan_menu_resp" class="plan_menu">
                        <a data-element="72" href="#">КПП</a>
                        <a data-element="71" href="#">Гостевая парковка</a>
                        <a data-element="74" href="#">Теннисный корт</a>
                        <a data-element="76" href="#">Спортивная площадка</a>
                        <a data-element="75" href="#">Детская площадка №1</a>
                        <a data-element="77" href="#">Детская площадка №2</a>
                        <a data-element="407" href="#">Детская площадка №3</a>
                        <a data-element="409" href="#">Зона барбекю и рыбной ловли</a>
                        <a data-element="78" href="#">Пляж №1</a>
                        <a data-element="73" href="#">Пляж №2</a>
                        <a data-element="408" href="#">Лодочная станция</a>
                        <a data-element="406" href="#">Фонтан</a>
                        <a data-element="405" href="#">SPA-комплекс</a>
                        <a data-element="404" href="#">Workout зона</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { usePlanStore } from '~/stores/store';

import Svg from './svg.vue'

import plan from '~/static/plan.json'

const planStore = usePlanStore()

let top = ref('')
let left = ref('')

let mobileLeft = ref('')
let mobileTop = ref('')

let mouseMover = (i, data, dynamic) => {
    if (dynamic) {
        if (data.status === 'free') {
            dynamic.classList.add('selected-free')
        } else if (data.status === 'sold') {
            dynamic.classList.add('selected-sold')
        } else if (data.status === 'occupied') {
            dynamic.classList.add('selected-occupied')
        }
    }
}

let mouseLeave = (dynamic) => {
    planStore.hideInfo()
    top.value = ''
    left.value = ''
    dynamic.classList.remove('selected-free')
    dynamic.classList.remove('selected-sold')
    dynamic.classList.remove('selected-occupied')
}

onMounted(() => {
    for (let i = 0; i < 343; i++) {
        let houses = document.getElementById('g_' + i);
        let dynamic = document.getElementById('l_' + i)
        if (houses) {
            houses.addEventListener('mouseover', () => {
                planStore.showInfo(i)
                let data = plan[i - 1]
                mouseMover(i, data, dynamic)
            })
            houses.addEventListener('mousemove', (event) => {
                let block = document.getElementById('block_plan')
                top.value = event.clientY - block.getBoundingClientRect().top

                left.value = event.clientX - block.getBoundingClientRect().left
                if (left.value >= 1320) {
                    left.value = event.clientX - block.getBoundingClientRect().left - 150
                } else {
                    left.value = event.clientX - block.getBoundingClientRect().left + 30
                }
                if(window.innerWidth <= 400){
                    left.value = ''
                    top.value = ''
                }
                planStore.mouseMove(top.value, left.value)
            })
            houses.addEventListener('mouseleave', () => {
                mouseLeave(dynamic)
            })
            houses.addEventListener('touchstart', () => {
                mouseMover(i, data, dynamic)
            })
            houses.addEventListener('touchend', () => {
                mouseLeave(dynamic)
            })
            houses.addEventListener('touchcancel', () => {
                mouseLeave(dynamic)
            })
            houses.addEventListener("touchmove", (event) => {
                // mouseLeave(dynamic)
                let touch = event.touches[0];
                mobileTop.value = touch.clientY - 100
                mobileLeft.value = touch.clientX
                if(mobileLeft.value >= 279){
                    mobileLeft.value = touch.clientX - 100
                }else{
                    mobileLeft.value = touch.clientX + 50
                }
                planStore.mouseMove(mobileTop.value, mobileLeft.value)
            })
            window.addEventListener('touchstart', (event) => {
                let touch = event.touches[0];
                mobileTop.value = touch.clientY - 100
                mobileLeft.value = touch.clientX
                if(mobileLeft.value >= 279){
                    mobileLeft.value = touch.clientX - 100
                }else{
                    mobileLeft.value = touch.clientX + 50
                }
                planStore.mouseMove(mobileTop.value, mobileLeft.value)
            })
        }
    }
})
</script>
<style scoped></style>