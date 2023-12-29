<template >
    <div id="header_notice">
        <div>
            <div class="item">
                <div>
                    <div>С 1 января повышение цен до 10%</div>
                </div>
            </div>
            <div class="item">
                <div>
                    <div>Успейте забронировать участок по старой цене!</div>
                </div>
            </div>
            <div class="item">
                <div>
                    <div>С 1 января повышение цен до 10%</div>
                </div>
            </div>
            <div class="item">
                <div>
                    <div>Успейте забронировать участок по старой цене!</div>
                </div>
            </div>
            <div class="item">
                <div>
                    <div>С 1 января повышение цен до 10%</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
#header_notice {
    height: 35px;
    background: #2CAFF9;
    padding: 0 20px;
    position: fixed;
    width: 100%;
    z-index: 999;
}

#header_notice>div {
    display: table;
    width: 100%;
}

#header_notice>div>div {
    display: table-cell;
    width: 20%;
    vertical-align: top;
}

#header_notice>div>div>div {
    display: flex;
    line-height: 35px;
    color: #fff;
    justify-content: center;
}

#header_notice>div>div>div>div {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
}


@media only screen and (max-width: 1500px) {

    #header_notice>div>div {
        display: table-cell;
        width: 33.333%;
    }
}

@media only screen and (max-width: 1800px) {

    #header_notice>div>div {
        display: table-cell;
        width: 25%;
    }
    .item:nth-child(5){
        display: none !important;
    }
    .item:nth-child(4){
        display: none !important;
    }
}
</style>