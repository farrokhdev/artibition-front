import { t } from "i18next"

export function isAccept(value) {
    switch (value) {
        case "active":
            return {
                title: t("content-panel-orders.filters.Active_on_the_site"),
                css: "active-state "
            }
        case "pending":
            return {
                title: t("content-panel-orders.filters.to_artibition"),
                css: "pending-state"
            }
        case "pending_edition":
            return {
                title: t("content-panel-orders.filters.to_artibition"),
                css: "pending-state"
            }
        case "sent-to-buyer":
            return {
                title: t("content-panel-orders.filters.artibition_to_customer"),
                css: "accepted"
            }
        case "delivered":
            return {
                title: t("content-panel-orders.filters.delivered"),
                css: "failed"
            }
        case "rejected":
            return {
                title: t("content-panel-orders.filters.Review"),
                css: "bluestyle"
            }
        case "available-in-arthibition":
            return {
                title: "موجود در آرتیبیشن",
                css: "accept "
            }
        case "paid":
            return {
                title: "پرداخت شده",
                css: "accept "
            }
        case "returned-by-buyer":
            return {
                title: "مرجوعی",
                css: "pending"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}

export function isStatusPurchases(value) {
    switch (value) {
        case "paid":
            return {
                title: "پرداخت شده",
                css: "accept "
            }
        case "delivered":
            return {
                title: "تحویل شده",
                css: "accept"
            }
        case "returned-by-buyer":
            return {
                title: "مرجوعی",
                css: "pending"
            }
        case "canceled":
            return {
                title: "کنسل شده",
                css: "deny"
            }
        case "pending":
            return {
                title: "پرداخت شده",
                css: "accept"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}



export function isBiddingPrice(value) {
    switch (value) {
        case "pending":
            return {
                title: " در انتظار پاسخ",
                css: "pending"
            }
        case "approved":
            return {
                title: " پیشنهاد قبول شد",
                css: "accept"
            }
        case "rejected":
            return {
                title: " پیشنهاد رد شد",
                css: "deny"
            }
        case "modified":
            return {
                title: " نیازمند به اصلاح",
                css: "pending"
            }
        case "closed":
            return {
                title: "بسته شده",
                css: "deny"
            }

        default:
            return {
                title: "",
                css: ""
            }
    }
}

export function isDashboardStatus(value) {
    switch (value) {
        case "pending":
            return {
                title: " در انتظار تایید",
                css: "status-step failed"
            }
        case "approved":
            return {
                title: "تایید شده",
                css: "status-step passed"
            }
        case "rejected":
            return {
                title: "رد شد",
                css: "status-step failed"
            }

        default:
            return {
                title: "",
                css: ""
            }
    }
}

export function stateTo(state) {
    switch (state) {
        case 'pending':
            return {
                "title": "در حال پیگیری",
                "type": "inprogress",
                "block": ""
            }
        case 'unread':
            return {
                "title": "منتظر پاسخ شما",
                "type": "replied",
                "block": ""
            }
        case 'close':
            return {
                "title": "بسته شده",
                "type": "closed",
                "block": ""
            }
        case 'read':
            return {
                "title": "خوانده شده",
                "type": "inprogress",
                "block": ""
            }
        default:
            return {
                "title": "",
                "type": "",
                "block": ""
            }
    }
}