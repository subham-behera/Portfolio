import Card from "../../components/Card";
import Landing from "./Landing";


function Home() {
    return (
        <div>
            <Landing/>
            <div className="text-center mt-6 mb-4">
                <span className="text-4xl font-semibold">My Projects</span>
            </div>
            <div className="p-6 flex flex-col gap-y-6">
                <span className="py-6 text-center text-2xl font-bold">Full Stack Projects</span>
                <div className="flex flex-wrap justify-center gap-6">
                    <Card
                        title="BlogSite"
                        desc="A full-featured blogging platform"
                        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                        github="https://github.com/subham-behera/Blog"
                        live="#"
                    />
                    <Card
                        title="Ecommerce"
                        desc="A eCommerce website built with React and Tailwind CSS"
                        image="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk="
                        github="https://github.com/subham-behera/Ecommerce"
                        live="#"
                    />
                    <Card
                        title="SnapExtension"
                        desc="Chrome extension to capture full-page screenshots with a single click."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNAhttcNcULNFhGScMwHu8ssTTUa-d2vlgA&s"
                        github="https://github.com/subham-behera/SnapExtension"
                        live="#"
                    />
                </div>
                <div className="text-center">
                    <a href="/projects"
                    className="mt-6 px-3 py-2 bg-blue-500 text-white shadow-sm hover:shadow-2xl rounded-md w-fit"
                    >More Projects</a>
                </div>
            </div>
        </div>
    );
}

export default Home;