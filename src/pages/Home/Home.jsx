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
                        title="Blogify"
                        desc="A full-featured blogging platform for creating & managing blogs."
                        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                        github="https://github.com/subham-behera/Blog"
                        live="https://devblogify.netlify.app/"
                    />
                    <Card
                        title="SWITCH Club Website"
                        desc="A fully responsive club website showcasing club activites & more."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1k6vR7YjBKylpOqRIXuk9iVEjlTfxy4x-Q&s"
                        github="https://github.com/subham-behera/club"
                        live="https://switchclub.netlify.app/"
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