<template >
    <Header-notice />
    <!-- <div id="header">
        <div id="header-menu-wrap">
            <div id="header_menu_wrap_inner">
                <div class="header-menu">

                </div>
            </div>
        </div>
        <div class="header_body" id="header_home">
            <video id="video_header" loop="" muted="" autoplay="" playsinline="" preload=""
                poster="~/assets/images/video_header_3.jpg">
                <source src="~/assets/video/header_3.mp4" type="video/mp4">
            </video>

        </div>
    </div> -->
    <div id="header">
        <div id="header_menu_wrap">
            <div id="header_menu_wrap_inner">
                <div class="header_menu">
                    <div class="header_menu_burger">
                        <!-- <div onclick="common.menu_toggle();">
                            <i id="header_menu_burger_icon" class="icon_burger"></i>
                        </div> -->
                        <div class="svg_burger">
                            <!-- <i id="header_menu_burger_icon" class="icon_burger"></i> -->
                            <img src="~/assets/icons/menu-burger.svg" alt="burger">
                        </div>
                    </div>
                    <div class="header_menu_logo">
                        <a href="index.htm">
                            <i class="icon_logo"></i>
                        </a>
                    </div>
                    <div class="header_menu_items">
                        <div>
                            <a href="index.htm#gallery_s">О поселке</a>
                            <a href="index.htm#plan_s">Генплан</a>
                            <a href="index.htm#mortgage_s">Ипотека</a>
                            <a href="index.htm#options_s">Дома</a>
                            <a href="index.htm#contacts_s">Контакты</a>
                        </div>
                    </div>
                    <!-- <div class="header_menu_phone" onclick="ym(69432964,'reachGoal','call');">
                        <i class="icon_phone"></i>
                        <span id="sticky_phone" href="tel:+74954814973" class="mgo-number-24152">+7 (495) 481-49-73</span>
                    </div> -->
                    <div class="header_menu_phone cal_div">
                        <!-- <i class="icon_phone"></i> -->
                        <img class="call_icon" src="~/assets/icons/call.svg" alt="call">
                        <span id="sticky_phone" href="tel:+74954814973" class="mgo-number-24152">+7 (495) 481-49-73</span>
                    </div>
                    <div class="header_menu_social">
                        <!-- <a href="https://instagram.com/bayside_residence" target="_blank"> -->
                        <!-- <i class="icon_ig"></i> -->
                        <nuxt-link to="https://instagram.com/bayside_residence">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" fill='white' class="ionicon"
                                viewBox="0 0 512 512">
                                <path
                                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                <path
                                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                            </svg>
                        </nuxt-link>
                        <!-- </a> -->
                        <!-- <a href="https://vk.com/bayside_residence" target="_blank"> -->
                        <!-- <i class="icon_vk"></i> -->
                        <nuxt-link to="https://vk.com/bayside_residence">
                            <!-- <img src="~/assets/icons/logo-vk.svg" alt="vk"> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" fill='white' class="ionicon"
                                viewBox="0 0 512 512">
                                <path
                                    d="M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86 0 0-26.94 65.6-64.56 108.13-12.2 12.3-17.79 16.4-24.4 16.4-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3 0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77 43.21 63 104.72 96.86 160.13 96.86 33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93 7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35 0-23.57-.51 0 63.55-91.22 70.15-122"
                                    fill-rule="evenodd" />
                            </svg>
                        </nuxt-link>
                        <!-- </a> -->
                        <!-- <a href="https://t.me/KP_Bayside_Residence_bot" target="_blank" class="tg_link"> -->
                        <!-- <i class="icon_tg"></i> -->
                        <nuxt-link to="https://t.me/KP_Bayside_Residence_bot">
                            <!-- <img src="~/assets/icons/logo-tg.svg" alt="tg"> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                                <path
                                    d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                                    fill="white" />
                            </svg>
                        </nuxt-link>
                        <!-- </a> -->
                        <a href="https://wa.me/79099162504" target="_blank">
                            <img src="~/assets/images/wa.svg" class="svg_wa" alt="" />
                        </a>
                    </div>
                    <!-- <div>
                        <div class="header_menu_request"
                            onclick="scroll_to('request2_s', 0); common.menu_toggle('close'); return gtag_report_conversion(undefined);">
                            Жду звонка
                        </div>
                    </div>
                    <div class="header_menu_burger_mobile">
                        <div onclick="common.menu_toggle();">
                            <i id="header_menu_burger_icon_mobile" class="icon_burger_mobile"></i>
                        </div>
                    </div> -->
                    <div>
                        <div class="header_menu_request">
                            Жду звонка
                        </div>
                    </div>
                    <div class="header_menu_burger_mobile">
                        <div>
                            <i id="header_menu_burger_icon_mobile" class="icon_burger_mobile"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="popup_menu">
            <div id="popup_menu_wrap">
                <!-- <div>
                    <span class="popup_menu_back" onclick="common.menu_sub_close();">Назад</span>
                    <div class="popup_menu_label">О поселке</div>
                    <div class="popup_menu_info">
                        <a href="index.htm" onclick="common.menu_toggle('close');">Bayside Residence</a>
                        <a href="index.htm#gallery_s" onclick="common.menu_toggle('close');">О поселке</a>
                        <a href="index.htm#features_s" onclick="common.menu_toggle('close');">Особенности</a>
                        <a href="index.htm#plan_s" onclick="common.menu_toggle('close');">План поселка</a>
                    </div>
                </div> -->
                <div>
                    <span class="popup_menu_back">Назад</span>
                    <div class="popup_menu_label">О поселке</div>
                    <div class="popup_menu_info">
                        <a href="index.htm">Bayside Residence</a>
                        <a href="index.htm#gallery_s">О поселке</a>
                        <a href="index.htm#features_s">Особенности</a>
                        <a href="index.htm#plan_s">План поселка</a>
                    </div>
                </div>
                <div>
                    <div class="popup_menu_label">Дома и услуги</div>
                    <!-- <div class="popup_menu_info">
                        <a href="index.htm#options_s" onclick="common.menu_toggle('close');">Варианты домов</a>
                        <a href="index.htm#advantages_s" onclick="common.menu_toggle('close');">Уникальное преимущество</a>
                        <a href="index.htm#infrastructure_s" onclick="common.menu_toggle('close');">Инфраструктура</a>
                        <a href="index.htm#security_s" onclick="common.menu_toggle('close');">Охрана посёлка</a>
                    </div> -->
                    <div class="popup_menu_info">
                        <a href="index.htm#options_s">Варианты домов</a>
                        <a href="index.htm#advantages_s">Уникальное преимущество</a>
                        <a href="index.htm#infrastructure_s">Инфраструктура</a>
                        <a href="index.htm#security_s">Охрана посёлка</a>
                    </div>
                </div>
                <div>
                    <div class="popup_menu_label">Документы</div>
                    <!-- <div class="popup_menu_info">
                        <a href="index.htm#company_s" onclick="common.menu_toggle('close');">О компании</a>
                        <a href="index.htm#docs_s" onclick="common.menu_toggle('close');">Документы</a>
                        <a href="index.htm#contacts_s" onclick="common.menu_toggle('close');">Контакты</a>
                    </div> -->
                    <div>
                        <a href="index.htm#gallery_s">О поселке</a>
                    </div>
                    <div>
                        <a href="index.htm#plan_s">Генплан</a>
                    </div>
                    <div>
                        <a href="index.htm#morgage_s">Ипотека</a>
                    </div>
                    <div>
                        <a href="index.htm#options_s">Дома</a>
                    </div>
                    <div>
                        <a href="index.htm#contacts_s">Контакты</a>
                    </div>

                </div>
            </div>
            <div id="popup_menu_main">
                <!-- <div>
                    <a href="index.htm#gallery_s" onclick="common.menu_toggle('close');">О поселке</a>
                </div>
                <div>
                    <a href="index.htm#plan_s" onclick="common.menu_toggle('close');">Генплан</a>
                </div>
                <div>
                    <a href="index.htm#morgage_s" onclick="common.menu_toggle('close');">Ипотека</a>
                </div>
                <div>
                    <a href="index.htm#options_s" onclick="common.menu_toggle('close');">Дома</a>
                </div>
                <div>
                    <a href="index.htm#contacts_s" onclick="common.menu_toggle('close');">Контакты</a>
                </div> -->
                <div>
                    <a href="index.htm#gallery_s">О поселке</a>
                </div>
                <div>
                    <a href="index.htm#plan_s">Генплан</a>
                </div>
                <div>
                    <a href="index.htm#morgage_s">Ипотека</a>
                </div>
                <div>
                    <a href="index.htm#options_s">Дома</a>
                </div>
                <div>
                    <a href="index.htm#contacts_s">Контакты</a>
                </div>

            </div>
            <div class="popup_social">
                <p>Мы в соц.сетях</p>
                <div>
                    <a href="https://instagram.com/bayside_residence" target="_blank">
                        <i class="icon_ig"></i>
                    </a>
                    <a href="https://vk.com/bayside_residence" target="_blank">
                        <i class="icon_vk"></i>
                    </a>
                    <a href="https://t.me/KP_Bayside_Residence_bot" target="_blank" class="tg_link">
                        <i class="icon_tg"></i>
                    </a>
                    <a href="https://wa.me/79099162504" target="_blank">
                        <img src="~/assets/images/wa.svg" class="svg_wa" alt="" style="width: 26px" />
                    </a>
                </div>
            </div>
            <div class="popup_menu_btn">
                <!-- <a href="index.htm#request_s" onclick="common.menu_toggle('close');">Заказать звонок</a> -->
                <a href="index.htm#request_s">Заказать звонок</a>
            </div>
        </div>
        <div class="header_body" id="header_home">
            <video id="video_header" loop="" muted="" autoplay="" playsinline="" preload=""
                poster="~/assets/images/video_header_3.jpg">
                <source src="~/assets/video/header_3.mp4" type="video/mp4" />
            </video>
            <div>
                <div>
                    <div class="header_title">Bayside<br />Residence</div>
                    <div class="header_desc">
                        Лесной поселок бизнес-класса на берегу<br />Можайского
                        водохранилища
                    </div>
                </div>
                <div>
                    <div id="header_info">
                        <div>
                            <div>
                                <div>
                                    <span>от</span> 1,925
                                    <div><i class="icon_rouble"></i><small>млн</small></div>
                                </div>
                                <div>за участок 8 соток</div>
                            </div>
                            <div>
                                <div><span>более</span> 20<span> Га</span></div>
                                <div>инфраструктуры</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="~/assets/images/gas.png" alt="" />
                                <div>участки с газом</div>
                            </div>
                            <div>
                                <div>80<span> мин</span></div>
                                <div>от МКАД до поселка</div>
                            </div>
                        </div>
                        <div class="header_btn_wrap">
                            <!-- <span id="header_btn" onclick="scroll_to('request2_s', 0);" class="btn_primary active">Заказать
                                звонок</span> -->
                            <span id="header_btn" class="btn_primary active">Заказать
                                звонок</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.svg_burger {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cal_div {
    /* width: ; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.call_icon {
    width: 20%;
    height: auto;
}

.header_menu_phone span {
    padding-left: 0 !important;
}
</style>