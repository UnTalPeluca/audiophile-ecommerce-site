<template>
    <div class="checkout-page bg-gray-50 py-28">
        <div class="checkout-page__container max-w-sm md:max-w-md mx-auto w-full md:w-11/12 lg:max-w-lg">
            <NuxtLink to="/" class="text-black text-opacity-50 mr-auto font-medium hover:text-orange">Go Back</NuxtLink>
            <div class="checkout__container mt-6 flex flex-col gap-6 lg:flex-row">
                <div class="checkout__form bg-white p-6 rounded-lg flex flex-col gap-6">
                    <h1 class="uppercase text-2xl font-bold mr-auto">checkout</h1>
                    <form class="flex flex-col gap-8">
                        <fieldset class="flex flex-col gap-y-6 flex-wrap lg:flex-row lg:justify-between">
                            <legend class="uppercase text-orange text-sm font-bold tracking-wider pb-4">billing details</legend>
                            <InputText v-model="form.name.value" @onEnterPressed="submitForm()" @validate="validation(form.name)" :error="form.name.error" label="Name" placeholder="Alexei Ward" class="lg:w-input1/2" type="text"/>
                            <InputText v-model="form.email.value" @onEnterPressed="submitForm()" @validate="validation(form.email)" :error="form.email.error" label="Email Address" class="lg:w-input1/2" placeholder="alexei@mail.com"/>
                            <InputText v-model="form.phone.value" @onEnterPressed="submitForm()" @validate="validation(form.phone)" :error="form.phone.error" label="Phone Number" placeholder="+1 202-555-0136"/>
                        </fieldset>
                        <fieldset class="flex flex-col gap-y-6 flex-wrap lg:flex-row lg:justify-between">
                            <legend class="uppercase text-orange text-sm font-bold tracking-wider pb-4">shipping info</legend>
                            <InputText v-model="form.address.value" @onEnterPressed="submitForm()" @validate="validation(form.address)" :error="form.address.error" label="Your Address" placeholder="1137 Williams Avenue"/>
                            <InputText v-model="form.zipCode.value" @onEnterPressed="submitForm()" @validate="validation(form.zipCode)" :error="form.zipCode.error" label="ZIP Code" class="lg:w-input1/2" placeholder="10001"/>
                            <InputText v-model="form.city.value" @onEnterPressed="submitForm()" @validate="validation(form.city)" :error="form.city.error" label="City" class="lg:w-input1/2" placeholder="New York"/>
                            <InputText v-model="form.country.value" @onEnterPressed="submitForm()" @validate="validation(form.country)" :error="form.country.error" label="Country" class="lg:w-input1/2" placeholder="United States"/>
                        </fieldset>
                        <fieldset class="flex flex-col gap-y-6 flex-wrap lg:flex-row lg:justify-between">
                            <legend class="uppercase text-orange text-sm font-bold tracking-wider pb-4">payment details</legend>
                            <InputRadio v-model="form.payMethod.value" @validate="validation(form.payMethod)" :error="form.payMethod.error" :radios="['e-Money', 'Cash on Delivery']" title="Payment Method" />
                            <InputText v-if="form.payMethod.value === 'e-Money'" @onEnterPressed="submitForm()" v-model="form.moneyNumber.value" @validate="validation(form.moneyNumber)" :error="form.moneyNumber.error" label="e-Money Number" placeholder="238521993" type="number"/>
                            <InputText v-if="form.payMethod.value === 'e-Money'" @onEnterPressed="submitForm()" v-model="form.moneyPIN.value" @validate="validation(form.moneyPIN)" :error="form.moneyPIN.error" label="e-Money PIN" placeholder="6891"/>
                            <div v-if="form.payMethod.value === 'Cash on Delivery'" class="cash-on-delivery flex items-center gap-x-8">
                                <img src="~/assets/shared/mobile/icon-cash-delivery.png" class="w-12" alt="">
                                <p class="text-gray-500 font-medium text-base">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="checkout__summary bg-white p-6 rounded-lg flex flex-col gap-6 pb-10 lg:max-w-sm lg:w-full lg:mb-auto">
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
                    <button @click="submitForm()" class="checkout w-full p-4 uppercase mx-auto text-white text-sm text-center font-bold tracking-widest block bg-orange hover:bg-light-orange">CONTINUE & PAY</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import formatter from '~/utils/formatPrice'
import validate from '~/utils/formValidation'
import { mapGetters, mapMutations } from 'vuex'

export default {
    head() {
        return {
            title: `Audiophile - Checkout`
        }
    },
    data:() => ({
        shippingPrice: 50,
        form: {
            name: {
                value:'',
                error:''
            },
            email: {
                value:'',
                error:'',
                type:'email'
            },
            phone: {
                value:'',
                error:'',
                type:'phone'
            },
            address: {
                value:'',
                error:''
            },
            zipCode: {
                value:'',
                error:''
            },
            city: {
                value:'',
                error:''
            },
            country: {
                value:'',
                error:''
            },
            payMethod: {
                value:'',
                error:'',
            },
            moneyNumber: {
                value:'',
                error:'',
                min:9
            },
            moneyPIN: {
                value:'',
                error:'',
                min:4
            },
        },
        formatter,
    }),
    methods: {
        ...mapMutations('cart', { setOrder: 'SET_ORDER' }),
        ...mapMutations('layout', { setOrderCompleted: 'SET_ORDER_COMPLETED_STATE' }),
        submitForm() {
            let hasError = false
            Object.entries(this.form).forEach((input, index) => {
                if(!(this.form.payMethod.value === 'e-Money') && (input[0] === 'moneyNumber' || input[0] === 'moneyPIN')){
                    this.form.moneyNumber.error = ''
                    this.form.moneyPIN.error = ''
                } else {
                    this.validation(input[1])
                    if(input[1].error && hasError === false) {
                        hasError = true
                    }
                }
            })
            if(hasError) {
                
            } else {
                this.setOrder()
                this.setOrderCompleted(true)
            }
        },
        validation(input) {
            const type = input.type ? input.type : 'text'
            const min = input.min ? input.min : 3
            const isEmpty = validate.isEmpty(input.value)
            if(isEmpty) {
                input.error = isEmpty
                return
            }
            const minLength = validate.minLength(input.value, min)
            if(minLength && !(type === 'phone' || type === 'email')) {
                input.error = minLength
                return;
            }
            switch (type) {
                case 'text':
                    input.error = ''
                    break;
                case 'email':
                    const validEmail = validate.email(input.value)
                    if(validEmail) {
                        input.error = validEmail
                        break;
                    }
                    input.error = ''
                    break;
                case 'phone':
                    const validPhone = validate.phone(input.value)
                    if(validPhone) {
                        input.error = validPhone
                        break;
                    }
                    input.error = ''
                    break;
            }
        },
    },
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
    },
}
</script>