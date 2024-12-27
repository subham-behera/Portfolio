// Index.js
import Card from "../../components/Card";

function Index() {
    return (
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
            <span className="py-6 text-center text-2xl font-bold">Data Science Projects</span>
            <div className="flex flex-wrap justify-center gap-6">
                <Card
                    title="Sentiment Analysis"
                    desc="Check the nature of the statement"
                    image="https://www.shutterstock.com/image-vector/sentiment-analysis-test-emotions-by-260nw-2246863191.jpg"
                    github="https://github.com/subham-behera/Sentiment-Analysis"
                    live="https://sentiment-analysis-mpkundhkfnnmnt7cpjv2wv.streamlit.app/"
                />
                <Card
                    title="Diabetes Prediction"
                    desc="Predict if a person is diabetic or not"
                    image="https://watermark.lovepik.com/photo/40214/8038.jpg_wh1200.jpg"
                    github="https://github.com/subham-behera/Diabetes-Prediction"
                    live="https://diabetes-prediction-ewgg4ssilj5pm58fd8dhi9.streamlit.app/"
                />
                <Card
                    title="Crops Recommendation"
                    desc="Check the nature of the statement"
                    image="https://st3.depositphotos.com/1177973/16777/i/450/depositphotos_167778562-stock-photo-concept-of-smart-agriculture-and.jpg"
                    github="https://github.com/subham-behera/GoAgro"
                    live="#"
                />
            </div>
            <div className="text-center">
                <a href="https://github.com/subham-behera"
                className="mt-6 px-3 py-2 bg-blue-500 text-white shadow-sm hover:shadow-2xl rounded-md w-fit"
                >More Projects</a>
            </div>
        </div>
    );
}

export default Index;
