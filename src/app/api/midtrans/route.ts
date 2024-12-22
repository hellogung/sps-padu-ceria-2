import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SANDBOX_MIDTRANS_SERVER_KEY,
    clientKey: process.env.SANDBOX_MIDTRANS_CLIENT_KEY,
});

export async function POST(request: Request) {
    const {id, productName, price, quantity} = await request.json();

    let parameter = {
        item_details: {
            name: productName,
            price: price,
            quantity: quantity,
        },
        transaction_details: {
            order_id: id,
            gross_amount: price * quantity,
        },
    };

    const token = await snap.createTransactionToken(parameter);

    console.log(token)

    return Response.json({
        token
    })
}