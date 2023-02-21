import Image from "next/image";
import Link from "next/link";
import Layout from "./layout.module.css"
function TopLayout({ props }) {
    
    return (
            <div className={Layout.shortcut}>
                <div className={Layout.wrapper}>
                    {/* 顶部导航链接 */}        
                <div className={Layout.topnav}>
                <ul>
                    {/* 网站logo图片 */}
                    <li className={Layout.logo}>
                        <Link href='/'>
                        <img 
                            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" 
                            alt="ico" 
                        />
                        </Link>
                    </li>
                    {
                        props.map((prop) => {
                            return (
                                <li key={prop.id}>
                                    <a  href="/">
                                        
                                            {prop.attributes.name}
                                        
                                    </a>
                                </li>
                                )
                            })
                        }
                        
                </ul>
                </div>
                </div>
                
                
                
                


            </div>
        
        
    )
}

export default TopLayout;