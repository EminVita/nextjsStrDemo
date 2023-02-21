import Link from "next/link";
import Image from 'next/image'
import { API_URL, image } from "@/lib/api";
import Layout from "./layout.module.css"
import AdPage from "@/components/ad";
function PostLists({props, tag, aut}){
    console.log({aut})
    if(tag===null){
        return (

            <div className={Layout.box3}>
                    <div className={Layout.Essay}>
                        <div className={Layout.Tbr}>
                            <ul >
                                <li ><a className={Layout.tj}>推荐</a></li>
                                <li><a>最新</a></li>
                                <li><a>热榜</a></li>
                            </ul>
                        </div>
                        {props.map((prop) => {
                            return (
                                    <div className={Layout.message} key={prop.id}>
                                            <ul  >
                                            <li>
                                            
                                            {/* 图片 */}
                                            <div>
                                                <img 
                                                src={`${API_URL}${prop.attributes.cover.data.attributes.url}`} 
                                                alt="Picture of the author"  
                                                />
                                                {/* {prop.attributes.cover.data.attributes.url} */}
                                            </div>
                                            {/* 作者 */}
                                            <div className={Layout.author}>
                                            {prop.attributes.author.data.attributes.name}
                                            {/* 发布日期 */}
                                            <div className={Layout.data}>
                                            {prop.attributes.date}
                                            </div>
                                            </div>
                                            
                                            {/* 文章标题 */}
                                            <div className={Layout.title}>
                                                {prop.attributes.title}
                                            </div>
                                            
                                            </li>
                                            </ul>
                                    </div> 
                                    )
                                })}
                    </div>
                    <AdPage props={aut}></AdPage>
                    
                    
            </div>
            
            
           
        )
    }
    
    
        return (
        <div className={Layout.box3}>
                <div className={Layout.Essay}>
                    <div className={Layout.Tbr}>
                            <ul>
                                <li><a className={Layout.tj}>推荐</a></li>
                                <li><a>最新</a></li>
                                <li><a>热榜</a></li>
                            </ul>
                    </div>
                    
                        {props.map((prop) => {
                            
                            if(prop.attributes.tags.data[0].id == tag.slug){
                                return (
                                    <div className={Layout.message} key={prop.id}>
                                        <ul>
                                    <li >
                                    
                                    {/* 图片 */}
                                    <div>
                                        <img
                                        src={`${API_URL}${prop.attributes.cover.data.attributes.url}`} 
                                        alt="Picture of the author"  
                                        />
                                        {/* {prop.attributes.cover.data.attributes.url} */}
                                    </div>
                                     {/* 作者 */}
                                     <div className={Layout.author}>
                                     {prop.attributes.author.data.attributes.name}
                                            {/* 发布日期 */}
                                            <div className={Layout.data}>
                                            {prop.attributes.date}
                                            </div>
                                    </div>
                                            
                                            {/* 文章标题 */}
                                            <div className={Layout.title}>
                                                {prop.attributes.title}
                                            </div>
                                    
                                </li>
                                </ul>
                                    </div>
                                
                                
                            )
                            }
                            
                            
                            
                        })}
                    
                </div>
                <AdPage props={aut}></AdPage>
        
            </div>
        
        
        
    )
    
    
        
            
}

export default PostLists;