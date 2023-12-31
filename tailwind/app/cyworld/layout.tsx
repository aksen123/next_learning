
import Navi from "./Components/Navi"


export default function CyworldLayout({children} :{children : React.ReactNode}) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <div className='w-[1000px] h-[600px] bg-bg-image'>
          <div className='bg-sky-400 border-[25px] rounded-xl border-sky-400 outline outline-1 w-[85%] h-[85%] relative top-6 left-5'>
          <div className='w-full h-full rounded-xl outline outline-2 bg-gray-50 flex'>
            <div className='w-[30%] p-3'>
              <div className='text-center'>
                <span className='text-xs'>TODAY : 0 </span>
                <span className='text-xs'>TOTAL : 12345</span>
              </div>
              <div className='border-[#555] border rounded-lg flex flex-col items-center h-[95%] p-5'>
                <img src="/img/iu.jpg" alt="" width={'100%'} />
                <hr className='w-full h-[1px] mt-3 '/>
                <p className='text-xs text-left w-full mt-1'>name : park</p>
                <p className='text-xs text-left w-full mt-1'>phone : 010-0000-0000</p>
                <p className='text-xs text-left w-full mt-1'>email : park@email.com</p>
                <p className='text-xs mt-24 w-full text-left mb-1'>오늘의 기분</p>
                <select className='outline outline-1 bg-white w-full'>
                  <option>기쁨😀</option>
                  <option>슬픔😥</option>
                  <option>화남😤</option>
                  <option>분노😡</option>
                </select>
              </div>
            </div>

            <div className='w-[70%] pt-3 pr-4'>
              <div className='text-sky-400'>
                <span>사이좋은 사람들, 싸이월드</span>
              </div>
              <div className='w-full h-[92%] border border-black relative'>
                <Navi />

                {children}
              </div>
            </div>

          </div>
          </div>
        </div>
    </div>
  )
}