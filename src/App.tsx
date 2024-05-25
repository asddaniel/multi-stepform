import { Card, Checkbox, Switch } from "@nextui-org/react";
import { useState } from "react";
import Step from "./components/Step";

function App() {
 const [activeStep, setActiveStep] = useState(1)
 const [errors, setErrors] = useState({ name: '', email: '', phoneNumber: '' });
 const [dataform, setdataform] = useState({
  step1:{
    name:"",
    email:"",
    phoneNumber:"",
  },
  step2:{
    periode:"monthly",
    selectedPlan:"arcade",
  },
  step3:{
    onlineService:false,
    largerstorage:false,
    customizableProfile:false,
  }
 })

 const validate = (): boolean => {
  let valid = true;
  const newErrors = { name: '', email: '', phoneNumber: '' };

  if (!dataform.step1.name) {
    newErrors.name = 'the name is required';
    valid = false;
  }

  if (!dataform.step1.email) {
    newErrors.email = 'the email is required';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(dataform.step1.email)) {
    newErrors.email = 'the mail provided is not a valid email';
    valid = false;
  }

  if (!dataform.step1.phoneNumber) {
    newErrors.phoneNumber = 'the phone Number is required';
    valid = false;
  } else if (!/^\d+$/.test(dataform.step1.phoneNumber)) {
    newErrors.phoneNumber = 'the phone Number is invalid';
    valid = false;
  }

  setErrors(newErrors);
  if(valid){
    setActiveStep(activeStep+1)
  }
  return valid;
};

 const getAmount = ()=>{
  let amount = 0;
  let total = 0;
  if(dataform.step2.selectedPlan=="arcade"){
    amount = 9;
  }
  if(dataform.step2.selectedPlan=="advanced"){
    amount = 12;
  }
  if(dataform.step2.selectedPlan=="pro"){
    amount = 15;
  }
  if(dataform.step3.customizableProfile){
    total = total + 3;
  }
  if(dataform.step3.onlineService){
    total = total + 1;
  }
  if(dataform.step3.largerstorage){
    total = total + 2;
  }
  if(dataform.step2.periode=="yearly"){
      amount = (amount+total)*10;
  }
  return amount;
 }

  return (
    <>
     <div className="w-screen overflow-x-hidden overflow-y-auto h-screen flex relative lg:pt-0 pt-32 justify-center items-center bg-gray-200 max-w-screen mx-0 px-0 text-2xl">
      
              <div className="lg:p-3 rounded-lg absolute z-10 lg:left-36 lg:w-auto w-[120vw] lg:h-auto lg:top-auto top-0 left-0 lg:translate-x-8 p-0 mx-0 -translate-x-12   overflow-hidden ">
                  <div className="lg:relative rounded-lg lg:block flex justify-center items-start w-full  gap-2 ">
                  <div className="relative z-10 translate-x-24 lg:translate-x-0 bg-sky-600">
                  <Step onEvent={()=>setActiveStep(1)} title="YOUR INFO" numeros={1} active={activeStep==1} />
                  </div>
                  <div className="relative z-10 lg:translate-y-16 translate-x-36 md:translate-y-16 lg:translate-x-0">
                  <Step onEvent={()=>setActiveStep(2)} title="SELECT PLAN" numeros={2}  active={activeStep==2} />
                  </div>
                  <div className="relative z-10 lg:translate-y-36 translate-x-48 lg:translate-x-0">
                  <Step onEvent={()=>setActiveStep(3)} title="ADD ON" numeros={3}  active={activeStep==3} />
                  </div>
                  <div className="relative z-10 lg:translate-y-56 translate-x-64 lg:translate-x-0">
                  <Step onEvent={()=>setActiveStep(4)} title="SUMARY" numeros={4}  active={activeStep==4} />
                  </div>
                  <img src="https://github.com/asddaniel/multi-stepform/blob/main/assets/images/bg-sidebar-desktop.svg" className=" lg:w-full w-[120vw] lg:h-full h-40 lg:scale-100 object-bottom   rotate-180 lg:rotate-0 rounded  object-cover  " alt=""  />
                  
                  </div>
              </div>
             <Card className="lg:shadow shadow-none bg-transparent lg:bg-white lg:p-2 z-10 lg:z-0  lg:grid md:grid  lg:grid-cols-3 lg:gap-2 lg:w-3/4 w-11/12 h-[90vh] rounded-lg">
              <div>

              </div>
              <div className="p-3   pt-8 lg:px-16 rounded-lg col-span-2 relative overflow-x-hidden flex-col flex gap-2 items-start">
                 {activeStep==1 && <div className="flex flex-col gap-2 items-start lg:p-0 p-4 rounded-lg  lg:shadow-none shadow bg-white lg:bg-transparent">
                    <div className="font-bold lg:text-3xl text-2xl w-full text-blue-950">Personnal info</div>
                    <div className="text-gray-400 lg:text-xl text-sm font-semibold lg:font-normal">Please provide your name, email address and phone number</div>
                    <div className="flex justify-between w-full">
                    <label htmlFor="" className="text-blue-950 lg:text-xl text-sm pt-4 font-semi-bold">Name</label>
                    <label htmlFor="" className="text-red-600 lg:text-xl text-sm pt-2 font-semi-bold">{errors.name}</label>
                    </div>
                    <input type="text" onInput={(e)=>setdataform({...dataform, 
                      step1:{...dataform.step1, name:(e.target as HTMLInputElement).value}
                    })} placeholder="eg:Stephen King" className={"p-2 rounded border focus:border-blue-950 w-full outline-none lg:text-lg text-sm font-semibold "+(errors.name.length>0?"border-red-600":"")} />
                    <div className="flex justify-between w-full">
                    <label htmlFor="" className="text-blue-950 lg:text-xl text-sm pt-4  font-semi-bold">Email address</label>
                    <label htmlFor="" className="text-red-600 lg:text-xl text-sm pt-2 font-semi-bold">{errors.email}</label>
                    </div>
                    <input type="email" onInput={(e)=>{
                      setdataform({...dataform, step1: {...dataform.step1, email:(e.target as HTMLInputElement).value}})
                    }} placeholder="eg:stephenking@gmail.com" className={"p-2 rounded border focus:border-blue-950 w-full outline-none lg:text-lg text-sm font-semibold "+(errors.email.length>0?"border-red-600":"")} />
                    <div className="flex justify-between w-full">
                    <label htmlFor="" className="text-blue-950 lg:text-xl text-sm pt-4  font-semi-bold">Phone Number</label>
                    <label htmlFor="" className="text-red-600 lg:text-xl text-sm pt-2 font-semi-bold">{errors.phoneNumber}</label>
                    </div>
                    <input type="tel" onInput={(e)=>{
                      setdataform({...dataform, step1: {...dataform.step1, phoneNumber:(e.target as HTMLInputElement).value}})
                    }} placeholder="eg: +243 XX XXX XX " className={"p-2 rounded border focus:border-blue-950 w-full outline-none lg:text-lg text-sm font-semibold "+(errors.phoneNumber.length>0?"border-red-600":"")} />
                    
                  </div> }
                  {activeStep==2 && <div className="flex flex-col gap-2 rounded-lg  lg:shadow-none shadow bg-white lg:bg-transparent p-3 lg:p-0">
                  <div className="font-bold lg:text-3xl text-2xl w-full text-blue-950">Select your Plan</div>
                    <div className="text-gray-400 lg:text-xl text-lg font-semibold">you have the option of monthly or yearly billing</div>
                    <div className="lg:pt-8 pt-2 lg:grid grid-cols-3  gap-2 ">
                        <div onClick={()=>setdataform({...dataform, step2:{...dataform.step2, selectedPlan:"arcade"}})} className={"p-3 lg:w-32 w-full lg:my-0 my-2 lg:block flex items-center gap-3 lg:h-44 rounded-lg border focus:border-blue-900 cursor-pointer "+(dataform.step2.selectedPlan=="arcade"?"border-blue-900":"")}>
                          <div className="overflow-hidden">
                            <img src="https://github.com/asddaniel/multi-stepform/blob/main/assets/images/icon-arcade.svg" alt="icon arcade" />
                          </div>
                          <div className="lg:pt-8  lg:block flex flex-col items-start justify-center">
                            <div className="font-semibold text-lg text-blue-950">Arcade</div>
                            {dataform.step2.periode=="monthly" && <div className="text-sm text-gray-400">$9/mo</div>}
                            {dataform.step2.periode=="yearly" && <div className="text-sm text-gray-400">
                                <div>$90/yr</div>
                                <div className="text-blue-950"> 2 months free</div>
                              </div>}
                          </div>
                        </div>
                        <div  onClick={()=>setdataform({...dataform, step2:{...dataform.step2, selectedPlan:"advanced"}})} className={"p-3 lg:w-32 w-full lg:my-0 my-2 lg:block flex items-center gap-3 lg:h-44 rounded-lg border focus:border-blue-900 cursor-pointer "+(dataform.step2.selectedPlan=="advanced"?"border-blue-900":"")}>
                          <div className="overflow-hidden">
                            <img src="https://github.com/asddaniel/multi-stepform/blob/main/assets/images/icon-advanced.svg" alt="icon advanced" />
                          </div>
                          <div className="lg:pt-8  lg:block flex flex-col items-start justify-center">
                            <div className="font-semibold text-lg text-blue-950">Advanced</div>
                            {dataform.step2.periode=="monthly" && <div className="text-sm text-gray-400">$12/mo</div>}
                            {dataform.step2.periode=="yearly" && <div className="text-sm text-gray-400">
                                <div>$120/yr</div>
                                <div className="text-blue-950"> 2 months free</div>
                              </div>}
                          </div>
                        </div>
                        <div  onClick={()=>setdataform({...dataform, step2:{...dataform.step2, selectedPlan:"pro"}})} className={"p-3 lg:w-32 w-full lg:my-0 my-2 lg:block flex items-center gap-3 lg:h-44 rounded-lg border focus:border-blue-900 cursor-pointer "+(dataform.step2.selectedPlan=="pro"?"border-blue-900":"")}>
                          <div className="overflow-hidden">
                            <img src="https://github.com/asddaniel/multi-stepform/blob/main/assets/images/icon-pro.svg" alt="icon pro" />
                          </div>
                          <div className="lg:pt-8  lg:block flex flex-col items-start justify-center">
                            <div className="font-semibold text-lg text-blue-950">Pro</div>
                            {dataform.step2.periode=="monthly" && <div className="text-sm text-gray-400">$9/mo</div>}
                            {dataform.step2.periode=="yearly" && <div className="text-sm text-gray-400">
                                <div>$150/yr</div>
                                <div className="text-blue-950"> 2 months free</div>
                              </div>}
                          </div>
                        </div>
                    </div>
                    <div className="lg:pt-8 flex justify-center items-center">
                      <div className={"text-lg font-bold transition px-2 "+(dataform.step2.periode=="monthly"?"text-blue-950 ":"text-gray-400")}>monthly</div>
                            <Switch isSelected={dataform.step2.periode=="yearly"} onValueChange={(e)=>setdataform({...dataform, step2:{
                              ...dataform.step2, periode:e?'yearly':"monthly"
                            }})} color="primary" size="sm"/>
                            <div className={"text-lg font-bold transition  px-2 "+(dataform.step2.periode!="monthly"?"text-blue-950 ":"text-gray-400")}>yearly</div>
                    </div>
                  </div>}
                  {activeStep==3 && <div className="flex flex-col gap-2 rounded-lg  lg:shadow-none shadow bg-white lg:bg-transparent p-3 lg:p-0">
                  <div className="font-bold lg:text-3xl text-2xl w-full text-blue-950">Pick add-ons</div>
                    <div className="text-gray-400 lg:text-xl text-lg">add-ons help enhance your gaming experience</div>
                    <div className="pt-8">
                      <div  className={"lg:p-4 p-2 py-2 rounded-lg border w-full grid lg:grid-cols-8 grid-cols-9 lg:gap-3 gap-1 text-sm items-center transition "+(dataform.step3.onlineService?" border-blue-900 bg-sky-50":"")}>
                              <div className="p-1 lg:px-2 flex justify-center items-center">
                              <Checkbox  isSelected={dataform.step3.onlineService} color="secondary" size="md" className="text-white text-sm" onValueChange={(e)=>setdataform({...dataform, 
                        step3:{...dataform.step3, onlineService:e}
                      })}></Checkbox>
                              </div>
                              <div className="p-1 flex justify-center items-start flex-col col-span-6 ">
                              <div className="text-lg font-semibold lg:text-lg text-sm text-blue-950">Online Service</div>
                              <div className="text-lg font-semibold lg:text-lg text-sm text-gray-400">Access to multiplayer Games</div>
                              </div>
                              <div className="p-1 text-blue-800 font-semibold">+${dataform.step2.periode=="monthly"?1:10}/mo</div>
                      </div>
                      <div className={"p-4 py-2 rounded-lg border w-full grid lg:grid-cols-8 grid-cols-9 lg:gap-3 gap-1 text-sm items-center transition my-3 "+(dataform.step3.largerstorage?" border-blue-900 bg-sky-50":"")}>
                              <div className="p-1 px-2 flex justify-center items-center">
                              <Checkbox  isSelected={dataform.step3.largerstorage} color="secondary" size="md" className="text-white text-sm" onValueChange={(e)=>setdataform({...dataform, 
                        step3:{...dataform.step3, largerstorage:e}
                      })}></Checkbox>
                              </div>
                              <div className="p-1 flex justify-center items-start flex-col col-span-6">
                              <div className="text-lg font-semibold lg:text-lg text-sm text-blue-950">Larger Storage</div>
                              <div className="text-lg font-semibold lg:text-lg text-sm text-gray-400">Extra 1TB of cloud save</div>
                              </div>
                              <div className="p-1 text-blue-800 font-semibold">+${dataform.step2.periode=="monthly"?2:20}/mo</div>
                      </div>
                      <div className={"p-4 py-2 rounded-lg border w-full grid lg:grid-cols-8 grid-cols-9 lg:gap-3 gap-1 text-sm items-center transition "+(dataform.step3.customizableProfile?" border-blue-900 bg-sky-50":"")}>
                              <div className="p-1 px-2 flex justify-center items-center">
                              <Checkbox isSelected={dataform.step3.customizableProfile} color="secondary" size="md" className="text-white text-sm" onValueChange={(e)=>setdataform({...dataform, 
                        step3:{...dataform.step3, customizableProfile:e}
                      })}></Checkbox>
                              </div>
                              <div className="p-1 flex justify-center items-start flex-col col-span-6">
                              <div className="text-lg font-semibold lg:text-lg text-sm text-blue-950">Customizable Profile</div>
                              <div className="text-lg font-semibold lg:text-lg text-sm text-gray-400">Custom theme on your profile</div>
                              </div>
                              <div className="p-1  text-blue-800 font-semibold ">+${dataform.step2.periode=="monthly"?2:20}/mo</div>
                      </div>
                    </div>
                    </div>}
                    {activeStep == 4 && <div className="flex flex-col gap-2 rounded-lg  lg:shadow-none shadow bg-white lg:bg-transparent p-3 lg:p-0">
                    <div className="font-bold lg:text-3xl text-2xl w-full text-blue-950">Finishing Up</div>
                    <div className="text-gray-400 lg:text-xl text-lg">Double check everything looks OK before confirming</div>
                    <div className="mt-8">
                      <div className="rounded-lg p-4 bg-gray-100 ">
                        <div className="py-2 pb-1 flex justify-between w-full">
                        <div className="text-sm font-bold text-blue-950">Arcade ({dataform.step2.periode}) </div>
                        <div className="text-sm font-bold text-blue-950"> {dataform.step2.periode=="monthly"?"$9/mo":"$90/mo"}</div>
                        </div>
                        <div onClick={()=>setActiveStep(2)} className="hover:underline underline hover:text-blue-600 transition cursor-pointer transition transition text-sm mb-3">Change</div>
                        <hr />
                        {dataform.step3.onlineService && <div className="py-2 pb-1 flex justify-between w-full">
                        <div className="text-sm font-bold text-gray-400">Online service </div>
                        <div className="text-sm  text-blue-950">+$1/mo</div>
                        </div>}
                        {dataform.step3.largerstorage && <div className="py-2 pb-1 flex justify-between w-full">
                        <div className="text-sm font-bold text-gray-400">Larger storage </div>
                        <div className="text-sm  text-blue-950">+${dataform.step2.periode=="monthly"?2:20}/mo</div>
                        </div>}
                        {dataform.step3.customizableProfile && <div className="py-2 pb-1 flex justify-between w-full">
                        <div className="text-sm font-bold text-gray-400">Customizable Profile </div>
                        <div className="text-sm  text-blue-950">+${dataform.step2.periode=="monthly"?2:20}/mo</div>
                        </div>}
                      </div>
                      <div className="p-2 mt-8 pb-1 flex justify-between w-full">
                        <div className="text-sm font-bold text-gray-400">Total (per {dataform.step2.periode=="monthly"?'month':"year"}) </div>
                        <div className="lg:text-lg text-sm  text-blue-600 font-bold"> +${getAmount()} /{dataform.step2.periode=="monthly"?'mo':"yr"}</div>
                        </div>
                    </div>
                      </div>}
                      {activeStep == 5 && <div className="h-full p-3 w-full  flex justify-center items-center rounded-lg  lg:shadow-none shadow bg-white lg:bg-transparent">
                        <div className="p-2">
                          <div className="py-6 px-8 flex justify-center items-center">
                          <img src="https://github.com/asddaniel/multi-stepform/blob/main/assets/images/icon-thank-you.svg" alt="" />
                          </div>
                          <div className="text-3xl font-bold text-blue-950 text-center py-4">Thank you!</div>
                          <div className="text-gray-400 text-sm font-semibold text-center">Thanks for confirming your subscription! We hope you have fun using our platform.
                          if you ever need any support, please feel free to email us at support@loremgaming.com</div>
                        </div>
                        </div>}

                 {activeStep < 5 && <div className="pt-16 flex justify-between w-full">
                    <div>

                      {activeStep>1 && <button className="rounded p-3 text-gray-400 text-lg" onClick={()=>setActiveStep(activeStep-1)}> Go Back</button>}
                    </div>
                    <button className="rounded p-2 bg-blue-900 hover:bg-blue-950 transition text-white font-semibold px-3 text-lg cursor-pointer" onClick={()=>{
                      if(activeStep==1){
                          validate();
                      }else{
                        activeStep<5 && setActiveStep(activeStep+1)
                      }
                    }}> {activeStep==4?"Confirm":"Next Step"} </button>
                  </div>}
              </div>
             </Card>
            
     </div>
    </>
  )
}


export default App
