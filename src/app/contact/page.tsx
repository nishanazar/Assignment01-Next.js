export default function Contact (){
    return(
      <>
      <div className="h-[400px] w-[380px]  font-bold  ml-96 rounded-2xl ">
        <h1 className="font-bold text-3xl py-8 pl-16 text-blue-950 ">Contact Us</h1>
        
        <label className="mr-11">First Name:</label>
         <input className="bg-slate-300 text-black" type="text" placeholder="First Name" />
         <br />
         <br />
        
         <label className="mr-12">last Name:</label>
         <input className="bg-slate-300 text-black" type="text" placeholder="LastName" />
         <br />
         <br />
         <label className="mr-3">Email Address:</label>
         <input className="bg-slate-300 text-black" type="email" placeholder="email" />
         <br />
         <br />
         <label className="mr-2">Phone Number:</label>
         <input className="bg-slate-300 text-black" type="number" placeholder="number" />
         <br />
         <br />
         <button className="bg-blue-900 hover:bg-slate-500 h-10 w-60 text-center text-white rounded-2xl ml-10 mt-8">Submit</button>
         </div>
      </>
    )
  }