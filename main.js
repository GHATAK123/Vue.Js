const app = Vue.createApp({
    data() {
        return {
            product : "Socks",
            description: "It is used with shoes",
            image : "./assets/images/socks_green.jpg",
            url : "http://facebbook.com",
            inverntory : 1000,
            onSale : true,
            details : ["40% Cotton","30% wool","30% Polyester"],
            variants : [
                {id:1,color:"green"},
                {id:2,color:"blue"}
            ]
        }
    },
})
