// import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import success from '../assets/success.png'
import icon from '../assets/icon1.png'
const ServicesAdd =()=> {
//     const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

//     const validFiles = files.filter(file => allowedTypes.includes(file.type));

//     setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
//   };
return (
  <div>
<div className="flex gap-5 max-md:flex-col max-md:gap-0">
<div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-6 pb-20 mx-auto w-full text-white bg-blue-400">
                    <div className="flex gap-4 self-start ml-7 text-xl font-semibold whitespace-nowrap max-md:ml-2.5">
                      <img
                        loading="lazy"
                        src={logo}
                        className="shrink-0 aspect-square w-[46px]"
                      />
                      <div className="my-auto">Laundry</div>
                    </div>
                    <div className="shrink-0 mt-12 h-12 max-md:mt-10" />
                    <div className="flex z-10 flex-col items-start pr-20 pl-7 -mt-10 text-base max-md:px-5">
                      <div className="flex gap-3.5 px-2 py-1 font-medium text-gray-800 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src={icon}
                          className="shrink-0 w-6 aspect-square"
                        />
                        <a  href="/dashboard" className="my-auto text-white">Dashboard</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44172302aac80c4a26209703b3554a355b291889cb9c99ad8e6e2c264f0cb793?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <a  href="/services" className="my-auto">Our Service</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d6b39f3a885ccc11acac54b2bb5dbee9f9657c1447032c58b3ab745d50a133?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                      <a  href="/category" className="my-auto text-white">Category</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a426d3210d63871c2284c8a8d466d1b3a708f3298162f2347b6c1130c98a50af?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                       <a  href="/orders" className="my-auto text-white">Orders</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a2f6b2fe4b7bfa8f002bd0bf00d5d57242ae99aa3ca10dca7b03d6ad97b2839?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <a  href="/MyProfile" className="my-auto text-white">My Profile</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc5d07c029c567c3b6220bf1205a3d5778f6ac9676d7075b250e6a85adb40efd?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <a  href="/users" className="my-auto text-white">Users</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55a97c555bb037f75c517b52a3ef8a33144156c4fbbb8fed798cc08e8800b7f?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <a  href="/riders" className="my-auto text-white">Riders</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef7c880f6663a372b9bb7796fd04791322dc497e814744f2a82f4531c7bebcb?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <a  href="/shopkippers" className="my-auto text-white">Shop Kippers</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a40ba6769e9ebd3e273a88520d94beb2545d10c5ef12ac7f73c36a69dcd7eb09?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                       <a  href="/subadmin" className="my-auto text-white">Sub Admins</a>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0afb9d1d067f4117df9d33c5b630975a36aa5f6c56f8ca9c083a9993ebb69dd9?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Notifications</div>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-6 whitespace-nowrap rounded-md">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b07eacaffb84336da6a389ec8144b9fe839ee65785b6e657ef0fb7fe51edfdd?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Settings</div>
                      </div>
                      <div className="flex gap-3.5 px-2 py-1 mt-60 rounded-md max-md:mt-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8d31e6832b98c5da5d04d69546541601fec80cfc714f35d9e19bdb83d464f23?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Log Out</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="flex gap-5 justify-between px-9 py-4 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-5  my-auto text-sm text-zinc-700">
                        <div className="my-auto text-base font-medium text-zinc-600">
                          Laundry
                        </div>
                        <div className="flex gap-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd753b50863082038db4fd96d9e7837d94fdacf3cf41688ef3fde2692f2e904?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                            className="shrink-0 aspect-[0.63] w-[15px]"
                          />
                          <div className="flex-auto">Android App Link</div>
                        </div>
                        <div className="flex gap-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c9e64b8211cea42f05d62fdd1893a73620c5d2fb7d9c5a143af8af5b439389e?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                            className="shrink-0 w-4 aspect-[0.67]"
                          />
                          <div>IOS App Link</div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/613cf1492ab99b6a1ed1e2d8c3f9087f5089e379cf61c421d44d07298e4b30eb?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="shrink-0 my-auto w-6 aspect-square"
                        />
                        <div className="flex gap-3">
                          <div className="flex flex-col my-auto">
                            <div className="text-base font-medium text-zinc-800">
     Omar Fahim
                            </div>
                            <div className=" text-xs text-neutral-600">
                             akaomarfahimofficial@gmail.com
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38119e1c0eb569db8ac96f68eb76f9097cc4f3c4d80708ebc6d88a928faa1786?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                            className="shrink-0 aspect-square fill-[url(<path-to-image>)_lightgray_-7.667px_-6.571px_/_133.333%_133.333%_no-repeat] w-[46px]"
                          />
                        </div>
                      </div>
                    </div>
          <div className="flex flex-col px-9 mt-9 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-1.5 self-start text-lg font-medium whitespace-nowrap text-zinc-700">
             
            <Link to='/services'>
            
            <button className="btn btn-active btn-ghost">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd44ab405ec9456e8b3165ffb4814fe2ea492012a0cc06fbf851e2f0ed72d8bf?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                className="shrink-0 w-6 aspect-square"
              />Back</button>
            </Link>
            </div>
            <div className="flex flex-col items-start px-12 py-12 mt-9 rounded-lg border border-solid bg-slate-100 border-blue-500 border-opacity-50 max-md:px-5 max-md:max-w-full">
              <div className="text-3xl font-semibold text-gray-800 max-md:max-w-full">
                Edit Iron Only
              </div>
              <div className="mt-11 text-lg font-semibold text-zinc-700 max-md:mt-10 max-md:max-w-full">
                Name
              </div>
              <input type='text' placeholder='Iron Only' className="justify-center items-start px-6 py-5 mt-4 max-w-full text-base font-medium text-gray-600 bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 w-[500px] max-md:px-5"/>

              
              <div className="mt-7 text-lg font-semibold text-zinc-700 max-md:max-w-full">
                Amount
              </div>
              <input type='text' placeholder='$ 10' className="justify-center items-start px-6 py-5 mt-4 max-w-full text-base font-medium text-gray-600 bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 w-[500px] max-md:px-5"/>
              <div className="container mx-auto p-4">
              <div className="mt-7 text-lg font-semibold text-zinc-700 max-md:max-w-full mb-2">
                App Image
              </div>
      <div className="flex items-center">
        <label htmlFor="fileInput" className="flex items-center justify-center w-24 h-24 rounded-md border border-dashed border-gray-300 cursor-pointer">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="10" y2="15" />
          </svg>
        </label>

        <input
          type="file"
          id="fileInput"
          className="hidden"
        //   onChange={handleFileChange}
          accept="image/*"
        />

        {/* <p className="ml-4">Select image files</p> */}
      </div>

      {/* <div className="mt-4">
        <h2>Selected Images:</h2>
        <ul className="list-disc">
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
             
              </div>
            
<button className="btn  justify-center items-center px-12  mt-8 max-w-full text-base font-semibold leading-6 text-center text-white whitespace-nowrap bg-blue-500 rounded-lg w-[271px] max-md:px-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>Save</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box border border-blue-400">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2 ">✕</button>
    </form>
    <div className='flex flex-col justify-center items-center'><img  className="h-16 w-16 " src={success}  />
    <h3 className="font-bold text-lg mt-2">Successful!</h3>
    <p className="py-2">Edit Iron only is Successful</p>
    </div>
  </div>
</dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  
);
}

export default ServicesAdd;
