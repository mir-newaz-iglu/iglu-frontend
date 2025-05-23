import { prisma } from "@/app/utils/db"

async function getData()
{
    const data = await prisma.booking.findMany({
        select: {
            id: true,
            cruiseId: true,
            link: true,
            price: true
        },
    });
    return data;
}

export default async function Bookings() {

    const data = await getData();
    console.log(data);
    
    return (
        <div className="py-6">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Your Bookings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <h1 key={item.id}>{item.price}</h1>
                ))}
            </div>
        </div>
    )
}