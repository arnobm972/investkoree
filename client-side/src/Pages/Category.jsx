import PropTypes from 'prop-types';
import logo from '../assets/logo.png'
import icon from '../assets/icon1.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Modal = ({ id, message }) => (
  <dialog id={id} className='modal'>
     <div className='modal-box '>
        <p className=' text-center py-4'>{message}</p>
        <div className='flex mt-4 justify-center gap-4'>
        <form method='dialog'>
          <button className="btn btn-info">Yes</button>
          </form>
          <form method='dialog'>
        <button className="btn btn-error">No</button></form>
        </div>
        <div className='modal-action'>
           <form method='dialog'>
              <button className='btn btn-sm btn-circle btn-error absolute right-2 top-2'>✕</button>
           </form>
        </div>
     </div>
  </dialog>
);
const Category =()=> {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
     const modalId = showAlert ? "secondModal" : "firstModal";
     const modal = document.getElementById(modalId);
     if (modal) {
        modal.showModal();
     }
     setShowAlert(!showAlert);
  };
  const [showAlert2, setshowAlert2] = useState(false);

  const handleAlert2 = () => {
     const modalId = showAlert2 ? "secondModal" : "firstModal";
     const modal = document.getElementById(modalId);
     if (modal) {
        modal.showModal();
     }
     setshowAlert2(!showAlert2);
  };
  const [showAlert3, setshowAlert3] = useState(false);

  const handleAlert3 = () => {
     const modalId = showAlert3 ? "secondModal" : "firstModal";
     const modal = document.getElementById(modalId);
     if (modal) {
        modal.showModal();
     }
     setshowAlert3(!showAlert3);
  };
  const [showAlert4, setshowAlert4] = useState(false);

  const handleAlert4 = () => {
     const modalId = showAlert4 ? "secondModal" : "firstModal";
     const modal = document.getElementById(modalId);
     if (modal) {
        modal.showModal();
     }
     setshowAlert4(!showAlert4);
  };
