

const Banner = () => {
    return (
        <div className="container mx-auto lg:max-w-6xl ">
            <div className="bg-img h-96 flex flex-col items-center justify-center text-white">
            <h1 className="mb-5 text-xl lg:text-3xl font-bold w-3/5 mx-auto text-center">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 mx-auto w-4/5 text-center ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex mx-auto justify-center gap-4">
            <button className="btn bg-green-400 rounded-full">Explore now</button>
            <button className="btn rounded-full"> Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;
