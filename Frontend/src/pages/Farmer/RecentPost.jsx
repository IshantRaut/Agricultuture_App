import React from 'react'
import blog2 from "../../assets/img_sq_3.jpg"
import blog3 from "../../assets/img_sq_8.jpg"
import blog1 from "../../assets/img_sq_1.jpg"
const RecentPost = () => {
  return (
    <div>
      <section id="recent-posts" className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-green-800 mb-2">Recent Posts</h2>
      <p className="text-gray-700">Necessitatibus eius consequatur</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Post 1 */}
      <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col" data-aos="fade-up" data-aos-delay="100">
        <div className="relative">
          <img src={blog1} alt="" className="w-full h-56 object-cover" />
          <span className="absolute top-4 left-4 bg-lime-600 text-white px-3 py-1 rounded-full text-xs font-semibold">December 12</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 text-green-800">Eum ad dolor et. Autem aut fugiat debitis</h3>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="flex items-center mr-4">
              {/* Person Icon */}
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.304.534 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Julia Parker
            </span>
            <span className="mx-2">/</span>
            <span className="flex items-center">
              {/* Folder Icon */}
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v4a1 1 0 001 1h3v2a1 1 0 001 1h4a1 1 0 001-1v-2h3a1 1 0 001-1V7" /></svg>
              Politics
            </span>
          </div>
          <hr className="my-2" />
          <a href="blog-details.html" className="text-lime-600 font-semibold hover:underline mt-auto flex items-center">
            <span>Read More</span>
            {/* Arrow Icon */}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
      {/* Post 2 */}
      <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col" data-aos="fade-up" data-aos-delay="200">
        <div className="relative">
          <img src={blog2} alt="" className="w-full h-56 object-cover" />
          <span className="absolute top-4 left-4 bg-lime-600 text-white px-3 py-1 rounded-full text-xs font-semibold">July 17</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 text-green-800">Et repellendus molestiae qui est sed omnis</h3>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.304.534 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Mario Douglas
            </span>
            <span className="mx-2">/</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v4a1 1 0 001 1h3v2a1 1 0 001 1h4a1 1 0 001-1v-2h3a1 1 0 001-1V7" /></svg>
              Sports
            </span>
          </div>
          <hr className="my-2" />
          <a href="blog-details.html" className="text-lime-600 font-semibold hover:underline mt-auto flex items-center">
            <span>Read More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
      {/* Post 3 */}
      <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col" data-aos="fade-up" data-aos-delay="300">
        <div className="relative">
          <img src={blog3} alt="" className="w-full h-56 object-cover" />
          <span className="absolute top-4 left-4 bg-lime-600 text-white px-3 py-1 rounded-full text-xs font-semibold">September 05</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 text-green-800">Quia assumenda est et veritati tirana ploder</h3>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.304.534 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Lisa Hunter
            </span>
            <span className="mx-2">/</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v4a1 1 0 001 1h3v2a1 1 0 001 1h4a1 1 0 001-1v-2h3a1 1 0 001-1V7" /></svg>
              Economics
            </span>
          </div>
          <hr className="my-2" />
          <a href="blog-details.html" className="text-lime-600 font-semibold hover:underline mt-auto flex items-center">
            <span>Read More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default RecentPost
