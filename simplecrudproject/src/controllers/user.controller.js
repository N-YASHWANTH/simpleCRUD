import * as userService from '../services/user.service'
import HttpStatus from 'http-status-codes'

export const newUser = async(req,res)=>{
  try {
    const data = await userService.registerUser(req.body)
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User Created Successfully'
    })
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      message: 'User not created'
    })
  }
}

export const loginUser = async(req,res)=>{
  try {
    const data=await userService.loginUser(req.body)
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User LoggedIn Successfully'
    })
  } catch (error) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      message: error
    })
  }
}
