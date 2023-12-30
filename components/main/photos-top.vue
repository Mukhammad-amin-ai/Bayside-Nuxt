<template>
    <div id="photos_top" class="container_primary section_photos_top">
        <div class="section_brief">
            <div>
                <div>
                    <!-- <span data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0"
                            data-aos-anchor-placement="top-center" data-aos-mirror="true"></span> -->
                    <img src="~/assets/images/01.svg" alt="" />
                </div>
            </div>
            <!-- <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" data-aos-anchor-placement="top-bottom"> -->
            <div>
                <h4>О поселке</h4>
                <h2>Место, где время течет иначе</h2>
                <p>
                    Bayside Residence — cовременный коттеджный посёлок в экологически
                    чистом районе Подмосковья на берегу Можайского водохранилища в
                    окружении хвойного леса. Чистый и свежий воздух, удаленность от
                    трасс, тишина и уединение с природой.
                </p>
            </div>
        </div>
        <!-- <div class="time_line_photos_block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"
                data-aos-anchor-placement="top-bottom"> -->
        <div class="time_line_photos_block">
            <section>
                <!-- <div onclick="common.handle_photos_top_slider(1, event);">
                        <img src="images/home/gallery_1p.jpg?7" alt="" />
                    </div> -->
                <div>
                    <img src="~/assets/images/home/gallery_1p.jpg" alt="" />
                </div>
            </section>
            <div>
                <div class="photos_extra">
                    <section>
                        <!-- <div onclick="common.handle_photos_top_slider(2, event);">
                                <img src="images/home/gallery_2p.jpg?7" alt="" />
                            </div> -->
                        <div>
                            <img src="~/assets/images/home/gallery_2p.jpg" alt="" />
                        </div>
                    </section>
                    <section>
                        <!-- <div onclick="common.handle_photos_top_slider(3, event);">
                                <img src="images/home/gallery_3p.jpg?7" alt="" />
                            </div> -->
                        <div>
                            <img src="~/assets/images/home/gallery_3p.jpg" alt="" />
                        </div>
                    </section>
                    <section>
                        <!-- <div onclick="common.handle_photos_top_slider(4, event);">
                                <img src="images/home/gallery_4p.jpg?7" alt="" />
                            </div> -->
                        <div>
                            <img src="~/assets/images/home/gallery_4p.jpg" alt="" />
                        </div>
                    </section>
                    <section>
                        <!-- <div onclick="common.handle_photos_top_slider(5, event);">
                                <img src="images/home/gallery_5p.jpg?7" alt="" />
                                <article>
                                    <div><i class="icon icon_arrow"></i></div>
                                    <span>Смотреть все</span>
                                </article>
                            </div> -->
                        <div>
                            <img src="~/assets/images/home/gallery_5p.jpg" alt="" />
                            <article>
                                <div><i class="icon icon_arrow"></i></div>
                                <span>Смотреть все</span>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div id="photos_top_gallery_overlay" class="collapse">
            <div class="top_block">
                <p id="photos_top_slider_title">КПП Bayside Residence</p>
                <i class="icon_logo"></i>
                <!-- <span onclick="common.handle_photos_top_slider(1, event)">
                        <i class="icon icon_close"></i>
                    </span> -->
                <span>
                    <i class="icon icon_close"></i>
                </span>
            </div>
            <!-- <div id="photos_top_slider_images" ontouchstart="common.slider_swipe_start('photos_top_slider', event);"> -->
            <div id="photos_top_slider_images">
                <div id="slide_img_photos_top_main" class="photos_slide_img active">
                    <img src="" alt="" />
                </div>
                <div id="photos_top_slide_paginator">
                    <!-- <div id="photos_top_slider_paginator_prev" class="slide_paginator prev"
                            onclick="common.slider_photos_top('prev');">
                            <i class="icon icon_arrow"></i>
                        </div>
                        <div id="photos_top_slider_paginator_next" class="slide_paginator next"
                            onclick="common.slider_photos_top('next');">
                            <i class="icon icon_arrow"></i>
                        </div> -->
                    <div id="photos_top_slider_paginator_prev" class="slide_paginator prev">
                        <i class="icon icon_arrow"></i>
                    </div>
                    <div id="photos_top_slider_paginator_next" class="slide_paginator next">
                        <i class="icon icon_arrow"></i>
                    </div>
                </div>
            </div>
            <div class="gallery_modal_thumbs">
                <div>
                    <div id="photos_top_slider_thumbnails">
                        <span id="thumb_photos_top_1" class="active visible"
                            onclick="common.slider_photos_top('set', this);"><img src="images/home/gallery_1t.jpg?7"
                                alt="" /></span>
                        <span id="thumb_photos_top_2" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_2t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_3" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_3t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_4" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_4t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_5" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_5t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_6" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_6t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_7" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_7t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_8" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_8t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_9" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_9t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_10" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_10t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_11" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_11t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_12" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_12t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_13" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_13t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_14" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_14t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_15" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_15t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_16" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_16t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_17" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_17t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_18" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_18t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_19" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_19t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_20" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_20t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_21" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_21t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_22" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_22t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_23" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_23t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_24" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_24t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_25" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_25t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_26" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_26t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_27" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_27t.jpg?7" alt="" /></span>
                        <span id="thumb_photos_top_28" onclick="common.slider_photos_top('set', this);"><img
                                src="images/home/gallery_28t.jpg?7" alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>