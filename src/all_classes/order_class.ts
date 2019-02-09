export class order{
    constructor(

        public order_id:number,
        public customer_id: number,
        public product_id: Number,
        public product_quantity: number,
        public retailer_id: Number,
        public date: string,
        public customer_otp: number,
        public verified: number,
        public verified_by_retailer:number

    ){

    }
}
