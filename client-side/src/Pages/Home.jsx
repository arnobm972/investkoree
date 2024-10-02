

import banner from '../assets/s2.jpg'
import mission1 from '../assets/add-1.png'
function Home(props) {
    return (
        <div>
<div className="hero banner-img bg-salmon ">
  <div className="hero-content   flex-col gap-96 lg:flex-row-reverse text-slate-800">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-2xl shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold leading-24  ">Welcome to <br/> InvestKoree.com</h1>
      <p className="py-6 text-2xl">
        Its Easy and Fast to Invest.Get Profit Faster Here
      </p>
      <button className="btn btn-active banner-btn  btn-neutral">Get Started</button>
    </div>
  </div>
</div>
<h5 className="text-center mt-20  text-5xl font-bold ">Currently Running Investments</h5>
<div className="flex flex-row gap-14 items-center justify-center px-20"> 
     <div className="bg-white h-[450px] my-24 w-[320px] rounded-2xl shadow-md overflow-hidden">
      <img
        src={banner} // Replace with actual image URL
        alt="Fundraiser"
        className="w-full h-48 object-cover "
      />
      <div className="p-4">
        <div className="text-xs font-medium text-gray-500 mb-2">
          <span className="inline-block bg-teal-100 text-teal-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
            Health
          </span>
          <span>
            <i className="fas fa-map-marker-alt mr-1"></i> South Africa
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Providing health food for the children
        </h3>
        <div className='flex flex-row  my-4 justify-between'>
        <p className=' '>Funded 40%</p>
        <p className=''>Left 60%</p>
        </div>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className="bg-teal-500 h-2.5 rounded-full"
              style={{ width: '40.5%' }} // Dynamically set width
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <i className="fas fa-box mr-1"></i> Rasied: $34,000
            </div>
            <div>
              <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
            </div>
          </div>
        </div>
        {/* Add a button or call to action here */}
      </div>
    </div>
    <div className="bg-white h-[450px] my-24 w-[320px] rounded-2xl shadow-md overflow-hidden">
      <img
        src={banner} // Replace with actual image URL
        alt="Fundraiser"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="text-xs font-medium text-gray-500 mb-2">
          <span className="inline-block bg-teal-100 text-teal-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
            Health
          </span>
          <span>
            <i className="fas fa-map-marker-alt mr-1"></i> South Africa
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Providing health food for the children
        </h3>
        <div className='flex flex-row  my-4 justify-between'>
        <p className=' '>Funded 40%</p>
        <p className=''>Left 60%</p>
        </div>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className="bg-teal-500 h-2.5 rounded-full"
              style={{ width: '40.5%' }} // Dynamically set width
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <i className="fas fa-box mr-1"></i> Rasied: $34,000
            </div>
            <div>
              <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
            </div>
          </div>
        </div>
        {/* Add a button or call to action here */}
      </div>
    </div>
    <div className="bg-white h-[450px] my-24 w-[320px] rounded-2xl shadow-md overflow-hidden">
      <img
        src={banner} // Replace with actual image URL
        alt="Fundraiser"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="text-xs font-medium text-gray-500 mb-2">
          <span className="inline-block bg-teal-100 text-teal-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
            Health
          </span>
          <span>
            <i className="fas fa-map-marker-alt mr-1"></i> South Africa
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Providing health food for the children
        </h3>
        <div className='flex flex-row  my-4 justify-between'>
        <p className=' '>Funded 40%</p>
        <p className=''>Left 60%</p>
        </div>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className="bg-teal-500 h-2.5 rounded-full"
              style={{ width: '40.5%' }} // Dynamically set width
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <i className="fas fa-box mr-1"></i> Rasied: $34,000
            </div>
            <div>
              <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
            </div>
          </div>
        </div>
        {/* Add a button or call to action here */}
      </div>
    </div></div>
    <div className="mission-section my-20 flex gap-10 justify-center flex-row">
        <div className='flex flex-row gap-8'>
            <div ><img className='rounded-xl' src={mission1} alt="" /></div>
            <div className='mt-10'><img className='rounded-xl' src={mission1} alt="" /></div>
        </div>
        <div className='flex flex-col'> 
            <div className='text-5xl '>Lorem, ipsum dolor sit amet consectetur  </div>
            <div className='mt-20 text-xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, aceat fuga iure eligendi, nobis iusto? Cumque, tempore.</div>
            <p className='text-3xl mb-6'>Our services</p>
            <div className='text-xl '>
            <li>Easy to Invest</li>
            <li>Fastest Transaction</li>
            <li>High Return on Investment</li>
                </div>
        </div>

    </div>
        </div>
    );
}

export default Home;