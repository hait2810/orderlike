import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

import toastr from 'toastr'
import "toastr/build/toastr.min.css"

type Props = {
   
}

const HomePage = (_props: Props) => {
    const {register, handleSubmit} = useForm();
    const [token, setToken] = useState("")
    const [code,setCode] = useState<any[]>([]);
    useEffect(() => {
        const getToken = async () => {
            const {data} = await axios.get("http://localhost:3001/tokens/1");
    setToken(data.name) 
        }
        getToken()  
        const getCode = async () => {
            const {data:ma} = await axios.get("http://localhost:3001/codes")
                setCode(ma)
        }
        getCode()
    }, [])
    const onLink = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const link:any = event.target.value
       
        const headers = {
            "ht-token": token
         }
        
        if(isNaN(link) == true) {
            
            toastr.info("Đang lấy id")
            const {data: idstt} = await axios.post("https://autofb.pro/api/checklinkfb/check_post/", {"id_user":16429,"link":""+link+""}, {headers})
            if(idstt.id) {
                event.target.value = idstt.id
            toastr.success("Lấy id thành công")
            }else {
                toastr.info(idstt.msg)
                
                
            }
            
        }
        
      };
      const onAdd = async () => {
                
               
                const id = (document.querySelector("#link") as HTMLInputElement).value
                const maxucthu = (document.querySelector("#maxacthuc") as HTMLInputElement).value
                
                
                
                const codes = code.find(item => item.name == maxucthu);
                if(codes) {
        const headers = {
            "ht-token": token
            
         }
                    await axios.post("https://autofb.pro/api/facebook_buff/create", {"dataform":{"locnangcao":0,"locnangcao_gt":0,"locnangcao_dotuoi_start":0,"locnangcao_dotuoi_end":13,"locnangcao_banbe_start":0,"locnangcao_banbe_end":100,"profile_user":""+id+"","loaiseeding":"like_v9","baohanh":0,"sltang":codes.limit,"giatien":3.5,"ghichu":"","startDatebh":"2022-07-24T04:25:00.878Z","EndDatebh":"2022-07-31T04:25:00.878Z","type":"","list_messages":[],"tocdolike":0},"type_api":"buff_likecommentshare"} , {headers} )   
                    toastr.success("Thành công")  
                }else {
                    toastr.warning("Mã xác thực không đúng, vui lòng liên hệ admin")
                }
                
      }
    
  return (
    <div>
        <div className="container">
  <h2  className='btn btn-info w-100'>Bù bài vip like ( áp dụng vip like v5 )</h2> <br />
  <p className='btn btn-warning w-100'>Lưu ý: <br />
  *Bài viết được sử dụng là bài viết đang bị lỗi đơn <br />
  *Không được spam chức năng này nếu không sẽ bị cấm id vĩnh viễn</p>
  <form>
    <div className="form-group">
      <label htmlFor="usr">ID or Link bài viết:</label>
      <input type="text" className="form-control"  {...register('link')} onChange={onLink} placeholder='Nhập id bài viết cần tăng, có thể nhập url hệ thống tự lấy ID' id="link" />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Mã xác thực:</label>
      <input type="text" className="form-control" {...register('maxacthuc')} placeholder='Mã xác thực lấy từ admin' id="maxacthuc" />
    </div>
    <div className="form-group">
      
        <button onClick={handleSubmit(onAdd)} className='btn btn-success mt-3'>Hoàn tất</button>
    </div>
  </form>
</div>

        </div>
  )
}

export default HomePage