import { t } from "i18next"

export function isAccept(value) {
    switch (value) {
        case "active":
            return {
                title:t("content-panel-orders.filters.Active_on_the_site"),
                css: "active-state "
            }
        case "pending":
            return {
                title:t("content-panel-orders.filters.to_artibition"),
                css: "pending-state"
            }
        case "sent_to_buyer":
            return {
                title:t("content-panel-orders.filters.artibition_to_customer"),
                css: "accepted"
            }
        case "delivered":
            return {
                title: t("content-panel-orders.filters.delivered"),
                css: "failed"
            }
            case "rejected":
                return {
                    title:t("content-panel-orders.filters.Review"),
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
                title:"پرداخت شده",
                css: "accept "
            }
        case "delivered":
            return {
                title:"تحویل شده",
                css: "accept"
            }
        case "returned by buyer":
            return {
                title:"مرجوعی",
                css: "pending"
            }
        case "canceled":
            return {
                title:"کنسل شده",
                css: "deny"
            }
        default:
            return {
                title: "",
                css: ""
            }
    }
}