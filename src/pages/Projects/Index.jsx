// Index.js
import Card from "../../components/Card";

function Index() {
    return (
        <div className="p-6 flex flex-col gap-y-6">
            <div className="flex flex-wrap justify-center gap-6">
                <Card
                    title="Sentiment Analysis"
                    desc="Check the nature of the statement"
                    image="https://www.shutterstock.com/image-vector/sentiment-analysis-test-emotions-by-260nw-2246863191.jpg"
                    github="#"
                    live="#"
                />
                <Card
                    title="Diabetes Prediction"
                    desc="Predict if a person is diabetic or not"
                    image="https://watermark.lovepik.com/photo/40214/8038.jpg_wh1200.jpg"
                    github="#"
                    live="#"
                />
                <Card
                    title="Crops Recommendation"
                    desc="Check the nature of the statement"
                    image="https://static.country-guide.ca/wp-content/uploads/2020/04/29174135/crops-technology-903506456-lamyai-iStock-GettyImages.jpg"
                    github="#"
                    live="#"
                />
            </div>
            <div className="text-center">
                <a href="#"
                className="mt-6 px-3 py-2 bg-blue-500 text-white shadow-sm hover:shadow-2xl rounded-md w-fit"
                >More Projects</a>
            </div>
        </div>
    );
}

export default Index;