return (
    <>
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
                   
          <div className="flex flex-col px-9 mt-11 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className='flex flex-row justify-between'>
            <div className="text-3xl font-semibold text-gray-800 max-md:max-w-full ">
            Category
              <div className="flex gap-2 self-start px-3 py-2 mt-6   w-36 text-xs whitespace-nowrap bg-white rounded text-stone-500">
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48919a30fabc3db4e137da4a7a7ade95021519a6d47fcf37d0d3c124a74b94bb?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&&apiKey=c7e8ca76374d4236bfa84e3c203f8c52"
            className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">Search</div>
            </div>
            <div className="flex gap-0 text-center text-stone-500 max-md:flex-wrap mt-4">
            <div className="justify-center px-12 py-4 text-base font-semibold leading-6 text-white bg-blue-400 h-14 rounded-lg max-md:px-5">
                Active
                </div>
             <div className="justify-center px-12 py-4 bg-white border text-base  leading-6 border-blue-500 h-14 border-solid max-md:px-5">
                 Pending
                 </div>
            <div className="justify-center px-12 py-4 bg-white rounded-lg border  text-base  leading-6 h-14 border-blue-500 border-solid max-md:px-5">
                Complete
             </div>
             </div>
            </div>
            <Link to='/categoryadd'>
            <button className="btn glass bg-white w-20 mt-28">Add</button>
            </Link>
            </div>
            <div className="mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 py-6 mx-auto w-full bg-white rounded-lg border border-solid border-blue-400 border-opacity-50 max-md:mt-6">
                    <div className="flex gap-5 justify-between items-start pt-3 pr-3 pb-12 pl-20 rounded-md bg-zinc-100 max-md:pl-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df8125cf4e3965eed0276c49141eb543bf664d423708955c26f20f9e70f1de61?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                        className="shrink-0 self-end mt-10 max-w-full aspect-square w-[115px]"
                      />
                      <div className="flex justify-center items-center self-start px-2.5 w-10 h-10 bg-blue-400 rounded-[64px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97b326693918b3291ffd59c9542206af83a8e710d5b7dd5d216abd12a9817be?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="aspect-square w-[18px]"
                        />
                      </div>
                    </div>
                    <div className='flex-row  flex justify-between mt-10'>
                        <div className="text-xl font-semibold  text-zinc-700">
                          Iron Only
                        </div>
                          <input type='checkbox' className='toggle toggle-info ' onClick={handleAlert} checked={showAlert} defaultChecked />
                     
                       
                    </div>
                         
           
                         </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 py-6 mx-auto w-full bg-white rounded-lg border border-solid border-blue-400 border-opacity-50 max-md:mt-6">
                    <div className="flex gap-5 justify-between items-start pt-3 pr-3 pb-12 pl-20 rounded-md bg-zinc-100 max-md:pl-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df62f3387e07da5a282fca43176855a98f07f4a16b5a6d892ed61ab1d2849fb9?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                        className="shrink-0 self-end mt-10 max-w-full aspect-square w-[115px]"
                      />
                      <div className="flex justify-center items-center self-start px-2.5 w-10 h-10 bg-blue-400 rounded-[64px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7a11272888cec943c75a798e8cc881096b105e19790d28d191a615ef7a96c7d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="aspect-square w-[18px]"
                        />
                      </div>
                    </div>
                    <div className='flex-row  flex justify-between mt-10'>
                        <div className="text-xl font-semibold  text-zinc-700">
                          Iron Only
                        </div>
                          <input type='checkbox' className='toggle toggle-info ' onClick={handleAlert2} checked={showAlert2} defaultChecked />
                    
                       
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 py-6 mx-auto w-full bg-white rounded-lg border border-solid border-blue-400 border-opacity-50 max-md:mt-6">
                    <div className="flex gap-5 justify-between items-start pt-3 pr-3 pb-12 pl-20 rounded-md bg-zinc-100 max-md:pl-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1939609a5267554daad9bf36ee710184ed1f96b90d67709a5c260a92cf75afc3?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                        className="shrink-0 self-end mt-10 max-w-full aspect-square w-[115px]"
                      />
                      <div className="flex justify-center items-center self-start px-2.5 w-10 h-10 bg-blue-400 rounded-[64px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/694b94428ffc0cb3c3657a6a7486b8fab3ca0e17313191c90b3e92b835cca838?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="aspect-square w-[18px]"
                        />
                      </div>
                    </div>
                    <div className='flex-row  flex justify-between mt-10'>
                        <div className="text-xl font-semibold  text-zinc-700">
                          Iron Only
                        </div>
                          <input type='checkbox' className='toggle toggle-info ' onClick={handleAlert3} checked={showAlert3} defaultChecked />
                                        <Modal
                            id='firstModal'
                            message='Do you want to enable this service?'
                        />
                        <Modal
                            id='secondModal'
                            message='Do you want to disable this service?'
                        />
                       
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 py-6 mx-auto w-full bg-white rounded-lg border border-solid border-blue-400 border-opacity-50 max-md:mt-6">
                    <div className="flex gap-5 justify-between items-start pt-3 pr-3 pb-12 pl-20 rounded-md bg-zinc-100 max-md:pl-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df62f3387e07da5a282fca43176855a98f07f4a16b5a6d892ed61ab1d2849fb9?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                        className="shrink-0 self-end mt-10 max-w-full aspect-square w-[115px]"
                      />
                      <div className="flex justify-center items-center self-start px-2.5 w-10 h-10 bg-blue-400 rounded-[64px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7a11272888cec943c75a798e8cc881096b105e19790d28d191a615ef7a96c7d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                          className="aspect-square w-[18px]"
                        />
                      </div>
                    </div>
                    <div className='flex-row  flex justify-between mt-10'>
                        <div className="text-xl font-semibold  text-zinc-700">
                          Iron Only
                        </div>
                          <input type='checkbox' className='toggle toggle-info ' onClick={handleAlert4} checked={showAlert4} defaultChecked />
                    
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
            </div>
          </div>
      </>
 
);
}
Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default Category;