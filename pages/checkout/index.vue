<template>
    <div class="checkout-page bg-gray-50 pt-28">
        <div class="checkout-page__container max-w-sm md:max-w-md lg:max-w-lg mx-auto w-full">
            <NuxtLink to="/" class="text-black text-opacity-50 mr-auto font-medium">Go Back</NuxtLink>
            <div class="checkout__container flex flex-col gap-6">
                <div class="checkout__form bg-white p-6 rounded-lg flex flex-col gap-6">
                    <h1 class="uppercase text-2xl font-bold mr-auto">checkout</h1>
                    <form action="" class="flex flex-col gap-8">
                        <fieldset class="flex flex-col gap-6">
                            <legend class="uppercase text-orange text-sm font-bold tracking-wider">billing details</legend>
                            <InputText v-model="form.name" label="Name" placeholder="Alexei Ward" class="pt-4" type="text"/>
                            <InputText v-model="form.email" label="Email Address" placeholder="alexei@mail.com"/>
                            <InputText v-model="form.phone" label="Phone Number" placeholder="+1 202-555-0136"/>
                        </fieldset>
                        <fieldset class="flex flex-col gap-6">
                            <legend class="uppercase text-orange text-sm font-bold tracking-wider">shipping info</legend>
                            <InputText v-model="form.address" label="Your Address" placeholder="1137 Williams Avenue" class="pt-4"/>
                            <InputText v-model="form.zipCode" label="ZIP Code" placeholder="10001"/>
                            <InputText v-model="form.city" label="City" placeholder="New York"/>
                            <InputText v-model="form.country" label="Country" placeholder="United States"/>
                        </fieldset>
                        <fieldset class="flex flex-col gap-6">
                            <legend class="uppercase text-orange text-sm font-bold tracking-wider">payment details</legend>
                            <InputRadio v-model="form.payMethod" :radios="['e-Money', 'Cash on Delivery']" title="Payment Method"/>
                            <InputText v-model="form.moneyNumber" label="e-Money Number" placeholder="238521993"/>
                            <InputText v-model="form.moneyPIN" label="e-Money PIN" placeholder="6891"/>
                        </fieldset>
                    </form>
                </div>
                <div v-if="cart.length" class="checkout__summary bg-white p-6 rounded-lg flex flex-col gap-6 pb-10 mb-24">
                    <h2 class="uppercase tracking-wider font-bold text-lg">summary</h2>
                    <ul class="summary__items-list flex flex-col gap-6">
                        <li 
                            class="items-list__item flex justify-between items-center" 
                            v-for="(item, index) in cart" :key="index"
                        >
                            <CartItemSummary :itemData="item.data"/>
                            <b class="item__quantity text-black text-opacity-50 text-base pb-4">x{{ item.amount }}</b>
                        </li>
                    </ul>
                    <div class="summary__total flex flex-col gap-2">
                        <div class="total flex justify-between items-center">
                            <p class="text-black text-opacity-50 text-md font-medium">TOTAL</p>
                            <b class="text-black text-lg">{{ formatter.format(totalPrice) }}</b>
                        </div>
                        <div class="shipping flex justify-between items-center">
                            <p class="text-black text-opacity-50 text-md font-medium">SHIPPING</p>
                            <b class="text-black text-lg">{{ formatter.format(shippingPrice) }}</b>
                        </div>
                        <div class="vat flex justify-between items-center">
                            <p class="text-black text-opacity-50 text-md font-medium">VAT (INCLUDED)</p>
                            <b class="text-black text-lg">{{ formatter.format(totalPrice * 0.2) }}</b>
                        </div>
                        <div class="grand-total flex justify-between items-center pt-4">
                            <p class="text-black text-opacity-50 text-md font-medium">GRAND TOTAL</p>
                            <b class="text-orange text-lg">{{ formatter.format(totalPrice + shippingPrice) }}</b>
                        </div>
                    </div>
                    <button class="checkout w-full p-4 uppercase mx-auto text-white text-sm text-center font-bold tracking-widest block bg-orange">CONTINUE & PAY</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import formatter from '~/utils/formatPrice'
import { mapGetters } from 'vuex'
export default {
    data:() => ({
        shippingPrice: 50,
        form: {
            name: '',
            email: '',
            phone: '',
            address: '',
            zipCode: '',
            city: '',
            country: '',
            payMethod: '',
            moneyNumber: '',
            moneyPIN: ''
        },
        formatter
    }),
    computed: {
        ...mapGetters('cart', { cart: 'getCartDetails' }),
        totalPrice() {
            let result = 0
            if(this.cart[0]?.data?.price) {
                this.cart.forEach( item => {
                    result += item.data?.price * item?.amount
                })
            }
            return result
        }
    }
}
</script>