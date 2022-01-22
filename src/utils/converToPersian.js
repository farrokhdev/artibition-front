import { t } from "i18next"

export function isAccept(value) {
    switch (value) {
        case "pending":
            return {
                title:t("content-panel-orders.filters.to_artibition"),
                css: "pending"
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
        default:
            return {
                title: "",
                css: ""
            }
    }
}