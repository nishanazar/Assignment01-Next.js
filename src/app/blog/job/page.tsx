export default function Job (){
    return(
      <div className="flex justify-between h-[400px] w-[1000px] bg-blue-300 ml-36 mt-10">
        <div>
        <h1 className="font-bold text-2xl pt-28 pl-20 pb-5">Find the <br />most exciting <br />startup jobs</h1>
        <input className="ml-20" type=""  placeholder="search job"/>
        <button className="h-7 w-20 bg-red-700 hover:bg-red-200 rounded-[5px] text-white">Apply</button>
        </div>
        <div>
        <img  className="h-[250px] mr-32 mt-16 rounded-full"   src="https://media.istockphoto.com/id/1470735573/photo/businesswomen-listen-as-female-mid-adult-colleague-shares-ideas.jpg?s=1024x1024&w=is&k=20&c=Y91tPvaYWLwT_O84nmoipeZ0BVdEgXpk608pFB3qiZ4="/>
      </div>
      </div>
     
    )
  }