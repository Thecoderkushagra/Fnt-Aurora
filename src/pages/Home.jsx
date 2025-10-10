import { Play, Plus } from "lucide-react";
import { myAssets } from "../assets/MyAssets";

const Home = () => {
    return (
        <>
            {/* cover image section */}
            <div style={{ height: '65vh', backgroundImage: `url(${myAssets.coverimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'start', color: 'white', textAlign: 'start', padding: '0px 60px' }}>

                    <h1 style={{ fontSize:"60px",fontWeight:"bolder"}}>
                        Demon Slayer
                    </h1>
                    <p style={{maxWidth:"700px"}}>
                        Set in Taishō era Japan, the series follows Tanjiro Kamado, a teenage boy who joins the Demon Slayer Corps—an organization consisting of humans seeking to hunt down demons—after his family is slaughtered and his sister Nezuko is turned into a demon.
                    </p>
                    <div className="d-flex gap-3 mt-4 mb-4">
                        <button className="btn btn-primary btn-lg" style={{color:"black",backgroundColor:"#3295ffff",border:"none",fontWeight:"600", width:"130px"}}>
                            <Play/> Play
                        </button>
                        <button className="btn btn-secondary btn-lg" 
                        style={{backgroundColor:"#8a8a8a13",border:"2px solid white",fontWeight:"600", width:"150px"}}>
                           <Plus/> My List
                        </button>
                    </div>
                </div>
            </div>

            {/* explore section */}
            <div  style={{ marginTop: '15px', padding: '40px 60px' }}>
                <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Trending Now
                </h2>               
            </div>

            {/* explore section */}
            <div  style={{ marginTop: '15px', padding: '40px 60px' }}>
                <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Anime
                </h2>               
            </div>

            {/* explore section */}
            <div  style={{ marginTop: '15px', padding: '40px 60px' }}>
                <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Popular on Aurora
                </h2>               
            </div>
        </>
    );
}
export default Home;