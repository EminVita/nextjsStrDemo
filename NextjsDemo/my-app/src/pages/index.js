import TopLayout from "@/components/toplayout";
import MidLayOut from "@/components/midlayout"
import { fetcher } from '@/lib/api';
import PostLists from "@/components/postlists";
import AdPage from "@/components/ad";


function HomePage({topItems, midItems, postItems,slug,autItems}) {
    return (
        <div >
            <TopLayout props={topItems}>
            </TopLayout>
            <MidLayOut props={midItems}>
            </MidLayOut>
            <PostLists props={postItems} tag={null} aut={autItems}>
            </PostLists>
            {/* <AdPage props={autItems}></AdPage> */}
            
            
        </div>
        
    )
}
export default HomePage;

export async function getServerSideProps(context) {
    const toptabs = await fetcher("toptabs")
    const midtabs = await fetcher("tags")
    const author =await fetcher("authors?populate=*");
    const posts = await fetcher("posts?populate=*");
    const midItems = midtabs.data;//小导航
    const topItems = toptabs.data;//顶层导航
    const postItems = posts.data;//获取所有文章信息
    const autItems = author.data;//获取成员信息
    const slug = context.query;
    console.log(autItems);
    return {
        props: {
            topItems,
            midItems,
            postItems,
            autItems,
            slug,
        },
    }
}