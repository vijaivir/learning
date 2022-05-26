// Passing and options object into the app {}
// creates a vue instance that's the heart of the app
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // Solution
            description: 'A warm fuzzy pair of socks.',
            //if the image path was changed, the image would be automatically 
            // updated due to Vue's reactivity system
            image: './assets/images/socks_green.jpg',
            url: 'https://google.com',
            inStock: true, 
            onSale: true
        }
    }
})


// Vue is reactive
// built-in Reactivity System (advanced)
