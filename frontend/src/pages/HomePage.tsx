import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Truck into a takeaway today
                </h1>
                <span className="text-x1">
                    Food is just a click
                </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage}/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the MernEatss App for faster ordering and personalised recommendations
                    </span>
                    <img src={appDownloadImage}></img>
                </div>
            </div>
        </div>
    )
}

export default HomePage;