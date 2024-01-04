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
                            <div id="plan_pan" data-transform="1 0 0 1 0 0" ref="box" class="svg-container">
                                <svg ref="svgContent" class="svg-content" data-transform="1 0 0 1 0 0" id="block_plan"
                                    width="100%" height="100%" viewbox="0 0 1920 1082" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect id="img-map" width="1920" height="1082" rx="4" fill="url(#pattern0)"></rect>
                                    <Svg />
                                    <defs>
                                        <pattern id="pattern0" patterncontentunits="userSpaceOnUse" width="100%"
                                            height="100%">
                                            <image id="image0" width="100%" height="100%"
                                                xlink:href="~/assets/images/background_1920_1080.jpg" x="0" y="0"></image>
                                        </pattern>
                                    </defs>
                                </svg>
                            </div>
                            <div id="t_1" ref="coordinates" class="info_block " :class="{ 'active': activeClass }"
                                :style="{ top: top + 'px', left: left + 'px' }">
                                <div class="title">Участок {{ number }}</div>
                                <div class="text-grey">{{ size }} соток</div>
                                <div class="text-green" :style="{ color: activeColor }">{{ stat }}<br>
                                    <span :style="{ display: priceDisplay }">
                                        {{ price }} ₽
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
import plan from '~/static/plan.json'
import Svg from './svg_test.vue'
// import { usePlanStore } from '~/stores/store';

// const planStore = usePlanStore()

let data = ref(plan)

let top = ref('')
let left = ref('')
let activeClass = ref(false)
let number = ref("")
let stat = ref("")
let price = ref("")
let size = ref("")
let priceDisplay = ref("")
let activeColor = ref('')

let showInfo = (id,dynamic) => {
    activeClass.value = true
    let catchedData = data.value[id - 1]
    if (catchedData !== null) {
        number.value = catchedData.number
        size.value = catchedData.size
        stat.value = catchedData.status
        price.value = catchedData.price
        if (catchedData.status === 'free') {
           stat.value  = 'СВОБОДЕН'
            activeColor.value = 'green'
            priceDisplay.value = 'block'
            dynamic.classList.add('selected-free')

        } else if (catchedData.status === 'occupied') {
           stat.value  = 'ЗАБРОНИРОВАН'
            activeColor.value = '#f1c000'
            priceDisplay.value = 'block'
            dynamic.classList.add('selected-occupied')

        } else if (catchedData.status === "sold") {
           stat.value  = "ПРОДАН"
            activeColor.value = 'red'
            priceDisplay.value = 'none'
            dynamic.classList.add('selected-sold')

        }
    }
}

let hideInfo = (dynamic) => {
    activeClass.value = false
    top.value = ''
    left.value = ''
    dynamic.classList.remove('selected-free')
    dynamic.classList.remove('selected-sold')
    dynamic.classList.remove('selected-occupied')
}


// Zooming ============
// const svgContainer = ref(null);
// const svgContent = ref(null);
// const scale = ref(1);

// const zoom = (factor) => {
//     scale.value *= factor;
//     svgContent.value.style.transform = `scale(${scale.value})`;
// };

// const handleWheel = (event) => {
//     const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
//     zoom(zoomFactor);
// };


// ====================
onMounted(() => {
    // svgContainer.value = document.querySelector('.svg-container');
    // svgContent.value = document.querySelector('.svg-content');

    // if (svgContainer.value) {
    //     svgContainer.value.addEventListener('wheel', handleWheel);
    // }

    for (let i = 0; i < 343; i++) {
        let houses = document.getElementById('g_' + i);
        let dynamic = document.getElementById('vector_' + i)
        if (houses) {
            houses.style.fill = 'rgba(255, 255, 255,0.01)'
            houses.addEventListener('mouseover', () => {
                showInfo(i,dynamic)
                // let data2 = data.value[id - 1]
                // if (dynamic) {
                //     if (data2.status === 'free') {
                //         dynamic.classList.add('selected-free')
                //     } else if (data2.status === 'sold') {
                //         dynamic.classList.add('selected-sold')
                //     } else if (data2.status === 'occupied') {
                //         dynamic.classList.add('selected-occupied')
                //     }
                // }
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
                // Mobile logic of appearing modal 
                if (window.innerWidth <= 1170) {
                    if (left.value >= 800) {
                        left.value = event.clientX - 120
                    }
                }
                if (window.innerWidth <= 1024) {
                    if (top.value >= 420) {
                        top.value = top.value - 80
                    }
                    if (left.value >= 650) {
                        left.value = event.clientX - 100
                    }
                }
                if (window.innerWidth <= 770) {
                    if (top.value >= 350) {
                        top.value = top.value - 80
                    }
                }
                if (window.innerWidth <= 500) {
                    if (left.value >= 350) {
                        left.value = event.clientX - 80
                    }
                    if (top.value >= 200) {
                        top.value = top.value - 50
                    }
                }
                if (window.innerWidth <= 425) {
                    if (left.value >= 350) {
                        left.value = event.clientX - 80
                    }
                    if (left.value <= 200) {
                        left.value = event.clientX + 20
                    }
                    if (top.value >= 180) {
                        top.value = top.value - 50
                    }
                }
                if (window.innerWidth <= 375) {
                    if (left.value >= 250) {
                        left.value = event.clientX - 80
                    }
                    // console.log(top.value);
                    if (top.value >= 120) {
                        top.value = top.value - 50
                    }
                }
                // mouseMove(top.value, left.value)
            })
            houses.addEventListener('mouseleave', () => {
                hideInfo(dynamic)
                // top.value = ''
                // left.value = ''
                // dynamic.classList.remove('selected-free')
                // dynamic.classList.remove('selected-sold')
                // dynamic.classList.remove('selected-occupied')
            })
            houses.addEventListener('touchstart', () => {
                showInfo(i,dynamic)
                // let data = plan[i - 1]
                // if (dynamic) {
                //     if (data.status === 'free') {
                //         dynamic.classList.add('selected-free')
                //     } else if (data.status === 'sold') {
                //         dynamic.classList.add('selected-sold')
                //     } else if (data.status === 'occupied') {
                //         dynamic.classList.add('selected-occupied')
                //     }
                // }
            })
            houses.addEventListener('touchend', () => {
                hideInfo(dynamic)
                // planStore.hideInfo()
                // top.value = ''
                // left.value = ''
            })
            houses.addEventListener('touchcancel', () => {
                hideInfo(dynamic)
                // planStore.hideInfo()
                // top.value = ''
                // left.value = ''
                // dynamic.classList.remove('selected-free')
                // dynamic.classList.remove('selected-sold')
                // dynamic.classList.remove('selected-occupied')
            })
            houses.addEventListener("touchmove", () => {
                hideInfo(dynamic)
                // planStore.hideInfo()
                // top.value = ''
                // left.value = ''
                // dynamic.classList.remove('selected-free')
                // dynamic.classList.remove('selected-sold')
                // dynamic.classList.remove('selected-occupied')
            })
        }
    }
})
</script>
<style scoped></style>