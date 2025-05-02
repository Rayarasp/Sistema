import svg from "/public/anima.svg"

export default function LoginPage(){
    return (
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full flex items-center justify-center"></div>
            <div className="w-[60%] h-full bg-[#6366EE] flex items-center justify-center rounded-l-lg">
                <img src={svg} alt="imagem-animada" className="" />
            </div>
        </div>
    ) 
}