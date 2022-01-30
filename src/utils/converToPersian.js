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
        case "sent_to_buyer":
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
        case "returned by buyer":
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
                title: " در انتظار پاسخ",
                css: "pending"
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