import React from 'react'
import ImgMarquee from './ImgMarquee'
import { MagicCard } from "@/components/magicui/magic-card";

function Services() {
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='font-nas text-4xl'>Services That We Offer</h1>
            <div className='flex flex-row h-[500px]'>
                <div>
                    <h1>Data Engineering:</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi minus quo voluptatum doloribus tempore molestiae repellat rem. Reiciendis id, laudantium beatae est dolor veniam maxime dolorum. Dignissimos eos ex blanditiis.</p>
                </div>
                <div>
                    <h1>Data Lake:</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et dignissimos quam voluptatibus eligendi deserunt incidunt, illum sit dicta nesciunt quis illo, itaque excepturi ullam quasi consectetur aut enim dolorem!</p>
                </div>
                <div>
                    <h1>AI and GenAI Services:</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem soluta nobis harum quisquam beatae quas, magni dolorum suscipit excepturi at, tenetur fugiat minus eveniet corporis. Culpa at non quis!</p>
                </div>
                <ImgMarquee />
            </div>
        </div>
    )
}

export default Services