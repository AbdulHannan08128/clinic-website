import {NextRequest} from 'next/server'

export async function handler(req, res){
   res.status(200).json({message:"success"})
   console.log(NextRequest);
}