import React, { useEffect, useState } from 'react';
import { NeonGradientCard } from '../components/magicui/neon-gradient-card';
import { motion } from 'framer-motion';

const BlogPost = ({ id }) => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Fetch the blog data from the backend using the id prop
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://localhost:5000/api/blog/${id}`);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [id]); // Dependency array now includes id, so it refetches if the id changes

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  if (!blogData) {
    return <div>Loading...</div>;
  }

  // Group content blocks by order number
  const groupedBlocks = blogData.content_blocks.reduce((acc, block) => {
    if (!acc[block.order]) {
      acc[block.order] = [];
    }
    acc[block.order].push(block);
    return acc;
  }, {});

  return (
    <div className='flex flex-col justify-center pt-4'>
      <div className='font-nas font-bold text-7xl'>
        {blogData.title}
      </div>
      <div className='flex flex-col gap-4 pt-12 px-12'>
        {Object.keys(groupedBlocks).map((order) => (
          <div key={order} className='flex flex-col gap-4'>
            {groupedBlocks[order].map((block) => (
              block.block_type === 'text' && (
                <motion.div key={`${block.order}-text`} {...floatAnimation}>
                  <NeonGradientCard>
                    {block.text_type === 'heading' && (
                      <h1 className='font-nas text-4xl'>{block.text}</h1>
                    )}
                    {block.text_type === 'subheading' && (
                      <h2 className='font-nas text-3xl'>{block.text}</h2>
                    )}
                    {block.text_type === 'list' && (
                      <ul className='text-left pt-2'>
                        {block.text.split('\n').map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {block.text_type === 'normal' && (
                      <div className='text-left pt-2'>{block.text}</div>
                    )}
                  </NeonGradientCard>
                </motion.div>
              )
            ))}
            {groupedBlocks[order].map((block) => (
              block.block_type === 'image' && block.image && (
                <motion.div key={`${block.order}-image`} {...floatAnimation} className='flex justify-center'>
                  <img src={block.image} alt='Blog Content' className='max-w-full h-auto' />
                </motion.div>
              )
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
