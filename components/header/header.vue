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
                        <div>
                            <i id="header_menu_burger_icon" class="icon_burger"></i>
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
                    <div class="header_menu_phone">
                        <i class="icon_phone"></i>
                        <span id="sticky_phone" href="tel:+74954814973" class="mgo-number-24152">+7 (495) 481-49-73</span>
                    </div>
                    <div class="header_menu_social">
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
/* #header {
    width: 100%;
    height: auto;
    min-height: 100vh;
}

#header-menu-wrap {
    position: fixed;
    width: 100%;
    padding: 65px 80px 15px 80px;
    z-index: 500;
    transition: all 0.35s ease-out;
}


#header_home {
    background-color: #202020;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}

#header_home:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}

.header_body {
    background-position-x: 50%;
    background-size: cover;
    position: relative;
    width: 100%;
    min-height: 100vh;
} */
</style>