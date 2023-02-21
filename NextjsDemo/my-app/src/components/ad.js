import { API_URL } from "@/lib/api"
import Layout from "./layout.module.css"
function AdPage(props) {
    console.log(props)
    return(
        <div className={Layout.ad}>
                        <div className={Layout.adImages}>
                            <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/513e1d89a09b4a0ebab67c6a1dc94901~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt=""/>
                        </div>
                        <div className={Layout.app}>
                            <div >
                                <img src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt=""/>
                                {/* <div className={Layout.appmanage}>
                                    <div className={Layout.appTitle}>下载稀土掘金app</div>
                                    <div className={Layout.appContent}>一个帮助开发者成长的社区</div>
                                </div> */}
                                <div className={Layout.title}>下载稀土掘金app</div>
                                <div className={Layout.content}>一个帮助开发者成长的社区</div>
                            </div>
                        </div>
                        <div className={Layout.authorList}>
                            <header>🎖️作者榜</header>
                            <div href="">
                            <div>
                            {props.props.map((prop) => {
                                console.log()
                                    return (
                                        <div key={prop.id}>
                                            <div className={Layout.author} >
                                            <img src={`${API_URL}${prop.attributes.image.data.attributes.url}`}  alt=""/>
                                            <div className={Layout.information}>
                                                <a href="#">
                                                <span id={prop.id}>{prop.attributes.name}</span>
                                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png" alt=""/>
                                                </a>
                                                <div className={Layout.aboutTheAuthor}>{prop.attributes.posts} @ {prop.attributes.company}</div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    )})}
                                
                            </div>
                            
                            
                            
                            </div>
                        </div>
        </div>
        
    )
}
export default AdPage;