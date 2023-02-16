import React from 'react'

const BlogCart = () => {
  return (
      <>
          <div className="blog  border-2 rounded-md  w-[24%] ">
              <div className="blogimg hover:scale-105  bg-cover rounded-md">
                  <img className="rounded-md" src="images/images/blog-1.jpg" alt="" />
              </div>
              <div className="blogDetails p-2 leading-6">
                  <p className=" leading-0">11 Dec,2022</p>
                  <h1 className=" leading-0">A Beautifyll Sunday Morning Renaissance</h1>
                  <p className=" text-xs ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur fuga ab quam commodi velit?</p>
                  
                  <button className='btn rounded-2xl bg-zinc-600 text-white'  >READ MORE </button>
            
              </div>
          </div>
      
    </>
  )
}

export default BlogCart
