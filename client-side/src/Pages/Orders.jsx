import logo from '../assets/logo.png'
import icon from '../assets/icon1.png'
const Orders = () => {
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
                    <div className="flex flex-col px-8 mt-9 max-md:px-5 max-md:max-w-full">
                  
                      <div className="flex gap-5 justify-between items-start mt-12 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex flex-col self-start max-md:max-w-full">
                          <div className="text-3xl font-semibold text-gray-800 max-md:max-w-full">
                            Orders
                          </div>
                          <div className="flex gap-2 self-start px-3 py-2 mt-10 text-xs bg-white rounded text-stone-500">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48919a30fabc3db4e137da4a7a7ade95021519a6d47fcf37d0d3c124a74b94bb?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                              className="shrink-0 w-6 aspect-square"
                            />
                            <div className="my-auto">Search </div>
                          </div>
                          <div className="self-end mt-5 text-sm text-zinc-600">
                            Date
                          </div>
                        </div>
                        <div className="flex flex-col self-end mt-14 text-sm max-md:mt-10">
                          <div className="flex gap-2 justify-center px-5 py-2.5 font-medium leading-6 whitespace-nowrap rounded border border-blue-500 border-solid text-neutral-700">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16a979a0476e374fd86740a1c5409301457ee984b7341e7d38bcff5d2e96f190?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                              className="shrink-0 w-6 aspect-square"
                            />
                            <div>Refresh</div>
                          </div>
                          <div className="mt-5 text-zinc-600">Payment Type</div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between px-0.5 w-full text-sm font-medium leading-6 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-0 text-center text-stone-500 max-md:flex-wrap">
                          <div className="justify-center px-12 py-4 text-base font-semibold leading-6 text-white bg-blue-400 rounded-lg max-md:px-5">
                            Active
                          </div>
                          <div className="justify-center px-12 py-4 bg-white border border-blue-500 border-solid max-md:px-5">
                            Pending
                          </div>
                          <div className="justify-center px-12 py-4 bg-white rounded-lg border border-blue-500 border-solid max-md:px-5">
                            Complete
                          </div>
                        </div>
                        <div className="flex gap-4 self-start mt-2 text-zinc-600">
                          <div className="flex gap-5 justify-between px-5 py-3 bg-white rounded border border-solid border-blue-500 border-opacity-50">
                            <div>Date</div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c75f1354fe7219cafe0b99c4f998c6f7a8c46203394299b413c683928a4bfd85?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                              className="shrink-0 my-auto w-5 aspect-square"
                            />
                          </div>
                          <div className="flex gap-5 justify-between px-5 py-3 bg-white rounded border border-solid border-blue-500 border-opacity-50">
                            <div>All</div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0ed78c4ef6c7fc6ea051679fc91d73d4f07a34993a0dfc197ac63cc087c132?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                              className="shrink-0 w-6 aspect-square"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-11 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                              <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-2.5">
                                      <div className="text-base font-medium text-zinc-700">
                                        <span className="text-gray-600">
                                          Order ID :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          750
                                        </span>
                                      </div>
                                      <div className="flex gap-4 mt-12 text-lg font-semibold text-blue-500 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                                          className="shrink-0 w-11 rounded-full aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                          Dry & Wash x 1, Iron Only x 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-base font-medium text-right text-zinc-700 max-md:mt-2.5">
                                      <div>
                                        <span className="text-gray-600">
                                          Order Date :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          May 11, 2020 . 07:44 PM
                                        </span>
                                      </div>
                                      <div className="self-end mt-3">
                                        <span className="text-gray-600">Payment :</span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          Cash
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-between items-start px-0.5 mt-11 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col text-base text-zinc-700">
                                  <div>
                                    <span className="text-gray-600">Quantity :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      14
                                    </span>
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-gray-600">Amount :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      $2020
                                    </span>
                                  </div>
                                </div>
                                <div className="justify-center px-7 py-2.5 text-sm leading-6 text-center rounded-md border border-blue-500 border-solid text-zinc-800 max-md:px-5">
                                  View Order
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                              <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-2.5">
                                      <div className="text-base font-medium text-zinc-700">
                                        <span className="text-gray-600">
                                          Order ID :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          750
                                        </span>
                                      </div>
                                      <div className="flex gap-4 mt-12 text-lg font-semibold text-blue-500 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                                          className="shrink-0 w-11 rounded-full aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                          Dry & Wash x 1, Iron Only x 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-base font-medium text-right text-zinc-700 max-md:mt-2.5">
                                      <div>
                                        <span className="text-gray-600">
                                          Order Date :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          May 11, 2020 . 07:44 PM
                                        </span>
                                      </div>
                                      <div className="self-end mt-3">
                                        <span className="text-gray-600">Payment :</span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          Cash
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-between items-start px-0.5 mt-11 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col text-base text-zinc-700">
                                  <div>
                                    <span className="text-gray-600">Quantity :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      14
                                    </span>
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-gray-600">Amount :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      $2020
                                    </span>
                                  </div>
                                </div>
                                <div className="justify-center px-7 py-2.5 text-sm leading-6 text-center rounded-md border border-blue-500 border-solid text-zinc-800 max-md:px-5">
                                  View Order
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                              <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-2.5">
                                      <div className="text-base font-medium text-zinc-700">
                                        <span className="text-gray-600">
                                          Order ID :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          750
                                        </span>
                                      </div>
                                      <div className="flex gap-4 mt-12 text-lg font-semibold text-blue-500 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cba2954127149e85116542a8b57a3e50bf4ffea1a1b8ce06ac269179b065868?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                                          className="shrink-0 w-11 rounded-full aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                          Dry & Wash x 1, Iron Only x 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-base font-medium text-right text-zinc-700 max-md:mt-2.5">
                                      <div>
                                        <span className="text-gray-600">
                                          Order Date :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          May 11, 2020 . 07:44 PM
                                        </span>
                                      </div>
                                      <div className="self-end mt-3">
                                        <span className="text-gray-600">Payment :</span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          Cash
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-between items-start px-0.5 mt-11 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col text-base text-zinc-700">
                                  <div>
                                    <span className="text-gray-600">Quantity :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      14
                                    </span>
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-gray-600">Amount :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      $2020
                                    </span>
                                  </div>
                                </div>
                                <div className="justify-center px-7 py-2.5 text-sm leading-6 text-center rounded-md border border-blue-500 border-solid text-zinc-800 max-md:px-5">
                                  View Order
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                              <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-2.5">
                                      <div className="text-base font-medium text-zinc-700">
                                        <span className="text-gray-600">
                                          Order ID :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          750
                                        </span>
                                      </div>
                                      <div className="flex gap-4 mt-12 text-lg font-semibold text-blue-500 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8751aed384468f212119b9657e868e32f39040d331c222a32a537d985cb69d?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                                          className="shrink-0 w-11 rounded-full aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                          Dry & Wash x 1, Iron Only x 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-base font-medium text-right text-zinc-700 max-md:mt-2.5">
                                      <div>
                                        <span className="text-gray-600">
                                          Order Date :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          May 11, 2020 . 07:44 PM
                                        </span>
                                      </div>
                                      <div className="self-end mt-3">
                                        <span className="text-gray-600">Payment :</span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          Cash
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-between items-start px-0.5 mt-11 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col text-base text-zinc-700">
                                  <div>
                                    <span className="text-gray-600">Quantity :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      14
                                    </span>
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-gray-600">Amount :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      $2020
                                    </span>
                                  </div>
                                </div>
                                <div className="justify-center px-7 py-2.5 text-sm leading-6 text-center rounded-md border border-blue-500 border-solid text-zinc-800 max-md:px-5">
                                  View Order
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                              <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-2.5">
                                      <div className="text-base font-medium text-zinc-700">
                                        <span className="text-gray-600">
                                          Order ID :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          750
                                        </span>
                                      </div>
                                      <div className="flex gap-4 mt-12 text-lg font-semibold text-blue-500 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa59e0fe9e6b63434ec3e0795dcbca2be40457bd0fec8c53e23b5133698aa4?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                                          className="shrink-0 w-11 rounded-full aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                          Dry & Wash x 1, Iron Only x 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-base font-medium text-right text-zinc-700 max-md:mt-2.5">
                                      <div>
                                        <span className="text-gray-600">
                                          Order Date :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          May 11, 2020 . 07:44 PM
                                        </span>
                                      </div>
                                      <div className="self-end mt-3">
                                        <span className="text-gray-600">Payment :</span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          Cash
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-between items-start px-0.5 mt-11 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col text-base text-zinc-700">
                                  <div>
                                    <span className="text-gray-600">Quantity :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      14
                                    </span>
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-gray-600">Amount :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      $2020
                                    </span>
                                  </div>
                                </div>
                                <div className="justify-center px-7 py-2.5 text-sm leading-6 text-center rounded-md border border-blue-500 border-solid text-zinc-800 max-md:px-5">
                                  View Order
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-lg border border-solid border-blue-500 border-opacity-50 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                              <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-2.5">
                                      <div className="text-base font-medium text-zinc-700">
                                        <span className="text-gray-600">
                                          Order ID :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          750
                                        </span>
                                      </div>
                                      <div className="flex gap-4 mt-12 text-lg font-semibold text-blue-500 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f92c05131725b18439fe076c66b2544e68cbecb4c3bb5b55bfff754047f775?apiKey=c7e8ca76374d4236bfa84e3c203f8c52&"
                                          className="shrink-0 w-11 rounded-full aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                          Dry & Wash x 1, Iron Only x 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-base font-medium text-right text-zinc-700 max-md:mt-2.5">
                                      <div>
                                        <span className="text-gray-600">
                                          Order Date :
                                        </span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          May 11, 2020 . 07:44 PM
                                        </span>
                                      </div>
                                      <div className="self-end mt-3">
                                        <span className="text-gray-600">Payment :</span>{" "}
                                        <span className="font-semibold text-zinc-700">
                                          Cash
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-between items-start px-0.5 mt-11 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col text-base text-zinc-700">
                                  <div>
                                    <span className="text-gray-600">Quantity :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      14
                                    </span>
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-gray-600">Amount :</span>{" "}
                                    <span className="font-semibold text-zinc-700">
                                      $2021
                                    </span>
                                  </div>
                                </div>
                                <div className="justify-center px-7 py-2.5 text-sm leading-6 text-center rounded-md border border-blue-500 border-solid text-zinc-800 max-md:px-5">
                                  View Order
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    
};

export default Orders;