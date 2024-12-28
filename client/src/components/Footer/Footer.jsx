import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#7B3F00] px-4 md:px-32 pt-8 pt-16 pb-10'>
      <div className="md:grid grid-cols-3 gap-3 ">

        <div className="text-white">
          <h1 className="text-2xl font-semibold mb-4">Chocolate Ordering..</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad voluptas fugiat dolore modi itaque, aspernatur molestiae ea officia nostrum rem? Autem esse corporis maiores minus consequatur veritatis! Dolorum, illum!
          </p>
        </div>

        <div className="text-white">
          <h1 className="text-2xl font-semibold mb-4">Links..</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor consectetur aut laborum obcaecati, numquam iusto consequatur odio alias natus itaque voluptate repellendus dolore exercitationem reiciendis accusantium magni excepturi quia recusandae.
          </p>
          
        </div>

        <div className="text-white">
          <h1 className="text-2xl font-semibold mb-4">Links..</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus quis harum ducimus culpa sit atque ea et, animi sapiente, qui, minima illum asperiores eius quos dolorem tempora recusandae maxime.
          </p>          
        </div>

      </div>

      <hr className='border border-white mt-16'/>
      <div className="">
        <center className='text-center text-white pt-2'>
          &copy; Chocolate Ordering | All rights Reserved | 2024-2025 | Developed and Maintained by <a href="" target='_blnk'>JehanKandy</a>
        </center>
      </div>
    </div>
  )
}

export default Footer