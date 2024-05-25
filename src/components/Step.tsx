

type propstype = {
    title: string,
    numeros: number,
    active?: boolean,
    onEvent?: () => void
}

export default function Step(props:propstype){
      const develop = ()=>{
        if(props.onEvent){
            props.onEvent();
        }
      }

    return <div onClick={()=>develop()} className="absolute z-10 transition p-6 text-gray-800 flex items-center  justify-center gap-2 text-white cursor-pointer">
    <div className="p-2">
      <div className={"rounded-full transition px-3 aspect-square cursor-pointer "+(props.active?'bg-gray-200 text-gray-800':'border')}>
            {props.numeros}
      </div>
    </div>
    <div className="w-full lg:block hidden text-sm text-white flex justify-center items-start flex-col">
      <div> STEP {props.numeros}</div>
      <div className="font-bold">{props.title}</div>
    </div>
</div>

}