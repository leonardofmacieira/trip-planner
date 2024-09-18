import React, { useEffect, useState } from 'react'
import {Button} from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useNavigation } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'

const Header = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  const [openDailog, setOpenDailog] = useState(false);

  useEffect(()=>{
    console.log(user, 'aquii');
  },[])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUseProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUseProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        window.location.reload()
      });
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src='/logo2.jpg' className='flex items-center w-[150px] h-[120px]'/>
      <div >
        {user?
        <div className='flex items-center gap-3'>
          <a href="/create-trip">
            <Button variant='outline' className='rounded-full'>+ Procurar Viagem</Button>
          </a>
          <a href="/my-trips">
            <Button variant='outline' className='rounded-full'>Minhas Viagens</Button>
          </a>
          <Popover>
            <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/></PopoverTrigger>
            <PopoverContent>
              <h2 className='cursor-pointer flex items-center gap-1 hover:text-[#f56551] duration-100' onClick={()=>{
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}>Sair <MdLogout size={15}/></h2>
            </PopoverContent>
          </Popover>
        </div>
        :
        <Button onClick={()=>setOpenDailog(true)}>Login</Button>
      }
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">
                Entre com a conta do Google
              </h2>
              <p>
                Faça login no aplicativo com autenticação do Google de forma
                segura
              </p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Entrar com o Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header
