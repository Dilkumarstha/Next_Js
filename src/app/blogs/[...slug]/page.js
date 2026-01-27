import React from 'react'

const BlogDetails = async({params}) => {
    const slug = (await params).slug;
  return (
    <div>

        <ul>

            {slug.map((value)=>(
                <li>{value}</li>
            ))}
            
        
        </ul>
    </div>
  )
}

export default BlogDetails