import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'
import RelatedDoctors from '../Components/RelatedDoctors'

const Apponitments = () => {
  const {docId} = useParams();
  const [docslots,setDocslots] =useState([]);
  const [slotindex,setSlotindex] = useState(0);
  const [slottime,setSlottime] = useState('')
  const {doctors ,currency} = useContext(AppContext)
  const [docinfo,setDocinfo] = useState(null)
  const days =['SUN',"MON","TUE","WED","THU","FRI","SAT"]
  const fetchDocInfo = async()=>{
    const docinfo = doctors.find(doc=>doc._id===docId)
    setDocinfo(docinfo)
   
  }


  const getAvailableSlots = async()=>{
    setDocslots([])

    let today = new Date()
    for(let i=0;i<7;i++){
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)


      let endtime = new Date()
      endtime.setDate(today.getDate()+i)
      endtime.setHours(21,0,0,0)


      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ?currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30: 0)


      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots =[]

      while(currentDate < endtime){
        let formattedTime = currentDate.toLocaleString([],{hour: '2-digit',minute: '2-digit'});

        timeSlots.push({
          datetime : new Date(currentDate),
          time:formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocslots(prev => ([...prev,timeSlots]))
    }

  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docinfo])

  useEffect(()=>{

  },[docslots])



  return docinfo &&(
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={docinfo.image} alt="" className='bg-primary w-full sm:max-w-72 rounded-lg'/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docinfo.name}
            <img src={assets.verified_icon} alt='' className='w-5'/>
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docinfo.degree}-{docinfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docinfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt='' cl/>
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1 '>{docinfo.about}</p>
          </div>
          <p>Appointment Fee : <span>{currency}{docinfo.fees}</span></p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docslots.length && docslots.map((item,index)=>(
              <div onClick={()=>setSlotindex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? 'bg-primary text-white' :'border border-gray-200'}`}>
                <p>{item[0] && days[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docslots.length && docslots[slotindex].map((item,index)=>(
              <p onClick={()=> setSlottime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slottime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}> {item.time}</p>
            ))
          }

        </div>
        <button className='bg-primary text-white yext-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>

      </div>
      <RelatedDoctors docId={docId} speciality={docinfo.speciality}/>

    </div>
  )
}

export default Apponitments