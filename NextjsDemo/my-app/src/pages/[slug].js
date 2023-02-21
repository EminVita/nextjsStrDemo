import TopLayout from "@/components/toplayout";
import MidLayOut from "@/components/midlayout"
import { fetcher } from '@/lib/api';
import Layout from "../components/layout.module.css"
import PostLists from "@/components/postlists";
import AdPage from "@/components/ad";
//根据点击不同的tag，进入此页面，推送不同tag的文章
function DifPage({topItems, midItems, postItems, slug, autItems}) {
    
    return (
        <div>
            <TopLayout props={topItems}>
            
            </TopLayout>
            <MidLayOut   props={midItems}>

            </MidLayOut>
            <PostLists props={postItems}  tag={slug} aut={autItems}>
            </PostLists>
            {/* <AdPage props={autItems}></AdPage> */}
        </div>
        
        
    )
}

export default DifPage;

export async function getServerSideProps(context) {
    const slug = context.query;
    const midtabs = await fetcher("tags");
    const toptabs = await fetcher("toptabs");
    const author =await fetcher("authors?populate=*");
    const posts = await fetcher("posts?populate=*");
    const midItems = midtabs.data;//小导航
    const topItems = toptabs.data;//顶层导航
    const postItems = posts.data;//获取所有文章信息
    const autItems = author.data;//获取成员信息
    console.log(autItems);
    return {
        props: {
            topItems,
            midItems,
            postItems,
            slug,
            autItems,
        },
    }
}