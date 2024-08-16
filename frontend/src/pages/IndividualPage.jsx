// import React, { useEffect, useState } from 'react';
// import { NeonGradientCard } from '../components/magicui/neon-gradient-card';
// import { motion } from 'framer-motion';

// const IndividualPage = () => {
//     const [page, setPage] = useState(null);
//     const getFullImageUrl = (relativePath) => `http://localhost:8000${relativePath}`;

//     useEffect(() => {
//         const fetchPageData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/api/blog/1'); // Adjust the URL as needed
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setPage(data);
//             } catch (error) {
//                 console.error('Error fetching blog data:', error);
//             }
//         };

//         fetchPageData();
//     }, []);

//     if (!page) {
//         return <div>Loading...</div>;
//     }

//     const floatAnimation = {
//         initial: { y: 0 },
//         animate: {
//             y: [0, -10, 0],
//             transition: {
//                 duration: 3,
//                 ease: 'easeInOut',
//                 repeat: Infinity,
//                 repeatType: 'mirror',
//             },
//         },
//     };

//     const renderTextContent = (block) => {
//         const textStyles = {
//             heading: 'font-nas text-3xl font-bold',
//             subheading: 'font-nas text-2xl font-semibold',
//             list: 'list-disc pl-4',
//             normal_text: '',
//         };

//         return (
//             <div className='flex flex-col justify-center items-center'>
//                 {/* <motion.div {...floatAnimation} className='p-4'>
//                     <NeonGradientCard> */}
//                         <div className={`text-left ${textStyles[block.text_type]}`}>
//                             {block.text_type === 'list'
//                                 ? block.text.split('\n').map((line, i) => (
//                                     <li key={i}>{line}</li>
//                                 ))
//                                 : block.text.split('\n').map((line, i) => (
//                                     <p key={i}>{line}</p>
//                                 ))}
//                         </div>
//                     {/* </NeonGradientCard>
//                 </motion.div> */}
//             </div>
//         );
//     };

//     return (
//         <div className='flex flex-col justify-center pt-4'>
//             <div className='font-nas font-bold justify-start text-7xl'>
//                 {page.title}
//             </div>
//             <div className='flex justify-center pt-12'>
//                 <img src={page.mainImage} alt={page.title} width='600' />
//             </div>
//             <div className='flex flex-col gap-4 gap-y-12 pt-12 px-12'>
//                 {page.content_blocks.map((block, index) => (
//                     <div key={index} className='flex flex-col justify-center items-center'>
//                         {block.block_type === 'image' ? (
//                             <>
//                                 <div className='flex justify-center items-center'>
//                                     <img src={getFullImageUrl(block.image)} alt={`${block.text}`} />
//                                 </div>
//                                 {block.text && (
//                                     <div className='text-center text-sm pt-2'>
//                                         <sub>{block.text}</sub>
//                                     </div>
//                                 )}
//                             </>
//                         ) : (
//                             renderTextContent(block)
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default IndividualPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IndividualPage = ({type}) => {
    const { id } = useParams(); 
    const [page, setPage] = useState(null);
    const getFullImageUrl = (relativePath) => `http://localhost:8000${relativePath}`;

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                // const response = await fetch(`https://www.insimine.com/admin/api/${type}/${id}`);
                const response = await fetch(`http://localhost:8000/api/${type}/${id}`);
                console.log(type,id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPage(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPageData();
    }, [type, id]);

    if (!page) {
        return <div>Loading...</div>;
    }

    const floatAnimation = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
            },
        },
    };

    const renderTextContent = (block) => {
        const textStyles = {
            heading: 'font-nas text-3xl font-bold',
            subheading: 'font-nas text-2xl font-semibold',
            list: 'list-disc pl-4',
            normal_text: '',
        };

        return (
            <div className='flex flex-col justify-center items-center'>
                        <div className={`text-left ${textStyles[block.text_type]}`}>
                            {block.text_type === 'list'
                                ? block.text.split('\n').map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))
                                : block.text.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                        </div>
            </div>
        );
    };

    return (
        <div className='flex flex-col justify-center pt-4'>
            <div className='font-nas font-bold justify-start text-7xl'>
                {page.title}
            </div>
            <div className='flex justify-center pt-12'>
                <img src={page.mainImage} alt={page.title} width='600' />
            </div>
            <div className='flex flex-col gap-4 gap-y-12 pt-12 px-12'>
                {page.content_blocks.map((block, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        {block.block_type === 'image' ? (
                            <>
                                <div className='flex justify-center items-center'>
                                    <img src={getFullImageUrl(block.image)} alt={`${block.text}`} />
                                </div>
                                {block.text && (
                                    <div className='text-center text-sm pt-2'>
                                        <sub>{block.text}</sub>
                                    </div>
                                )}
                            </>
                        ) : (
                            renderTextContent(block)
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndividualPage;
