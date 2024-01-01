<template >
    <!-- <div id="plan_section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"
        data-aos-anchor-placement="top-bottom"> -->


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
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                        viewBox="0 0 4713 2653" fill="none">
                                        <path id="Vector 113" d="M1813 2315.61L1755.5 2362.61L1789.5 2302.11L1813 2315.61Z"
                                            stroke="white" />
                                        <path id="Vector 114"
                                            d="M1789.5 2302.11L1814 2261.11L1854.5 2283.61L1813 2315.61L1789.5 2302.11Z"
                                            stroke="white" />
                                        <path id="Vector 218"
                                            d="M2090.54 1310.78L2085.52 1093.02L2418.87 1009.15L2604.63 1476.83L2402.04 1525.36L2296.5 1475.9L2268.04 1462.58L2090.54 1310.78Z"
                                            stroke="white" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="bevel" />
                                        <path id="Vector 219"
                                            d="M2614.35 1783.8L3000.26 2157.63L2784.83 2336.3L2681.87 2324L2382.11 2090.73L2614.35 1783.8Z"
                                            stroke="white" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="bevel" />
                                        <path id="Vector 220"
                                            d="M2715.29 829.66L2892.23 1407.95L2604.63 1476.83L2418.87 1009.15L2715.29 829.66Z"
                                            stroke="white" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="bevel" />
                                        <path id="Vector 221"
                                            d="M2892.23 1407.95L3338.18 1877.34L3155.12 2029.17L2604.63 1476.83L2892.23 1407.95Z"
                                            stroke="white" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="bevel" />
                                        <path id="Vector 480"
                                            d="M3789.73 1501.95L3775.9 1453.39L3885.54 1422.47L3789.73 1501.95Z"
                                            stroke="white" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="bevel" />
                                        <One />
                                        <Two />
                                        <Three />
                                        <Four />
                                        <Five />
                                        <Six />
                                        <Seven />
                                        <Eight />
                                        <Nine />
                                        <Ten />
                                        <Eleven />
                                    </svg> -->
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
                                <!-- :style="{ top: planStore.top + 'px', left: planStore.left + 'px' }"> -->
                                <div class="title">Участок {{ planStore.number }}</div>
                                <div class="text-grey">{{ planStore.size }} соток</div>
                                <div class="text-green" :style="{ color: planStore.color }">{{ planStore.status }}<br>
                                    <span :style="{ display: planStore.setPriceDisplay }">
                                        {{ planStore.price }}
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

import One from './planComp/one.vue';
import Two from './planComp/two.vue';
import Three from './planComp/three.vue';
import Four from './planComp/four.vue';
import Five from './planComp/five.vue';
import Six from './planComp/six.vue';
import Seven from './planComp/seven.vue';
import Eight from './planComp/eight.vue';
import Nine from './planComp/nine.vue';
import Ten from './planComp/ten.vue';
import Eleven from './planComp/eleven.vue';
import Svg from './svg.vue'

import plan from '~/static/plan.json'

const planStore = usePlanStore()

let top = ref('')
let left = ref('')



onMounted(() => {
    for (let i = 0; i < 342; i++) {
        let houses = document.getElementById('g_' + i);
        let dynamic = document.getElementById('l_' + i)
        if (houses) {
            houses.addEventListener('mouseover', () => {
                planStore.showInfo(i)
                let data = plan[i - 1]
                // console.log(data);
                if (dynamic) {
                    if(data.status === 'free'){
                        dynamic.classList.add('selected-free')
                    }else if (data.status === 'sold'){
                        dynamic.classList.add('selected-sold')
                    }else if (data.status === 'occupied'){
                        dynamic.classList.add('selected-occupied')
                    }
                }
            })
            houses.addEventListener('mousemove', (event) => {
                let block = document.getElementById('block_plan')
                top.value = event.clientY - block.getBoundingClientRect().top
                left.value = event.clientX - block.getBoundingClientRect().left + 30
                planStore.mouseMove(top.value, left.value)
            })
            houses.addEventListener('mouseleave', () => {
                planStore.hideInfo()
                top.value = ''
                left.value = ''
                dynamic.classList.remove('selected-free')
                dynamic.classList.remove('selected-sold')
                dynamic.classList.remove('selected-occupied')
            })
        }
    }
})
</script>
<style scoped></style>