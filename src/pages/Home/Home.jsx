import Index from "../Projects/Index";
import Landing from "./Landing";


function Home() {
    return (
        <div>
            <Landing/>
            <div className="text-center mt-6 mb-4">
                <span className="text-4xl font-semibold">My Projects</span>
            </div>
            <Index/>
        </div>
    );
}

export default Home;