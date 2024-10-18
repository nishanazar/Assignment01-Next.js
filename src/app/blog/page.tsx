import Button from "../components/Button";

export default async function Blog (){

    return(
      <>
      <div>
      
      <h1 className="font-bold text-4xl text-slate-600 mt-6">Blog Articles</h1></div>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
      <div className="h-[350px] w-[350px] mt-10 ml-32 text-center inline-block">
      <img className="h-52 ml-4" src="https://cdn.pixabay.com/photo/2023/06/14/23/12/sunset-8064078_1280.jpg" alt="naturalpc"/>
      <h2 className="text-2xl font-bold">Hasseb</h2>
      <p className="text-[13px] mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem nobis nulla dolore, neque consequuntur fugiat quod libero ipsum culpa totam.</p>
      <Button/>
      </div>

      <div className="h-[350px] w-[350px] mt-10 text-center inline-block">
      <img className="h-52 ml-4" src="https://cdn.pixabay.com/photo/2022/12/01/04/43/girl-7628308_960_720.jpg" alt="picture"/>
      <h2 className="text-2xl font-bold">Hashir</h2>
      <p className="text-[13px] mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem nobis nulla dolore, neque consequuntur fugiat quod libero ipsum culpa totam.</p>
      <Button/>
      </div>

      <div className="h-[350px] w-[350px] mt-10 text-center inline-block">
      <img className="h-52 ml-4" src="https://media.istockphoto.com/id/1294065729/photo/chicago-skyline-at-sunset-aerial.jpg?s=1024x1024&w=is&k=20&c=NDcW7dOG0XqHP0F2pJryhnoDuZaLUV0fhXNi5cvTMzU=" alt="picture"/>
      <h2 className="text-2xl font-bold">Nisha</h2>
      <p className="text-[13px] mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem nobis nulla dolore, neque consequuntur fugiat quod libero ipsum culpa totam.</p>
      <Button/>
      </div>
      </>
    )
  }