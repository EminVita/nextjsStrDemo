import Link from "next/link";
import Layout from "./layout.module.css"
function MidLayOut({ props }) {
    return (
        <div className={Layout.all}>
            <div className={Layout.box2}>
            <div className={Layout.midnav}>
                <ul>
                    {
                        props.map((prop) => {
                            
                            return (
                                <li key={prop.id}>
                                    <a  href={prop.id}>
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

export default MidLayOut;