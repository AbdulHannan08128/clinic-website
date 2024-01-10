export async function checkDetails(request, Response){

    
    const data = await request.formData();
  // console.log(data.get('name'));
  console.log(data);
  if (data.get('name').length==0 || data.get('name').length<6) {
    return Response.json({status:'NL'}) ;
    
  }
  else if (data.get('Message').length<15 || data.get('Message').includes(' ')==false) {
    return Response.json({status:'ML'}) ;
  }
  else if (data.get('email').length==0 || data.get('email').includes(' ')==true) {
    return Response.json({status:'EL'}) ;
  }
  else{
    return Response.json({status:200}) ; 
  }
}