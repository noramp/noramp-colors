export const dynamic = 'force-dynamic'
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function POST (req: NextRequest) {
    const {
        address
    } = await req.json();
    
    const data = {
        currency: "usd",
        trigger_id: 'price_40xjcBIuVqmwlNyrSp3r9U',
        trigger_data: {
          params_data: [address],
        },
        amount: 5,
      };
    
    
      const response = await fetch(
        `https://api.noramp.io/prices/${process.env.NORAMP_APP_ID}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${process.env.NORAMP_API_KEY}`,
            
            // "Noramp-network": "testnet",
          },
          body: JSON.stringify(data),
        }
      );
      const priceAPIResponse = await response.json();
    

    if (priceAPIResponse) {
        return NextResponse.json({priceAPIResponse});
    }
    else {
        return NextResponse.error();
    }
}
