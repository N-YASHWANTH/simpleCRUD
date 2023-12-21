import User from '../models/user.model'

export const registerUser = async(body)=>{
  const data=await User.findOne({
    email:body.email
  })
  if(data!=null){
    throw new Error ('User already exists');
  }
  else{
    const data=await User.create(body)
    return data
  }
}

export const loginUser = async(body)=>{
  const data=await User.findOne({
    email:body.email
  })
  if(!data){
    throw new Error ('User not found');
  }
  else if(data.password!=body.password){
    throw new Error ('Unauthorized User')
  }
  else{
    return data
  }
}
