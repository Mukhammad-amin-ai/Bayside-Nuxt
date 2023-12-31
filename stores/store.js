import { defineStore } from "pinia";

import plan from '~/static/plan.json'

export const usePlanStore = defineStore('plan', {
    state: () => {
        return {
            data: plan,
            class: false,
            number: "",
            status: "",
            price: "",
            size: "",
            setPriceDisplay: "",
            color: "",
            top:"",
            left:""
            // pathClass: "",
        };
    },
    actions: {
        showInfo(id) {
            // this.hoveredId = id
            this.class = true
            let catchedData = this.data[id - 1]
            if (catchedData !== null) {
                this.number = catchedData.number
                this.size = catchedData.size
                this.statu = catchedData.status
                this.price = catchedData.price
                if (catchedData.status === 'free') {
                    this.status = 'СВОБОДЕН'
                    this.color = 'green'
                    this.setPriceDisplay = 'block'
                    // this.pathClass = 'selected-free'
                } else if (catchedData.status === 'occupied') {
                    this.status = 'ЗАБРОНИРОВАН'
                    this.color = '#f1c000'
                    this.setPriceDisplay = 'block'
                    // this.pathClass = 'selected-occupied'
                } else if (catchedData.status === "sold") {
                    this.status = "ПРОДАН"
                    this.color = 'red'
                    this.setPriceDisplay = 'none'
                    // this.pathClass = 'selected-sold'
                }
            }
        },
        mouseMove(top,left){
            this.top = top
            this.left = left
        },
        hideInfo() {
            this.class = false
            this.pathClass = ''
        }
    },
})