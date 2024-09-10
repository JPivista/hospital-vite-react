import ReactPlayer from "react-player"


const Home = () => {
    return (
        <>
            <div className="relative w-full h-[70vh] overflow-hidden">
                <ReactPlayer
                    url="https://www.youtube.com/embed/D0UnqGm_miA?autoplay=1&loop=1&playlist=D0UnqGm_miA&modestbranding=1&controls=0&rel=0&showinfo=0"
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center">
                    <div>
                        {/* Uncomment the following lines if you want to add overlay text */}
                        {/* <h1 className="text-4xl font-bold">Your Banner Title</h1>
                    <p className="text-xl mt-4">Your banner subtitle or description goes here.</p> */}
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
            </div>
        </>
    )
}

export default Home
